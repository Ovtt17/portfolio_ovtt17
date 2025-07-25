const AboutIntro = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold">
      <span className="gradient-text opacity-0 animate-fade-in-delay-2">Back-End</span>{" "}
      <span className="opacity-0 animate-fade-in-delay-3">Web Developer</span>
    </h3>

    <p className="text-muted-foreground">
      I'm currently pursuing a  degree in <span className="text-primary">Systems Engineering</span>, which complements my work as a web developer with a strong focus on back-end development, primarily using{" "}
      <span className="text-primary">Java</span> and the{" "}
      <span className="text-primary">Spring Boot</span> ecosystem. I enjoy building scalable APIs, integrating authentication systems, and working on high-performance services.
    </p>

    <p className="text-muted-foreground">
      While my main strength lies in back-end engineering, I also have solid experience building modern user interfaces using{" "}
      <span className="text-primary">React</span> and{" "}
      <span className="text-primary">TypeScript</span>, making me capable of delivering full-stack solutions when needed.
    </p>

    <div className="flex flex-row gap-4 pt-4 justify-center">
      <a href="#contact" className="cosmic-button">
        Download CV
      </a>
    </div>
  </div>
);

export default AboutIntro;
