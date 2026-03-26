import { motion } from "framer-motion";

const T = {
  ru: {
    tag: "AI-архитектор · 8 проектов · 4 страны",
    h1: ["Ваш бизнес тратит часы", "на то, что ИИ делает"],
    h1em: "за минуты.",
    sub: 'Я провожу аудит ваших процессов, нахожу где именно теряются время и деньги — и внедряю ИИ точно в нужном месте. Меньше рутины. Меньше ошибок. Больше прибыли.',
    cta: "Получить бесплатный AI-аудит",
    cases: "Смотреть кейсы",
  },
  uz: {
    tag: "AI arxitektor · 8 loyiha · 4 mamlakat",
    h1: ["Biznesingiz soatlar sarflaydi", "AI bir necha daqiqada"],
    h1em: "bajaradigan ishga.",
    sub: "Jarayonlaringizni tahlil qilaman, aynan qayerda vaqt va pul yo'qolayotganini topaman — va AI'ni aynan kerakli joyga joriy etaman.",
    cta: "Bepul AI auditga yozilish",
    cases: "Loyihalarni ko'rish",
  },
};

interface Props {
  lang: "ru" | "uz";
}

const HeroSection = ({ lang }: Props) => {
  const t = T[lang];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern">
      {/* Glow */}
      <div className="absolute top-[10%] right-[-80px] w-[600px] h-[600px] rounded-full animate-float pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(217 91% 55% / 0.08) 0%, transparent 65%)" }}
      />
      <div className="absolute bottom-[20%] left-[-100px] w-[400px] h-[400px] rounded-full animate-float pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(195 100% 70% / 0.06) 0%, transparent 65%)", animationDelay: "3s" }}
      />

      <div className="section-container pt-28 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-9 w-fit"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          {t.tag}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-7"
        >
          {t.h1[0]}<br />{t.h1[1]}<br />
          <span className="gradient-text">{t.h1em}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-11 font-light"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="flex gap-4 flex-wrap items-center"
        >
          <a href="#cta" className="btn-hero">
            {t.cta} <span>→</span>
          </a>
          <a href="#cases" className="btn-outline">
            {t.cases}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
