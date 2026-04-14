import { siteData } from '@/data/mockData';
import ProjectsHero from './ProjectsHero';
import ProjectList from './ProjectList';

export default function ProjectsPage() {
  const { heroHeadline, heroSubheadline, projects } = siteData.projects;

  return (
    <>
      <ProjectsHero headline={heroHeadline} subheadline={heroSubheadline} />
      <ProjectList projects={projects} />
    </>
  );
}
