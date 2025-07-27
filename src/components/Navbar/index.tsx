import { useState } from "react";
import { useSectionContext } from "../../context/SectionContext";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarToggle from "./NavbarToggle";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const { activeIndex } = useSectionContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 z-40 w-full px-2">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center">
        <div className="max-w-6xl px-6 py-2 bg-background/40 backdrop-blur-md shadow-lg rounded-lg flex justify-between items-center">
          <NavbarDesktop
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            activeIndex={activeIndex}
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-start">
        <div className="w-full px-2 py-2 flex justify-between items-center">
          <NavbarToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <NavbarMobile
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        activeIndex={activeIndex}
      />

      {/* Language Switch */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
        <LanguageSwitch />
      </div>
    </nav>
  );
};

export default Navbar;