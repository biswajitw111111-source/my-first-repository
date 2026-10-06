const translations = {
  en: {
    appTitle: "Telegram Link Checker", language: "Language", modeTitle: "Choose a checking mode", closeLabel: "Close",
    modeHint: "Choose how links are checked before you begin.", modeNormal: "Normal Mode",
    normalDesc: "No sign-in. Public links only; private links are skipped.", privateFirst: "Privacy first",
    modePremium: "Premium Mode", premiumDesc: "Sign in with your Telegram API credentials for deeper checks.",
    apiMode: "Telegram API", stepOne: "STEP 1 · INPUT", inputTitle: "Add Telegram links",
    inputPlaceholder: "Paste text containing t.me links here...", dropText: "Drop .txt or .csv files here, or",
    browseFiles: "browse files", noFiles: "No files selected", ready: "Ready", notExtracted: "Links have not been extracted",
    extract: "Extract links", extractNote: "Extract links first to preview duplicates and total count.",
    start: "Start checking", stepTwo: "STEP 2 · LIVE CHECK", consoleTitle: "Live console",
    idle: "Idle", consoleEmpty: "Your live results will appear here.", pause: "Pause", resume: "Resume",
    stop: "Stop & save", stepThree: "STEP 3 · EXPORT", downloadTitle: "Download results",
    downloadHint: "Choose the categories to include in your ZIP file.", downloadZip: "Download ZIP",
    localNote: "Runs locally in your browser and on this computer.", settings: "SETTINGS",
    metadataTitle: "Metadata to display and export",
    metadataHint: "Only selected fields are shown in the console and included in exports.",
    fieldLink: "Link", fieldName: "Name", fieldMembers: "Members", fieldAdult: "18+ label", done: "Done",
    secureSetup: "PREMIUM MODE · SIGN-IN", authTitle: "Connect your Telegram account", back: "Back",
    authNotice: "Your credentials and session are stored locally in the backend folder. Never share this folder.",
    apiId: "API ID", apiHash: "API Hash", phone: "Phone number (international format)",
    loginCode: "Telegram login code", twoFactor: "Two-step verification password",
    sendCode: "Send login code", verify: "Verify and continue", cancel: "Cancel",
    categoriesTitle: "Result categories", floodWait: "Telegram requested a {seconds}s cooldown.",
    toastExtracted: "{count} unique Telegram links extracted.",
    noLinks: "No Telegram links found.", extracting: "Extracting links…", checking: "Checking",
    pausedStatus: "Paused", complete: "Check complete.", stopped: "Checking stopped. Results are ready to save.",
    codeSent: "A Telegram login code was sent. Check your Telegram app or SMS.",
    authReady: "Telegram account connected.", authRequired: "Please complete Premium Mode sign-in first.",
    filesLoaded: "{count} file(s) ready.", invalidFile: "Only .txt and .csv files are supported.",
    extractError: "Could not extract links.", exportError: "Could not create the ZIP export.",
    networkError: "Could not connect to the local server.", selectCategory: "Select at least one category.",
    category_VALID: "Valid", category_EXPIRED: "Expired", category_REVOKED: "Revoked",
    category_PRIVATE: "Private", category_RESTRICTED: "Restricted",
    category_USERNAME_NOT_FOUND: "Username not found", category_INVALID_FORMAT: "Invalid format",
    category_UNKNOWN_ERROR: "Unknown error"
  },
  hi: {
    appTitle: "टेलीग्राम लिंक चेकर", language: "भाषा", modeTitle: "जाँच मोड चुनें", closeLabel: "बंद करें",
    modeHint: "शुरू करने से पहले लिंक जाँचने का तरीका चुनें।", modeNormal: "सामान्य मोड",
    normalDesc: "साइन-इन नहीं। केवल सार्वजनिक लिंक; निजी लिंक छोड़ दिए जाते हैं।", privateFirst: "गोपनीयता पहले",
    modePremium: "प्रीमियम मोड", premiumDesc: "विस्तृत जाँच के लिए अपने Telegram API विवरण से साइन इन करें।",
    apiMode: "Telegram API", stepOne: "चरण 1 · इनपुट", inputTitle: "Telegram लिंक जोड़ें",
    inputPlaceholder: "यहाँ t.me लिंक वाला टेक्स्ट पेस्ट करें...", dropText: ".txt या .csv फ़ाइलें यहाँ छोड़ें, या",
    browseFiles: "फ़ाइलें चुनें", noFiles: "कोई फ़ाइल नहीं चुनी", ready: "तैयार", notExtracted: "लिंक अभी निकाले नहीं गए",
    extract: "लिंक निकालें", extractNote: "डुप्लिकेट और कुल संख्या देखने के लिए पहले लिंक निकालें।",
    start: "जाँच शुरू करें", stepTwo: "चरण 2 · लाइव जाँच", consoleTitle: "लाइव कंसोल",
    idle: "निष्क्रिय", consoleEmpty: "लाइव परिणाम यहाँ दिखाई देंगे।", pause: "रोकें", resume: "फिर शुरू करें",
    stop: "रोकें और सहेजें", stepThree: "चरण 3 · निर्यात", downloadTitle: "परिणाम डाउनलोड करें",
    downloadHint: "ZIP फ़ाइल में शामिल करने की श्रेणियाँ चुनें।", downloadZip: "ZIP डाउनलोड करें",
    localNote: "यह आपके ब्राउज़र और कंप्यूटर पर स्थानीय रूप से चलता है।", settings: "सेटिंग",
    metadataTitle: "दिखाने और निर्यात करने वाला मेटाडेटा",
    metadataHint: "केवल चुने गए फ़ील्ड कंसोल और निर्यात में दिखेंगे।",
    fieldLink: "लिंक", fieldName: "नाम", fieldMembers: "सदस्य", fieldAdult: "18+ लेबल", done: "पूरा",
    secureSetup: "प्रीमियम मोड · साइन-इन", authTitle: "अपना Telegram खाता जोड़ें", back: "वापस",
    authNotice: "आपके विवरण और सत्र बैकएंड फ़ोल्डर में स्थानीय रूप से सहेजे जाते हैं। यह फ़ोल्डर साझा न करें।",
    apiId: "API ID", apiHash: "API Hash", phone: "फ़ोन नंबर (अंतरराष्ट्रीय प्रारूप)",
    loginCode: "Telegram लॉगिन कोड", twoFactor: "दो-चरण सत्यापन पासवर्ड",
    sendCode: "लॉगिन कोड भेजें", verify: "सत्यापित करें और आगे बढ़ें", cancel: "रद्द करें",
    categoriesTitle: "परिणाम श्रेणियाँ", floodWait: "Telegram ने {seconds} सेकंड रुकने को कहा।",
    toastExtracted: "{count} अलग-अलग Telegram लिंक मिले।",
    noLinks: "कोई Telegram लिंक नहीं मिला।", extracting: "लिंक निकाले जा रहे हैं…", checking: "जाँच जारी",
    pausedStatus: "रुका हुआ", complete: "जाँच पूरी हुई।", stopped: "जाँच रोक दी गई। परिणाम सहेजने के लिए तैयार हैं।",
    codeSent: "Telegram लॉगिन कोड भेजा गया। अपना Telegram ऐप या SMS देखें।",
    authReady: "Telegram खाता जुड़ गया।", authRequired: "पहले प्रीमियम मोड साइन-इन पूरा करें।",
    filesLoaded: "{count} फ़ाइल(ें) तैयार।", invalidFile: "केवल .txt और .csv फ़ाइलें समर्थित हैं।",
    extractError: "लिंक नहीं निकाले जा सके।", exportError: "ZIP निर्यात नहीं बन सका।",
    networkError: "स्थानीय सर्वर से कनेक्ट नहीं हो सका।", selectCategory: "कम-से-कम एक श्रेणी चुनें।",
    category_VALID: "मान्य", category_EXPIRED: "समाप्त", category_REVOKED: "रद्द",
    category_PRIVATE: "निजी", category_RESTRICTED: "प्रतिबंधित",
    category_USERNAME_NOT_FOUND: "उपयोगकर्ता नाम नहीं मिला", category_INVALID_FORMAT: "अमान्य प्रारूप",
    category_UNKNOWN_ERROR: "अज्ञात त्रुटि"
  },
  bn: {
    appTitle: "টেলিগ্রাম লিংক চেকার", language: "ভাষা", modeTitle: "চেকিং মোড বেছে নিন", closeLabel: "বন্ধ করুন",
    modeHint: "শুরু করার আগে লিংক কীভাবে পরীক্ষা হবে তা বেছে নিন।", modeNormal: "সাধারণ মোড",
    normalDesc: "সাইন-ইন লাগবে না। শুধু পাবলিক লিংক; প্রাইভেট লিংক বাদ যাবে।", privateFirst: "গোপনীয়তা আগে",
    modePremium: "প্রিমিয়াম মোড", premiumDesc: "বিস্তারিত পরীক্ষার জন্য Telegram API দিয়ে সাইন-ইন করুন।",
    apiMode: "Telegram API", stepOne: "ধাপ ১ · ইনপুট", inputTitle: "Telegram লিংক যোগ করুন",
    inputPlaceholder: "এখানে t.me লিংকসহ লেখা পেস্ট করুন...", dropText: ".txt বা .csv ফাইল এখানে ছাড়ুন, অথবা",
    browseFiles: "ফাইল বেছে নিন", noFiles: "কোনো ফাইল বাছাই করা হয়নি", ready: "প্রস্তুত", notExtracted: "লিংক এখনো বের করা হয়নি",
    extract: "লিংক বের করুন", extractNote: "ডুপ্লিকেট ও মোট সংখ্যা দেখতে আগে লিংক বের করুন।",
    start: "চেক শুরু করুন", stepTwo: "ধাপ ২ · লাইভ চেক", consoleTitle: "লাইভ কনসোল",
    idle: "নিষ্ক্রিয়", consoleEmpty: "লাইভ ফলাফল এখানে দেখা যাবে।", pause: "বিরতি", resume: "চালু করুন",
    stop: "থামান ও সংরক্ষণ করুন", stepThree: "ধাপ ৩ · রপ্তানি", downloadTitle: "ফলাফল ডাউনলোড",
    downloadHint: "ZIP ফাইলে কোন বিভাগ থাকবে তা বেছে নিন।", downloadZip: "ZIP ডাউনলোড",
    localNote: "আপনার ব্রাউজার ও কম্পিউটারে স্থানীয়ভাবে চলে।", settings: "সেটিংস",
    metadataTitle: "দেখানো ও রপ্তানির মেটাডেটা",
    metadataHint: "শুধু নির্বাচিত তথ্য কনসোল ও রপ্তানিতে থাকবে।",
    fieldLink: "লিংক", fieldName: "নাম", fieldMembers: "সদস্য", fieldAdult: "১৮+ লেবেল", done: "সম্পন্ন",
    secureSetup: "প্রিমিয়াম মোড · সাইন-ইন", authTitle: "আপনার Telegram অ্যাকাউন্ট যুক্ত করুন", back: "ফিরে যান",
    authNotice: "আপনার তথ্য ও সেশন ব্যাকএন্ড ফোল্ডারে স্থানীয়ভাবে সংরক্ষিত হয়। ফোল্ডারটি শেয়ার করবেন না।",
    apiId: "API ID", apiHash: "API Hash", phone: "ফোন নম্বর (আন্তর্জাতিক ফরম্যাট)",
    loginCode: "Telegram লগইন কোড", twoFactor: "টু-স্টেপ ভেরিফিকেশন পাসওয়ার্ড",
    sendCode: "লগইন কোড পাঠান", verify: "যাচাই করে এগিয়ে যান", cancel: "বাতিল",
    categoriesTitle: "ফলাফলের বিভাগ", floodWait: "Telegram {seconds} সেকেন্ড অপেক্ষা করতে বলেছে।",
    toastExtracted: "{count}টি অনন্য Telegram লিংক পাওয়া গেছে।",
    noLinks: "কোনো Telegram লিংক পাওয়া যায়নি।", extracting: "লিংক বের হচ্ছে…", checking: "চেক চলছে",
    pausedStatus: "বিরতিতে", complete: "চেক সম্পন্ন।", stopped: "চেক থামানো হয়েছে। ফলাফল সংরক্ষণের জন্য প্রস্তুত।",
    codeSent: "Telegram লগইন কোড পাঠানো হয়েছে। Telegram অ্যাপ বা SMS দেখুন।",
    authReady: "Telegram অ্যাকাউন্ট যুক্ত হয়েছে।", authRequired: "আগে প্রিমিয়াম মোডে সাইন-ইন করুন।",
    filesLoaded: "{count}টি ফাইল প্রস্তুত।", invalidFile: "শুধু .txt এবং .csv ফাইল সমর্থিত।",
    extractError: "লিংক বের করা যায়নি।", exportError: "ZIP তৈরি করা যায়নি।",
    networkError: "স্থানীয় সার্ভারে সংযোগ করা যায়নি।", selectCategory: "অন্তত একটি বিভাগ বেছে নিন।",
    category_VALID: "বৈধ", category_EXPIRED: "মেয়াদ শেষ", category_REVOKED: "বাতিল",
    category_PRIVATE: "প্রাইভেট", category_RESTRICTED: "সীমাবদ্ধ",
    category_USERNAME_NOT_FOUND: "ব্যবহারকারীর নাম পাওয়া যায়নি", category_INVALID_FORMAT: "ভুল ফরম্যাট",
    category_UNKNOWN_ERROR: "অজানা ত্রুটি"
  },
  ru: {
    appTitle: "Проверка ссылок Telegram", language: "Язык", modeTitle: "Выберите режим проверки", closeLabel: "Закрыть",
    modeHint: "Выберите способ проверки ссылок перед запуском.", modeNormal: "Обычный режим",
    normalDesc: "Без входа. Только публичные ссылки; приватные будут пропущены.", privateFirst: "Сначала приватность",
    modePremium: "Премиум-режим", premiumDesc: "Войдите через API Telegram для более подробной проверки.",
    apiMode: "API Telegram", stepOne: "ШАГ 1 · ВВОД", inputTitle: "Добавьте ссылки Telegram",
    inputPlaceholder: "Вставьте сюда текст со ссылками t.me...", dropText: "Перетащите файлы .txt или .csv либо",
    browseFiles: "выберите файлы", noFiles: "Файлы не выбраны", ready: "Готово", notExtracted: "Ссылки ещё не извлечены",
    extract: "Извлечь ссылки", extractNote: "Сначала извлеките ссылки, чтобы увидеть дубликаты и общее количество.",
    start: "Начать проверку", stepTwo: "ШАГ 2 · ПРОВЕРКА", consoleTitle: "Результаты проверки",
    idle: "Ожидание", consoleEmpty: "Здесь появятся результаты проверки.", pause: "Пауза", resume: "Продолжить",
    stop: "Остановить и сохранить", stepThree: "ШАГ 3 · ЭКСПОРТ", downloadTitle: "Скачать результаты",
    downloadHint: "Выберите категории для ZIP-архива.", downloadZip: "Скачать ZIP",
    localNote: "Работает локально в браузере и на этом компьютере.", settings: "НАСТРОЙКИ",
    metadataTitle: "Поля для отображения и экспорта",
    metadataHint: "В консоль и экспорт попадут только выбранные поля.",
    fieldLink: "Ссылка", fieldName: "Название", fieldMembers: "Участники", fieldAdult: "Метка 18+", done: "Готово",
    secureSetup: "ПРЕМИУМ-РЕЖИМ · ВХОД", authTitle: "Подключите аккаунт Telegram", back: "Назад",
    authNotice: "Данные и сессия хранятся локально в папке backend. Не передавайте эту папку другим.",
    apiId: "API ID", apiHash: "API Hash", phone: "Номер телефона (международный формат)",
    loginCode: "Код входа Telegram", twoFactor: "Пароль двухэтапной аутентификации",
    sendCode: "Отправить код", verify: "Проверить и продолжить", cancel: "Отмена",
    categoriesTitle: "Категории результатов", floodWait: "Telegram запросил паузу на {seconds} с.",
    toastExtracted: "Найдено уникальных ссылок Telegram: {count}.",
    noLinks: "Ссылки Telegram не найдены.", extracting: "Извлечение ссылок…", checking: "Проверка",
    pausedStatus: "Приостановлено", complete: "Проверка завершена.", stopped: "Проверка остановлена. Результаты готовы к сохранению.",
    codeSent: "Код входа отправлен Telegram. Проверьте приложение или SMS.",
    authReady: "Аккаунт Telegram подключён.", authRequired: "Сначала войдите в премиум-режим.",
    filesLoaded: "Готово файлов: {count}.", invalidFile: "Поддерживаются только файлы .txt и .csv.",
    extractError: "Не удалось извлечь ссылки.", exportError: "Не удалось создать ZIP-архив.",
    networkError: "Не удалось подключиться к локальному серверу.", selectCategory: "Выберите хотя бы одну категорию.",
    category_VALID: "Действительна", category_EXPIRED: "Истекла", category_REVOKED: "Отозвана",
    category_PRIVATE: "Приватная", category_RESTRICTED: "Ограничена",
    category_USERNAME_NOT_FOUND: "Имя пользователя не найдено", category_INVALID_FORMAT: "Неверный формат",
    category_UNKNOWN_ERROR: "Неизвестная ошибка"
  },
  zh: {
    appTitle: "Telegram 链接检查器", language: "语言", modeTitle: "选择检查模式", closeLabel: "关闭",
    modeHint: "开始前请选择链接检查方式。", modeNormal: "普通模式",
    normalDesc: "无需登录。仅检查公开链接；私密链接将跳过。", privateFirst: "隐私优先",
    modePremium: "高级模式", premiumDesc: "使用 Telegram API 登录以进行更深入的检查。",
    apiMode: "Telegram API", stepOne: "步骤 1 · 输入", inputTitle: "添加 Telegram 链接",
    inputPlaceholder: "在此粘贴包含 t.me 链接的文本...", dropText: "将 .txt 或 .csv 文件拖到此处，或",
    browseFiles: "浏览文件", noFiles: "未选择文件", ready: "就绪", notExtracted: "尚未提取链接",
    extract: "提取链接", extractNote: "先提取链接以查看重复项和总数。",
    start: "开始检查", stepTwo: "步骤 2 · 实时检查", consoleTitle: "实时控制台",
    idle: "空闲", consoleEmpty: "实时结果将显示在此处。", pause: "暂停", resume: "继续",
    stop: "停止并保存", stepThree: "步骤 3 · 导出", downloadTitle: "下载结果",
    downloadHint: "选择要包含在 ZIP 文件中的类别。", downloadZip: "下载 ZIP",
    localNote: "在浏览器和本机上本地运行。", settings: "设置",
    metadataTitle: "显示和导出的元数据",
    metadataHint: "控制台和导出文件仅包含选中的字段。",
    fieldLink: "链接", fieldName: "名称", fieldMembers: "成员数", fieldAdult: "18+ 标签", done: "完成",
    secureSetup: "高级模式 · 登录", authTitle: "连接 Telegram 账户", back: "返回",
    authNotice: "凭据和会话保存在后端文件夹中。请勿分享该文件夹。",
    apiId: "API ID", apiHash: "API Hash", phone: "电话号码（国际格式）",
    loginCode: "Telegram 登录验证码", twoFactor: "两步验证密码",
    sendCode: "发送登录验证码", verify: "验证并继续", cancel: "取消",
    categoriesTitle: "结果类别", floodWait: "Telegram 要求暂停 {seconds} 秒。",
    toastExtracted: "已提取 {count} 个不重复的 Telegram 链接。",
    noLinks: "未找到 Telegram 链接。", extracting: "正在提取链接…", checking: "正在检查",
    pausedStatus: "已暂停", complete: "检查完成。", stopped: "检查已停止。结果已准备好保存。",
    codeSent: "Telegram 登录验证码已发送。请查看 Telegram 应用或短信。",
    authReady: "Telegram 账户已连接。", authRequired: "请先完成高级模式登录。",
    filesLoaded: "{count} 个文件已就绪。", invalidFile: "仅支持 .txt 和 .csv 文件。",
    extractError: "无法提取链接。", exportError: "无法创建 ZIP 文件。",
    networkError: "无法连接本地服务器。", selectCategory: "请至少选择一个类别。",
    category_VALID: "有效", category_EXPIRED: "已过期", category_REVOKED: "已撤销",
    category_PRIVATE: "私密", category_RESTRICTED: "受限",
    category_USERNAME_NOT_FOUND: "未找到用户名", category_INVALID_FORMAT: "格式无效",
    category_UNKNOWN_ERROR: "未知错误"
  },
  ja: {
    appTitle: "Telegramリンクチェッカー", language: "言語", modeTitle: "チェックモードを選択", closeLabel: "閉じる",
    modeHint: "開始前にリンクのチェック方法を選択してください。", modeNormal: "通常モード",
    normalDesc: "ログイン不要。公開リンクのみ。非公開リンクはスキップします。", privateFirst: "プライバシー優先",
    modePremium: "プレミアムモード", premiumDesc: "Telegram APIでログインして詳細にチェックします。",
    apiMode: "Telegram API", stepOne: "ステップ1 · 入力", inputTitle: "Telegramリンクを追加",
    inputPlaceholder: "t.meリンクを含むテキストを貼り付け...", dropText: ".txtまたは.csvファイルをドロップ、または",
    browseFiles: "ファイルを選択", noFiles: "ファイル未選択", ready: "準備完了", notExtracted: "リンクは未抽出です",
    extract: "リンクを抽出", extractNote: "重複と合計数を確認するため、先にリンクを抽出してください。",
    start: "チェック開始", stepTwo: "ステップ2 · ライブチェック", consoleTitle: "ライブコンソール",
    idle: "待機中", consoleEmpty: "チェック結果がここに表示されます。", pause: "一時停止", resume: "再開",
    stop: "停止して保存", stepThree: "ステップ3 · エクスポート", downloadTitle: "結果をダウンロード",
    downloadHint: "ZIPに含めるカテゴリを選択してください。", downloadZip: "ZIPをダウンロード",
    localNote: "ブラウザーとこのコンピューター上でローカルに動作します。", settings: "設定",
    metadataTitle: "表示・エクスポートするメタデータ",
    metadataHint: "選択した項目のみコンソールとエクスポートに表示されます。",
    fieldLink: "リンク", fieldName: "名前", fieldMembers: "メンバー", fieldAdult: "18+ラベル", done: "完了",
    secureSetup: "プレミアムモード · サインイン", authTitle: "Telegramアカウントを接続", back: "戻る",
    authNotice: "認証情報とセッションはbackendフォルダーに保存されます。このフォルダーを共有しないでください。",
    apiId: "API ID", apiHash: "API Hash", phone: "電話番号（国際形式）",
    loginCode: "Telegramログインコード", twoFactor: "2段階認証パスワード",
    sendCode: "ログインコードを送信", verify: "認証して続行", cancel: "キャンセル",
    categoriesTitle: "結果カテゴリ", floodWait: "Telegramから{seconds}秒の待機を求められました。",
    toastExtracted: "{count}件の重複しないTelegramリンクを抽出しました。",
    noLinks: "Telegramリンクが見つかりません。", extracting: "リンクを抽出中…", checking: "チェック中",
    pausedStatus: "一時停止中", complete: "チェックが完了しました。", stopped: "チェックを停止しました。結果を保存できます。",
    codeSent: "Telegramログインコードを送信しました。アプリまたはSMSを確認してください。",
    authReady: "Telegramアカウントを接続しました。", authRequired: "先にプレミアムモードへサインインしてください。",
    filesLoaded: "{count}個のファイルを準備しました。", invalidFile: ".txtと.csvファイルのみ対応しています。",
    extractError: "リンクを抽出できませんでした。", exportError: "ZIPを作成できませんでした。",
    networkError: "ローカルサーバーに接続できません。", selectCategory: "カテゴリを1つ以上選択してください。",
    category_VALID: "有効", category_EXPIRED: "期限切れ", category_REVOKED: "取り消し",
    category_PRIVATE: "非公開", category_RESTRICTED: "制限",
    category_USERNAME_NOT_FOUND: "ユーザー名が見つかりません", category_INVALID_FORMAT: "形式が無効",
    category_UNKNOWN_ERROR: "不明なエラー"
  },
  ko: {
    appTitle: "텔레그램 링크 검사기", language: "언어", modeTitle: "검사 모드 선택", closeLabel: "닫기",
    modeHint: "시작하기 전에 링크 검사 방식을 선택하세요.", modeNormal: "일반 모드",
    normalDesc: "로그인 불필요. 공개 링크만 검사하며 비공개 링크는 건너뜁니다.", privateFirst: "개인정보 우선",
    modePremium: "프리미엄 모드", premiumDesc: "더 자세한 검사를 위해 Telegram API로 로그인하세요.",
    apiMode: "Telegram API", stepOne: "1단계 · 입력", inputTitle: "Telegram 링크 추가",
    inputPlaceholder: "t.me 링크가 포함된 텍스트를 붙여넣으세요...", dropText: ".txt 또는 .csv 파일을 여기에 놓거나",
    browseFiles: "파일 찾아보기", noFiles: "선택한 파일 없음", ready: "준비", notExtracted: "링크를 추출하지 않았습니다",
    extract: "링크 추출", extractNote: "중복과 총 개수를 보려면 먼저 링크를 추출하세요.",
    start: "검사 시작", stepTwo: "2단계 · 실시간 검사", consoleTitle: "실시간 콘솔",
    idle: "대기 중", consoleEmpty: "실시간 결과가 여기에 표시됩니다.", pause: "일시 중지", resume: "재개",
    stop: "중지 및 저장", stepThree: "3단계 · 내보내기", downloadTitle: "결과 다운로드",
    downloadHint: "ZIP 파일에 포함할 카테고리를 선택하세요.", downloadZip: "ZIP 다운로드",
    localNote: "브라우저와 이 컴퓨터에서 로컬로 실행됩니다.", settings: "설정",
    metadataTitle: "표시 및 내보낼 메타데이터",
    metadataHint: "선택한 항목만 콘솔과 내보내기에 포함됩니다.",
    fieldLink: "링크", fieldName: "이름", fieldMembers: "멤버", fieldAdult: "18+ 표시", done: "완료",
    secureSetup: "프리미엄 모드 · 로그인", authTitle: "Telegram 계정 연결", back: "뒤로",
    authNotice: "자격 증명과 세션은 backend 폴더에 저장됩니다. 이 폴더를 공유하지 마세요.",
    apiId: "API ID", apiHash: "API Hash", phone: "전화번호(국제 형식)",
    loginCode: "Telegram 로그인 코드", twoFactor: "2단계 인증 비밀번호",
    sendCode: "로그인 코드 전송", verify: "확인하고 계속", cancel: "취소",
    categoriesTitle: "결과 카테고리", floodWait: "Telegram에서 {seconds}초 대기를 요청했습니다.",
    toastExtracted: "중복 없는 Telegram 링크 {count}개를 추출했습니다.",
    noLinks: "Telegram 링크를 찾을 수 없습니다.", extracting: "링크 추출 중…", checking: "검사 중",
    pausedStatus: "일시 중지됨", complete: "검사가 완료되었습니다.", stopped: "검사가 중지되었습니다. 결과를 저장할 수 있습니다.",
    codeSent: "Telegram 로그인 코드를 보냈습니다. 앱 또는 SMS를 확인하세요.",
    authReady: "Telegram 계정이 연결되었습니다.", authRequired: "먼저 프리미엄 모드에 로그인하세요.",
    filesLoaded: "파일 {count}개 준비 완료.", invalidFile: ".txt 및 .csv 파일만 지원합니다.",
    extractError: "링크를 추출할 수 없습니다.", exportError: "ZIP을 만들 수 없습니다.",
    networkError: "로컬 서버에 연결할 수 없습니다.", selectCategory: "카테고리를 하나 이상 선택하세요.",
    category_VALID: "유효", category_EXPIRED: "만료", category_REVOKED: "취소됨",
    category_PRIVATE: "비공개", category_RESTRICTED: "제한됨",
    category_USERNAME_NOT_FOUND: "사용자 이름을 찾을 수 없음", category_INVALID_FORMAT: "잘못된 형식",
    category_UNKNOWN_ERROR: "알 수 없는 오류"
  },
  es: {
    appTitle: "Comprobador de enlaces de Telegram", language: "Idioma", modeTitle: "Elige un modo de comprobación", closeLabel: "Cerrar",
    modeHint: "Elige cómo comprobar los enlaces antes de empezar.", modeNormal: "Modo normal",
    normalDesc: "Sin iniciar sesión. Solo enlaces públicos; los privados se omiten.", privateFirst: "Privacidad primero",
    modePremium: "Modo premium", premiumDesc: "Inicia sesión con la API de Telegram para comprobaciones más completas.",
    apiMode: "API de Telegram", stepOne: "PASO 1 · ENTRADA", inputTitle: "Añadir enlaces de Telegram",
    inputPlaceholder: "Pega aquí texto con enlaces t.me...", dropText: "Suelta archivos .txt o .csv aquí, o",
    browseFiles: "buscar archivos", noFiles: "No hay archivos seleccionados", ready: "Listo", notExtracted: "Aún no se han extraído enlaces",
    extract: "Extraer enlaces", extractNote: "Extrae primero los enlaces para ver duplicados y el total.",
    start: "Iniciar comprobación", stepTwo: "PASO 2 · COMPROBACIÓN", consoleTitle: "Consola en vivo",
    idle: "Inactivo", consoleEmpty: "Los resultados aparecerán aquí.", pause: "Pausar", resume: "Reanudar",
    stop: "Detener y guardar", stepThree: "PASO 3 · EXPORTAR", downloadTitle: "Descargar resultados",
    downloadHint: "Elige las categorías que incluirá el archivo ZIP.", downloadZip: "Descargar ZIP",
    localNote: "Se ejecuta localmente en tu navegador y en este equipo.", settings: "AJUSTES",
    metadataTitle: "Metadatos para mostrar y exportar",
    metadataHint: "Solo se mostrarán y exportarán los campos seleccionados.",
    fieldLink: "Enlace", fieldName: "Nombre", fieldMembers: "Miembros", fieldAdult: "Etiqueta 18+", done: "Listo",
    secureSetup: "MODO PREMIUM · INICIO DE SESIÓN", authTitle: "Conecta tu cuenta de Telegram", back: "Volver",
    authNotice: "Las credenciales y la sesión se guardan localmente en la carpeta backend. No compartas esta carpeta.",
    apiId: "API ID", apiHash: "API Hash", phone: "Teléfono (formato internacional)",
    loginCode: "Código de inicio de Telegram", twoFactor: "Contraseña de verificación en dos pasos",
    sendCode: "Enviar código", verify: "Verificar y continuar", cancel: "Cancelar",
    categoriesTitle: "Categorías de resultados", floodWait: "Telegram solicitó una espera de {seconds}s.",
    toastExtracted: "Se extrajeron {count} enlaces únicos de Telegram.",
    noLinks: "No se encontraron enlaces de Telegram.", extracting: "Extrayendo enlaces…", checking: "Comprobando",
    pausedStatus: "En pausa", complete: "Comprobación completada.", stopped: "Comprobación detenida. Los resultados están listos para guardar.",
    codeSent: "Se envió un código de inicio de Telegram. Revisa la aplicación o los SMS.",
    authReady: "Cuenta de Telegram conectada.", authRequired: "Completa primero el inicio de sesión del modo premium.",
    filesLoaded: "{count} archivo(s) listos.", invalidFile: "Solo se admiten archivos .txt y .csv.",
    extractError: "No se pudieron extraer los enlaces.", exportError: "No se pudo crear el ZIP.",
    networkError: "No se pudo conectar con el servidor local.", selectCategory: "Selecciona al menos una categoría.",
    category_VALID: "Válido", category_EXPIRED: "Caducado", category_REVOKED: "Revocado",
    category_PRIVATE: "Privado", category_RESTRICTED: "Restringido",
    category_USERNAME_NOT_FOUND: "Nombre de usuario no encontrado", category_INVALID_FORMAT: "Formato no válido",
    category_UNKNOWN_ERROR: "Error desconocido"
  },
  fr: {
    appTitle: "Vérificateur de liens Telegram", language: "Langue", modeTitle: "Choisissez un mode de vérification", closeLabel: "Fermer",
    modeHint: "Choisissez comment vérifier les liens avant de commencer.", modeNormal: "Mode normal",
    normalDesc: "Sans connexion. Liens publics uniquement ; les liens privés sont ignorés.", privateFirst: "Confidentialité d’abord",
    modePremium: "Mode Premium", premiumDesc: "Connectez-vous avec l’API Telegram pour des vérifications approfondies.",
    apiMode: "API Telegram", stepOne: "ÉTAPE 1 · SAISIE", inputTitle: "Ajouter des liens Telegram",
    inputPlaceholder: "Collez ici du texte contenant des liens t.me...", dropText: "Déposez des fichiers .txt ou .csv ici, ou",
    browseFiles: "parcourir", noFiles: "Aucun fichier sélectionné", ready: "Prêt", notExtracted: "Les liens n’ont pas encore été extraits",
    extract: "Extraire les liens", extractNote: "Extrayez d’abord les liens pour voir les doublons et le total.",
    start: "Démarrer la vérification", stepTwo: "ÉTAPE 2 · VÉRIFICATION", consoleTitle: "Console en direct",
    idle: "Inactif", consoleEmpty: "Les résultats apparaîtront ici.", pause: "Pause", resume: "Reprendre",
    stop: "Arrêter et enregistrer", stepThree: "ÉTAPE 3 · EXPORT", downloadTitle: "Télécharger les résultats",
    downloadHint: "Choisissez les catégories à inclure dans le ZIP.", downloadZip: "Télécharger le ZIP",
    localNote: "Fonctionne localement dans votre navigateur et sur cet ordinateur.", settings: "PARAMÈTRES",
    metadataTitle: "Métadonnées à afficher et exporter",
    metadataHint: "Seuls les champs sélectionnés apparaissent dans la console et les exports.",
    fieldLink: "Lien", fieldName: "Nom", fieldMembers: "Membres", fieldAdult: "Label 18+", done: "Terminé",
    secureSetup: "MODE PREMIUM · CONNEXION", authTitle: "Connecter votre compte Telegram", back: "Retour",
    authNotice: "Vos identifiants et votre session sont stockés localement dans le dossier backend. Ne partagez pas ce dossier.",
    apiId: "API ID", apiHash: "API Hash", phone: "Numéro de téléphone (format international)",
    loginCode: "Code de connexion Telegram", twoFactor: "Mot de passe de vérification en deux étapes",
    sendCode: "Envoyer le code", verify: "Vérifier et continuer", cancel: "Annuler",
    categoriesTitle: "Catégories de résultats", floodWait: "Telegram demande une pause de {seconds}s.",
    toastExtracted: "{count} liens Telegram uniques extraits.",
    noLinks: "Aucun lien Telegram trouvé.", extracting: "Extraction des liens…", checking: "Vérification en cours",
    pausedStatus: "En pause", complete: "Vérification terminée.", stopped: "Vérification arrêtée. Les résultats sont prêts à être enregistrés.",
    codeSent: "Un code Telegram a été envoyé. Consultez l’application ou vos SMS.",
    authReady: "Compte Telegram connecté.", authRequired: "Veuillez d’abord vous connecter au mode Premium.",
    filesLoaded: "{count} fichier(s) prêt(s).", invalidFile: "Seuls les fichiers .txt et .csv sont acceptés.",
    extractError: "Impossible d’extraire les liens.", exportError: "Impossible de créer le ZIP.",
    networkError: "Connexion au serveur local impossible.", selectCategory: "Sélectionnez au moins une catégorie.",
    category_VALID: "Valide", category_EXPIRED: "Expiré", category_REVOKED: "Révoqué",
    category_PRIVATE: "Privé", category_RESTRICTED: "Restreint",
    category_USERNAME_NOT_FOUND: "Nom d’utilisateur introuvable", category_INVALID_FORMAT: "Format invalide",
    category_UNKNOWN_ERROR: "Erreur inconnue"
  },
  ar: {
    appTitle: "مدقق روابط تيليجرام", language: "اللغة", modeTitle: "اختر وضع الفحص", closeLabel: "إغلاق",
    modeHint: "اختر طريقة فحص الروابط قبل البدء.", modeNormal: "الوضع العادي",
    normalDesc: "بدون تسجيل دخول. الروابط العامة فقط؛ يتم تخطي الروابط الخاصة.", privateFirst: "الخصوصية أولاً",
    modePremium: "الوضع المميز", premiumDesc: "سجّل الدخول باستخدام Telegram API لفحوص أعمق.",
    apiMode: "Telegram API", stepOne: "الخطوة ١ · الإدخال", inputTitle: "أضف روابط تيليجرام",
    inputPlaceholder: "الصق هنا نصاً يحتوي على روابط t.me...", dropText: "أفلت ملفات .txt أو .csv هنا، أو",
    browseFiles: "تصفح الملفات", noFiles: "لم يتم اختيار ملفات", ready: "جاهز", notExtracted: "لم يتم استخراج الروابط بعد",
    extract: "استخراج الروابط", extractNote: "استخرج الروابط أولاً لمعاينة التكرارات والعدد الإجمالي.",
    start: "بدء الفحص", stepTwo: "الخطوة ٢ · فحص مباشر", consoleTitle: "سجل مباشر",
    idle: "خامل", consoleEmpty: "ستظهر النتائج المباشرة هنا.", pause: "إيقاف مؤقت", resume: "استئناف",
    stop: "إيقاف وحفظ", stepThree: "الخطوة ٣ · التصدير", downloadTitle: "تنزيل النتائج",
    downloadHint: "اختر الفئات التي تريد تضمينها في ملف ZIP.", downloadZip: "تنزيل ZIP",
    localNote: "يعمل محلياً في متصفحك وعلى هذا الكمبيوتر.", settings: "الإعدادات",
    metadataTitle: "البيانات الوصفية للعرض والتصدير",
    metadataHint: "تظهر الحقول المحددة فقط في السجل وملفات التصدير.",
    fieldLink: "الرابط", fieldName: "الاسم", fieldMembers: "الأعضاء", fieldAdult: "تصنيف +18", done: "تم",
    secureSetup: "الوضع المميز · تسجيل الدخول", authTitle: "اربط حساب تيليجرام", back: "رجوع",
    authNotice: "تُحفظ بيانات الاعتماد والجلسة محلياً في مجلد backend. لا تشارك هذا المجلد.",
    apiId: "API ID", apiHash: "API Hash", phone: "رقم الهاتف (بالصيغة الدولية)",
    loginCode: "رمز تسجيل دخول تيليجرام", twoFactor: "كلمة مرور التحقق بخطوتين",
    sendCode: "إرسال رمز الدخول", verify: "تحقق وتابع", cancel: "إلغاء",
    categoriesTitle: "فئات النتائج", floodWait: "طلب تيليجرام الانتظار {seconds} ثانية.",
    toastExtracted: "تم استخراج {count} رابط تيليجرام فريداً.",
    noLinks: "لم يتم العثور على روابط تيليجرام.", extracting: "جارٍ استخراج الروابط…", checking: "جارٍ الفحص",
    pausedStatus: "متوقف مؤقتاً", complete: "اكتمل الفحص.", stopped: "تم إيقاف الفحص. النتائج جاهزة للحفظ.",
    codeSent: "تم إرسال رمز الدخول. تحقق من تطبيق تيليجرام أو الرسائل النصية.",
    authReady: "تم ربط حساب تيليجرام.", authRequired: "أكمل تسجيل الدخول للوضع المميز أولاً.",
    filesLoaded: "{count} ملف/ملفات جاهزة.", invalidFile: "الملفات المدعومة هي .txt و.csv فقط.",
    extractError: "تعذر استخراج الروابط.", exportError: "تعذر إنشاء ملف ZIP.",
    networkError: "تعذر الاتصال بالخادم المحلي.", selectCategory: "اختر فئة واحدة على الأقل.",
    category_VALID: "صالح", category_EXPIRED: "منتهي", category_REVOKED: "ملغى",
    category_PRIVATE: "خاص", category_RESTRICTED: "مقيّد",
    category_USERNAME_NOT_FOUND: "اسم المستخدم غير موجود", category_INVALID_FORMAT: "تنسيق غير صالح",
    category_UNKNOWN_ERROR: "خطأ غير معروف"
  }
};

const categories = ["VALID", "EXPIRED", "REVOKED", "PRIVATE", "RESTRICTED", "USERNAME_NOT_FOUND", "INVALID_FORMAT", "UNKNOWN_ERROR"];
const metadataDefaults = ["link", "name", "members", "adult"];
const $ = (id) => document.getElementById(id);
let language = localStorage.getItem("telegram-checker-language") || "en";
let storedMetadata;
try {
  storedMetadata = JSON.parse(localStorage.getItem("telegram-checker-metadata") || "null");
} catch {
  storedMetadata = null;
}
let metadata = Array.isArray(storedMetadata) ? storedMetadata : metadataDefaults;
let selectedCategories = [...categories];
let selectedLinks = [];
let selectedFiles = [];
let results = [];
let socket = null;
let deferredStart = false;
let authStep = "credentials";

function t(key, values = {}) {
  let value = translations[language]?.[key] || translations.en[key] || key;
  for (const [name, replacement] of Object.entries(values)) value = value.replaceAll(`{${name}}`, replacement);
  return value;
}

function apiErrorMessage(data, fallback) {
  if (typeof data?.detail === "string") return data.detail;
  if (Array.isArray(data?.detail)) {
    const messages = data.detail
      .map((issue) => typeof issue?.msg === "string" ? issue.msg : "")
      .filter(Boolean);
    if (messages.length) return messages.join("; ");
  }
  return fallback;
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = t("appTitle");
  $("language").value = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    node.title = t(node.dataset.i18nTitle);
  });
  renderCategoryOptions();
  $("startButton").querySelector("span").textContent = t("start");
  $("authSubmit").textContent = authStep === "credentials" ? t("sendCode") : t("verify");
}

function toast(message, isError = false) {
  const item = document.createElement("div");
  item.className = `toast${isError ? " error" : ""}`;
  item.setAttribute("role", isError ? "alert" : "status");
  item.setAttribute("aria-live", isError ? "assertive" : "polite");
  item.textContent = message;
  $("toastRegion").append(item);
  window.setTimeout(() => item.remove(), 4500);
}

function showDialog(id) {
  $(id).classList.remove("hidden");
  const focusable = $(id).querySelector("input:not(.hidden), button");
  focusable?.focus();
}

function closeDialog(id) {
  $(id).classList.add("hidden");
  if (id === "authDialog") deferredStart = false;
}

function setModeStyle() {
  document.querySelectorAll(".mode-card").forEach((card) => {
    card.classList.toggle("selected", card.querySelector("input").checked);
  });
}

function selectedMetadata() {
  return [...document.querySelectorAll(".metadata-options input:checked")].map((input) => input.value);
}

function persistMetadata() {
  metadata = selectedMetadata();
  localStorage.setItem("telegram-checker-metadata", JSON.stringify(metadata));
}

function renderCategoryOptions() {
  const container = $("categoryOptions");
  if (!container) return;
  container.replaceChildren();
  for (const category of categories) {
    const label = document.createElement("label");
    label.className = "category-choice";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.checked = selectedCategories.includes(category);
    const text = document.createElement("span");
    text.textContent = t(`category_${category}`);
    label.append(input, text);
    container.append(label);
  }
}

function syncMetadataChecks() {
  document.querySelectorAll(".metadata-options input").forEach((input) => {
    input.checked = metadata.includes(input.value);
  });
}

function updateFileNames() {
  $("fileNames").textContent = selectedFiles.map((file) => file.name).join(", ") || t("noFiles");
}

async function readSelectedFiles(files) {
  const incoming = [...files];
  if (incoming.some((file) => !/\.(txt|csv)$/i.test(file.name))) {
    toast(t("invalidFile"), true);
    return;
  }
  selectedFiles = incoming;
  invalidateExtraction();
  updateFileNames();
  toast(t("filesLoaded", { count: selectedFiles.length }));
}

function invalidateExtraction() {
  selectedLinks = [];
  $("linkCount").textContent = t("notExtracted");
  $("startButton").disabled = true;
}

async function collectText() {
  const contents = await Promise.all(selectedFiles.map((file) => file.text()));
  return [$("rawInput").value, ...contents].filter(Boolean).join("\n");
}

async function extract() {
  $("extractButton").disabled = true;
  $("extractButton").classList.add("is-loading");
  $("extractButton").setAttribute("aria-busy", "true");
  $("inputStatus").textContent = t("extracting");
  try {
    const response = await fetch("/api/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: await collectText() })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(apiErrorMessage(data, t("extractError")));
    selectedLinks = data.links;
    $("linkCount").textContent = t("toastExtracted", { count: data.count });
    $("startButton").disabled = data.count === 0;
    $("inputStatus").textContent = t("ready");
    $("downloadPanel").classList.add("hidden");
    toast(data.count ? t("toastExtracted", { count: data.count }) : t("noLinks"), data.count === 0);
  } catch (error) {
    $("inputStatus").textContent = t("ready");
    toast(error.message || t("extractError"), true);
  } finally {
    $("extractButton").disabled = false;
    $("extractButton").classList.remove("is-loading");
    $("extractButton").removeAttribute("aria-busy");
  }
}

function setRunning(isRunning, paused = false) {
  $("startButton").disabled = isRunning || selectedLinks.length === 0;
  $("extractButton").disabled = isRunning;
  $("rawInput").disabled = isRunning;
  $("fileInput").disabled = isRunning;
  $("settingsButton").disabled = isRunning;
  document.querySelectorAll('input[name="mode"]').forEach((input) => { input.disabled = isRunning; });
  document.querySelectorAll(".metadata-options input").forEach((input) => { input.disabled = isRunning; });
  $("pauseButton").disabled = !isRunning || paused;
  $("resumeButton").disabled = !isRunning || !paused;
  $("stopButton").disabled = !isRunning;
  $("runDot").classList.toggle("active", isRunning && !paused);
  $("runDot").classList.toggle("paused", isRunning && paused);
}

function showResult(result) {
  results.push(result);
  const empty = $("console").querySelector(".console-empty");
  empty?.remove();
  const row = document.createElement("div");
  row.className = "console-line";
  const category = document.createElement("span");
  category.className = `console-category category-${result.category}`;
  category.textContent = t(`category_${result.category}`) || result.category;
  const detail = document.createElement("span");
  detail.className = "console-detail";
  const fields = [];
  for (const key of metadata) {
    if (result[key] !== undefined && result[key] !== "") fields.push(`${t(`field${key[0].toUpperCase()}${key.slice(1)}`)}: ${result[key]}`);
  }
  if (result.error) fields.push(`Error: ${result.error}`);
  detail.textContent = fields.join("  ·  ");
  row.append(category, detail);
  $("console").append(row);
  $("console").scrollTop = $("console").scrollHeight;
}

async function startCheck() {
  if (!selectedLinks.length) {
    toast(t("noLinks"), true);
    return;
  }
  const mode = document.querySelector('input[name="mode"]:checked').value;
  if (mode === "premium") {
    try {
      const response = await fetch("/api/auth/status");
      const status = await response.json();
      if (!response.ok || !status.authorized) {
        deferredStart = true;
        authStep = "credentials";
        $("codeGroup").classList.add("hidden");
        $("passwordGroup").classList.add("hidden");
        $("apiId").required = true;
        $("apiHash").required = true;
        $("phone").required = true;
        $("loginCode").required = false;
        $("twoFactorPassword").required = false;
        authStep = "credentials";
        $("authMessage").textContent = "";
        $("authSubmit").textContent = t("sendCode");
        showDialog("authDialog");
        return;
      }
    } catch {
      toast(t("networkError"), true);
      return;
    }
  }
  beginSocketCheck(mode);
}

function beginSocketCheck(mode) {
  if (socket && socket.readyState === WebSocket.OPEN) socket.close();
  results = [];
  $("console").replaceChildren();
  $("downloadPanel").classList.add("hidden");
  $("runStatus").textContent = t("checking");
  $("checkProgress").classList.remove("hidden");
  $("progressBar").style.width = "0%";
  $("progressTrack").setAttribute("aria-valuenow", "0");
  $("progressText").textContent = `0 / ${selectedLinks.length}`;
  setRunning(true);
  $("startButton").classList.add("is-loading");
  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  socket = new WebSocket(`${protocol}//${location.host}/ws/check`);
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({ action: "start", links: selectedLinks, mode, metadata: selectedMetadata() }));
  });
  socket.addEventListener("message", (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      toast(t("networkError"), true);
      socket.close();
      setRunning(false);
      $("startButton").classList.remove("is-loading");
      $("runStatus").textContent = t("idle");
      return;
    }
    if (message.type === "result") {
      showResult(message.result);
      const progress = Math.round((message.result.index / message.result.total) * 100);
      $("progressBar").style.width = `${progress}%`;
      $("progressTrack").setAttribute("aria-valuenow", String(progress));
      $("progressText").textContent = `${message.result.index} / ${message.result.total}`;
    }
    if (message.type === "paused") {
      $("runStatus").textContent = t("pausedStatus");
      setRunning(true, true);
    }
    if (message.type === "resumed") {
      $("runStatus").textContent = t("checking");
      setRunning(true);
    }
    if (message.type === "flood_wait") toast(t("floodWait", { seconds: message.seconds }));
    if (message.type === "error") {
      toast(message.message, true);
      $("runStatus").textContent = t("idle");
      setRunning(false);
      $("startButton").classList.remove("is-loading");
      $("downloadPanel").classList.toggle("hidden", results.length === 0);
    }
    if (message.type === "complete") {
      setRunning(false);
      $("startButton").classList.remove("is-loading");
      $("runStatus").textContent = message.stopped ? t("stopped") : t("complete");
      $("downloadPanel").classList.remove("hidden");
      $("downloadPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
  socket.addEventListener("error", () => {
    toast(t("networkError"), true);
    $("runStatus").textContent = t("idle");
    setRunning(false);
    $("startButton").classList.remove("is-loading");
  });
  socket.addEventListener("close", () => {
    if (!$("stopButton").disabled) {
      toast(t("networkError"), true);
      $("runStatus").textContent = t("idle");
      setRunning(false);
      $("startButton").classList.remove("is-loading");
    }
  });
}

async function submitAuth(event) {
  event.preventDefault();
  const button = $("authSubmit");
  button.disabled = true;
  button.classList.add("is-loading");
  button.setAttribute("aria-busy", "true");
  $("authMessage").textContent = "";
  try {
    if (authStep === "credentials") {
      const response = await fetch("/api/auth/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_id: Number($("apiId").value),
          api_hash: $("apiHash").value,
          phone: $("phone").value.trim()
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(apiErrorMessage(data, t("authRequired")));
      if (data.authorized) {
        const shouldStart = deferredStart;
        closeDialog("authDialog");
        $("apiHash").value = "";
        $("loginCode").value = "";
        $("twoFactorPassword").value = "";
        toast(t("authReady"));
        if (shouldStart) beginSocketCheck("premium");
        return;
      }
      authStep = "code";
      $("codeGroup").classList.remove("hidden");
      $("loginCode").required = true;
      $("apiId").required = false;
      $("apiHash").required = false;
      $("phone").required = false;
      $("authSubmit").textContent = t("verify");
      $("authMessage").textContent = t("codeSent");
    } else {
      const body = authStep === "password"
        ? { password: $("twoFactorPassword").value }
        : { code: $("loginCode").value.trim() };
      const response = await fetch("/api/auth/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(apiErrorMessage(data, t("authRequired")));
      if (data.password_required) {
        authStep = "password";
        $("passwordGroup").classList.remove("hidden");
        $("twoFactorPassword").required = true;
        $("loginCode").required = false;
        $("authSubmit").textContent = t("verify");
        return;
      }
      const shouldStart = deferredStart;
      closeDialog("authDialog");
      $("apiHash").value = "";
      $("loginCode").value = "";
      $("twoFactorPassword").value = "";
      toast(t("authReady"));
      if (shouldStart) beginSocketCheck("premium");
    }
  } catch (error) {
    $("authMessage").textContent = error.message || t("authRequired");
    toast(error.message || t("authRequired"), true);
  } finally {
    button.disabled = false;
    button.classList.remove("is-loading");
    button.removeAttribute("aria-busy");
  }
}

async function downloadResults() {
  const chosen = [...document.querySelectorAll("#categoryOptions input:checked")].map((input) => input.value);
  if (!chosen.length) {
    toast(t("selectCategory"), true);
    return;
  }
  $("downloadButton").disabled = true;
  $("downloadButton").classList.add("is-loading");
  $("downloadButton").setAttribute("aria-busy", "true");
  try {
    const response = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ results, categories: chosen, metadata: selectedMetadata() })
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(apiErrorMessage(data, t("exportError")));
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "telegram-link-results.zip";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    toast(error.message || t("exportError"), true);
  } finally {
    $("downloadButton").disabled = false;
    $("downloadButton").classList.remove("is-loading");
    $("downloadButton").removeAttribute("aria-busy");
  }
}

$("language").addEventListener("change", (event) => {
  selectedCategories = [...document.querySelectorAll("#categoryOptions input:checked")].map((input) => input.value);
  language = event.target.value;
  localStorage.setItem("telegram-checker-language", language);
  applyLanguage();
});
$("settingsButton").addEventListener("click", () => showDialog("settingsDialog"));
$("extractButton").addEventListener("click", extract);
$("startButton").addEventListener("click", startCheck);
$("authForm").addEventListener("submit", submitAuth);
$("authBack").addEventListener("click", () => {
  closeDialog("authDialog");
  document.querySelector('input[name="mode"][value="normal"]').checked = true;
  setModeStyle();
});
$("downloadButton").addEventListener("click", downloadResults);
document.querySelectorAll('input[name="mode"]').forEach((input) => input.addEventListener("change", setModeStyle));
document.querySelectorAll(".close-dialog").forEach((button) => button.addEventListener("click", () => closeDialog(button.dataset.dialogClose || button.closest(".modal-backdrop").id)));
document.querySelectorAll(".metadata-options input").forEach((input) => input.addEventListener("change", persistMetadata));
$("fileInput").addEventListener("change", (event) => {
  readSelectedFiles(event.target.files);
  event.target.value = "";
});
$("rawInput").addEventListener("input", invalidateExtraction);
$("categoryOptions").addEventListener("change", () => {
  selectedCategories = [...document.querySelectorAll("#categoryOptions input:checked")].map((input) => input.value);
});
$("dropZone").addEventListener("dragover", (event) => {
  event.preventDefault();
  $("dropZone").classList.add("dragging");
});
$("dropZone").addEventListener("dragleave", () => $("dropZone").classList.remove("dragging"));
$("dropZone").addEventListener("drop", (event) => {
  event.preventDefault();
  $("dropZone").classList.remove("dragging");
  if ($("fileInput").disabled) return;
  readSelectedFiles(event.dataTransfer.files);
});
$("dropZone").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    $("fileInput").click();
  }
});
$("pauseButton").addEventListener("click", () => socket?.readyState === WebSocket.OPEN && socket.send(JSON.stringify({ action: "pause" })));
$("resumeButton").addEventListener("click", () => socket?.readyState === WebSocket.OPEN && socket.send(JSON.stringify({ action: "resume" })));
$("stopButton").addEventListener("click", () => socket?.readyState === WebSocket.OPEN && socket.send(JSON.stringify({ action: "stop" })));
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeDialog(backdrop.id);
}));

metadata = metadataDefaults.filter((field) => metadataDefaults.includes(field) && metadata.includes(field));
if (!metadata.length) metadata = ["link"];
syncMetadataChecks();
applyLanguage();
setModeStyle();
