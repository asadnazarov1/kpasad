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
    { t: "Слышали про ИИ, но не знаем с чего начать", d: "Большинство видят потенциал, но не понимают что именно внедрять. Для этого и нужен аудит." }]

  },
  uz: {
    label: "ЎЗИНГИЗНИ ТАНИЙСИЗМИ?",
    title: "Бу ҳар бир бизнесда содир бўлади — соҳадан қатъи назар",
    sub: "Қурилиш, чакана савдо, хизматлар, ишлаб чиқариш, таълим — ҳамма жойда бир хил йўқотишлар.",
    cards: [
    { t: "Мижозларга жавоб беришда жуда узоқ вақт кетади", d: "Хабарлар йўқолади, мижозлар рақобатчиларга кетади. ИИ агент дарҳол жавоб беради — 24/7." },
    { t: "Бир хил иш ҳар куни қўлда бажарилади", d: "Ҳисоботлар, нашрлар, жадваллар — вазифа такрорланса, уни автоматлаштириш мумкин." },
    { t: "Қўлда жараёнлар сабабли доимий хатолар", d: "Одам чарчайди, чалғийди, унутади. ИИ бир хил ишни ҳар сафар бир хил аниқ бажаради." },
    { t: "Маълумотлар турли тизимларда тарқоқ", d: "CRM, мессенжерлар, почта, жадваллар — ҳар ким ўзича сақлайди. Бу ҳар ҳафта соатлаб вақт талаб қилади." },
    { t: "Мавжуд жамоа билан самаралироқ ишлашни хоҳлаймиз", d: "ИИ рутинни ўз зиммасига олади — ва ўша жамоа бир неча баробар кўпроқ улгуради." },
    { t: "ИИ ҳақида эшитганмиз, лекин қаердан бошлашни билмаймиз", d: "Кўпчилик салоҳиятни кўради, аммо айнан нимани жорий этишни тушунмайди." }]
  }
};

interface Props {lang: "ru" | "uz";}

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
          className="mb-12">
          
          <div className="section-label mb-4">{t.label}</div>
          <h2 className="section-title mb-4 font-sans">{t.title}</h2>
          <p className="section-subtitle">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.cards.map((card, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card p-7 group">
            
              <div className="text-3xl font-bold text-primary/15 font-heading mb-2 group-hover:text-primary/30 transition-colors">"</div>
              <h3 className="font-heading text-sm font-bold text-heading mb-2 leading-snug">{card.t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.d}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default RecogniseSection;