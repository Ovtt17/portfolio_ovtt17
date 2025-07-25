import { projects } from '@/data/projects';
import ProjectPageLayout from '@/layouts/ProjectPageLayout';
import type { Project } from '@/types/Project';
import type { FC } from 'react';

const SurveyApp: FC = () => {
  const surveyProject = projects.find(p => p.slug === 'survey-app') as Project;

  return (
    <>
      <ProjectPageLayout project={surveyProject} />
    </>
  );
}

export default SurveyApp;