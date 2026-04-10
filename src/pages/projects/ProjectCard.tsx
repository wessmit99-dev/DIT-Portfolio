import type { ProjectDetail } from '@/types';

export interface ProjectCardProps {
  readonly project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      className="group block overflow-hidden"
      style={{ textDecoration: 'none', backgroundColor: '#242424' }}
    >
      {/* Image / placeholder */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '16/9', backgroundColor: '#353535' }}
      >
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Year badge */}
        <div
          className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: '#c3f5ff' }}
        >
          {project.year}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <span
          className="block text-xs uppercase tracking-widest mb-2"
          style={{ color: '#666666', fontFamily: 'monospace' }}
        >
          {project.category}
        </span>
        <h3
          className="text-lg font-bold tracking-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          {project.title}
        </h3>

        {/* Technical metadata */}
        <dl className="grid grid-cols-3 gap-2">
          {[
            { key: 'CAMERA', value: project.camera },
            { key: 'LENS',   value: project.lens },
            { key: 'FORMAT', value: project.format },
          ].map(({ key, value }) => (
            <div key={key}>
              <dt className="text-xs uppercase tracking-widest" style={{ color: '#666666', fontSize: '9px' }}>
                {key}
              </dt>
              <dd className="text-xs font-medium mt-0.5" style={{ color: '#a0a0a0', fontFamily: 'monospace' }}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </a>
  );
}
