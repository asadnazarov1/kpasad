import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: {
    label: "УЗНАЁТЕ СЕБЯ?",
    title: "Это происходит в каждом бизнесе — независимо от отрасли",
    sub: "Строительство, ритейл, услуги, производство, образование — везде одни и те же потери. Просто никто не считал сколько это стоит.",
    cards: [
      { t: "Мы отвечаем клиентам слишком долго", d: "Сообщения теряются, клиенты уходят к конкурентам. ИИ-агент отвечает мгновенно — 24/7, без ошибок и без участия команды." },
      { t: "Одно и то же делается вручную каждый день", d: "Отчёты, публикации, таблицы, рассылки — если задача повторяется, значит её можно автоматизировать." },
      { t: "Из-за ручных процессов постоянно возникают ошибки", d: "Человек устаёт, отвлекается, забывает. ИИ выполняет одно и то же одинаково точно — каждый раз." },
      { t: "Информация разбросана по разным системам", d: "CRM, мессенджеры, почта, таблицы — каждый хранит данные по-своему. Это стоит часов каждую неделю." },
      { t: "Хотим работать эффективнее с текущей командой", d: "ИИ берёт на себя рутину — и та же команда успевает в разы больше." },
      { t: "Слышали про ИИ, но не знаем с чего начать", d: "Большинство видят потенциал, но не понимают что именно внедрять. Для этого и нужен аудит." },
    ],
  },
  uz: {
    label: "O'ZINGIZNI TANIYSIZMI?",
    title: "Bu har bir biznesda sodir bo'ladi — sohadan qat'i nazar",
    sub: "Qurilish, chakana savdo, xizmatlar, ishlab chiqarish, ta'lim — hamma joyda bir xil yo'qotishlar.",
    cards: [
      { t: "Mijozlarga javob berishda juda uzoq vaqt ketadi", d: "Xabarlar yo'qoladi, mijozlar raqobatchilarga ketadi. AI agent darhol javob beradi — 24/7." },
      { t: "Bir xil ish har kuni qo'lda bajariladi", d: "Hisobotlar, nashrlar, jadvallar — vazifa takrorlansa, uni avtomatlashtirish mumkin." },
      { t: "Qo'lda jarayonlar sababli doimiy xatolar", d: "Odam charchaydi, chalg'iydi, unutadi. AI bir xil ishni har safar bir xil aniq bajaradi." },
      { t: "Ma'lumotlar turli tizimlarda tarqoq", d: "CRM, messenjerlar, pochta, jadvallar — har kim o'zicha saqlaydi. Bu har hafta soatlab vaqt talab qiladi." },
      { t: "Mavjud jamoa bilan samaraliroq ishlashni xohlaymiz", d: "AI rutinni o'z zimmasiga oladi — va o'sha jamoa bir necha barobar ko'proq ulguradi." },
      { t: "AI haqida eshitganmiz, lekin qayerdan boshlashni bilmaymiz", d: "Ko'pchilik salohiyatni ko'radi, ammo aynan nimani joriy etishni tushunmaydi." },
    ],
  },
};

interface Props { lang: "ru" | "uz"; }

const RecogniseSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];

  return (
    <section ref={ref} className="py-24 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label mb-4">{t.label}</div>
          <h2 className="section-title mb-4">{t.title}</h2>
          <p className="section-subtitle">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 group"
            >
              <div className="text-3xl font-bold text-primary/15 font-heading mb-2 group-hover:text-primary/30 transition-colors">"</div>
              <h3 className="font-heading text-sm font-bold text-heading mb-2 leading-snug">{card.t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecogniseSection;
