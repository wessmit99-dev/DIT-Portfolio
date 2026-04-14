import Badge from '@/components/ui/Badge';
import type { ServiceDetail } from '@/types';

export interface ServiceItemProps {
  readonly data: ServiceDetail;
  readonly isEven: boolean;
}

export default function ServiceItem({ data, isEven }: ServiceItemProps) {
  return (
    <article
      className="py-24 px-12 relative overflow-hidden"
      style={{ backgroundColor: isEven ? '#1c1c1c' : '#131313' }}
    >
      {data.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${encodeURI(data.imageUrl)})`,
            opacity: 0.2,
          }}
        />
      )}
      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        style={{ maxWidth: '1920px' }}
      >
        {/* Title + description */}
        <div className="lg:col-span-12">
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

      </div>
    </article>
  );
}
