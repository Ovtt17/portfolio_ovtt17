import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
    <ArrowDown className="h-5 w-5 text-primary" />
  </div>
);

export default ScrollIndicator;
