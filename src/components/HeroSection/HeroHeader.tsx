import { useTranslation } from "react-i18next";

const HeroHeader = () => {
  const { t } = useTranslation("hero");

  return (
    <header>
      <p className="text-lg md:text-xl font-medium text-muted-foreground mt-2">
        <span className="opacity-0 animate-fade-in">{t("greeting")}</span>
        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ovett</span>
        <span className="ml-2 opacity-0 animate-fade-in-delay-2">Mora</span>
        <span role="img" aria-label="waving hand" className="animate-wave">👋</span>
      </p>
      <h1 className="flex flex-col sm:flex-row sm:gap-2 text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-left">
        <span className="gradient-text opacity-0 animate-fade-in-delay-1">{t("role.part1")}</span>
        <span className="opacity-0 animate-fade-in-delay-2">{t("role.part2")}</span>
      </h1>
    </header>
  );
};

export default HeroHeader;
