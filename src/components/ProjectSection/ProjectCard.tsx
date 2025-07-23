import { ExternalLink } from "lucide-react";
import GitHubIcon from "../Icon/GitHubIcon";
import type { Project } from '../../types/Project';
import type { FC } from "react";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => (
  <div className="group gradient-border rounded-lg overflow-hidden shadow-xs">
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="px-6 py-4">

      <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink className="w-10 h-10" />
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <GitHubIcon className="w-10 h-10" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
