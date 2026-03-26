import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CaseModal from "./CaseModal";
import { CASES, type CaseId } from "../data/cases";

import enjenLogo from "@/assets/logos/enjen.png";
import avtotestLogo from "@/assets/logos/avtotest.png";
import refindLogo from "@/assets/logos/refind.png";
import easytagLogo from "@/assets/logos/easytag.png";
import sarguLogo from "@/assets/logos/sargu.png";

const logoMap: Record<string, string> = {
  enjen: enjenLogo,
  avtotest: avtotestLogo,
  refind: refindLogo,
  easytag: easytagLogo,
  sargu: sarguLogo,
};

const T = {
  ru: {
    label: "КЕЙСЫ",
    title: "Разные отрасли. Один принцип.",
    sub: "Маркетинг, образование, e-commerce, авто — в каждом бизнесе нашли процессы где ИИ сэкономил время и увеличил доход.",
    more: "Подробнее",
    ipBadge: "Сейчас в работе",
  },
  uz: {
    label: "LOYIHALAR",
    title: "Turli sohalar. Bitta tamoyil.",
    sub: "Marketing, ta'lim, e-commerce, avto — har bir biznesda AI vaqtni tejaydigan jarayonlarni topdik.",
    more: "Batafsil",
    ipBadge: "Hozir ishda",
  },
};

const caseOrder: (CaseId | "inprogress")[] = ["enjen", "avtotest", "refind", "easytag", "sargu", "inprogress"];

interface Props { lang: "ru" | "uz"; }

const CasesSection = ({ lang }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = T[lang];
  const [openCase, setOpenCase] = useState<CaseId | null>(null);

  return (
    <section ref={ref} id="cases" className="py-24 md:py-28">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <div className="section-label mb-4">{t.label}</div>
          <h2 className="section-title mb-4">{t.title}</h2>
          <p className="section-subtitle">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseOrder.map((id, i) => {
            if (id === "inprogress") {
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card p-7 opacity-70"
                >
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3 border" style={{ background: "hsl(var(--warning))", borderColor: "hsl(var(--warning-border))", color: "hsl(var(--warning-foreground))" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "hsl(var(--warning-dot))" }} />
                    {t.ipBadge}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span>🇺🇿</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                      {lang === "ru" ? "Узбекистан" : "O'zbekiston"}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-heading mb-1">
                    {lang === "ru" ? "3 новых проекта" : "3 yangi loyiha"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "ru" ? "Три узбекские компании на стадии внедрения. Детали под NDA." : "Joriy etish bosqichidagi uchta o'zbek kompaniyasi. Tafsilotlar maxfiy."}
                  </p>
                </motion.div>
              );
            }

            const c = CASES[id];
            const logoSrc = logoMap[c.logo];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setOpenCase(id)}
                className="glass-card cursor-pointer group relative overflow-hidden"
              >
                {/* Logo banner with diagonal clip */}
                <div className="relative w-full h-28 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)" }}>
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <img
                      src={logoSrc}
                      alt={c.name}
                      className="h-16 w-auto max-w-[70%] object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/20" />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 p-7 pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{c.flag}</span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">{c.country[lang]}</span>
                    </div>
                    <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                      {t.more} <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-extrabold text-heading mb-1.5">{c.name}</h3>
                  <span className="inline-block bg-primary/5 border border-primary/15 text-primary text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-2.5">{c.industry[lang]}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">{c.shortDesc[lang]}</p>

                  <div className="flex gap-4">
                    {c.metrics.map((m, mi) => (
                      <div key={mi} className="flex items-center gap-2">
                        <div className="text-xs">
                          <div className="font-heading text-sm font-extrabold text-heading">{m.value[lang]}</div>
                          <div className="text-[10px] text-muted-foreground">{m.label[lang]}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                    {c.tags.map((tag, ti) => (
                      <span key={ti} className="bg-muted border border-border rounded-full px-2.5 py-0.5 text-[10px] text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {openCase && (
        <CaseModal caseId={openCase} lang={lang} onClose={() => setOpenCase(null)} />
      )}
    </section>
  );
};

export default CasesSection;
