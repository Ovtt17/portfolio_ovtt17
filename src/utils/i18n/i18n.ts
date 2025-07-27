import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import enNavbar from "@/utils/locales/en/navbar/navbar.json";
import esNavbar from "@/utils/locales/es/navbar/navbar.json";

const urlLanguage = new URL(window.location.href).searchParams.get("lang");
const savedLanguage = urlLanguage || localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
      },
      es: {
        navbar: esNavbar,
      },
    },
    lng: savedLanguage, // Usa el idioma de la URL, localStorage o "en" por defecto
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Guarda el idioma en localStorage cada vez que se cambie
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;