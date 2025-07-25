export interface Project {
  id: number;
  title: string;
  slug: string;
  role: string;
  description: string;
  descriptionExtend?: string;
  image: string;
  videoDemo?: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}