import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

interface UseAnimatedInViewProps {
  delay?: number;
  amount?: number;
  once?: boolean;
}

const useAnimatedInView = ({ delay = 0, amount = 0.3, once = false }: UseAnimatedInViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount, once });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls, delay]);

  return { ref, controls };
};

export default useAnimatedInView;
