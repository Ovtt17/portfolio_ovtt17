import type { FC } from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceHeader from './ExperienceHeader';
import ScrollIndicator from '../ScrollIndicator';
import useScrollEffects from '../../hooks/useScrollEffects';

const ExperienceSection: FC = () => {
  const { sectionRef, opacity, y } = useScrollEffects();

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      className="bg-background-secondary min-h-screen pt-24 pb-25 relative"
    >
      <motion.div
        style={{ opacity, y }}
        className="container max-w-5xl"
      >
        <ExperienceHeader />
        <ExperienceTimeline />
      </motion.div>
      <ScrollIndicator nextSectionName="projects" />
    </motion.section>
  );
};

export default ExperienceSection;