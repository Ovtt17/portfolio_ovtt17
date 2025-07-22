import HeroHeader from "./HeroHeader";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "../ScrollIndicator";
import StarBackground from "../StarBackground";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-center px-4"
    >
      <StarBackground />
      <div className="container max-w-5xl mx-auto text-left z-10 space-y-4">
        <HeroHeader />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
