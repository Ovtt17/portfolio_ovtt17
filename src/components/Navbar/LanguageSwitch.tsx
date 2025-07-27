import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation("navbar");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "es" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);

    // Replace only the language prefix and preserve query + hash (using window.location.hash)
    const newPath = location.pathname.replace(/^\/(en|es)/, `/${newLang}`);
    const fullPath = `${newPath}${location.search}${window.location.hash}`;

    navigate(fullPath, { replace: true });
  };


  const isEN = i18n.language === "en";

  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2">
      <button
        onClick={toggleLanguage}
        aria-label="Toggle language"
        className={cn(
          "text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 select-none backdrop-blur-md bg-white/20 border",
          " hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-1",
          "shadow-md shadow-black/10 border-white/40 cursor-pointer",
          isEN
            ? "bg-blue-600 text-white border-blue-500 hover:bg-blue-700 focus:ring-blue-400"
            : "bg-red-600 text-white border-red-500 hover:bg-red-700 focus:ring-red-400"
        )}
      >
        {isEN ? "EN" : "ES"}
      </button>
    </div>
  );
};

export default LanguageSwitch;