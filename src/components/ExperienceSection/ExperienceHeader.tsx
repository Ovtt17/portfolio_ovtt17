import { useTranslation } from "react-i18next";

const ExperienceHeader = () => {
  const { t } = useTranslation('experience');
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="opacity-0 animate-fade-in">{t("header.title")}</span>
    </h2>
  );
};

export default ExperienceHeader;
