import Button from '@/components/ui/Button';
import type { HeroData } from '@/types';

export interface HeroProps {
  readonly data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <img
        src={data.backgroundImageUrl}
        alt={data.backgroundImageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center px-12 mx-auto h-full"
        style={{ maxWidth: '1920px', paddingTop: '72px', minHeight: '100vh' }}
      >
        <span
          className="text-xs uppercase tracking-[0.3em] font-medium mb-6"
          style={{ color: '#00e5ff' }}
        >
          {data.eyebrow}
        </span>

        <h1
          className="font-extrabold leading-none tracking-tighter mb-8 max-w-4xl"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            color: '#ffffff',
          }}
        >
          {data.headline}
        </h1>

        <p
          className="text-lg leading-relaxed max-w-2xl mb-12"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          {data.body}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href={data.primaryCtaHref}>
            {data.primaryCtaLabel}
          </Button>
          <Button variant="ghost" href={data.secondaryCtaHref}>
            {data.secondaryCtaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
