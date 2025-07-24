import { useState, useEffect } from "react";
import { navItems } from "../../constants/navItems";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarToggle from "./NavbarToggle";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '');
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
    </nav>

  );
};

export default Navbar;