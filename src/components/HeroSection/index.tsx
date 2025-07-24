import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarBackground from "../StarBackground";
import HeroHeader from "./HeroHeader";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "../ScrollIndicator";

const HeroSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-start justify-center px-4"
    >
      <StarBackground />
      <motion.div
        style={{ opacity, y, scale }}
        className="container max-w-5xl mx-auto text-left z-10 space-y-4"
      >
        <HeroHeader />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </motion.div>
      <ScrollIndicator nextSectionName="about" />
    </motion.section>
  );
};

export default HeroSection;