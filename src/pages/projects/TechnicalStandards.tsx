import type { TechnicalStandard } from '@/types';

export interface TechnicalStandardsProps {
  readonly standards: readonly TechnicalStandard[];
}

export default function TechnicalStandards({ standards }: TechnicalStandardsProps) {
  return (
    <section
      className="py-16 px-12"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      <div
        className="mx-auto flex flex-wrap gap-12"
        style={{ maxWidth: '1920px' }}
      >
        {standards.map((standard) => (
          <div key={standard.label}>
            <span
              className="block text-xs uppercase tracking-widest mb-1"
              style={{ color: '#666666' }}
            >
              {standard.label}
            </span>
            <span
              className="block text-base font-semibold"
              style={{ color: '#00e5ff', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {standard.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
