import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const ProjectHeader = () => {
  const { t, i18n } = useTranslation("project");
  const currentLanguage = i18n.language;

  return (
    <header>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span
          className={cn("opacity-0 animate-fade-in", {
            "gradient-text": currentLanguage === "es",
          })}
        >
          {t("header.title1")}
        </span>{" "}
        <span
          className={cn("opacity-0 animate-fade-in-delay-1", {
            "gradient-text": currentLanguage === "en",
          })}
        >
          {t("header.title2")}
        </span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        {t("header.description")}
      </p>
    </header>
  );
};

export default ProjectHeader;
