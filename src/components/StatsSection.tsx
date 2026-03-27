import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const T = {
  ru: [
    { num: "8+", label: "Реализованных проектов" },
    { num: "4🌍", label: "США · Великобритания · Молдова · Узбекистан" },
    { num: "80%", label: "Клиентов — международный рынок" },
    { num: "$0", label: "Стоимость первичного аудита" },
  ],
  uz: [
    { num: "8+", label: "Амалга оширилган лойиҳалар" },
    { num: "4🌍", label: "АҚШ · Буюк Британия · Молдова · Ўзбекистон" },
    { num: "80%", label: "Мижозлар — халқаро бозор" },
    { num: "$0", label: "Бошланғич аудит нархи" },
  ],
};

interface Props { lang: "ru" | "uz"; }

const StatsSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="border-t border-b border-border bg-surface">
      <div className="section-container grid grid-cols-2 md:grid-cols-4">
        {T[lang].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="py-8 px-5 border-r border-border last:border-r-0 text-center md:text-left"
          >
            <div className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-heading leading-none mb-1.5">
              {stat.num}
            </div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
