export interface ContactHeroProps {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subheadline: string;
  readonly email: string;
  readonly phone: string;
}

export default function ContactHero({ eyebrow, headline, email, phone }: Readonly<ContactHeroProps>) {
  return (
    <div
      className="px-4 sm:px-12 pt-28 sm:pt-40 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 items-end gap-12"
      style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
    >
      {/* Left — headline + eyebrow */}
      <div>
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
        <span
          className="block text-xs uppercase tracking-[0.3em]"
          style={{ color: '#00e5ff' }}
        >
          {eyebrow}
        </span>
      </div>

      {/* Right — direct contact box */}
      <div
        className="flex flex-col gap-3 px-8 py-6"
        style={{ backgroundColor: '#1c1c1c' }}
      >
        <p
          className="text-xs uppercase tracking-[0.3em] mb-2 font-semibold"
          style={{ color: '#f5f5f5' }}
        >
          Direct Contact
        </p>
        <a
          href={`mailto:${email}`}
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: '#00e5ff', textDecoration: 'none' }}
        >
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: '#a0a0a0', textDecoration: 'none' }}
        >
          {phone}
        </a>
      </div>
    </div>
  );
}
