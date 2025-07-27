import ProjectHeader from "./ProjectHeader";
import ProjectList from "./ProjectList";
import GitHubStats from "./GitHubStats";
import ScrollIndicator from "../ScrollIndicator";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-background-secondary min-h-screen pt-24 pb-28 px-4 relative"
    >
      <div className="container max-w-5xl">
        <ProjectHeader />
        <ProjectList />
        <GitHubStats />
      </div>
      <ScrollIndicator nextSectionName="technologies" />
    </section>
  );
};

export default ProjectSection;