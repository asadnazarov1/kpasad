import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: {
    label: "ЧТО МЕНЯЕТСЯ",
    title: "Что вы получаете после внедрения",
    sub: "Конкретные изменения которые происходят в бизнесе после того как ИИ-системы начинают работать.",
    cards: [
    { icon: "⏱", t: "Время процессов сокращается", d: "Задачи которые занимали часы выполняются за минуты." },
    { icon: "💰", t: "Расходы снижаются", d: "Меньше ручного труда — меньше затрат." },
    { icon: "🎯", t: "Ошибки уходят", d: "ИИ делает одно и то же одинаково точно каждый раз." },
    { icon: "🔄", t: "Рутина исчезает", d: "Команда фокусируется на задачах которые требуют мышления и опыта." },
    { icon: "📈", t: "Прибыль растёт", d: "Текущая команда справляется с большим объёмом." },
    { icon: "⚡", t: "Скорость реакции", d: "Клиенты получают ответ мгновенно." }]

  },
  uz: {
    label: "НИМА ЎЗГАРАДИ",
    title: "Жорий этишдан кейин нима оласиз",
    sub: "ИИ тизимлари ишлай бошлагандан кейин бизнесда содир бўладиган аниқ ўзгаришлар.",
    cards: [
    { icon: "⏱", t: "Жараёнлар вақти қисқаради", d: "Соатлаб давом этган вазифалар дақиқаларда бажарилади." },
    { icon: "💰", t: "Харажатлар камаяди", d: "Камроқ қўл меҳнати — камроқ харажат." },
    { icon: "🎯", t: "Хатолар йўқолади", d: "ИИ бир хил ишни ҳар сафар бир хил аниқ бажаради." },
    { icon: "🔄", t: "Рутин йўқолади", d: "Жамоа фикрлаш ва тажриба талаб қиладиган вазифаларга эътибор қаратади." },
    { icon: "📈", t: "Даромад ўсади", d: "Мавжуд жамоа кўпроқ ҳажмни уддалайди." },
    { icon: "⚡", t: "Муносабат тезлиги", d: "Мижозлар дарҳол жавоб олади." }]
  }
};

interface Props {lang: "ru" | "uz";}

const ResultsSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];

  return (
    <section ref={ref} className="py-24 md:py-28 bg-surface border-t border-b border-border">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.cards.map((card, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card p-7 group">
            
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
              <h3 className="font-heading text-base font-bold text-heading mb-2">{card.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.d}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ResultsSection;