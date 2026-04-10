import type { SpecsStripData } from '@/types';

export interface SpecsStripProps {
  readonly data: SpecsStripData;
}

export default function SpecsStrip({ data }: SpecsStripProps) {
  return (
    <div
      className="w-full px-12 py-4 flex flex-wrap items-center justify-between gap-4"
      style={{ backgroundColor: '#242424' }}
    >
      <div className="flex flex-wrap gap-8">
        {data.items.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: '#666666', fontSize: '9px' }}
            >
              {item.label}
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#f5f5f5', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <span
        className="hidden md:block text-xs uppercase tracking-[0.2em]"
        style={{ color: '#666666', fontSize: '9px' }}
      >
        {data.trailing}
      </span>
    </div>
  );
}
