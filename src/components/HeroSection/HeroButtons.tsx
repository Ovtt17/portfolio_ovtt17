import { GitHubIcon } from "@/assets/Icon/GitHubIcon";
import { LinkedInIcon } from "@/assets/Icon/LinkedInIcon";
import { useTranslation } from "react-i18next";

const HeroButtons = () => {
  const { t } = useTranslation("hero");

  return (
    <div className="pt-1 flex items-center opacity-0 animate-fade-in-delay-4">
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="cosmic-button px-4 py-2 text-sm sm:text-base text-center"
          >
            {t("getInTouch")}
          </a>

          <a
            href="#hero"
            className="px-4 py-2 text-sm sm:text-base text-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-not-allowed"
          >
            {t("downloadCV")}
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ovtt17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            <GitHubIcon className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com/in/ovtt17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            <LinkedInIcon className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;