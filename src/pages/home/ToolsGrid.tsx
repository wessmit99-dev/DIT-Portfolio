import SectionLabel from '@/components/ui/SectionLabel';
import type { ToolsGridData } from '@/types';

export interface ToolsGridProps {
  readonly data: ToolsGridData;
}

export default function ToolsGrid({ data }: ToolsGridProps) {
  return (
    <section
      className="py-24 px-12 mx-auto"
      style={{ maxWidth: '1920px', backgroundColor: '#1c1c1c' }}
    >
      <SectionLabel label="WORKFLOW TOOLS" className="mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
        {data.items.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <span
              className="text-sm font-bold tracking-tight leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
            >
              {item.name}
            </span>
            <span
              className="text-xs leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
