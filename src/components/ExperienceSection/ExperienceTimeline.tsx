import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceCard from './ExperienceCard';
import type { Experience } from '@/types/Experience';

const ExperienceTimeline = () => {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const { t } = useTranslation('experience');

  // Esto es clave: cargamos la lista desde el archivo de traducción
  const experiences = t('experiences', { returnObjects: true }) as Experience[];

  useEffect(() => {
    if (!itemsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dot = entry.target.querySelector('.dot');
          if (dot) {
            dot.classList.toggle('active-dot', entry.isIntersecting);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <ol className="timeline">
      {experiences.map((exp: Experience, idx: number) => (
        <li
          key={idx}
          ref={(el) => { itemsRef.current[idx] = el; }}
          className="experience-item"
        >
          <div className="dot" />
          <ExperienceCard {...exp} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;