import type { ContactInfoItem, ContactPageData } from '@/types';

export interface ContactInfoProps {
  readonly items: readonly ContactInfoItem[];
  readonly coordinates: ContactPageData['coordinates'];
}

export default function ContactInfo({ items, coordinates }: ContactInfoProps) {
  return (
    <div
      className="p-10 h-full flex flex-col gap-10"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      {/* Info items */}
      {items.map((item) => (
        <div key={item.label}>
          <span
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: '#666666' }}
          >
            {item.label}
          </span>
          <span
            className="block text-sm font-semibold"
            style={{ color: '#f5f5f5', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.value}
          </span>
        </div>
      ))}

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

      {/* Coordinates */}
      <div>
        <span
          className="block text-xs uppercase tracking-widest mb-2"
          style={{ color: '#666666' }}
        >
          COORDINATES
        </span>
        <span
          className="block text-sm"
          style={{ color: '#a0a0a0', fontFamily: 'monospace' }}
        >
          LAT: {coordinates.lat}
        </span>
        <span
          className="block text-sm"
          style={{ color: '#a0a0a0', fontFamily: 'monospace' }}
        >
          LONG: {coordinates.lng}
        </span>
      </div>
    </div>
  );
}
