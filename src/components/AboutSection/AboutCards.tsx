import { useTranslation } from "react-i18next";
import { getAboutMeCards } from "@/data/getAboutMeCards";
import AboutCard from "./AboutCard";

const AboutCards = () => {
  const { t } = useTranslation("about");
  const aboutMeCards = getAboutMeCards(t);

  return (
    <div className="grid grid-cols-1 gap-6">
      {aboutMeCards.map((card, i) => (
        <AboutCard key={i} {...card} />
      ))}
    </div>
  );
};

export default AboutCards;
