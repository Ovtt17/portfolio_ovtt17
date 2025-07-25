import type { AboutCardProps } from "../components/AboutSection/AboutCard";
import { CodeIcon } from "../assets/Icon/CodeIcon";
import { EducationIcon } from "../assets/Icon/EducationIcon";
import { UserCircleIcon } from "../assets/Icon/UserCircleIcon";

const rawCards = [
  {
    icon: <CodeIcon className="h-6 w-6 text-primary" />,
    title: "Full-Stack Development",
    description: (
      <>
        I build web applications using{" "}
        <span className="text-primary">Spring Boot</span> and{" "}
        <span className="text-primary">React</span> with{" "}
        <span className="text-primary">TypeScript</span>, covering both back-end and front-end needs.
      </>
    ),
  },
  {
    icon: <UserCircleIcon className="h-6 w-6 text-primary" />,
    title: "Back-End Specialist",
    description: (
      <>
        Focused on scalable APIs, clean architecture, and secure authentication using{" "}
        <span className="text-primary">Java</span> and{" "}
        <span className="text-primary">Spring Boot</span>.
      </>
    ),
  },
  {
    icon: <EducationIcon className="h-6 w-6 text-primary" />,
    title: "Continuous Growth",
    description: (
      <>
        Passionate about writing clean code, learning best practices, and staying up-to-date with the{" "}
        <span className="text-primary">Java</span> ecosystem.
      </>
    ),
  },
];

export const aboutMeCards: AboutCardProps[] = rawCards.map((card, i) => ({
  ...card,
  delay: i * 0.2,
}));