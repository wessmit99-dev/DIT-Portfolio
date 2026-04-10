export interface ContactHeroProps {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subheadline: string;
}

export default function ContactHero({ eyebrow, headline, subheadline }: ContactHeroProps) {
  return (
    <div
      className="px-12 pt-40 pb-16"
      style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
    >
      <span
        className="block text-xs uppercase tracking-[0.3em] mb-4"
        style={{ color: '#00e5ff' }}
      >
        {eyebrow}
      </span>
      <h1
        className="font-bold tracking-tight mb-4"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#f5f5f5',
        }}
      >
        {headline}
      </h1>
      <p className="text-lg" style={{ color: '#a0a0a0' }}>
        {subheadline}
      </p>
    </div>
  );
}
