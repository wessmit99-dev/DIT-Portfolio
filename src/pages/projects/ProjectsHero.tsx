export interface ProjectsHeroProps {
  readonly headline: string;
  readonly subheadline: string;
}

export default function ProjectsHero({ headline, subheadline }: ProjectsHeroProps) {
  return (
    <div
      className="px-12 pt-40 pb-16"
      style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
    >
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
      <p
        className="text-xs uppercase tracking-[0.3em]"
        style={{ color: '#00e5ff' }}
      >
        {subheadline}
      </p>
    </div>
  );
}
