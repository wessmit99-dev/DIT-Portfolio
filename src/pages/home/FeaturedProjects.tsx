import { Link } from 'react-router-dom';
import SectionLabel from '@/components/ui/SectionLabel';
import type { FeaturedProjectsData } from '@/types';

export interface FeaturedProjectsProps {
  readonly data: FeaturedProjectsData;
}

export default function FeaturedProjects({ data }: FeaturedProjectsProps) {
  return (
    <section
      className="py-32 px-12"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1920px' }}>
        <SectionLabel label={data.sectionLabel} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {data.projects.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: '16/9', textDecoration: 'none' }}
            >
              {/* Image or placeholder */}
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-colors duration-300"
                  style={{ backgroundColor: '#242424' }}
                />
              )}

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%)' }}
              />

              {/* Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ color: '#00e5ff', fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.category} — {project.role}
                </span>
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
                >
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
