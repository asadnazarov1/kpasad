import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import RecogniseSection from "@/components/RecogniseSection";
import ResultsSection from "@/components/ResultsSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [lang, setLang] = useState<"ru" | "uz">("ru");

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} onLangChange={setLang} />
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <RecogniseSection lang={lang} />
      <ResultsSection lang={lang} />
      <WhatIDoSection lang={lang} />
      <ProcessSection lang={lang} />
      <CasesSection lang={lang} />
      <CTASection lang={lang} />
      <FooterSection lang={lang} />
    </div>
  );
};

export default Index;
