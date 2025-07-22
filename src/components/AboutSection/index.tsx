import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";
import AboutHeader from "./AboutHeader";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background-secondary py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <AboutHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutIntro />
          <AboutCards />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;