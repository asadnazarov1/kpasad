import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: {
    label: "КАК МЫ РАБОТАЕМ",
    title: "От первого разговора до живого результата",
    steps: [
      { t: "Бесплатный аудит", d: "Созваниваемся и разбираем ваши процессы. Нахожу где ИИ даст максимальный эффект." },
      { t: "Стратегия и план", d: "Готовлю конкретный план: что автоматизируем, как, в какие сроки." },
      { t: "Внедрение", d: "Строю, настраиваю и интегрирую ИИ-решения без остановки бизнеса." },
      { t: "Поддержка и рост", d: "Остаюсь на связи. Система работает и совершенствуется вместе с вашим бизнесом." },
    ],
  },
  uz: {
    label: "BIZ QANDAY ISHLAYMIZ",
    title: "Birinchi suhbatdan amaliy natijagacha",
    steps: [
      { t: "Bepul audit", d: "Qo'ng'iroq qilamiz, jarayonlaringizni ko'rib chiqamiz." },
      { t: "Strategiya va reja", d: "Aniq reja tuzaman: nimani avtomatlashtiramiz, qanday, qancha vaqtda." },
      { t: "Joriy etish", d: "AI yechimlarini biznesingizni to'xtatmasdan joriy jarayonlarga qurib, sozlab va integratsiya qilaman." },
      { t: "Qo'llab-quvvatlash va o'sish", d: "Aloqada qolaman. Tizim ishlaydi va biznesingiz bilan birga rivojlanadi." },
    ],
  },
};

interface Props { lang: "ru" | "uz"; }

const ProcessSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];

  return (
    <section ref={ref} className="py-24 md:py-28 bg-surface border-t border-b border-border">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <div className="section-label mb-4">{t.label}</div>
          <h2 className="section-title mb-4">{t.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-7 left-14 right-14 h-px bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30" />
          
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center font-heading text-xl font-extrabold text-primary mb-5 relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {i + 1}
              </div>
              <h3 className="font-heading text-base font-bold text-heading mb-2">{step.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
