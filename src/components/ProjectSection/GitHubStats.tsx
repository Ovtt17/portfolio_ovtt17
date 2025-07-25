import GitHubCalendar from "react-github-calendar";
import { GitHubIcon } from "../../assets/Icon/GitHubIcon";

const GitHubStats = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-6 pb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          <span className="gradient-text opacity-0 animate-fade-in">GitHub</span>{" "}
          <span className="opacity-0 animate-fade-in-delay-1">Calendar</span>
        </h2>
        <div className="w-full max-w-5xl flex justify-center items-center">
          <GitHubCalendar username="Ovtt17" />
        </div>
      </div>
      <div className="text-center mt-4">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          target="_blank"
          href="https://github.com/Ovtt17"
        >
          Explore More on GitHub
          <GitHubIcon color="currentColor" className="w-8 h-8 text-white" />        </a>
      </div>
    </>
  );
};

export default GitHubStats;