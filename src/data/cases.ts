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
      uz: "EnJen Digital — go'zallik salonlari bilan ishlaydigan Amerika marketing agentligi. Bir vaqtda 20 dan ortiq salon-mijozi va har biri uchun bir xil ish: TikTok'da viral videolar topish, stsenariylar yozish, har bir mijozning Instagram va Facebook sahifasiga jadval bo'yicha kontent nashr qilish.\n\nTasavvur qiling: 20 ta turli hisob, har birining o'z jadvali. Jamoa TikTok'ni qo'lda kuzatdi, stsenariylar yozdi, har bir hisobga kirib videolarni yukladi. Oyiga yuzlab soat mexanik ish.",
    },
    solution: {
      ru: "Мы построили ИИ-систему, которая закрыла всю эту рутину.\n\n**Поиск вирусных видео:** ИИ каждый день мониторит TikTok и находит видео с миллионами просмотров в нише салонов красоты.\n\n**Автоматические сценарии:** На основе анализа ИИ генерирует готовый сценарий для съёмки.\n\n**Автопостинг:** Команда снимает, загружает в Google Drive — ИИ автоматически публикует по расписанию во все аккаунты.",
      uz: "Biz bu butun rutin ishni yopadigan AI tizimini qurdik.\n\n**Viral videolar:** AI har kuni TikTok'ni kuzatadi va top videolarni topadi.\n\n**Avtomatik stsenariylar:** Tahlil asosida AI suratga olish uchun tayyor stsenariy yaratadi.\n\n**Avtomatik nashr:** Jamoa suratga olib Drive'ga yuklaydi — AI barcha hisoblarga jadvalga ko'ra o'zi nashr qiladi.",
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
      ru: "Avtotest7 — школа экспресс-курсов на получение водительских прав в Ташкенте. Менеджеры вручную отвечали в Instagram и Telegram, данные в CRM записывались с ошибками. Зарплата считалась приблизительно. KPI не считался вовсе.",
      uz: "Avtotest7 — Toshkentda haydovchilik guvohnomasi olish uchun ekspress kurslar maktabi. Menejerlar qo'lda javob berdi, CRM'ga ma'lumotlar xatolar bilan yozildi. Maosh taxminiy hisoblandi.",
    },
    solution: {
      ru: "**ИИ-ответы в Instagram и Telegram.** Агент ведёт диалог, собирает данные, пишет в Bitrix24.\n\n**Расчёт зарплаты через QR.** Сотрудник сканирует QR при приходе и уходе.\n\n**Автоматический KPI.** ИИ анализирует карточки в Bitrix24.\n\n**Образовательная платформа.** Видеоуроки и тесты. ИИ допускает к следующему уроку только при 95%+.",
      uz: "**Instagram va Telegram'da AI javoblari.** Agent muloqot yuritadi, ma'lumot to'playdi.\n\n**QR orqali maosh.** Xodim ish boshida va tugaganda QR skanerlaydi.\n\n**Avtomatik KPI.** AI Bitrix24 kartochkalarini tahlil qiladi.\n\n**O'quv platformasi.** Video darslar va testlar. AI faqat 95%+ natija bilan keyingi darsga o'tkazadi.",
    },
    results: {
      ru: ["Менеджеры перестали вручную обрабатывать входящие", "Зарплата точна до секунды через QR", "KPI рассчитывается автоматически", "Запущены онлайн-продажи курсов — новый канал дохода"],
      uz: ["Menejerlar kiruvchi xabarlarni qo'lda qayta ishlashni to'xtatdi", "Maosh QR orqali soniyagacha aniq", "KPI avtomatik hisoblanadi", "Onlayn kurs savdosi boshlandi — yangi daromad kanali"],
    },
    metrics: [
      { value: { ru: "~150 ч/мес", uz: "~150 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$2 000/мес", uz: "~$2 000/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["QR-учёт", "Онлайн платформа", "AI-агент"],
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
      ru: "ReFind Commerce — компания из Манчестера. Каждый день менеджер открывал Amazon, eBay, TikTok Shop, WhatsApp и почту. Информация терялась, клиенты ждали часами.",
      uz: "ReFind Commerce — Manchesterdan kompaniya. Har kuni menejer bir nechta platformani ochib, xotirada saqlashga urindi. Axborot yo'qoldi, mijozlar soatlab kutdi.",
    },
    solution: {
      ru: "Создали кастомное приложение-инбокс, объединяющее все платформы. Два месяца обучали ИИ на реальной переписке команды.\n\nМенеджер видит готовое сообщение. Нравится — нажимает «отправить».",
      uz: "Barcha platformalarni birlashtiruvchi maxsus inbox ilovasini yaratdik. AI'ni jamoa yozishmalari asosida ikki oy o'qitdik.\n\nMenejer tayyor xabarni ko'radi. Yoqsa — yuboradi.",
    },
    results: {
      ru: ["Все каналы в одном приложении", "ИИ обучен стилю команды", "Скорость ответа выросла кратно", "Менеджеры фокусируются на сложных случаях"],
      uz: ["Barcha kanallar bitta ilovada", "AI jamoa uslubida o'qitilgan", "Javob tezligi bir necha barobar oshdi", "Menejerlar murakkab holatlarga e'tibor qaratadi"],
    },
    metrics: [
      { value: { ru: "~90 ч/мес", uz: "~90 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 200/мес", uz: "~$1 200/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Единый inbox", "AI-помощник"],
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
      ru: "easyTag — отдельная компания из Манчестера с той же моделью: закупка в Китае, продажа на Amazon, eBay и TikTok Shop. Множество платформ, менеджеры не успевали.",
      uz: "easyTag — Manchesterdan yana bir alohida kompaniya, bir xil biznes modeli. Ko'p platformalar, menejerlar barcha kanallarni qamrab ololmadi.",
    },
    solution: {
      ru: "Реализовали то же решение — но это было отдельное внедрение: другая база данных, другие аккаунты. Единый инбокс объединил все каналы. ИИ обучен на стиле easyTag.",
      uz: "Bir xil yechimni amalga oshirdik — lekin bu to'liq alohida joriy etish edi. Yagona inbox barcha kanallarni birlashtirdi. AI easyTag uslubida o'qitilgan.",
    },
    results: {
      ru: ["Все платформы в одном окне", "ИИ обучен стилю именно easyTag", "Время ответа сократилось кратно", "Компания перестала терять клиентов"],
      uz: ["Barcha platformalar bitta oynada", "AI aynan easyTag uslubida o'qitilgan", "Javob vaqti bir necha barobar qisqardi", "Kompaniya mijozlarni yo'qotishni to'xtatdi"],
    },
    metrics: [
      { value: { ru: "~85 ч/мес", uz: "~85 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$1 100/мес", uz: "~$1 100/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Единый inbox", "AI-помощник"],
  },
  sargu: {
    flag: "🇲🇩",
    country: { ru: "Молдова — Авто", uz: "Moldova — Avto" },
    name: "Sargu Trans",
    industry: { ru: "Автосалон / Продажа автомобилей", uz: "Avtosalon / Avtomobil sotish" },
    shortDesc: {
      ru: "ИИ-агент в Instagram и Facebook: отвечает, продаёт визит и записывает в календарь 24/7.",
      uz: "Instagram va Facebook da AI agent: javob beradi, tashrif sotadi va 24/7 yozadi.",
    },
    problem: {
      ru: "Sargu Trans — автосалон в Молдове. Каждый запрос требовал внимания менеджера. Пока менеджер с одним — другие ждут и уходят к конкурентам.",
      uz: "Sargu Trans — Moldovadagi avtosalon. Har bir so'rov menejer e'tiborini talab qildi. Menejer band bo'lganda — boshqalar kutadi va raqobatchilarga ketadi.",
    },
    solution: {
      ru: "Внедрили ИИ-агента в Instagram и Facebook. Агент ведёт клиента по воронке: отвечает, продаёт визит. Когда клиент готов — ИИ назначает время и фиксирует в календаре.",
      uz: "Instagram va Facebook'ga AI agentini joriy etdik. Agent mijozni voronka bo'ylab boshqaradi. Mijoz tayyor bo'lganda — AI vaqt belgilaydi va kalendarga kiritadi.",
    },
    results: {
      ru: ["ИИ отвечает на входящие 24/7", "Агент продаёт визит, а не просто консультирует", "Записи фиксируются автоматически", "Менеджеры приходят на встречи подготовленными"],
      uz: ["AI kiruvchi xabarlarga 24/7 javob beradi", "Agent saloniga tashrif sotadi", "Yozuvlar avtomatik qayd etiladi", "Menejerlar uchrashuvlarga tayyor holda keladi"],
    },
    metrics: [
      { value: { ru: "~60 ч/мес", uz: "~60 soat/oy" }, label: { ru: "Экономия времени", uz: "Vaqt tejash" } },
      { value: { ru: "~$800/мес", uz: "~$800/oy" }, label: { ru: "Экономия денег", uz: "Pul tejash" } },
    ],
    tags: ["Встречи", "Авто-календарь"],
  },
};
