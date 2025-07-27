import { useTranslation } from "react-i18next";

const TechnologiesIntro = () => {
  const { t } = useTranslation("technologies");

  return (
    <div className="space-y-6 text-center w-full max-w-3xl px-4">
      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
        {t("intro.part1")}
      </p>

      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
        {t("intro.part2")}
      </p>
    </div>
  );
};

export default TechnologiesIntro;