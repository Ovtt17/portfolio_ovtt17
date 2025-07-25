import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import Navbar from "../components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

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
        <TechnologiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;