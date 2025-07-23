import TechnologiesCarousel from "./TechnologiesCarousel";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesIntro from "./TechnologiesIntro";

const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="bg-background-secondary py-24 px-4 relative"
    >
      <div className="container max-w-5xl flex flex-col items-center">
        <TechnologiesHeader />
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <TechnologiesIntro />
          <TechnologiesCarousel />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;