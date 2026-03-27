import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  lang: "ru" | "uz";
  onLangChange: (lang: "ru" | "uz") => void;
}

const Navbar = ({ lang, onLangChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-10 py-4 transition-all duration-300 ${
      scrolled ?
      "bg-card/90 backdrop-blur-xl shadow-sm border-b border-border" :
      "bg-transparent"}`
      }>
      
      <div className="font-heading font-extrabold text-lg tracking-tight text-heading">Асад Назаров.
        <span className="text-primary"></span>
      </div>
      <div className="flex gap-1 bg-muted border border-border rounded-full p-1">
        {(["ru", "uz"] as const).map((l) =>
        <button
          key={l}
          onClick={() => onLangChange(l)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
          lang === l ?
          "bg-primary text-primary-foreground shadow-sm" :
          "text-muted-foreground hover:text-foreground"}`
          }>
          
            {l === "ru" ? "РУ" : "ЎЗ"}
          </button>
        )}
      </div>
    </motion.nav>);

};

export default Navbar;