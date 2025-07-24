import { motion } from "framer-motion";
import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";
import AboutHeader from "./AboutHeader";
import ScrollIndicator from "../ScrollIndicator";
import useScrollEffects from "../../hooks/useScrollEffects";

const AboutSection = () => {
  const { sectionRef, opacity, y } = useScrollEffects();

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="bg-background-secondary min-h-screen pt-24 pb-25 px-4 relative"
    >
      <motion.div
        style={{ opacity, y }}
        className="container max-w-5xl mx-auto"
      >
        <AboutHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutIntro />
          <AboutCards />
        </div>
      </motion.div>
      <ScrollIndicator nextSectionName="experience" />
    </motion.section>
  );
};

export default AboutSection;