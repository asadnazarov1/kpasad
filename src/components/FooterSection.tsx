const T = {
  ru: "© 2025 Asad Nazarov — AI-архитектор. Ташкент, Узбекистан.",
  uz: "© 2025 Asad Nazarov — ИИ архитектор. Тошкент, Ўзбекистон.",
};

interface Props { lang: "ru" | "uz"; }

const FooterSection = ({ lang }: Props) => (
  <footer className="border-t border-border py-7 px-5 text-center text-sm text-muted-foreground">
    {T[lang]}
  </footer>
);

export default FooterSection;
