import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarBackground from "../StarBackground";
import HeroHeader from "./HeroHeader";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "../ScrollIndicator";
import profileImg from "/images/about-me/profile-img.webp";

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
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <picture>
            <source srcSet={profileImg} type="image/webp" />
            <img
              src={profileImg}
              alt="Profile"
              width="128"
              height="128"
              loading="lazy"
              className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-primary shadow-md shrink-0"
            />
          </picture>
          <div>
            <HeroHeader />
            <HeroDescription />
            <HeroButtons />
          </div>
        </div>
      </motion.div>
      <ScrollIndicator nextSectionName="about" />
    </motion.section>
  );
};

export default HeroSection;