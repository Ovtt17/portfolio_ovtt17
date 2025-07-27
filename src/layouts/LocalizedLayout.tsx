import {
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import { SectionProvider } from "@/context/SectionContext";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProjectDetail from "@/pages/ProjectDetail";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LocalizedLayout() {
  const { lang } = useParams(); // "en" or "es"
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // If lang is invalid, redirect or show NotFound
  const supportedLangs = ["en", "es"];
  if (!supportedLangs.includes(lang || "")) {
    return <NotFound />;
  }

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Only scroll to top if there is no hash
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }, [pathname]);

    return null;
  }


  return (
    <SectionProvider>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SectionProvider>
  );
}