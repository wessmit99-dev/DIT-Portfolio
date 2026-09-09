import SectionLabel from '@/components/ui/SectionLabel';
import type { ToolsGridData } from '@/types';
import { assetUrl } from '@/lib/assets';

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
      className="py-12 sm:py-16 px-4 sm:px-8"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      <div
        className="mx-auto p-6 sm:p-12"
        style={{ maxWidth: '1920px', backgroundColor: '#131313' }}
      >
        <SectionLabel label="WORKFLOW TOOLS" className="mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-12">
          {data.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-4 text-center">
              {item.logoUrl ? (
                <img
                  src={assetUrl(item.logoUrl)}
                  alt={item.name}
                  style={{ height: '56px', width: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
              ) : (
                <div
                  className="flex items-center justify-center text-xs font-bold tracking-widest"
                  style={{
                    height: '56px',
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
      </div>
    </section>
  );
}
