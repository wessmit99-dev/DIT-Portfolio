import { useState, useEffect } from 'react';
import type { AboutMeData } from '@/types';
import { assetUrl } from '@/lib/assets';

export interface AboutMeProps {
  readonly data: AboutMeData;
}

export default function AboutMe({ data }: Readonly<AboutMeProps>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % data.photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [data.photos.length]);

  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-12"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-8 items-center mx-auto p-8 sm:p-10"
        style={{ maxWidth: '56rem', backgroundColor: '#131313' }}
      >
        <div
          className="relative w-full max-w-[220px] overflow-hidden"
          style={{ aspectRatio: '3/4' }}
        >
          {data.photos.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {src ? (
                <img src={assetUrl(src)} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full" style={{ backgroundColor: '#2a2a2a' }} />
              )}
            </div>
          ))}
        </div>

        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
          >
            {data.heading}
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: 'rgba(245,245,245,0.75)' }}
          >
            {data.body}
          </p>
        </div>
      </div>
    </section>
  );
}
