import Badge from '@/components/ui/Badge';
import type { ServiceDetail } from '@/types';
import { assetUrl } from '@/lib/assets';

export interface ServiceItemProps {
  readonly data: ServiceDetail;
}

export default function ServiceItem({ data }: Readonly<ServiceItemProps>) {
  return (
    <article
      className="relative overflow-hidden h-full flex flex-col p-8 sm:p-10"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      {data.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${encodeURI(assetUrl(data.imageUrl))})`,
            opacity: 0.18,
          }}
        />
      )}

      <div className="relative flex flex-col h-full">
        <span
          className="text-sm font-bold tracking-[0.2em] mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#666666' }}
        >
          {data.number}
        </span>

        <h2
          className="text-2xl font-bold uppercase tracking-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          {data.title}
        </h2>

        <p className="text-base leading-relaxed" style={{ color: '#a0a0a0' }}>
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-8">
          {data.tools.map((tool) => (
            <Badge key={tool.name} label={tool.name} />
          ))}
        </div>
      </div>
    </article>
  );
}
