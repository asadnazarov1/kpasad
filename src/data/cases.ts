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
      uz: "To'liq kontent voronkasi avtomatizatsiyasi: TikTok monitoring, AI stsenariylar, 20+ mijoz uchun avtonashr.",
    },
    problem: {
      ru: "EnJen Digital — американское маркетинговое агентство, которое работает с салонами красоты. Одновременно в работе более 20 клиентов-салонов, и для каждого нужно было делать одно и то же: находить вирусные видео в TikTok, писать сценарии, по расписанию публиковать контент в Instagram и Facebook каждого клиента.\n\nПредставьте: 20 разных аккаунтов, у каждого своё расписание. Команда вручную мониторила TikTok, писала сценарии, заходила в каждый аккаунт и выкладывала видео. Сотни часов механической работы каждый месяц.",
      uz: "EnJen Digital — go'zallik salonlari bilan ishlaydigan Amerika marketing agentligi. Bir vaqtda 20 dan ortiq salon-mijozi va har biri uchun bir xil ish: TikTok'da viral videolar topish, stsenariylar yozish, har bir mijozning Instagram va Facebook sahifasiga jadval bo'ylab kontent nashr qilish.\n\nTasavvur qiling: 20 ta turli hisob, har birining o'z jadvali. Jamoa TikTok'ni qo'lda kuzatdi, stsenariylar yozdi, har bir hisobga kirib videolarni yukladi. Oyiga yuzlab soat mexanik ish.",
    },
    solution: {
      ru: "Мы построили ИИ-систему, которая закрыла всю эту рутину.\n\n**Поиск вирусных видео:** ИИ каждый день мониторит TikTok и находит видео с миллионами просмотров в нише салонов красоты.\n\n**Автоматические сценарии:** На основе анализа ИИ генерирует готовый сценарий для съёмки.\n\n**Автопостинг:** Команда снимает, загружает в Google Drive — ИИ автоматически публикует по расписанию во все аккаунты.",
      uz: "Biz bu butun rutin ishni yopadigan AI tizimini qurdik.\n\n**Viral videolar topish:** AI har kuni TikTok'ni kuzatadi va go'zallik salonlari sohasida millionlab ko'rishga ega videolarni topadi.\n\n**Avtomatik stsenariylar:** Tahlil asosida AI suratga olish uchun tayyor stsenariy yaratadi.\n\n**Avtomatik nashr:** Jamoa suratga olib Google Drive'ga yuklaydi — AI barcha hisoblarga jadvalga ko'ra o'zi nashr qiladi.",
    },
    results: {
      ru: ["ИИ ежедневно находит вирусные видео — команда больше не тратит часы на мониторинг", "На каждое видео автоматически генерируется готовый сценарий", "Снял → загрузил → ИИ опубликовал по расписанию во все аккаунты", "Агентство обслуживает 20+ клиентов, тратит в разы меньше времени"],
      uz: ["AI har kuni viral videolarni topadi — jamoa kuzatuvga soatlar sarflamaydi", "Har bir video uchun tayyor stsenariy avtomatik yaratiladi", "Suratga olindi → Drive'ga yuklandi → AI jadvalga ko'ra o'zi nashr qildi", "Agentlik 20+ mijozga xizmat ko'rsatadi, vaqt ancha kamaydi"],
    },
    metrics: [
      { value: { ru: "~200 ч/мес", uz: "~200 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$3 000/мес", uz: "~$3 000/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["TikTok Scraper", "GPT сценарии", "Автопостинг"],
    logo: "enjen",
  },
  avtotest: {
    flag: "🇺🇿",
    country: { ru: "Узбекистан — Образование", uz: "O'zbekiston — Ta'lim" },
    name: "Avtotest7",
    industry: { ru: "Автошкола / Экспресс-курсы", uz: "Avtomaktab / Ekspress kurslar" },
    shortDesc: {
      ru: "Комплексное внедрение: ИИ-ответы, QR-учёт, зарплата, KPI и учебная платформа. Запущены онлайн-продажи.",
      uz: "Kompleks joriy etish: AI javoblari, QR hisobi, maosh, KPI va o'quv platformasi. Onlayn kurs savdosi boshlandi.",
    },
    problem: {
      ru: "Avtotest7 — школа экспресс-курсов на получение водительских прав в Ташкенте. Автоматизировали сразу несколько процессов.\n\nМенеджеры вручную отвечали в Instagram и Telegram, данные в CRM записывались с ошибками. Зарплата считалась приблизительно. KPI не считался вовсе. Студенты проходили видеоуроки без контроля — можно было просто пролистать. Всё обучение было только офлайн.",
      uz: "Avtotest7 — Toshkentda haydovchilik guvohnomasi olish uchun ekspress kurslar maktabi. Bir vaqtda bir nechta jarayonlarni avtomatlashtirdik.\n\nMenejerlar Instagram va Telegram'da qo'lda javob berdi, CRM'ga ma'lumotlar xatolar bilan yozildi. Maosh taxminiy hisoblandi. KPI umuman hisoblanmadi. Talabalar video darslarni nazorat holda o'tdi — shunchaki varaqlash mumkin edi. Barcha ta'lim faqat oflayn edi.",
    },
    solution: {
      ru: "Мы автоматизировали четыре ключевых процесса и открыли новое направление.\n\n**ИИ-ответы в Instagram и Telegram.** Агент ведёт диалог, собирает данные, пишет в Bitrix24. При новой заявке — мгновенное уведомление.\n\n**Расчёт зарплаты через QR.** Сотрудник сканирует QR при приходе и уходе. ИИ фиксирует время до секунды и рассчитывает зарплату по запросу.\n\n**Автоматический KPI.** ИИ анализирует карточки в Bitrix24 и рассчитывает KPI по инструкции владельца.\n\n**Образовательная платформа.** Видеоуроки и тесты. ИИ допускает к следующему уроку только при 95%+. Финальный тест — 20 случайных вопросов. Благодаря платформе клиент запустил онлайн-продажи курсов.",
      uz: "Biz to'rtta asosiy jarayonni avtomatlashtirdik va yangi yo'nalish ochdik.\n\n**Instagram va Telegram'da AI javoblari.** Agent muloqot yuritadi, ma'lumot to'playdi, Bitrix24'ga yozadi. Yangi ariza kelganda — tezkor bildirishnoma.\n\n**QR orqali maosh hisoblash.** Xodim ish boshida va tugaganda QR skanerlaydi. AI vaqtni soniyagacha qayd etadi va maoshni so'rov bo'yicha hisoblaydi.\n\n**Avtomatik KPI.** AI Bitrix24 kartochkalarini tahlil qiladi va egasi ko'rsatmasiga ko'ra KPI hisoblaydi.\n\n**O'quv platformasi.** Video darslar va testlar. AI faqat 95%+ natija bilan keyingi darsga o'tkazadi. Yakuniy test — 20 ta tasodifiy savol. Platforma tufayli mijoz onlayn kurs savdosini boshladi.",
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
        "Menejerlar kiruvchi xabarlarni qo'lda qayta ishlashni to'xtatdi — AI muloqot yuritadi va Bitrix24'ga yozadi",
        "Maosh QR orqali soniyagacha aniq — jadvallar va tortishuvlarsiz",
        "KPI CRM ma'lumotlari asosida avtomatik hisoblanadi",
        "Talabalar materialni chindan o'zlashtiradi — 95%+ majburiy",
        "Onlayn kurs savdosi boshlandi — yangi daromad kanali",
      ],
    },
    metrics: [
      { value: { ru: "~150 ч/мес", uz: "~150 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$2 000/мес", uz: "~$2 000/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["QR-учёт", "Онлайн платформа", "AI-агент"],
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
      uz: "ReFind Commerce — Manchesterdan kompaniya: Xitoydan tovar sotib olib Amazon, eBay va TikTok Shop'da sotadi. Har bir platformada bir nechta do'kon, bundan tashqari WhatsApp va email.\n\nHar kuni menejer Amazon (bir nechta hisob), eBay, TikTok Shop, WhatsApp va pochtani ochib — barchasini xotirada saqlashga urindi. Axborot yo'qoldi, mijozlar soatlab kutdi. Egasi buni \"tartibsizlik\" deb atadi.",
    },
    solution: {
      ru: "Создали кастомное приложение-инбокс, объединяющее все платформы. Как личный Telegram для бизнеса: одно приложение — все сообщения со всех каналов.\n\nДва месяца обучали ИИ на реальной переписке команды. Теперь при новом сообщении — ИИ составляет ответ в стиле команды.\n\nМенеджер видит готовое сообщение. Нравится — нажимает \"отправить\". Хочет изменить — правит за секунды.",
      uz: "Barcha platformalarni birlashtiruvchi maxsus inbox ilovasini yaratdik. Biznes uchun shaxsiy Telegram kabi: bitta ilova — barcha kanallardan barcha xabarlar.\n\nAI'ni jamoa yozishmalari asosida ikki oy o'qitdik. Endi yangi xabar kelganda — AI jamoa uslubida javob tayyorlaydi.\n\nMenejer tayyor xabarni ko'radi. Yoqsa — \"yuborish\" tugmasini bosadi. O'zgartirmoqchi bo'lsa — soniyalarda tuzatadi.",
    },
    results: {
      ru: [
        "Все каналы в одном приложении — конец хаосу из 7+ интерфейсов",
        "ИИ обучен стилю команды и предлагает ответы в их голосе",
        "Скорость ответа выросла кратно",
        "Менеджеры фокусируются на сложных случаях, рутину ИИ делает сам",
      ],
      uz: [
        "Barcha kanallar bitta ilovada — 7+ interfeyslar xaosiga barham",
        "AI jamoa uslubida o'qitilgan va ularning ovozida javoblar taklif qiladi",
        "Javob tezligi bir necha barobar oshdi",
        "Menejerlar murakkab holatlarga e'tibor qaratadi, rutin ishni AI o'zi bajaradi",
      ],
    },
    metrics: [
      { value: { ru: "~90 ч/мес", uz: "~90 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 200/мес", uz: "~$1 200/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Единый inbox", "AI-помощник"],
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
      uz: "easyTag — Manchesterdan yana bir alohida kompaniya, bir xil biznes modeli: Xitoydan xarid, Amazon, eBay va TikTok Shop'da sotish. ReFind Commerce'dan mustaqil, ammo bir xil muammo.\n\nKo'p platformalar, hisoblar, tarqoq xabarlar. Menejerlar barcha kanallarni qamrab ololmadi va bu mijozlar yo'qotilishiga olib keldi.",
    },
    solution: {
      ru: "Реализовали то же решение что для ReFind Commerce — но это было отдельное внедрение: другая база данных, другие аккаунты, другая конфигурация.\n\nЕдиный инбокс объединил Amazon, eBay, TikTok Shop, WhatsApp и email. ИИ обучен на стиле общения команды easyTag и предлагает готовые ответы.",
      uz: "ReFind Commerce uchun qilingan yechimni amalga oshirdik — lekin bu to'liq alohida joriy etish edi: boshqa ma'lumotlar bazasi, boshqa hisoblar, boshqa konfiguratsiya.\n\nYagona inbox Amazon, eBay, TikTok Shop, WhatsApp va emailni birlashtirdi. AI easyTag jamoasi muloqot uslubida o'qitilgan va tayyor javoblar taklif qiladi.",
    },
    results: {
      ru: [
        "Все платформы в одном окне — хаос ушёл в прошлое",
        "ИИ обучен стилю именно команды easyTag",
        "Время ответа сократилось кратно",
        "Компания перестала терять клиентов из-за медленной поддержки",
      ],
      uz: [
        "Barcha platformalar bitta oynada — xaos ortda qoldi",
        "AI aynan easyTag jamoasi uslubida o'qitilgan",
        "Javob vaqti bir necha barobar qisqardi",
        "Kompaniya sekin qo'llab-quvvatlash tufayli mijozlarni yo'qotishni to'xtatdi",
      ],
    },
    metrics: [
      { value: { ru: "~85 ч/мес", uz: "~85 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 100/мес", uz: "~$1 100/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Единый inbox", "AI-помощник"],
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
      uz: "Sargu Trans — Moldovadagi avtosalon. Arizalarning ko'p qismi Instagram va Facebook orqali keldi — mijozlar avtomobillar va narxlar haqida yozdi.\n\nHar bir so'rov menejer e'tiborini talab qildi. Menejer biri bilan band bo'lganda — boshqalar kutadi. Kutayotganda — ba'zilari raqobatchilarga ketadi. Uchrashuvlarga yozilish qo'lda yurildi va ma'lumotlarni yo'qotish xavfi bor edi.",
    },
    solution: {
      ru: "Внедрили ИИ-агента в Instagram и Facebook — первая точка контакта с каждым покупателем.\n\nАгент ведёт клиента по воронке: отвечает на вопросы, продаёт визит в салон. Когда клиент готов — ИИ назначает время, фиксирует встречу в календаре и отправляет уведомление менеджерам.",
      uz: "Instagram va Facebook'ga AI agentini joriy etdik — har bir xaridor bilan birinchi aloqa nuqtasi.\n\nAgent mijozni voronka bo'ylab boshqaradi: savollarga javob beradi, salonga tashrif sotadi. Mijoz tayyor bo'lganda — AI vaqt belgilaydi, uchrashuvni kalendarga kiritadi va menejerlarga bildirishnoma yuboradi.",
    },
    results: {
      ru: [
        "ИИ отвечает на входящие 24/7 — менеджеры работают только с горячими клиентами",
        "Агент продаёт визит в салон, а не просто консультирует",
        "Записи фиксируются автоматически, менеджеры получают мгновенное уведомление",
        "Менеджеры приходят на встречи подготовленными",
      ],
      uz: [
        "AI kiruvchi xabarlarga 24/7 javob beradi — menejerlar faqat issiq mijozlar bilan ishlaydi",
        "Agent salonga tashrifni sotadi, shunchaki maslahat bermaydi",
        "Yozuvlar avtomatik qayd etiladi, menejerlar tezkor bildirishnoma oladi",
        "Menejerlar uchrashuvlarga tayyor holda keladi",
      ],
    },
    metrics: [
      { value: { ru: "~60 ч/мес", uz: "~60 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$800/мес", uz: "~$800/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Встречи", "Авто-календарь"],
    logo: "sargu",
  },
};
