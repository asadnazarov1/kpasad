import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: {
    label: "БЕСПЛАТНЫЙ АУДИТ",
    title: "30 минут — и вы узнаете где ваш бизнес теряет время и деньги",
    sub: "Я бесплатно разберу ваши процессы и покажу конкретные точки для внедрения ИИ. Без обязательств — только полезный разговор.",
    cta: "Записаться на бесплатный аудит",
    note: "Ответ в течение 24 часов · Бесплатно · Без обязательств"
  },
  uz: {
    label: "BEPUL AUDIT",
    title: "30 daqiqada biznesingiz vaqt va pul yo'qotayotgan joyni bilib oling",
    sub: "Jarayonlaringizni bepul tahlil qilaman va AI joriy etish uchun aniq nuqtalarni ko'rsataman. Hech qanday majburiyatsiz.",
    cta: "Bepul auditga yozilish",
    note: "24 soat ichida javob · Bepul · Majburiyatsiz"
  }
};

interface Props {lang: "ru" | "uz";}

const CTASection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];

  return (
    <section ref={ref} id="cta" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden hover:transform-none">
          
          {/* Top glow */}
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[280px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(217 91% 55% / 0.08) 0%, transparent 70%)" }} />
          

          <div className="section-label mb-4 relative z-10">{t.label}</div>
          <h2 className="section-title mb-5 mx-auto max-w-2xl relative z-10 font-sans">{t.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-10 font-light leading-relaxed relative z-10">{t.sub}</p>
          <a href="#" className="btn-hero relative z-10">{t.cta} →</a>
          <p className="text-xs text-muted-foreground mt-5 relative z-10">{t.note}</p>
        </motion.div>
      </div>
    </section>);

};

export default CTASection;