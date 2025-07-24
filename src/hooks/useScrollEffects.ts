import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useScrollEffects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return { sectionRef, opacity, y };
};

export default useScrollEffects;
