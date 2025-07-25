import React, { createContext, useContext, useEffect, useState } from "react";
import { navItems } from "../constants/navItems";
import { useLocation, useNavigate } from "react-router-dom";

interface SectionContextProps {
  activeIndex: number | null;
  scrollToSection: (sectionHref: string) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace("/#", "");
        return document.getElementById(id);
      });
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = null;
      sections.forEach((section, idx) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = idx;
          }
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionHref: string) => {
    const sectionId = sectionHref.replace("/#", "");
    const el = document.getElementById(sectionId);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      window.history.pushState(null, "", `/#${sectionId}`);
      return;
    }

    if (el) {
      window.history.pushState(null, "", `/#${sectionId}`);
      el.scrollIntoView({ behavior: "smooth" });

      const index = navItems.findIndex(item => item.href === sectionHref);
      setActiveIndex(index !== -1 ? index : null);
    }
  };

  return (
    <SectionContext.Provider value={{ activeIndex, scrollToSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
