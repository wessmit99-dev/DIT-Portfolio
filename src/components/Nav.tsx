import { NavLink } from 'react-router-dom';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/mockData';

export interface NavProps {
  readonly className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  const scrolled = useScrollEffect(80);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
      style={{
        backgroundColor: scrolled ? 'rgba(28,28,28,0.85)' : 'transparent',
        backdropFilter:  scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div
        className="flex items-center justify-between w-full px-12 mx-auto"
        style={{ maxWidth: '1920px', height: '72px' }}
      >
        {/* Brand */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5', textDecoration: 'none' }}
        >
          {siteData.nav.brandName}
        </NavLink>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-10">
          {siteData.nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                [
                  'text-xs font-semibold uppercase tracking-[0.05em] transition-colors',
                  isActive ? 'border-b-2 pb-1' : 'hover:text-white/70',
                ].join(' ')
              }
              style={({ isActive }) => ({
                color: isActive ? '#f5f5f5' : '#a0a0a0',
                borderColor: isActive ? '#00e5ff' : 'transparent',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Button variant="ghost" href={siteData.nav.ctaHref}>
          {siteData.nav.ctaLabel}
        </Button>
      </div>
    </header>
  );
}
