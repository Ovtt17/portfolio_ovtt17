import { useTranslation } from "react-i18next";

const ContactHeader = () => {
  const { t, i18n } = useTranslation("contact");
  const currentLanguage = i18n.language;

  const title2 = currentLanguage === "en" ? t("header.title2") : null;
  const title1Class = currentLanguage === "es" ? "gradient-text" : "";

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className={`opacity-0 animate-fade-in ${title1Class}`}>
        {t("header.title1")}
      </span>{" "}
      {title2 && (
        <span className="gradient-text opacity-0 animate-fade-in-delay-1">
          {title2}
        </span>
      )}
    </h2>
  );
};

export default ContactHeader;