import { projects } from "@/data/projects";
import ProjectPageLayout from "@/layouts/ProjectPageLayout";
import type { Project } from "@/types/Project";
import type { FC } from "react";

const WhatsAppClone: FC = () => {
  const whatsappProject = projects.find(p => p.slug === 'whatsapp-clone') as Project;

  return (
    <>
      <ProjectPageLayout project={whatsappProject} />
    </>
  );
}

export default WhatsAppClone;