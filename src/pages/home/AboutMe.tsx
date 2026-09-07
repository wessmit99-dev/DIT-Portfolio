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
      className="py-12 sm:py-24 px-4 sm:px-12 mx-auto"
      style={{ maxWidth: '1920px', backgroundColor: '#1c1c1c' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
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
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
          >
            {data.heading}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'rgba(245,245,245,0.75)' }}
          >
            {data.body}
          </p>
        </div>
      </div>
    </section>
  );
}
