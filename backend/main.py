from __future__ import annotations

import asyncio
import html
import json
import os
import re
import zipfile
from contextlib import asynccontextmanager
from html.parser import HTMLParser
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlparse

import requests
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from telethon import TelegramClient, errors, functions, types


BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR.parent / "frontend"
ACCOUNTS_DIR = Path(
    os.environ.get("TELEGRAM_ACCOUNTS_DIR", str(BASE_DIR / "telegram_accounts"))
).expanduser().resolve()
CONFIG_PATH = ACCOUNTS_DIR / "premium_config.json"
SESSION_PATH = ACCOUNTS_DIR / "telegram"
ALLOWED_ORIGINS = [
    origin.strip().rstrip("/")
    for origin in os.environ.get("ALLOWED_ORIGINS", "").split(",")
    if origin.strip()
]
LINK_PATTERN = re.compile(
    r"(?i)https?://t\.me/(?:joinchat/|\+|c/)?[a-zA-Z0-9_-]+(?:/\d+)?"
)
MAX_INPUT_CHARS = 2_000_000
MAX_LINKS = 5_000
RESULT_CATEGORIES = (
    "VALID",
    "EXPIRED",
    "REVOKED",
    "PRIVATE",
    "RESTRICTED",
    "USERNAME_NOT_FOUND",
    "INVALID_FORMAT",
    "UNKNOWN_ERROR",
)
METADATA_FIELDS = {"link", "name", "members", "adult"}
REQUEST_TIMEOUT = (5, 15)

ACCOUNTS_DIR.mkdir(parents=True, exist_ok=True)
if os.name == "posix":
    os.chmod(ACCOUNTS_DIR, 0o700)


class InputPayload(BaseModel):
    text: str


class ExportPayload(BaseModel):
    results: list[dict[str, Any]] = Field(max_length=MAX_LINKS)
    categories: list[str] = Field(max_length=len(RESULT_CATEGORIES))
    metadata: list[str] = Field(default_factory=list)


class AuthStartPayload(BaseModel):
    api_id: int = Field(gt=0)
    api_hash: str = Field(min_length=20, max_length=64, pattern=r"^[a-fA-F0-9]+$")
    phone: str = Field(min_length=7, max_length=20, pattern=r"^\+[0-9]{7,19}$")


class AuthCompletePayload(BaseModel):
    code: str = Field(default="", max_length=32)
    password: str = Field(default="", max_length=256)


class TelegramPageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.title = ""
        self.extra = ""
        self._in_title = False
        self._in_extra = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        classes = (attributes.get("class") or "").split()
        if tag == "div" and "tgme_page_title" in classes:
            self._in_title = True
        if tag == "div" and "tgme_page_extra" in classes:
            self._in_extra = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "div":
            self._in_title = False
            self._in_extra = False

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title += data
        if self._in_extra:
            self.extra += data


def extract_links(text: str) -> list[str]:
    if len(text) > MAX_INPUT_CHARS:
        raise HTTPException(status_code=413, detail="Input exceeds the 2 MB limit.")
    links: list[str] = []
    seen: set[str] = set()
    for match in LINK_PATTERN.finditer(text):
        link = match.group(0).rstrip(".,;:!?)]}\"'")
        if link not in seen:
            seen.add(link)
            links.append(link)
            if len(links) > MAX_LINKS:
                raise HTTPException(status_code=413, detail="Input contains more than 5,000 links.")
    return links


def private_link(link: str) -> bool:
    path = urlparse(link).path.lower()
    return path.startswith("/c/") or path.startswith("/+") or path.startswith("/joinchat/")


def normal_check(link: str) -> dict[str, Any]:
    base = {"link": link, "category": "UNKNOWN_ERROR"}
    if private_link(link):
        return {**base, "category": "PRIVATE", "error": "Private links cannot be verified in Normal Mode."}
    try:
        response = requests.get(
            link,
            headers={"User-Agent": "Mozilla/5.0 (compatible; TelegramLinkChecker/1.0)"},
            timeout=REQUEST_TIMEOUT,
            allow_redirects=False,
        )
        if response.is_redirect:
            destination = urljoin(link, response.headers.get("Location", ""))
            parsed_destination = urlparse(destination)
            if parsed_destination.scheme != "https" or parsed_destination.hostname not in {"t.me", "telegram.me"}:
                return {**base, "category": "UNKNOWN_ERROR", "error": "Telegram redirected to an unsupported destination."}
            response = requests.get(
                destination,
                headers={"User-Agent": "Mozilla/5.0 (compatible; TelegramLinkChecker/1.0)"},
                timeout=REQUEST_TIMEOUT,
                allow_redirects=False,
            )
        if response.status_code == 404:
            return {**base, "category": "USERNAME_NOT_FOUND"}
        if response.status_code in (401, 403):
            return {**base, "category": "RESTRICTED"}
        if response.status_code == 429:
            return {**base, "category": "RESTRICTED", "error": "Telegram rate-limited this request."}
        if response.status_code >= 500:
            return {**base, "category": "UNKNOWN_ERROR", "error": f"Telegram returned HTTP {response.status_code}."}

        parser = TelegramPageParser()
        parser.feed(response.text)
        title = html.unescape(parser.title).strip()
        extra = html.unescape(parser.extra).strip()
        page_text = response.text.lower()
        if "tgme_page_title" not in page_text and "tgme_page_extra" not in page_text:
            category = "USERNAME_NOT_FOUND" if "if this is a public channel" in page_text else "UNKNOWN_ERROR"
            return {**base, "category": category}

        result: dict[str, Any] = {**base, "category": "VALID"}
        if title:
            result["name"] = title
        if extra:
            result["members"] = extra
        result["adult"] = "18+" if any(x in page_text for x in ("sensitive", "18+", "adult")) else "Unknown"
        return result
    except requests.Timeout:
        return {**base, "category": "UNKNOWN_ERROR", "error": "Request timed out."}
    except requests.RequestException as exc:
        return {**base, "category": "UNKNOWN_ERROR", "error": str(exc)[:240]}


def read_premium_config() -> dict[str, Any] | None:
    try:
        data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        if isinstance(data, dict) and isinstance(data.get("api_id"), int) and isinstance(data.get("api_hash"), str):
            return data
    except FileNotFoundError:
        return None
    except (OSError, json.JSONDecodeError):
        raise HTTPException(status_code=500, detail="Premium configuration could not be read.")
    return None


def save_premium_config(api_id: int, api_hash: str, phone: str) -> None:
    descriptor = os.open(CONFIG_PATH, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(descriptor, "w", encoding="utf-8") as config_file:
        json.dump({"api_id": api_id, "api_hash": api_hash, "phone": phone}, config_file)
    if os.name == "posix":
        os.chmod(CONFIG_PATH, 0o600)


def secure_session_file() -> None:
    if os.name == "posix":
        os.chmod(SESSION_PATH.with_suffix(".session"), 0o600)


telegram_client: TelegramClient | None = None
telegram_config: dict[str, Any] | None = None
auth_phone_code_hash: str | None = None
auth_phone: str | None = None
auth_lock = asyncio.Lock()


async def get_telegram_client() -> TelegramClient:
    global telegram_client, telegram_config
    config = read_premium_config()
    if config is None:
        raise RuntimeError("Premium Mode is not configured. Complete the login setup first.")
    async with auth_lock:
        if telegram_client is None or telegram_config != config:
            if telegram_client is not None:
                await telegram_client.disconnect()
            telegram_client = TelegramClient(str(SESSION_PATH), config["api_id"], config["api_hash"])
            await telegram_client.connect()
            secure_session_file()
            telegram_config = config
        if not await telegram_client.is_user_authorized():
            raise RuntimeError("The saved Telegram session has expired. Sign in again.")
        return telegram_client


async def premium_check(link: str) -> dict[str, Any]:
    base = {"link": link, "category": "UNKNOWN_ERROR"}
    try:
        client = await get_telegram_client()
        path = urlparse(link).path.strip("/")
        segments = path.split("/")
        if len(segments) >= 2 and segments[0].lower() == "c":
            if len(segments) < 3:
                return {**base, "category": "PRIVATE", "error": "A private message link must include a message ID."}
            channel_id, message_id = int(segments[1]), int(segments[2])
            message = await client.get_messages(types.PeerChannel(channel_id), ids=message_id)
            if message is None:
                return {**base, "category": "REVOKED"}
            return {**base, "category": "VALID", "name": str(message.chat.title) if message.chat else ""}

        if path.startswith("+") or (segments and segments[0].lower() == "joinchat"):
            invite_hash = path[1:] if path.startswith("+") else segments[1]
            invite = await client(functions.messages.CheckChatInviteRequest(invite_hash))
            chat = invite.chat if isinstance(invite, types.ChatInviteAlready) else None
            result: dict[str, Any] = {**base, "category": "VALID"}
            if chat is not None:
                result["name"] = getattr(chat, "title", "")
                count = getattr(chat, "participants_count", None)
                if count is not None:
                    result["members"] = count
            elif isinstance(invite, types.ChatInvite):
                result["name"] = invite.title
                if invite.participants_count is not None:
                    result["members"] = invite.participants_count
                result["adult"] = "Unknown"
            return result

        username = segments[0].removesuffix(".html")
        entity = await client.get_entity(username)
        result = {**base, "category": "VALID", "name": getattr(entity, "title", getattr(entity, "first_name", ""))}
        count = getattr(entity, "participants_count", None)
        if count is not None:
            result["members"] = count
        result["adult"] = "Unknown"
        return result
    except errors.InviteHashExpiredError:
        return {**base, "category": "EXPIRED"}
    except errors.InviteHashInvalidError:
        return {**base, "category": "REVOKED"}
    except errors.UsernameNotOccupiedError:
        return {**base, "category": "USERNAME_NOT_FOUND"}
    except (errors.ChannelPrivateError, errors.ChatAdminRequiredError):
        return {**base, "category": "RESTRICTED"}
    except errors.FloodWaitError as exc:
        return {**base, "category": "UNKNOWN_ERROR", "flood_wait": exc.seconds, "error": f"Telegram requested a {exc.seconds}s cooldown."}
    except ValueError:
        return {**base, "category": "INVALID_FORMAT"}
    except Exception as exc:
        return {**base, "category": "UNKNOWN_ERROR", "error": str(exc)[:240]}


@asynccontextmanager
async def lifespan(_: FastAPI):
    yield
    if telegram_client is not None:
        await telegram_client.disconnect()


app = FastAPI(title="Telegram Link Checker", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")


@app.get("/")
async def index() -> FileResponse:
    return FileResponse(FRONTEND_DIR / "index.html")


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/extract")
async def extract(payload: InputPayload) -> dict[str, Any]:
    links = extract_links(payload.text)
    return {"links": links, "count": len(links)}


@app.get("/api/auth/status")
async def auth_status() -> dict[str, Any]:
    config = read_premium_config()
    if config is None:
        return {"configured": False, "authorized": False}
    try:
        client = await get_telegram_client()
        return {"configured": True, "authorized": await client.is_user_authorized()}
    except RuntimeError:
        return {"configured": True, "authorized": False}


@app.post("/api/auth/start")
async def auth_start(payload: AuthStartPayload) -> dict[str, Any]:
    global telegram_client, telegram_config, auth_phone_code_hash, auth_phone
    save_premium_config(payload.api_id, payload.api_hash, payload.phone)
    async with auth_lock:
        if telegram_client is not None:
            await telegram_client.disconnect()
        telegram_client = TelegramClient(str(SESSION_PATH), payload.api_id, payload.api_hash)
        telegram_config = {"api_id": payload.api_id, "api_hash": payload.api_hash, "phone": payload.phone}
        await telegram_client.connect()
        secure_session_file()
        if await telegram_client.is_user_authorized():
            return {"authorized": True}
        try:
            sent = await telegram_client.send_code_request(payload.phone)
        except errors.PhoneNumberInvalidError as exc:
            raise HTTPException(status_code=400, detail="Telegram rejected that phone number.") from exc
        auth_phone_code_hash, auth_phone = sent.phone_code_hash, payload.phone
    return {"authorized": False, "code_sent": True}


@app.post("/api/auth/complete")
async def auth_complete(payload: AuthCompletePayload) -> dict[str, Any]:
    global auth_phone_code_hash, auth_phone
    if telegram_client is None:
        raise HTTPException(status_code=400, detail="Start the login flow first.")
    try:
        if payload.password:
            await telegram_client.sign_in(password=payload.password)
        elif auth_phone and auth_phone_code_hash and payload.code:
            await telegram_client.sign_in(
                phone=auth_phone,
                code=payload.code,
                phone_code_hash=auth_phone_code_hash,
            )
        else:
            raise HTTPException(status_code=400, detail="Enter the login code sent by Telegram.")
        auth_phone_code_hash = None
        auth_phone = None
        return {"authorized": True}
    except errors.SessionPasswordNeededError:
        return {"authorized": False, "password_required": True}
    except errors.PhoneCodeInvalidError as exc:
        raise HTTPException(status_code=400, detail="The login code is incorrect. Try again.") from exc
    except errors.PhoneCodeExpiredError as exc:
        raise HTTPException(status_code=400, detail="The login code expired. Start sign-in again.") from exc
    except errors.PasswordHashInvalidError as exc:
        raise HTTPException(status_code=400, detail="The two-step verification password is incorrect.") from exc


@app.post("/api/export")
async def export_results(payload: ExportPayload) -> StreamingResponse:
    selected = set(payload.categories)
    if not selected or not selected.issubset(RESULT_CATEGORIES):
        raise HTTPException(status_code=400, detail="Select at least one recognized result category.")
    metadata = set(payload.metadata)
    if not metadata.issubset(METADATA_FIELDS):
        raise HTTPException(status_code=400, detail="Unknown metadata field requested.")

    from io import BytesIO

    archive = BytesIO()
    with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as zipped:
        for category in RESULT_CATEGORIES:
            if category not in selected:
                continue
            lines = []
            for result in payload.results:
                if result.get("category") != category:
                    continue
                parts = []
                for field in ("link", "name", "members", "adult"):
                    if field in metadata and result.get(field) not in (None, ""):
                        parts.append(f"{field}: {result[field]}")
                if parts:
                    lines.append(" | ".join(parts))
            zipped.writestr(f"{category.lower()}.txt", "\n".join(lines) + ("\n" if lines else ""))
    archive.seek(0)
    return StreamingResponse(
        archive,
        media_type="application/zip",
        headers={"Content-Disposition": 'attachment; filename="telegram-link-results.zip"'},
    )


@app.websocket("/ws/check")
async def check_socket(websocket: WebSocket) -> None:
    origin = websocket.headers.get("origin")
    parsed_origin = urlparse(origin) if origin else None
    same_origin = bool(
        parsed_origin
        and parsed_origin.scheme in {"http", "https"}
        and parsed_origin.netloc.casefold() == websocket.headers.get("host", "").casefold()
        and parsed_origin.path in {"", "/"}
        and not parsed_origin.params
        and not parsed_origin.query
        and not parsed_origin.fragment
    )
    if origin and not same_origin and origin.rstrip("/") not in ALLOWED_ORIGINS:
        await websocket.close(code=4403, reason="Origin not allowed")
        return
    await websocket.accept()
    stop_event = asyncio.Event()
    running_event = asyncio.Event()
    running_event.set()
    process_task: asyncio.Task[None] | None = None

    async def send_event(event: dict[str, Any]) -> None:
        await websocket.send_json(event)

    async def process(links: list[str], mode: str, metadata: set[str]) -> None:
        total = len(links)
        try:
            for index, link in enumerate(links, start=1):
                while not running_event.is_set() and not stop_event.is_set():
                    await asyncio.sleep(0.1)
                if stop_event.is_set():
                    break
                result = await asyncio.to_thread(normal_check, link) if mode == "normal" else await premium_check(link)
                result["index"] = index
                result["total"] = total
                for field in ("link", "name", "members", "adult"):
                    if field not in metadata:
                        result.pop(field, None)
                await send_event({"type": "result", "result": result})
                flood_wait = result.get("flood_wait")
                if flood_wait and index < total:
                    await send_event({"type": "flood_wait", "seconds": flood_wait})
                    try:
                        await asyncio.wait_for(stop_event.wait(), timeout=flood_wait)
                    except asyncio.TimeoutError:
                        pass
                elif index < total:
                    await asyncio.sleep(0.4 if mode == "premium" else 0.15)
        except (WebSocketDisconnect, RuntimeError):
            stop_event.set()
        finally:
            try:
                await send_event({"type": "complete", "stopped": stop_event.is_set()})
            except (WebSocketDisconnect, RuntimeError):
                pass

    try:
        while True:
            message = await websocket.receive_json()
            if not isinstance(message, dict):
                await send_event({"type": "error", "message": "Invalid WebSocket message."})
                continue
            action = message.get("action")
            if action == "start":
                if process_task is not None and not process_task.done():
                    await send_event({"type": "error", "message": "A check is already running."})
                    continue
                links = message.get("links")
                mode = message.get("mode")
                metadata_value = message.get("metadata", [])
                if not isinstance(metadata_value, list) or not all(
                    isinstance(field, str) for field in metadata_value
                ):
                    await send_event({"type": "error", "message": "Invalid metadata selection."})
                    continue
                metadata = set(metadata_value)
                if not isinstance(links, list) or len(links) > MAX_LINKS or not all(isinstance(x, str) for x in links):
                    await send_event({"type": "error", "message": "Invalid link list."})
                    continue
                if any(
                    not LINK_PATTERN.fullmatch(link)
                    or urlparse(link).scheme not in {"http", "https"}
                    or urlparse(link).hostname != "t.me"
                    for link in links
                ):
                    await send_event({"type": "error", "message": "Only valid t.me links can be checked."})
                    continue
                if mode not in ("normal", "premium") or not metadata.issubset(METADATA_FIELDS):
                    await send_event({"type": "error", "message": "Invalid mode or metadata selection."})
                    continue
                if mode == "premium":
                    try:
                        await get_telegram_client()
                    except RuntimeError as exc:
                        await send_event({"type": "error", "message": str(exc)})
                        continue
                stop_event.clear()
                running_event.set()
                process_task = asyncio.create_task(process(links, mode, metadata))
                await send_event({"type": "started", "total": len(links)})
            elif action == "pause":
                running_event.clear()
                await send_event({"type": "paused"})
            elif action == "resume":
                running_event.set()
                await send_event({"type": "resumed"})
            elif action == "stop":
                stop_event.set()
                running_event.set()
                await send_event({"type": "stopping"})
    except (WebSocketDisconnect, json.JSONDecodeError):
        stop_event.set()
        running_event.set()
        if process_task is not None:
            process_task.cancel()
            try:
                await process_task
            except asyncio.CancelledError:
                pass
