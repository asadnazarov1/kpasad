export type CaseId = "enjen" | "avtotest" | "refind" | "easytag" | "sargu";

interface LangText { ru: string; uz: string; }

interface CaseData {
  flag: string;
  country: LangText;
  name: string;
  industry: LangText;
  shortDesc: LangText;
  problem: LangText;
  solution: LangText;
  results: { ru: string[]; uz: string[] };
  metrics: { value: LangText; label: LangText }[];
  tags: string[];
  logo: string;
}

export const CASES: Record<CaseId, CaseData> = {
  enjen: {
    flag: "🇺🇸",
    country: { ru: "США — Маркетинг", uz: "AQSh — Marketing" },
    name: "EnJen Digital",
    industry: { ru: "Маркетинговое агентство / Салоны красоты", uz: "Marketing agentligi / Go'zallik salonlari" },
    shortDesc: {
      ru: "Полная автоматизация контент-воронки: мониторинг TikTok, ИИ-сценарии, автопостинг для 20+ клиентов.",
      uz: "To'liq kontent voronkasi avtomatizatsiyasi: TikTok monitoring, AI ssenariylar, 20+ mijoz uchun avtoposting.",
    },
    problem: {
      ru: "EnJen Digital — американское маркетинговое агентство, которое работает с салонами красоты. Одновременно в работе более 20 клиентов-салонов, и для каждого нужно было делать одно и то же: находить вирусные видео в TikTok, писать сценарии, по расписанию публиковать контент в Instagram и Facebook каждого клиента.\n\nПредставьте: 20 разных аккаунтов, у каждого своё расписание. Команда вручную мониторила TikTok, писала сценарии, заходила в каждый аккаунт и выкладывала видео. Сотни часов механической работы каждый месяц.",
      uz: "EnJen Digital — EnJen Digital Amerika marketing agentligi bo'lib, go'zallik salonlari bilan ishlaydi. Bir vaqtning o'zida 20 dan ortiq mijoz-salonlar bilan ishlanardi va har biri uchun bir xil vazifalarni bajarish kerak edi: TikTok'dan virusli videolarni topish, ssenariylar yozish, har bir mijozning Instagram va Facebook sahifalariga belgilangan vaqtda kontent joylash.\n\nTasavvur qiling: 20 ta turli akkaunt, har birining o'z jadvali bor. Jamoa qo'lda TikTok'ni kuzatar, ssenariylar yozar, har bir akkauntga kirib videolarni joylardi. Har oy yuzlab soat mexanik ish bajarilar edi.",
    },
    solution: {
      ru: "Мы построили ИИ-систему, которая закрыла всю эту рутину.\n\n**Поиск вирусных видео:** ИИ каждый день мониторит TikTok и находит видео с миллионами просмотров в нише салонов красоты.\n\n**Автоматические сценарии:** На основе анализа ИИ генерирует готовый сценарий для съёмки.\n\n**Автопостинг:** Команда снимает, загружает в Google Drive — ИИ автоматически публикует по расписанию во все аккаунты.",
      uz: "Biz butun bu rutinni yopadigan AI tizimini qurdik.\n\n**Virusli videolarni topish:** AI har kuni TikTok'ni kuzatadi va go'zallik salonlari sohasida millionlab ko'rishlarga ega videolarni topadi.\n\n**Avtomatik ssenariylar:** Tahlil asosida AI tayyor ssenariylarni avtomatik yaratadi.\n\n**Avtoposting:** Jamoa videoni oladi, Google Drive'ga yuklaydi — AI uni belgilangan vaqtda barcha akkauntlarga avtomatik joylaydi.",
    },
    results: {
      ru: ["ИИ ежедневно находит вирусные видео — команда больше не тратит часы на мониторинг", "На каждое видео автоматически генерируется готовый сценарий", "Снял → загрузил → ИИ опубликовал по расписанию во все аккаунты", "Агентство обслуживает 20+ клиентов, тратит в разы меньше времени"],
      uz: ["AI har kuni virusli videolarni topadi — jamoa endi soatlab monitoring bilan shug'ullanishga majbur emas", "Har bir video uchun avtomatik tayyor ssenariy yaratiladi", "Olingan → yuklangan → AI belgilangan vaqtda barcha akkauntlarga joyladi", "Agentlik 20+ mijozga xizmat ko'rsatadi va bir necha barobar kam vaqt sarflaydi"],
    },
    metrics: [
      { value: { ru: "~200 ч/мес", uz: "~200 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$3 000/мес", uz: "~$3 000/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["TikTok Scraper", "GPT ssenariylar", "Avtoposting"],
    logo: "enjen",
  },
  avtotest: {
    flag: "🇺🇿",
    country: { ru: "Узбекистан — Образование", uz: "O'zbekiston — Ta'lim" },
    name: "Avtotest7",
    industry: { ru: "Автошкола / Экспресс-курсы", uz: "Avtomaktab / Ekspress kurslar" },
    shortDesc: {
      ru: "Комплексное внедрение: ИИ-ответы, QR-учёт, зарплата, KPI и учебная платформа. Запущены онлайн-продажи.",
      uz: "Kompleks joriy etish: AI javoblari, QR hisobi, maosh, KPI va ta'lim platformasi. Online kurslar savdosi boshlandi.",
    },
    problem: {
      ru: "Avtotest7 — школа экспресс-курсов на получение водительских прав в Ташкенте. Автоматизировали сразу несколько процессов.\n\nМенеджеры вручную отвечали в Instagram и Telegram, данные в CRM записывались с ошибками. Зарплата считалась приблизительно. KPI не считался вовсе. Студенты проходили видеоуроки без контроля — можно было просто пролистать. Всё обучение было только офлайн.",
      uz: "Avtotest7 — Avtotest7 Toshkentdagi haydovchilik guvohnomasini tezkor olish kurslari maktabi. Bir vaqtning o'zida bir nechta jarayonlar qo'lda bajarilar edi.\n\nMenejerlar Instagram va Telegram'da qo'lda javob berishardi, ma'lumotlar CRM'ga xatolar bilan kiritilardi. Oylik maosh taxminiy hisoblanardi. KPI umuman hisoblanmasdi. Talabalar videodarslarni nazoratsiz o'tardi — oddiygina o'tkazib yuborish mumkin edi. Barcha ta'lim faqat offline formatda edi.",
    },
    solution: {
      ru: "Мы автоматизировали четыре ключевых процесса и открыли новое направление.\n\n**ИИ-ответы в Instagram и Telegram.** Агент ведёт диалог, собирает данные, пишет в Bitrix24. При новой заявке — мгновенное уведомление.\n\n**Расчёт зарплаты через QR.** Сотрудник сканирует QR при приходе и уходе. ИИ фиксирует время до секунды и рассчитывает зарплату по запросу.\n\n**Автоматический KPI.** ИИ анализирует карточки в Bitrix24 и рассчитывает KPI по инструкции владельца.\n\n**Образовательная платформа.** Видеоуроки и тесты. ИИ допускает к следующему уроку только при 95%+. Финальный тест — 20 случайных вопросов. Благодаря платформе клиент запустил онлайн-продажи курсов.",
      uz: "Biz to'rtta asosiy jarayonni avtomatlashtirdik va yangi yo'nalishni ochdik.\n\n**Instagram va Telegram'da AI javoblar:** Agent muloqot olib boradi, ma'lumotlarni yig'adi va Bitrix24'ga yozadi. Yangi murojaat kelganda — darhol bildirishnoma keladi.\n\n**QR orqali maosh hisoblash:** Xodim kelganda va ketganda QR skan qiladi. AI vaqtni soniyasigacha aniq qayd etadi va so'rovga ko'ra maoshni hisoblaydi.\n\n**Avtomatik KPI:** AI Bitrix24'dagi kartochkalarni tahlil qilib, egasining qoidalariga asosan KPI hisoblaydi.\n\n**Ta'lim platformasi:** Videodarslar va testlar. AI 95%+ natijasiz keyingi darsga o'tkazmaydi. Yakuniy test — 20 ta tasodifiy savol. Shu platforma orqali mijoz online kurslar savdosini yo'lga qo'ydi.",
    },
    results: {
      ru: [
        "Менеджеры перестали вручную обрабатывать входящие — ИИ ведёт диалог и пишет в Bitrix24",
        "Зарплата точна до секунды через QR — без таблиц и споров",
        "KPI рассчитывается автоматически по данным CRM",
        "Студенты реально усваивают материал — 95%+ обязательно",
        "Запущены онлайн-продажи курсов — новый канал дохода",
      ],
      uz: [
        "Menejerlar kiruvchi murojaatlarni qo'lda qayta ishlashni to'xtatdi — AI muloqot qiladi va Bitrix24'ga yozadi",
        "Maosh soniyasigacha aniq hisoblanadi — jadvallar va bahslarsiz",
        "KPI CRM ma'lumotlari asosida avtomatik hisoblanadi",
        "Talabalar materialni haqiqatan o'zlashtiradi — 95%+ majburiy",
        "Online kurslar savdosi yo'lga qo'yildi — yangi daromad manbai",
      ],
    },
    metrics: [
      { value: { ru: "~150 ч/мес", uz: "~150 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$2 000/мес", uz: "~$2 000/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["QR-hisob", "Online platforma", "AI-agent"],
    logo: "avtotest",
  },
  refind: {
    flag: "🇬🇧",
    country: { ru: "Великобритания — E-commerce", uz: "Buyuk Britaniya — E-commerce" },
    name: "ReFind Commerce",
    industry: { ru: "Маркетплейс / Amazon · eBay · TikTok Shop", uz: "Marketplace / Amazon · eBay · TikTok Shop" },
    shortDesc: {
      ru: "7+ платформ и хаос сообщений. Единый инбокс с ИИ-помощником, обученным стилю команды.",
      uz: "7+ platforma va xabarlar xaosi. Jamoa uslubida o'qitilgan AI yordamchisi bilan yagona inbox.",
    },
    problem: {
      ru: "ReFind Commerce — компания из Манчестера: закупают товары в Китае и продают на Amazon, eBay и TikTok Shop. Несколько магазинов на каждой платформе, плюс WhatsApp и email.\n\nКаждый день менеджер открывал Amazon (несколько аккаунтов), eBay, TikTok Shop, WhatsApp и почту — пытался держать всё в голове. Информация терялась, клиенты ждали часами. Владелец назвал это \"кашей\".",
      uz: "ReFind Commerce — ReFind Commerce Manchesterdagi kompaniya: Xitoydan mahsulotlar sotib olib, Amazon, eBay va TikTok Shop orqali sotadi. Har bir platformada bir nechta do'konlar bor, qo'shimcha ravishda WhatsApp va email ham ishlatiladi.\n\nHar kuni menejer Amazon (bir nechta akkaunt), eBay, TikTok Shop, WhatsApp va pochtani ochib, hammasini yodda saqlashga harakat qilardi. Ma'lumotlar yo'qolardi, mijozlar esa soatlab javob kutardi. Kompaniya egasi bu holatni \"kasha\" deb atagan.",
    },
    solution: {
      ru: "Создали кастомное приложение-инбокс, объединяющее все платформы. Как личный Telegram для бизнеса: одно приложение — все сообщения со всех каналов.\n\nДва месяца обучали ИИ на реальной переписке команды. Теперь при новом сообщении — ИИ составляет ответ в стиле команды.\n\nМенеджер видит готовое сообщение. Нравится — нажимает \"отправить\". Хочет изменить — правит за секунды.",
      uz: "Biz barcha platformalarni birlashtiruvchi custom inbox-ilova yaratdik. Xuddi biznes uchun shaxsiy Telegram kabi: bitta ilova — barcha kanallardan kelgan xabarlar bir joyda.\n\nIkki oy davomida AI'ni jamoaning haqiqiy yozishmalari asosida o'qitdik. Endi yangi xabar kelganda — AI jamoa uslubida javob tayyorlaydi.\n\nMenejer tayyor xabarni ko'radi. Yoqsa — \"yuborish\" tugmasini bosadi. O'zgartirmoqchi bo'lsa — bir necha soniyada tahrir qiladi.",
    },
    results: {
      ru: [
        "Все каналы в одном приложении — конец хаосу из 7+ интерфейсов",
        "ИИ обучен стилю команды и предлагает ответы в их голосе",
        "Скорость ответа выросла кратно",
        "Менеджеры фокусируются на сложных случаях, рутину ИИ делает сам",
      ],
      uz: [
        "Barcha kanallar bitta ilovada — 7+ interfeysdan iborat xaos tugadi",
        "AI jamoa uslubida o'qitilgan va shu \"ovozda\" javoblar taklif qiladi",
        "Javob berish tezligi bir necha barobar oshdi",
        "Menejerlar murakkab holatlarga e'tibor qaratadi, rutinani esa AI bajaradi",
      ],
    },
    metrics: [
      { value: { ru: "~90 ч/мес", uz: "~90 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 200/мес", uz: "~$1 200/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Yagona inbox", "AI-yordamchi"],
    logo: "refind",
  },
  easytag: {
    flag: "🇬🇧",
    country: { ru: "Великобритания — E-commerce", uz: "Buyuk Britaniya — E-commerce" },
    name: "easyTag",
    industry: { ru: "Маркетплейс / Amazon · eBay · TikTok Shop", uz: "Marketplace / Amazon · eBay · TikTok Shop" },
    shortDesc: {
      ru: "Одна и та же боль — хаос платформ. Персональный инбокс с ИИ, обученным стилю easyTag.",
      uz: "Bir xil muammo — platformalar xaosi. easyTag uslubiga moslashtirilgan shaxsiy inbox.",
    },
    problem: {
      ru: "easyTag — отдельная компания из Манчестера с той же моделью: закупка в Китае, продажа на Amazon, eBay и TikTok Shop. Независимая от ReFind Commerce компания с идентичной болью.\n\nМножество платформ, аккаунтов, разрозненные сообщения. Менеджеры не успевали охватить все каналы, и это стоило клиентов.",
      uz: "easyTag — easyTag Manchesterdagi alohida kompaniya bo'lib, xuddi shu modelda ishlaydi: Xitoydan mahsulot olib, Amazon, eBay va TikTok Shop orqali sotadi. Bu ReFind Commerce'dan mustaqil kompaniya bo'lib, muammolari ham deyarli bir xil edi.\n\nKo'plab platformalar, akkauntlar va tarqoq xabarlar. Menejerlar barcha kanallarni qamrab ulgurmasdi va bu mijozlarni yo'qotishga olib kelardi.",
    },
    solution: {
      ru: "Реализовали то же решение что для ReFind Commerce — но это было отдельное внедрение: другая база данных, другие аккаунты, другая конфигурация.\n\nЕдиный инбокс объединил Amazon, eBay, TikTok Shop, WhatsApp и email. ИИ обучен на стиле общения команды easyTag и предлагает готовые ответы.",
      uz: "Biz ReFind Commerce uchun qilingan yechimni shu yerda ham joriy qildik — lekin bu alohida integratsiya edi: boshqa baza, boshqa akkauntlar va boshqa konfiguratsiya.\n\nYagona inbox Amazon, eBay, TikTok Shop, WhatsApp va email'ni birlashtirdi. AI easyTag jamoasining muloqot uslubida o'qitildi va tayyor javoblarni taklif qiladi.",
    },
    results: {
      ru: [
        "Все платформы в одном окне — хаос ушёл в прошлое",
        "ИИ обучен стилю именно команды easyTag",
        "Время ответа сократилось кратно",
        "Компания перестала терять клиентов из-за медленной поддержки",
      ],
      uz: [
        "Barcha platformalar bitta oynada — xaos o'tmishda qoldi",
        "AI aynan easyTag jamoasi uslubida o'qitilgan",
        "Javob berish vaqti bir necha barobar qisqardi",
        "Kompaniya sekin qo'llab-quvvatlash sababli mijoz yo'qotishni to'xtatdi",
      ],
    },
    metrics: [
      { value: { ru: "~85 ч/мес", uz: "~85 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 100/мес", uz: "~$1 100/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Yagona inbox", "AI-yordamchi"],
    logo: "easytag",
  },
  sargu: {
    flag: "🇲🇩",
    country: { ru: "Молдова — Авто", uz: "Moldova — Avto" },
    name: "Sargu Trans",
    industry: { ru: "Автосалон / Продажа автомобилей", uz: "Avtosalon / Avtomobil sotish" },
    shortDesc: {
      ru: "ИИ-агент в Instagram и Facebook: отвечает, продаёт визит и записывает в календарь 24/7.",
      uz: "Instagram va Facebook'da AI agent: javob beradi, tashrif sotadi va 24/7 kalendarga yozadi.",
    },
    problem: {
      ru: "Sargu Trans — автосалон в Молдове. Большая часть заявок приходила через Instagram и Facebook — клиенты писали с вопросами об автомобилях и ценах.\n\nКаждый запрос требовал внимания менеджера. Пока менеджер с одним — другие ждут. Пока ждут — часть уходит к конкурентам. Запись на встречи велась вручную с риском потерять данные.",
      uz: "Sargu Trans — Sargu Trans Moldovadagi avtosalon. Arizalarning katta qismi Instagram va Facebook orqali kelardi — mijozlar avtomobillar va narxlar haqida savollar yozardi.\n\nHar bir so'rov menejer e'tiborini talab qilardi. Menejer bitta mijoz bilan band bo'lsa — boshqalar kutardi. Kutayotganlarning bir qismi raqobatchilarga ketib qolardi. Uchrashuvga yozish qo'lda olib borilar, ma'lumot yo'qolish xavfi bor edi.",
    },
    solution: {
      ru: "Внедрили ИИ-агента в Instagram и Facebook — первая точка контакта с каждым покупателем.\n\nАгент ведёт клиента по воронке: отвечает на вопросы, продаёт визит в салон. Когда клиент готов — ИИ назначает время, фиксирует встречу в календаре и отправляет уведомление менеджерам.",
      uz: "Biz Instagram va Facebook'ga AI-agent joriy qildik — har bir mijoz bilan birinchi aloqa nuqtasi sifatida.\n\nAgent mijozni voronka bo'ylab olib boradi: savollarga javob beradi, salon tashrifini \"sotadi\". Mijoz tayyor bo'lganda — AI vaqt belgilaydi, uchrashuvni kalendarga yozadi va menejerlarga bildirishnoma yuboradi.",
    },
    results: {
      ru: [
        "ИИ отвечает на входящие 24/7 — менеджеры работают только с горячими клиентами",
        "Агент продаёт визит в салон, а не просто консультирует",
        "Записи фиксируются автоматически, менеджеры получают мгновенное уведомление",
        "Менеджеры приходят на встречи подготовленными",
      ],
      uz: [
        "AI 24/7 kiruvchi xabarlarga javob beradi — menejerlar faqat \"issiq\" mijozlar bilan ishlaydi",
        "Agent faqat maslahat bermaydi, balki salon tashrifini ham sotadi",
        "Uchrashuvlar avtomatik qayd etiladi, menejerlar darhol xabardor bo'ladi",
        "Menejerlar uchrashuvlarga tayyor holda keladi",
      ],
    },
    metrics: [
      { value: { ru: "~60 ч/мес", uz: "~60 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$800/мес", uz: "~$800/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Uchrashuvlar", "Avto-kalendar"],
    logo: "sargu",
  },
};
