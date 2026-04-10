import { Link } from 'react-router-dom';
import SectionLabel from '@/components/ui/SectionLabel';
import type { ServicesTeaserData } from '@/types';

export interface ServicesTeaserProps {
  readonly data: ServicesTeaserData;
}

export default function ServicesTeaser({ data }: ServicesTeaserProps) {
  return (
    <section
      className="py-32 px-12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"
      style={{ maxWidth: '1920px', backgroundColor: '#131313' }}
    >
      {/* Left: heading */}
      <div className="md:col-span-5">
        <SectionLabel label={data.eyebrow} />
        <h2
          className="text-4xl font-bold tracking-tight mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          {data.headline}
        </h2>
      </div>

      {/* Right: body + service cards */}
      <div className="md:col-span-7">
        <p
          className="text-xl leading-relaxed mb-16"
          style={{ color: '#a0a0a0' }}
        >
          {data.body}
        </p>

        <div
          className="grid grid-cols-2 gap-12 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {data.items.map((item) => (
            <div key={item.number}>
              <span
                className="block text-5xl font-bold mb-2 select-none"
                style={{ color: 'rgba(0,229,255,0.15)', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.number}
              </span>
              <h4
                className="text-xs font-bold tracking-widest mb-3 uppercase"
                style={{ color: '#f5f5f5', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-sm mb-4" style={{ color: '#a0a0a0' }}>
                {item.description}
              </p>
              <Link
                to={item.href}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: '#00e5ff', textDecoration: 'none' }}
              >
                LEARN MORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
