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
        {t("cards.0.description.part1")}{" "}
        <span className="text-primary">{t("cards.0.description.highlight1")}</span>{" "}
        {t("cards.0.description.part2")}{" "}
        <span className="text-primary">{t("cards.0.description.highlight2")}</span>{" "}
        {t("cards.0.description.part3")}{" "}
        <span className="text-primary">{t("cards.0.description.highlight3")}</span>{" "}
        {t("cards.0.description.part4")}
      </>
    ),
  },
  {
    icon: <UserCircleIcon className="h-6 w-6 text-primary" />,
    title: t("cards.1.title"),
    description: (
      <>
        {t("cards.1.description.part1")}{" "}
        <span className="text-primary">{t("cards.1.description.highlight1")}</span>{" "}
        {t("cards.1.description.part2")}{" "}
        <span className="text-primary">{t("cards.1.description.highlight2")}</span>
      </>
    ),
  },
  {
    icon: <EducationIcon className="h-6 w-6 text-primary" />,
    title: t("cards.2.title"),
    description: (
      <>
        {t("cards.2.description.part1")}{" "}
        <span className="text-primary">{t("cards.2.description.highlight1")}</span>{" "}
        {t("cards.2.description.part2")}
      </>
    ),
  },
].map((card, i) => ({ ...card, delay: i * 0.2 }));