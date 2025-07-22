import type { FC } from 'react';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative gradient-border rounded-xl p-2 sm:p-7 shadow-xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
        <div>
          <h3 className="text-white text-xl text-left font-semibold tracking-wide leading-snug">
            {title}
          </h3>
          <h4 className="text-white/80 text-lg text-left tracking-wide leading-snug">
            {position}
          </h4>
        </div>
        <time className="text-sm text-gray-500 font-mono mt-1 sm:mt-0">
          {endDate ? `${startDate} - ${endDate}` : startDate}
        </time>
      </div>

      {/* Description */}
      <ul className="list-disc list-outside experience-description">
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
          className="text-pink-400 hover:text-cyan-400 transition-colors text-sm font-medium underline underline-offset-4"
        >
          Visit site
        </a>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
