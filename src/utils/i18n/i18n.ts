import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enNavbar from "@/utils/locales/en/navbar/navbar.json";
import esNavbar from "@/utils/locales/es/navbar/navbar.json";
import enHero from "@/utils/locales/en/hero/hero.json";
import esHero from "@/utils/locales/es/hero/hero.json";
import enAbout from "@/utils/locales/en/about/about.json";
import esAbout from "@/utils/locales/es/about/about.json";
import enExperience from "@/utils/locales/en/experience/experience.json";
import esExperience from "@/utils/locales/es/experience/experience.json";
import enProject from "@/utils/locales/en/project/project.json";
import esProject from "@/utils/locales/es/project/project.json";
import enTechnologies from "@/utils/locales/en/technologies/technologies.json";
import esTechnologies from "@/utils/locales/es/technologies/technologies.json";
import enContact from "@/utils/locales/en/contact/contact.json";
import esContact from "@/utils/locales/es/contact/contact.json";


const pathLangMatch = window.location.pathname.match(/^\/(en|es)(\/|$)/);
const detectedLanguage = pathLangMatch ? pathLangMatch[1] : "en";

const savedLanguage = localStorage.getItem("language") || detectedLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        hero: enHero,
        about: enAbout,
        experience: enExperience,
        project: enProject,
        technologies: enTechnologies,
        contact: enContact,
      },
      es: {
        navbar: esNavbar,
        hero: esHero,
        about: esAbout,
        experience: esExperience,
        project: esProject,
        technologies: esTechnologies,
        contact: esContact,
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