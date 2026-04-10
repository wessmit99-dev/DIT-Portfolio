import ProjectCard from './ProjectCard';
import type { ProjectDetail } from '@/types';

export interface ProjectGridProps {
  readonly projects: readonly ProjectDetail[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="px-12 py-24 text-center" style={{ color: '#666666' }}>
        <p className="text-sm uppercase tracking-widest">No projects in this category.</p>
      </div>
    );
  }

  return (
    <div
      className="px-12 pb-24 mx-auto"
      style={{ maxWidth: '1920px', backgroundColor: '#131313' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
