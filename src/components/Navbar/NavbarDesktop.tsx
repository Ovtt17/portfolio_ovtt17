import type { FC } from "react";
import { motion } from "framer-motion";
import { navItems } from "../../constants/navItems";
import { cn } from "../../lib/utils";

interface NavbarDesktopProps {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  activeIndex?: number | null;
}

const NavbarDesktop: FC<NavbarDesktopProps> = ({ hoveredIndex, setHoveredIndex, activeIndex }) => {

  return (
    <motion.div
      className="relative hidden lg:flex flex-1 justify-center items-center gap-4"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {navItems.map((item, index) => {
        const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
        const isActive = activeIndex === index;
        return (
          <div key={index} className="relative flex flex-col items-center">
            <a
              href={item.href}
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
            </a>
            {/* Animated underline: visible on hover or active */}
            <motion.div
              layoutId="navbar-underline"
              className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
              style={{ width: (hoveredIndex === index || isActive) ? '100%' : '0%' }}
              animate={{ width: (hoveredIndex === index || isActive) ? '100%' : '0%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          </div>
        );
      })}
    </motion.div>
  );
}



export default NavbarDesktop;
