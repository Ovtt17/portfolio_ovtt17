import { ExpandIcon, ExternalLink, XIcon } from "lucide-react";
import { GitHubIcon } from "@/assets/Icon/GitHubIcon";
import type { Project } from '@/types/Project';
import type { FC } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleCardClick = () => {
    if (!isModalOpen) {
      const lang = i18n.language || "en";
      navigate(`/${lang}/projects/${project.slug}`);
    }
  };

  return (
    <>
      <div
        className="group gradient-border rounded-lg overflow-hidden shadow-xs cursor-pointer flex flex-col justify-between"
        onClick={handleCardClick}
      >
        <div className="relative">
          {/* Expand Button */}
          <div className="absolute top-2 right-2 z-10">
            <button
              className="z-50 p-2 rounded-full bg-gray-800/80 text-gray-200 shadow-lg hover:bg-gray-700 transition-colors w-7 h-7 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              aria-label="Expandir"
              type="button"
            >
              <ExpandIcon />
            </button>
          </div>

          {/* Image Preview */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <picture>
              <source srcSet={project.image} type="image/webp" />
              <img
                src={project.image}
                alt={`Image preview of ${project.title}`}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
              />
            </picture>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 flex-grow">
          <h3 className="mb-1 text-xl font-extrabold uppercase gradient-text">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-background-secondary text-foreground/80 transition-all duration-300 hover:bg-primary hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center space-x-3 px-6 py-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-label={`View demo for ${project.title}`}
            >
              <ExternalLink className="w-10 h-10" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-label={`View code for ${project.title}`}
            >
              <GitHubIcon className="w-10 h-10" />
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
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
              className="absolute top-2 right-2 z-50 p-2 rounded-full bg-gray-800/80 text-gray-200 shadow-lg hover:bg-gray-700 transition-colors w-7 h-7 flex items-center justify-center"
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