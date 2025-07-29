import type { FC } from 'react';
import { motion } from 'framer-motion';
import useAnimatedInView from '@/hooks/useAnimatedInView';

interface ExperienceCardProps {
  title: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  position,
  url,
  startDate,
  endDate,
  description,
}) => {
  const { ref, controls } = useAnimatedInView({
    delay: 0.2,
    amount: 0.3,
    once: false
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="relative gradient-border rounded-xl p-2 sm:p-7 shadow-xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
        <div>
          <h3 className="text-white text-lg sm:text-xl text-left font-semibold tracking-wide leading-snug">
            {title}
          </h3>
          <h4 className="text-white/80 text-base sm:text-lg text-left tracking-wide leading-snug">
            {position}
          </h4>
        </div>
        <time className="text-xs sm:text-sm text-gray-500 font-mono mt-1 sm:mt-0">
          {endDate ? `${startDate} - ${endDate}` : startDate}
        </time>
      </div>

      {/* Description */}
      <ul className="list-disc list-outside experience-description text-sm sm:text-base">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Optional Link */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm font-medium underline underline-offset-4"
        >
          Visit site
        </a>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
