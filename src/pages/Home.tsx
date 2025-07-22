import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;