export interface Project {
  id: number;
  title: string;
  slug: string;
  role: string;
  description: string;
  descriptionExtend?: string;
  image: string;
  videoDemo?: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}