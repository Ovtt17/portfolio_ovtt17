import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useScrollEffects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const isSmallScreen = window.innerWidth <= 768; // Define small screen breakpoint

  const opacity = useTransform(
    scrollYProgress,
    isSmallScreen ? [0.5, 1] : [0, 0.7],
    [1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    isSmallScreen ? [0.5, 1] : [0, 0.7],
    [0, -50]
  );

  return { sectionRef, opacity, y };
};

export default useScrollEffects;
