import { useSectionContext } from "@/context/SectionContext";
import { ArrowDown } from "lucide-react";
import type { FC } from "react";

interface ScrollIndicatorProps {
  nextSectionName: string;
}

const ScrollIndicator: FC<ScrollIndicatorProps> = ({ nextSectionName }) => {
  const { scrollToSection } = useSectionContext();

  return (
    <div
      onClick={() => scrollToSection(nextSectionName)}
      className="absolute px-10 bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
    >
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  );
};

export default ScrollIndicator;
