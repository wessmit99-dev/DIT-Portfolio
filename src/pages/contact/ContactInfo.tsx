import type { ContactPageData } from '@/types';

export interface ContactInfoProps {
  readonly coordinates: ContactPageData['coordinates'];
}

export default function ContactInfo({ coordinates }: ContactInfoProps) {
  return (
    <div
      className="p-10 h-full flex flex-col gap-10"
      style={{ backgroundColor: '#1c1c1c' }}
    >
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
