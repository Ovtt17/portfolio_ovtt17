import { ExpandIcon, ExternalLink, XIcon } from "lucide-react";
import GitHubIcon from "../../assets/Icon/GitHubIcon";
import type { Project } from '../../types/Project';
import type { FC } from "react";
import { useState } from 'react';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="group gradient-border rounded-lg overflow-hidden shadow-xs">
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <button
              className="z-50 p-2 rounded-full bg-gray-800/80 text-gray-200 shadow-lg hover:bg-gray-700 transition-colors w-7 h-7 flex items-center justify-center cursor-pointer"
              onClick={handleOpen}
              aria-label="Expandir"
              type="button"
            >
              <ExpandIcon />
            </button>
          </div>
          <div
            onClick={handleOpen}
            className="aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
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

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-50 p-2 rounded-full bg-gray-800/80 text-gray-200 shadow-lg hover:bg-gray-700 transition-colors w-7 h-7 flex items-center justify-center cursor-pointer"
              onClick={handleClose}
              aria-label="Cerrar"
              type="button"
            >
              <XIcon />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="min-w-[200px] min-h-[200px] max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg border-4 border-white dark:border-gray-800 object-contain animate-fade-in"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
