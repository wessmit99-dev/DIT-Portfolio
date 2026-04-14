import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/mockData';

export interface NavProps {
  readonly className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  const scrolled = useScrollEffect(80);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
      style={{
        backgroundColor: scrolled || open ? 'rgba(28,28,28,0.97)' : 'transparent',
        backdropFilter:  scrolled || open ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between w-full px-4 sm:px-12 mx-auto"
        style={{ maxWidth: '1920px', height: '72px' }}
      >
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-xl font-bold tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5', textDecoration: 'none' }}
        >
          {siteData.nav.brandName}
        </NavLink>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {siteData.nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                ['text-xs font-semibold uppercase tracking-[0.05em] transition-colors',
                  isActive ? 'border-b-2 pb-1' : 'hover:text-white/70'].join(' ')
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

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" href={siteData.nav.ctaHref}>
            {siteData.nav.ctaLabel}
          </Button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-0 cursor-pointer p-0"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <>
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5', transform: 'rotate(45deg) translate(3px, 3px)' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5', transform: 'rotate(-45deg) translate(3px, -3px)' }} />
              </>
            ) : (
              <>
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {open && (
        <nav
          className="md:hidden px-4 pb-6 flex flex-col gap-1"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {siteData.nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-[0.05em] py-3 transition-colors"
              style={({ isActive }) => ({
                color: isActive ? '#00e5ff' : '#a0a0a0',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
