import Badge from '@/components/ui/Badge';
import type { ServiceDetail } from '@/types';

export interface ServiceItemProps {
  readonly data: ServiceDetail;
  readonly isEven: boolean;
}

export default function ServiceItem({ data, isEven }: ServiceItemProps) {
  return (
    <article
      className="py-24 px-12"
      style={{ backgroundColor: isEven ? '#1c1c1c' : '#131313' }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        style={{ maxWidth: '1920px' }}
      >
        {/* Number */}
        <div className="lg:col-span-2">
          <span
            className="block font-bold leading-none select-none"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(5rem, 8vw, 8rem)',
              color: 'rgba(0,229,255,0.08)',
            }}
          >
            {data.number}
          </span>
        </div>

        {/* Title + description */}
        <div className="lg:col-span-5">
          <h2
            className="text-3xl font-bold uppercase tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
          >
            {data.title}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#a0a0a0' }}>
            {data.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mt-8">
            {data.tools.map((tool) => (
              <Badge key={tool.name} label={tool.name} />
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="lg:col-span-5">
          <div
            className="grid grid-cols-1 gap-0"
            style={{ borderLeft: '2px solid rgba(0,229,255,0.2)' }}
          >
            {data.specs.map((spec) => (
              <div
                key={spec.key}
                className="px-6 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span
                  className="block text-xs uppercase tracking-widest mb-1"
                  style={{ color: '#666666' }}
                >
                  {spec.key}
                </span>
                <span
                  className="block text-sm font-semibold"
                  style={{ color: '#00e5ff', fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
