import ProjectsHeader from "./ProjectsHeader";
import ProjectList from "./ProjectList";
import GitHubStats from "./GitHubStats";


const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-background-secondary min-h-screen py-24 px-4 relative"
    >
      <div className="container max-w-5xl">
        <ProjectsHeader />
        <ProjectList />
        <GitHubStats />
      </div>
    </section>
  );
};

export default ProjectSection;