import { useTranslation } from "react-i18next";

const HeroDescription = () => {
  const { t } = useTranslation("hero");

  return (
    <p className="text-base md:text-lg text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
      {t("description")}
      <span className="text-primary">Java</span>
      <span className="text-primary"> - Spring Boot</span>
      {t("descriptionSuffix")}
    </p>
  );
};

export default HeroDescription;