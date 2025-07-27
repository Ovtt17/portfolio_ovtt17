import { useTranslation } from "react-i18next";

const AboutHeader = () => {
  const { t } = useTranslation("about");

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="opacity-0 animate-fade-in">{t("header.title1")}</span>{" "}
      <span className="gradient-text opacity-0 animate-fade-in-delay-1">{t("header.title2")}</span>
    </h2>
  );
};

export default AboutHeader;
