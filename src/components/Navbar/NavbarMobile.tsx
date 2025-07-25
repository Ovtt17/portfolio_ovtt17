import type { FC } from "react";
import { navItems } from "../../constants/navItems";
import { cn } from "../../lib/utils";
import { motion } from 'framer-motion';
import { useSectionContext } from "@/context/SectionContext";

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  activeIndex?: number | null;
}

const NavbarMobile: FC<NavbarMobileProps> = ({ isOpen, onClose, hoveredIndex, setHoveredIndex, activeIndex }) => {
  const { scrollToSection } = useSectionContext();

  const handleScroll = (href: string) => {
    const sectionName = href.replace("/#", "");
    onClose();
    scrollToSection(sectionName);
  }

  return (
    <div
      className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 lg:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col space-y-8 text-xl">
        {navItems.map((item, index) => {
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
          const isActive = activeIndex === index;
          return (
            <div key={index} className="relative flex flex-col items-center">
              <button
                onClick={() => handleScroll(item.href)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full transition duration-300 text-foreground text-base font-medium",
                  isActive ? "text-primary" : "",
                  isDimmed ? "opacity-40" : "opacity-100"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="flex items-center justify-center">{item.icon}</span>
                <span>{item.name}</span>
              </button>
              {/* Animated underline: visible on hover or active */}
              <motion.div
                layoutId="navbar-mobile-underline"
                className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
                style={{ width: (hoveredIndex === index || isActive) ? '100%' : '0%' }}
                animate={{ width: (hoveredIndex === index || isActive) ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarMobile;
