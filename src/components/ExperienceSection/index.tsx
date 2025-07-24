import type { FC } from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceHeader from './ExperienceHeader';

const ExperienceSection: FC = () => {
  return (
    <section
      id="experience"
      className="bg-background-secondary min-h-screen py-24 px-1 relative"
    >
      <div className="container max-w-5xl">
        <ExperienceHeader />
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default ExperienceSection;