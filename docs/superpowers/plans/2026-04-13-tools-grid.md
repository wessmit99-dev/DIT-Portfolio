# Tools Grid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the ServicesTeaser section on the home page with a 10-item software/tools grid called "Workflow Tools".

**Architecture:** Add `ToolsGridItem` / `ToolsGridData` types and data to `mockData.ts`, create a new `ToolsGrid` component that consumes it, wire it into the home page, then delete `ServicesTeaser.tsx` and its dead types/data.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite

---

## File Map

| Action | File |
|--------|------|
| Modify | `src/data/mockData.ts` — swap ServicesTeaser types/data for ToolsGrid |
| Modify | `src/types/index.ts` — swap exports |
| Create | `src/pages/home/ToolsGrid.tsx` |
| Modify | `src/pages/home/index.tsx` — swap component |
| Delete | `src/pages/home/ServicesTeaser.tsx` |

---

## Task 1: Swap types and data in mockData.ts

**Files:**
- Modify: `src/data/mockData.ts`

- [ ] **Step 1: Replace `ServicesTeaserItem` / `ServicesTeaserData` interfaces with `ToolsGridItem` / `ToolsGridData`**

Find and remove this block in `src/data/mockData.ts`:
```typescript
export interface ServicesTeaserItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export interface ServicesTeaserData {
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  readonly items: readonly ServicesTeaserItem[];
}
```

Replace it with:
```typescript
export interface ToolsGridItem {
  readonly name: string;
  readonly description: string;
}

export interface ToolsGridData {
  readonly items: readonly ToolsGridItem[];
}
```

- [ ] **Step 2: Update `SiteData` interface — swap `servicesTeaser` for `toolsGrid`**

Find in `SiteData`:
```typescript
  readonly home: {
    readonly hero: HeroData;
    readonly servicesTeaser: ServicesTeaserData;
  };
```

Replace with:
```typescript
  readonly home: {
    readonly hero: HeroData;
    readonly toolsGrid: ToolsGridData;
  };
```

- [ ] **Step 3: Replace `home.servicesTeaser` data with `home.toolsGrid`**

Find and remove:
```typescript
    servicesTeaser: {
      eyebrow:  'Vision and Fidelity',
      headline: 'TECHNICAL PRECISION',
      body:     'The modern digital negative demands more than just storage; it requires a deep understanding of sensor physics and color pipeline integrity. Every frame treated as a masterwork.',
      items: [
        {
          number:      '01',
          title:       'ON-SET COLOR',
          description: 'Real-time HDR grading and exposure monitoring to lock in the look before the camera wraps.',
          href:        '/services',
        },
        {
          number:      '02',
          title:       'DATA ARCHITECTURE',
          description: 'Triple-redundant LTO-9 archival and secure high-speed dailies delivery for global workflows.',
          href:        '/services',
        },
      ],
    },
```

Replace with:
```typescript
    toolsGrid: {
      items: [
        { name: 'Pomfort LiveGrade',   description: 'Real-time on-set color grading' },
        { name: 'Pomfort Silverstack', description: 'Data offload, QC and media management' },
        { name: 'Pomfort ReelTime',    description: 'Live wireless monitoring and set communication' },
        { name: 'DaVinci Resolve',     description: 'Color grading and dailies output' },
        { name: 'Nobe Omniscope',      description: 'Real-time signal analysis and waveform monitoring' },
        { name: 'CameraKit',           description: 'Camera metadata and lens data logging' },
        { name: 'LensKit',             description: 'Lens profiling and distortion mapping' },
        { name: 'Arri Companion',      description: 'ARRI camera control and metadata' },
        { name: 'Disk Catalog Maker',  description: 'Media catalog and archive indexing' },
        { name: 'Parashoot',           description: 'Camera card formatting' },
      ],
    },
```

- [ ] **Step 4: Verify no TypeScript errors**

Run: `npm run build 2>&1 | head -20`

Expected: errors only in `src/types/index.ts` (stale exports) and `src/pages/home/index.tsx` (stale import) — fixed in the next two tasks. No errors inside `mockData.ts` itself.

---

## Task 2: Update `src/types/index.ts`

**Files:**
- Modify: `src/types/index.ts`

- [ ] **Step 1: Swap ServicesTeaser exports for ToolsGrid**

Find:
```typescript
  ServicesTeaserItem,
  ServicesTeaserData,
```

Replace with:
```typescript
  ToolsGridItem,
  ToolsGridData,
```

- [ ] **Step 2: Verify file looks correct**

Full file should now be:
```typescript
// Re-export all data types for use in components.
// Import from here, not from @/data/mockData directly.
export type {
  NavLink,
  NavData,
  SocialPlatform,
  SocialLink,
  FooterData,
  HeroData,
  ToolsGridItem,
  ToolsGridData,
  ServiceTool,
  ServiceSpec,
  ServiceDetail,
  ServicesPageData,
  ProjectCategory,
  ProjectDetail,
  TechnicalStandard,
  ProjectsPageData,
  ProjectType,
  ContactInfoItem,
  AgentData,
  GearPartnerData,
  ContactPageData,
  GalleryImage,
  GalleryPageData,
  SiteData,
} from '@/data/mockData';
```

---

## Task 3: Create `ToolsGrid.tsx`

**Files:**
- Create: `src/pages/home/ToolsGrid.tsx`

- [ ] **Step 1: Create the component**

```typescript
import SectionLabel from '@/components/ui/SectionLabel';
import type { ToolsGridData } from '@/types';

export interface ToolsGridProps {
  readonly data: ToolsGridData;
}

export default function ToolsGrid({ data }: ToolsGridProps) {
  return (
    <section
      className="py-24 px-12 mx-auto"
      style={{ maxWidth: '1920px', backgroundColor: '#1c1c1c' }}
    >
      <SectionLabel label="WORKFLOW TOOLS" className="mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
        {data.items.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <span
              className="text-sm font-bold tracking-tight leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
            >
              {item.name}
            </span>
            <span
              className="text-xs leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## Task 4: Wire into home page and delete ServicesTeaser

**Files:**
- Modify: `src/pages/home/index.tsx`
- Delete: `src/pages/home/ServicesTeaser.tsx`

- [ ] **Step 1: Update `src/pages/home/index.tsx`**

Replace the full file contents with:
```typescript
import { siteData } from '@/data/mockData';
import Hero from './Hero';
import ToolsGrid from './ToolsGrid';

export default function HomePage() {
  const { hero, toolsGrid } = siteData.home;

  return (
    <>
      <Hero data={hero} />
      <ToolsGrid data={toolsGrid} />
    </>
  );
}
```

- [ ] **Step 2: Delete `ServicesTeaser.tsx`**

Run: `rm src/pages/home/ServicesTeaser.tsx`

---

## Task 5: Verify

- [ ] **Step 1: Run production build**

Run: `npm run build 2>&1`

Expected: Only the two pre-existing warnings in `src/pages/services/index.tsx` — no new errors.

- [ ] **Step 2: Start dev server and check visually**

Run: `npm run dev`

Open `http://localhost:5173` and confirm:
- Hero renders with background image
- Below hero: `WORKFLOW TOOLS` label in cyan
- 10 tools in a 5-column grid (desktop) / 2-column (mobile)
- Background color shifts slightly from hero (`#131313`) to grid section (`#1c1c1c`)
- All tool names and descriptions are correct

- [ ] **Step 3: Commit**

```bash
git add src/data/mockData.ts src/types/index.ts src/pages/home/ToolsGrid.tsx src/pages/home/index.tsx
git commit -m "feat: replace ServicesTeaser with ToolsGrid on home page"
```
