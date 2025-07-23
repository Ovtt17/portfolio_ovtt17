import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import Navbar from "../components/Navbar";
import ProjectSection from "@/components/ProjectSection";

const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;