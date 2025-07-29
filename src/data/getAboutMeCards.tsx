import type { AboutCardProps } from "../components/AboutSection/AboutCard";
import { CodeIcon } from "../assets/Icon/CodeIcon";
import { EducationIcon } from "../assets/Icon/EducationIcon";
import { UserCircleIcon } from "../assets/Icon/UserCircleIcon";
import type { TFunction } from "i18next";

export const getAboutMeCards = (t: TFunction): AboutCardProps[] => [
  {
    icon: <CodeIcon className="h-6 w-6 text-primary" />,
    title: t("cards.0.title"),
    description: (
      <>
        {t("cards.0.description")}
      </>
    ),
  },
  {
    icon: <UserCircleIcon className="h-6 w-6 text-primary" />,
    title: t("cards.1.title"),
    description: (
      <>
        {t("cards.1.description")}
      </>
    ),
  },
  {
    icon: <EducationIcon className="h-6 w-6 text-primary" />,
    title: t("cards.2.title"),
    description: (
      <>
        {t("cards.2.description")}
      </>
    ),
  },
].map((card, i) => ({ ...card, delay: i * 0.2 }));