import { siteData } from '@/data/mockData';

export interface FooterProps {
  readonly className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      className={`w-full px-12 py-10 ${className}`}
      style={{ backgroundColor: '#1c1c1c' }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ maxWidth: '1920px' }}
      >
        {/* Contact info */}
        <div className="flex items-center gap-8">
          <a
            href={`mailto:${siteData.contact.email}`}
            className="text-xs uppercase tracking-widest transition-colors"
            style={{ color: '#a0a0a0', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00e5ff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a0a0a0')}
          >
            {siteData.contact.email}
          </a>
          <a
            href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`}
            className="text-xs uppercase tracking-widest transition-colors"
            style={{ color: '#a0a0a0', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00e5ff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a0a0a0')}
          >
            {siteData.contact.phone}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-8">
          {siteData.footer.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest transition-colors"
              style={{ color: '#a0a0a0', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00e5ff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a0a0a0')}
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
