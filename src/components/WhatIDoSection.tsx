import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: {
    label: "ЧТО Я ДЕЛАЮ",
    title: "Я не продаю ИИ-инструменты. Я строю системы которые работают на ваш бизнес.",
    sub: "Мы строим ИИ-системы которые сокращают расходы, убирают рутину, уменьшают вероятность ошибки и увеличивают прибыль.",
    cards: [
    { num: "01", icon: "🔍", t: "Аудит и стратегия", d: 'Разбираю ваши процессы как архитектор — ищу где именно теряются время и деньги. Не предлагаю "ИИ ради ИИ".' },
    { num: "02", icon: "🤖", t: "ИИ-агенты и автоответы", d: "Умные боты в Instagram, Telegram, WhatsApp — не скрипты, а полноценный диалог с логикой и интеграцией в вашу CRM." },
    { num: "03", icon: "⚡", t: "Автоматизация операций", d: "Расчёт зарплат, KPI, отчёты, публикации, учёт времени — всё что ваша команда делает вручную каждый день." },
    { num: "04", icon: "🔗", t: "Интеграция систем", d: "Объединяю разрозненные платформы в одну экосистему. CRM, мессенджеры, маркетплейсы, почта — всё в одном месте." }]

  },
  uz: {
    label: "МЕН НИМА ҚИЛАМАН",
    title: "Мен ИИ воситалар эмас — бизнесингизга ишлайдиган тизимлар қураман.",
    sub: "Биз харажатларни камайтирадиган, рутинни олиб ташлайдиган ва даромадни оширадиган ИИ тизимларини қурамиз.",
    cards: [
    { num: "01", icon: "🔍", t: "Аудит ва стратегия", d: "Жараёнларингизни архитектор сифатида таҳлил қиламан — айнан қаерда вақт ва пул йўқолаётганини топаман." },
    { num: "02", icon: "🤖", t: "ИИ агентлар ва автожавоблар", d: "Instagram, Telegram, WhatsApp да ақлли ботлар — CRM интеграцияси билан мантиқий тўлиқ мулоқот." },
    { num: "03", icon: "⚡", t: "Операцияларни автоматлаштириш", d: "Маош, KPI, ҳисоботлар, нашрлар, вақт ҳисоби — ҳар куни қўлда бажарадиган ҳамма нарсани ИИ га топширамиз." },
    { num: "04", icon: "🔗", t: "Тизимларни бирлаштириш", d: "Тарқоқ платформаларни бир экотизимга бирлаштираман. CRM, мессенжерлар, маркетплейслар, почта." }]
  }
};

interface Props {lang: "ru" | "uz";}

const WhatIDoSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];

  return (
    <section ref={ref} className="py-24 md:py-28">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <div className="section-label mb-4">{t.label}</div>
          <h2 className="section-title mb-4 max-w-3xl font-sans">{t.title}</h2>
          <p className="section-subtitle">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.cards.map((card, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 group">
            
              <div className="font-heading text-xs font-bold text-primary/40 mb-3 group-hover:text-primary transition-colors">{card.num}</div>
              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
              <h3 className="font-heading text-lg font-bold text-heading mb-2">{card.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.d}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhatIDoSection;