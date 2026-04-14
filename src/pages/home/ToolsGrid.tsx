import SectionLabel from '@/components/ui/SectionLabel';
import type { ToolsGridData } from '@/types';

export interface ToolsGridProps {
  readonly data: ToolsGridData;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function ToolsGrid({ data }: ToolsGridProps) {
  return (
    <section
      className="py-12 sm:py-24 px-4 sm:px-12 mx-auto"
      style={{ maxWidth: '1920px', backgroundColor: '#1c1c1c' }}
    >
      <SectionLabel label="WORKFLOW TOOLS" className="mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
        {data.items.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-3 text-center">
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={item.name}
                style={{ height: '48px', width: '100%', objectFit: 'contain', objectPosition: 'center' }}
              />
            ) : (
              <div
                className="flex items-center justify-center text-xs font-bold tracking-widest"
                style={{
                  height: '48px',
                  width: '100%',
                  backgroundColor: '#2a2a2a',
                  color: '#555555',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {getInitials(item.name)}
              </div>
            )}
            <span
              className="text-sm font-bold tracking-tight leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
