import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/Project";

const ProjectList = () => {
  const { t } = useTranslation("project");
  const projects = t("projects", { returnObjects: true }) as Project[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, key) => (
        <ProjectCard key={key} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
