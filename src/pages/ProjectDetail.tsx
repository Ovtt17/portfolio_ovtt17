import type { FC } from "react";
import { GitHubIcon } from "@/assets/Icon/GitHubIcon";
import type { Project } from "@/types/Project";
import Navbar from "@/components/Navbar";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useTranslation } from "react-i18next";

const ProjectDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // project.json
  const { t } = useTranslation("project");

  // object with all projects inside project.json
  const projects = t("projects", { returnObjects: true }) as Project[];

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
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold break-words uppercase gradient-text max-w-full"
            >
              {title}
            </h1>
            <p className="text-white font-light mt-2">{description}</p>
          </div>

          {/* Image */}
          {image && (
            <figure className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <picture>
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={`${title} cover image`}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </picture>
            </figure>
          )}

          {/* Info sections */}
          <section className="flex flex-col gap-8 px-2">
            {/* Description extended */}
            {descriptionExtend && (
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold capitalize gradient-text mb-4"
                >
                  {t("details.description")}
                </h2>
                <p className="text-white font-light mb-6">{descriptionExtend}</p>
              </div>
            )}

            {videoDemo && (
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold capitalize gradient-text mb-4"
                >
                  {t("details.videoDemo")}
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
              <div className="flex flex-col gap-8">
                <h2
                  className="text-2xl md:text-3xl font-bold capitalize gradient-text mb-4"
                >
                  {t("details.technologies")}
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
                  aria-label={t("details.viewCodeAreaLabel")}
                  title={t("details.viewCodeAreaLabel")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-background hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300 group"
                >
                  <GitHubIcon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">
                    {t("details.viewCode")}
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