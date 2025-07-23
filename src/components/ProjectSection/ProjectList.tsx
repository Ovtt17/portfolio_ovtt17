import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, key) => (
      <ProjectCard key={key} project={project} />
    ))}
  </div>
);

export default ProjectList;
