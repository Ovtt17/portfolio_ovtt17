import { useTranslation } from "react-i18next";

const TechnologiesHeader = () => {
  const { t } = useTranslation("technologies");

  return (
    <header>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="opacity-0 animate-fade-in-delay-1">{t("title")}</span>
      </h2>
    </header>
  );
};

export default TechnologiesHeader;
