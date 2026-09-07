# Gallery Albums Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat gallery image list with named job albums, switchable via a tab bar matching the Projects page toggle pattern.

**Architecture:** Add a `GalleryAlbum` type that wraps `GalleryImage[]` with a name and optional subtitle. The gallery page holds `activeAlbumId` state and renders tabs + an album header above the existing grid/lightbox. No new files needed — all changes are in `mockData.ts`, `types/index.ts`, and `pages/gallery/index.tsx`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite

---

### Task 1: Add `GalleryAlbum` type and update `GalleryPageData`

**Files:**
- Modify: `src/data/mockData.ts`

- [ ] **Step 1: Add `GalleryAlbum` interface** after the `GalleryImage` interface (around line 185):

```ts
export interface GalleryAlbum {
  readonly id: string;
  readonly name: string;
  readonly subtitle?: string;
  readonly images: readonly GalleryImage[];
}
```

- [ ] **Step 2: Replace `images` with `albums` in `GalleryPageData`**

Find:
```ts
export interface GalleryPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly images: readonly GalleryImage[];
}
```

Replace with:
```ts
export interface GalleryPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly albums: readonly GalleryAlbum[];
}
```

- [ ] **Step 3: Migrate existing image data into an album**

Find the `gallery` block in `siteData` (near bottom of file):
```ts
gallery: {
  heroHeadline: 'Behind The Scenes.',
  heroSubheadline: 'On-set stills from production.',
  images: [
    { id: '1', src: '/gallery/IMG_9196.jpg', alt: 'On-set crew in rain-drenched alley with atmospheric backlight' },
  ],
},
```

Replace with:
```ts
gallery: {
  heroHeadline: 'Behind The Scenes.',
  heroSubheadline: 'On-set stills from production.',
  albums: [
    {
      id: 'album-1',
      name: 'On Set',
      subtitle: '2024',
      images: [
        { id: '1', src: '/gallery/IMG_9196.jpg', alt: 'On-set crew in rain-drenched alley with atmospheric backlight' },
      ],
    },
  ],
},
```

- [ ] **Step 4: Commit**

```bash
git add src/data/mockData.ts
git commit -m "feat: add GalleryAlbum type and migrate gallery data to albums"
```

---

### Task 2: Export `GalleryAlbum` from types

**Files:**
- Modify: `src/types/index.ts`

- [ ] **Step 1: Add `GalleryAlbum` to the re-export list**

Find:
```ts
  GalleryImage,
  GalleryPageData,
```

Replace with:
```ts
  GalleryAlbum,
  GalleryImage,
  GalleryPageData,
```

- [ ] **Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: export GalleryAlbum type"
```

---

### Task 3: Update gallery page with tab bar, album header, and filtered grid

**Files:**
- Modify: `src/pages/gallery/index.tsx`

- [ ] **Step 1: Replace the entire file content**

```tsx
import { useState } from 'react';
import { siteData } from '@/data/mockData';
import type { GalleryImage } from '@/types';

export interface GalleryPageProps {}

export default function GalleryPage(_props: Readonly<GalleryPageProps>) {
  const { heroHeadline, heroSubheadline, albums } = siteData.gallery;
  const [activeAlbumId, setActiveAlbumId] = useState(albums[0]?.id ?? '');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const activeAlbum = albums.find((a) => a.id === activeAlbumId) ?? albums[0];

  return (
    <>
      {/* Hero */}
      <section
        className="px-4 sm:px-12 pt-40 pb-16"
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

      {/* Tabs + Grid */}
      <section
        className="px-4 sm:px-12 pb-24"
        style={{ backgroundColor: '#131313' }}
      >
        {albums.length === 0 ? (
          <p style={{ color: '#a0a0a0' }}>
            No albums yet — add entries to <code>siteData.gallery.albums</code> in mockData.ts.
          </p>
        ) : (
          <>
            {/* Tab bar */}
            <div className="flex items-center gap-6 mb-8 overflow-x-auto">
              <div className="flex items-center gap-6 shrink-0">
                {albums.map((album) => (
                  <button
                    key={album.id}
                    onClick={() => setActiveAlbumId(album.id)}
                    className="text-xs uppercase tracking-[0.2em] transition-colors duration-150 bg-transparent border-0 p-0 cursor-pointer whitespace-nowrap"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: activeAlbumId === album.id ? '#00e5ff' : '#666666',
                    }}
                  >
                    {album.name}
                  </button>
                ))}
              </div>
              <div className="flex-1 h-px shrink-0" style={{ backgroundColor: '#353535' }} />
            </div>

            {/* Album header */}
            {activeAlbum && (
              <div className="mb-8">
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
                >
                  {activeAlbum.name}
                </h2>
                {activeAlbum.subtitle && (
                  <p className="mt-1 text-sm" style={{ color: '#a0a0a0' }}>
                    {activeAlbum.subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Image grid */}
            {activeAlbum && activeAlbum.images.length === 0 ? (
              <p style={{ color: '#a0a0a0' }}>No images in this album yet.</p>
            ) : (
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}
              >
                {activeAlbum?.images.map((img) => (
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
          </>
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
```

- [ ] **Step 2: Validate the component**

```bash
npm run validate src/pages/gallery/index.tsx
```

Expected output:
```
✅ Props declaration found.
✅ No hardcoded hex values found.
✨ COMPONENT VALID.
```

- [ ] **Step 3: Check the build compiles cleanly**

```bash
npm run build 2>&1 | tail -20
```

Expected: no TypeScript errors, `dist/` built successfully.

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Visit `http://localhost:5173/gallery`. Confirm:
- Tab bar renders with album names
- Clicking a tab updates the album header and grid
- Lightbox opens and closes correctly
- Mobile view: tabs scroll horizontally

- [ ] **Step 5: Commit**

```bash
git add src/pages/gallery/index.tsx
git commit -m "feat: gallery albums with tab navigation and album headers"
```
