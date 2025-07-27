import { useTranslation } from "react-i18next";

const AboutIntro = () => {
  const { t } = useTranslation("about");

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        <span className="gradient-text opacity-0 animate-fade-in-delay-2">{t("intro.title.part1")}</span>{" "}
        <span className="opacity-0 animate-fade-in-delay-3">{t("intro.title.part2")}</span>
      </h3>

      <p className="text-muted-foreground">
        {t("intro.description1.part1")} <span className="text-primary">{t("intro.description1.highlight1")}</span>, {t("intro.description1.part2")} <span className="text-primary">{t("intro.description1.highlight2")}</span> {t("intro.description1.part3")} <span className="text-primary">{t("intro.description1.highlight3")}</span> {t("intro.description1.part4")}
      </p>

      <p className="text-muted-foreground">
        {t("intro.description2.part1")} <span className="text-primary">{t("intro.description2.highlight1")}</span> {t("intro.description2.part2")} <span className="text-primary">{t("intro.description2.highlight2")}</span>, {t("intro.description2.part3")}
      </p>

      <div className="flex flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button">
          {t("intro.cta.downloadCV")}
        </a>
      </div>
    </div>
  );
};

export default AboutIntro;
