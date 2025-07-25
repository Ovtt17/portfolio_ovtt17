import type { FC } from "react";
import { GitHubIcon } from "@/assets/Icon/GitHubIcon";
import type { Project } from "@/types/Project";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const ProjectDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find(p => p.slug === slug) as Project;
  document.title = project ? `${project.title} - Ovett Mora` : "Project Not Found";

  if (!project) {
    return <NotFound />;
  }

  const {
    title,
    description,
    descriptionExtend,
    role,
    image,
    videoDemo,
    technologies = [],
    codeUrl,
  } = project;

  return (
    <main className="bg-background-secondary min-h-screen text-foreground overflow-x-hidden px-4">
      <Navbar />
      <section className="w-full flex flex-col items-center pt-[120px] pb-6 z-50">
        <div className="flex flex-col items-start text-start gap-6 mx-4 pb-12 w-full max-w-5xl">
          {/* Header top */}
          <header className="flex justify-between items-center text-white py-2">
            <span className="uppercase tracking-wide text-sm font-semibold">
              {role}
            </span>
          </header>

          {/* Title & description */}
          <div>
            <h1
              id="title"
              className="inline-block text-3xl md:text-4xl font-extrabold uppercase gradient-text whitespace-nowrap overflow-hidden border-r-2 border-white typing-animation"
            >
              {title}
            </h1>
            <p className="text-white font-light mt-2">{description}</p>
          </div>

          {/* Image */}
          {image && (
            <figure className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`${title} cover`}
                className="w-full h-full object-contain rounded-lg"
              />
            </figure>
          )}

          {/* Info sections */}
          <section className="flex flex-col gap-8 px-2">
            {/* Description extended */}
            {descriptionExtend && (
              <div>
                <h2
                  className="inline-block text-2xl md:text-3xl font-bold capitalize gradient-text whitespace-nowrap overflow-hidden mb-4"
                >
                  Description
                </h2>
                <p className="text-white font-light mb-6">{descriptionExtend}</p>
              </div>
            )}

            {videoDemo && (
              <div>
                <h2
                  className="inline-block text-2xl md:text-3xl font-bold capitalize gradient-text whitespace-nowrap overflow-hidden mb-4"
                >
                  Video Demo
                </h2>
                <iframe
                  src={videoDemo}
                  title={`${title} video demo`}
                  className="w-full aspect-[16/9] object-contain rounded-lg shadow-lg mb-6"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Technologies */}
            {technologies.length > 0 && (
              <div>
                <h2
                  className="inline-block text-2xl md:text-3xl font-bold capitalize gradient-text whitespace-nowrap overflow-hidden mb-4"
                >
                  Technologies
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-background-secondary text-foreground/80 transition-all duration-300 hover:bg-primary hover:text-white border border-gray-800 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* GitHub link */}
            {codeUrl && (
              <div className="flex justify-center">
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code on GitHub"
                  title="View code on GitHub"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-background hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300 group"
                >
                  <GitHubIcon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">
                    View Code
                  </span>
                </a>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;