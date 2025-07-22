import { type FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay: number;
}

const AboutCard: FC<AboutCardProps> = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.3,
    once: false,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 30,
        transition: { duration: 0.4 },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="gradient-border p-6 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        <div className="text-left">
          <h4 className="text-primary font-semibold text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;