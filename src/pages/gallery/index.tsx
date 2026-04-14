import { useState } from 'react';
import { siteData } from '@/data/mockData';
import type { GalleryImage } from '@/types';

export interface GalleryPageProps {}

export default function GalleryPage(_props: Readonly<GalleryPageProps>) {
  const { heroHeadline, heroSubheadline, images } = siteData.gallery;
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="px-12 pt-40 pb-16"
        style={{ backgroundColor: '#131313' }}
      >
        <h1
          className="text-5xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          {heroHeadline}
        </h1>
        <p className="mt-4 text-lg" style={{ color: '#a0a0a0' }}>
          {heroSubheadline}
        </p>
      </section>

      {/* Grid */}
      <section
        className="px-12 pb-24"
        style={{ backgroundColor: '#131313' }}
      >
        {images.length === 0 ? (
          <p style={{ color: '#a0a0a0' }}>
            No images yet — drop stills into <code>public/</code> and add entries to <code>siteData.gallery.images</code> in mockData.ts.
          </p>
        ) : (
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}
          >
            {images.map((img) => (
              <button
                key={img.id}
                className="group relative overflow-hidden w-full"
                style={{
                  backgroundColor: '#1c1c1c',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'block',
                }}
                onClick={() => setLightbox(img)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {img.caption && (
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}
                  >
                    <p
                      className="text-sm"
                      style={{ color: '#c3f5ff', fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {img.caption}
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative mx-8"
            style={{ maxWidth: '1200px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full object-contain"
              style={{ maxHeight: '85vh' }}
            />
            {lightbox.caption && (
              <p
                className="mt-4 text-center text-sm"
                style={{ color: '#a0a0a0', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {lightbox.caption}
              </p>
            )}
            <button
              className="absolute top-0 right-0 p-3 text-2xl leading-none"
              style={{ color: '#a0a0a0', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
