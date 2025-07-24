import { useEffect, useRef } from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experiences';

const ExperienceTimeline = () => {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!itemsRef.current) return;

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const dot = entry.target.querySelector('.dot');
        if (dot) {
          if (entry.isIntersecting) {
            dot.classList.add('active-dot');
          } else {
            dot.classList.remove('active-dot');
          }
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (itemsRef.current) {
        itemsRef.current.forEach((item) => {
          if (item) observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <ol className="timeline">
      {experiences.map((exp, idx) => (
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