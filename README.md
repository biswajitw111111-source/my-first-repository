# Telegram Link Checker

A local-first Telegram link checker with a FastAPI backend and a responsive browser interface.

## Run

From the workspace root, install the backend requirements and start the single-worker service:

```sh
python -m pip install -r backend/requirements.txt
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```

Open <http://127.0.0.1:8000>. The frontend uses same-origin HTTP APIs and a same-origin WebSocket. `GET /api/health` provides a basic liveness response.

## Configuration

- `ALLOWED_ORIGINS`: optional comma-separated list of trusted frontend origins for cross-origin HTTP requests and WebSocket connections. Leave unset for same-origin browser access only. CORS is not authentication.
- `TELEGRAM_ACCOUNTS_DIR`: optional absolute or relative path for the Telegram API configuration and session files. The default is `backend/telegram_accounts`. Keep this directory private and backed up securely; it contains account credentials and an authenticated session.

The app creates its account directory automatically and applies owner-only permissions on POSIX systems. Do not commit `.env` files, Telegram API credentials, or session files. `.gitignore` excludes these by default.

## Deployment notes

This app is intended for one trusted local user. It does not implement application-level user authentication or multi-user session isolation. Do not expose it directly to the public internet; put it behind an authenticated private gateway if remote access is needed. Run one worker because the Telegram client and login flow are process-local.
