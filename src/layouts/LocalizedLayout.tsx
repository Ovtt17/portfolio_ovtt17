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

  const isLangInvalid = (lang: string | undefined) => {
    const supportedLangs = ["en", "es"];
    return !supportedLangs.includes(lang || "");
  };

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to top only if the route is not /en or /es
      const supportedLangsRoutes = ["/en", "/es"];
      if (!supportedLangsRoutes.includes(pathname)) {
        window.scrollTo(0, 0);
      }
    }, [pathname]);

    return null;
  }

  if (isLangInvalid(lang)) {
    window.scrollTo(0, 0);
    return <NotFound />;
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