import { useState } from 'react';
import type { ProjectDetail } from '@/types';

export interface ProjectListProps {
  readonly projects: readonly ProjectDetail[];
}

const LONG_FORM_CATEGORIES = ['Feature Film', 'Netflix Series', 'TV Series', 'Reality'] as const;

type Section = 'longform' | 'commercials';

function CreditRow({ project, columns, showCategory = false }: { project: ProjectDetail; columns: string; showCategory?: boolean }) {
  return (
    <div
      className="py-4 px-2 transition-colors duration-150"
      style={{ borderBottom: '1px solid var(--color-surface-2)' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-surface-1)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
    >
      {/* Desktop grid */}
      <div className="hidden sm:grid gap-4" style={{ gridTemplateColumns: columns }}>
        <span
          className="text-sm font-semibold uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
        >
          {project.title}
        </span>
        {showCategory && (
          <span
            className="text-xs uppercase tracking-widest self-center"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-muted)' }}
          >
            {project.category}
          </span>
        )}
        <span
          className="text-sm"
          style={{ fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}
        >
          {project.productionCompany}
        </span>
        <span
          className="text-sm"
          style={{ fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}
        >
          {project.dop}
        </span>
        <span
          className="text-sm"
          style={{ fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}
        >
          {project.role}
        </span>
        <span
          className="text-sm text-right tabular-nums"
          style={{ fontFamily: 'monospace', color: 'var(--color-text-muted)' }}
        >
          {project.year}
        </span>
      </div>

      {/* Mobile: 2-line stacked */}
      <div className="sm:hidden">
        <div className="flex justify-between items-baseline mb-1">
          <span
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            {project.title}
          </span>
          <span
            className="text-xs tabular-nums ml-4 shrink-0"
            style={{ fontFamily: 'monospace', color: 'var(--color-text-muted)' }}
          >
            {project.year}
          </span>
        </div>
        <p
          className="text-xs"
          style={{ fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}
        >
          {project.category}
          {[project.productionCompany, project.dop, project.role].filter(Boolean).length > 0 && ' · '}
          {[project.productionCompany, project.dop, project.role].filter(Boolean).join(' · ')}
        </p>
      </div>
    </div>
  );
}

export default function ProjectList({ projects }: Readonly<ProjectListProps>) {
  const [active, setActive] = useState<Section>('longform');

  const longForm = projects.filter((p) =>
    (LONG_FORM_CATEGORIES as readonly string[]).includes(p.category),
  );
  const commercials = projects.filter((p) => p.category === 'Commercial');

  const tabs: { id: Section; label: string }[] = [
    { id: 'longform',    label: 'Long Form' },
    { id: 'commercials', label: 'Commercials' },
  ];

  return (
    <div
      className="max-w-screen-2xl mx-auto px-4 sm:px-12 pb-12 sm:pb-24"
      style={{ backgroundColor: 'var(--color-canvas)' }}
    >
      {/* Section toggle header */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-6 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="text-xs uppercase tracking-[0.2em] transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer"
              style={{
                fontFamily: 'var(--font-display)',
                color: active === tab.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-surface-3)' }} />
      </div>

      {/* Long Form credits */}
      {active === 'longform' && (
        <section>
          {longForm.map((project) => (
            <CreditRow
              key={project.id}
              project={project}
              columns="2fr 1.2fr 2fr 2fr 1fr 6rem"
              showCategory
            />
          ))}
        </section>
      )}

      {/* Commercial credits */}
      {active === 'commercials' && (
        <section>
          {commercials.map((project) => (
            <CreditRow
              key={project.id}
              project={project}
              columns="2fr 2fr 2fr 1fr 6rem"
            />
          ))}
        </section>
      )}
    </div>
  );
}
