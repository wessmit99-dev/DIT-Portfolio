import type { GearPartnerData } from '@/types';

export interface GearPartnerRowProps {
  readonly partner: GearPartnerData;
}

export default function GearPartnerRow({ partner }: Readonly<GearPartnerRowProps>) {
  const initials = partner.name
    ? partner.name.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase()
    : '?';

  return (
    <div
      className="p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      {/* Logo */}
      <div
        className="flex-shrink-0 flex items-center"
        style={{ width: '140px' }}
      >
        {partner.logoUrl ? (
          <img
            src={partner.logoUrl}
            alt={partner.name}
            style={{ maxHeight: '60px', maxWidth: '140px', objectFit: 'contain' }}
          />
        ) : (
          <div
            className="flex items-center justify-center text-sm font-bold tracking-widest"
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#2a2a2a',
              color: '#555555',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        {partner.name && (
          <p
            className="font-bold text-lg"
            style={{ color: '#f5f5f5', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {partner.name}
          </p>
        )}

        {partner.description && (
          <p
            className="text-sm"
            style={{ color: '#a0a0a0' }}
          >
            {partner.description}
          </p>
        )}

        {partner.email && (
          <a
            href={`mailto:${partner.email}`}
            className="text-sm"
            style={{ color: '#a0a0a0', textDecoration: 'none' }}
          >
            {partner.email}
          </a>
        )}

        {partner.phone && (
          <a
            href={`tel:${partner.phone}`}
            className="text-sm"
            style={{ color: '#a0a0a0', textDecoration: 'none' }}
          >
            {partner.phone}
          </a>
        )}

        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: '#00e5ff', textDecoration: 'none' }}
          >
            {partner.website.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
    </div>
  );
}
