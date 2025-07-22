import { aboutMeCards } from "../../constants/aboutMeCards";
import AboutCard from "./AboutCard";

const AboutCards = () => (
  <div className="grid grid-cols-1 gap-6">
    {aboutMeCards.map((card, i) => (
      <AboutCard key={i} {...card} />
    ))}
  </div>
);

export default AboutCards;
