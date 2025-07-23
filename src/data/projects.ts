import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "/images/project1.jpg",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "TypeScript", "GraphQL"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "/images/project3.jpg",
    tags: ["Vue.js", "JavaScript", "CSS"],
  }
]