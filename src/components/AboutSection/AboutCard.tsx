import { type FC } from "react";
import { motion } from "framer-motion";
import useAnimatedInView from "@/hooks/useAnimatedInView";

export interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay: number;
}

const AboutCard: FC<AboutCardProps> = ({ icon, title, description, delay }) => {
  const { ref, controls } = useAnimatedInView({
    delay,
    amount: 0.3,
    once: false
  });

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
          <h4 className="gradient-text font-semibold text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;