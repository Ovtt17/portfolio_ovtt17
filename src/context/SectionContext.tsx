import React, { createContext, useContext, useEffect, useState } from "react";
import { navItems } from "../constants/navItems";

interface SectionContextProps {
  activeIndex: number | null;
  scrollToSection: (sectionName: string) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace("#", "");
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

  const scrollToSection = (nextSectionName: string) => {
    const section = document.getElementById(nextSectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      const index = navItems.findIndex(item => item.href === `#${nextSectionName}`);
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
