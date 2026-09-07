# Gallery Albums — Design Spec

## Context

The gallery page currently shows a single flat grid of images. The user wants to organise photos by job/production into named albums, switchable via tabs across the top — matching the Long Form / Commercials toggle pattern already used on the Projects page.

## Design

### Tab Bar
- Row of job-name tabs above the grid, same style as `ProjectList.tsx`: `text-xs uppercase tracking-[0.2em]`, active tab in cyan (`var(--color-accent)`), inactive in muted text
- Horizontal rule extends to the right of the tabs (same decorative line as Projects)
- Active album defaults to the first album in the array
- On mobile, tab row scrolls horizontally if names overflow

### Album Header
- Below the tab bar, a small header renders per active album:
  - **Name** in Space Grotesk, ~2xl, `color: #f5f5f5`
  - **Subtitle** (optional — e.g. production company, year) in muted text below
- No full-bleed cover image — keep it lightweight

### Grid & Lightbox
- Unchanged from current implementation — responsive `auto-fill minmax(360px, 1fr)` grid, hover scale, lightbox modal

---

## Data Shape

### New types in `mockData.ts`

```ts
export interface GalleryAlbum {
  readonly id: string;
  readonly name: string;
  readonly subtitle?: string;
  readonly images: readonly GalleryImage[];
}

export interface GalleryPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly albums: readonly GalleryAlbum[];  // replaces images[]
}
```

### Example data

```ts
gallery: {
  heroHeadline: 'Behind The Scenes.',
  heroSubheadline: 'On-set stills from production.',
  albums: [
    {
      id: 'job-1',
      name: 'Project Title',
      subtitle: 'Production Company · 2024',
      images: [
        { id: '1', src: '/gallery/job-1/IMG_9196.jpg', alt: '...' },
      ],
    },
  ],
},
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/data/mockData.ts` | Add `GalleryAlbum` interface; replace `images[]` with `albums[]` in `GalleryPageData`; migrate existing image to an album |
| `src/types/index.ts` | Export `GalleryAlbum` |
| `src/pages/gallery/index.tsx` | Add `activeAlbumId` state; render tab bar + album header; filter grid to active album |

---

## Verification

1. `npm run dev` → `/gallery`
2. Tabs render; clicking each switches the grid and album header
3. Lightbox still works within an album
4. Mobile: tabs scroll horizontally, grid stacks correctly
5. `npm run validate src/pages/gallery/index.tsx` — Props interface + no hardcoded hex
