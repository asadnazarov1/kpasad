import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CASES, type CaseId } from "../data/cases";
import { X } from "lucide-react";

const labels = {
  ru: { before: "ПРЕДЫДУЩЕЕ СОСТОЯНИЕ", what: "ЧТО МЫ СДЕЛАЛИ", result: "РЕЗУЛЬТАТ" },
  uz: { before: "OLDINGI HOLAT", what: "BIZ NIMA QILDIK", result: "NATIJA" },
};

interface Props {
  caseId: CaseId;
  lang: "ru" | "uz";
  onClose: () => void;
}

const formatText = (s: string) =>
  s.replace(/\*\*(.*?)\*\*/g, '<strong class="text-heading font-semibold">$1</strong>')
    .split("\n\n")
    .map((p, i) => `<p class="mb-3 last:mb-0">${p}</p>`)
    .join("");

const CaseModal = ({ caseId, lang, onClose }: Props) => {
  const c = CASES[caseId];
  const l = labels[lang];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[1000] flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ y: 24, scale: 0.97, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 24, scale: 0.97, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-card border border-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="p-8 pb-6 border-b border-border sticky top-0 bg-card z-10 flex items-start justify-between gap-5 rounded-t-3xl">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{c.flag}</span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">{c.country[lang]}</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-heading mb-2">{c.name}</h3>
              <span className="inline-block bg-primary/5 border border-primary/15 text-primary text-xs font-medium px-3 py-1 rounded-full">{c.industry[lang]}</span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-heading hover:border-primary/30 transition-colors cursor-pointer flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="mb-8">
              <div className="section-label mb-3">{l.before}</div>
              <div className="text-sm text-foreground leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: formatText(c.problem[lang]) }} />
            </div>

            <div className="h-px bg-border my-6" />

            <div className="mb-8">
              <div className="section-label mb-3">{l.what}</div>
              <div className="text-sm text-foreground leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: formatText(c.solution[lang]) }} />
            </div>

            <div className="h-px bg-border my-6" />

            <div>
              <div className="section-label mb-3">{l.result}</div>
              <ul className="space-y-0">
                {c.results[lang].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-border last:border-b-0 text-sm text-foreground leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseModal;
