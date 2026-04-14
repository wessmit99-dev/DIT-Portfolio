# Mobile Responsive Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the DIT portfolio fully usable on mobile (375px+) with a hamburger nav, correct padding, and stacked hero buttons.

**Architecture:** Purely additive Tailwind responsive changes — add `sm:` prefixed variants to existing classes, no structural rewrites. Nav gets local React state for open/close. No new dependencies.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite

---

## File Map

| File | Change |
|------|--------|
| `src/components/Nav.tsx` | Add hamburger state + slide-down mobile menu |
| `src/pages/home/Hero.tsx` | Button stacking, body text size, gradient tweak |
| `src/pages/home/ToolsGrid.tsx` | Padding fix |
| `src/pages/services/index.tsx` | Padding fix |
| `src/pages/services/ServiceItem.tsx` | Padding fix |
| `src/pages/projects/ProjectsHero.tsx` | Padding fix |
| `src/pages/projects/ProjectList.tsx` | Padding fix |
| `src/pages/contact/ContactHero.tsx` | Padding fix |
| `src/pages/contact/index.tsx` | Padding fix (two sections) |

**Verification method:** This project has no test suite. Each task is verified by running `npm run dev` and inspecting in Chrome DevTools at 375px width, then at 1280px to confirm desktop is unchanged.

---

### Task 1: Nav — Hamburger Menu

**Files:**
- Modify: `src/components/Nav.tsx`

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open http://localhost:5173 in Chrome. Open DevTools → toggle device toolbar → set to 375px width. Confirm: nav links are invisible, only brand + CTA button show. No way to navigate. This is the bug we're fixing.

- [ ] **Step 2: Add hamburger state and mobile menu to Nav**

Replace the entire contents of `src/components/Nav.tsx` with:

```tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/mockData';

export interface NavProps {
  readonly className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  const scrolled = useScrollEffect(80);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
      style={{
        backgroundColor: scrolled || open ? 'rgba(28,28,28,0.97)' : 'transparent',
        backdropFilter:  scrolled || open ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between w-full px-4 sm:px-12 mx-auto"
        style={{ maxWidth: '1920px', height: '72px' }}
      >
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-xl font-bold tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5', textDecoration: 'none' }}
        >
          {siteData.nav.brandName}
        </NavLink>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {siteData.nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                ['text-xs font-semibold uppercase tracking-[0.05em] transition-colors',
                  isActive ? 'border-b-2 pb-1' : 'hover:text-white/70'].join(' ')
              }
              style={({ isActive }) => ({
                color: isActive ? '#f5f5f5' : '#a0a0a0',
                borderColor: isActive ? '#00e5ff' : 'transparent',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" href={siteData.nav.ctaHref}>
            {siteData.nav.ctaLabel}
          </Button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-0 cursor-pointer p-0"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <>
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5', transform: 'rotate(45deg) translate(3px, 3px)' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5', transform: 'rotate(-45deg) translate(3px, -3px)' }} />
              </>
            ) : (
              <>
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#f5f5f5' }} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {open && (
        <nav
          className="md:hidden px-4 pb-6 flex flex-col gap-1"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {siteData.nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-[0.05em] py-3 transition-colors"
              style={({ isActive }) => ({
                color: isActive ? '#00e5ff' : '#a0a0a0',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Verify in browser at 375px**

- Hamburger icon (3 lines) is visible in top-right next to the CTA button
- Tapping opens the slide-down menu showing all nav links
- Tapping a link navigates and closes the menu
- Tapping the X icon closes the menu
- At 1280px width: hamburger is gone, desktop links show normally

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: add hamburger slide-down nav for mobile"
```

---

### Task 2: Hero — Mobile Layout Fixes

**Files:**
- Modify: `src/pages/home/Hero.tsx`

- [ ] **Step 1: Verify current issues at 375px**

Open http://localhost:5173 at 375px. Confirm: buttons sit side-by-side and may overflow, body text is `text-lg` which is fine but padding is `px-12` (too wide).

- [ ] **Step 2: Apply responsive fixes**

Replace the entire contents of `src/pages/home/Hero.tsx` with:

```tsx
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
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.3) 100%)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center px-4 sm:px-12 mx-auto h-full"
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
          className="text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          {data.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
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
```

- [ ] **Step 3: Verify in browser at 375px**

- Buttons stack vertically on mobile
- Content has comfortable left/right padding (not cramped)
- Text is readable against the background image
- At 1280px: buttons are side-by-side, padding is unchanged

- [ ] **Step 4: Commit**

```bash
git add src/pages/home/Hero.tsx
git commit -m "feat: responsive hero — stacked buttons and padding on mobile"
```

---

### Task 3: Padding Fix — Home ToolsGrid + Services

**Files:**
- Modify: `src/pages/home/ToolsGrid.tsx`
- Modify: `src/pages/services/index.tsx`
- Modify: `src/pages/services/ServiceItem.tsx`

- [ ] **Step 1: Fix ToolsGrid padding**

In `src/pages/home/ToolsGrid.tsx`, change line 20:
```tsx
// Before
className="py-24 px-12 mx-auto"

// After
className="py-12 sm:py-24 px-4 sm:px-12 mx-auto"
```

- [ ] **Step 2: Fix Services page header padding**

In `src/pages/services/index.tsx`, change the page header div className:
```tsx
// Before
className="px-12 pt-40 pb-16"

// After
className="px-4 sm:px-12 pt-28 sm:pt-40 pb-12 sm:pb-16"
```

- [ ] **Step 3: Fix ServiceItem padding**

In `src/pages/services/ServiceItem.tsx`, change line 11:
```tsx
// Before
className="py-24 px-12 relative overflow-hidden"

// After
className="py-12 sm:py-24 px-4 sm:px-12 relative overflow-hidden"
```

- [ ] **Step 4: Verify in browser at 375px**

Navigate to http://localhost:5173 (home) and http://localhost:5173/services at 375px:
- Tools grid has comfortable horizontal padding
- Services page header is not cramped at top
- Each service section has breathing room
- At 1280px: unchanged from current

- [ ] **Step 5: Commit**

```bash
git add src/pages/home/ToolsGrid.tsx src/pages/services/index.tsx src/pages/services/ServiceItem.tsx
git commit -m "feat: responsive padding for tools grid and services"
```

---

### Task 4: Padding Fix — Projects

**Files:**
- Modify: `src/pages/projects/ProjectsHero.tsx`
- Modify: `src/pages/projects/ProjectList.tsx`

- [ ] **Step 1: Fix ProjectsHero padding**

In `src/pages/projects/ProjectsHero.tsx`, change the wrapper div className:
```tsx
// Before
className="px-12 pt-40 pb-16"

// After
className="px-4 sm:px-12 pt-28 sm:pt-40 pb-12 sm:pb-16"
```

- [ ] **Step 2: Fix ProjectList padding**

In `src/pages/projects/ProjectList.tsx`, change line 106:
```tsx
// Before
className="max-w-screen-2xl mx-auto px-12 pb-24"

// After
className="max-w-screen-2xl mx-auto px-4 sm:px-12 pb-12 sm:pb-24"
```

- [ ] **Step 3: Verify in browser at 375px**

Navigate to http://localhost:5173/projects at 375px:
- Page headline has comfortable padding, not flush to edges
- Credit list rows are readable and not cramped
- Toggle tabs (Long Form / Commercials) are visible and tappable
- At 1280px: unchanged

- [ ] **Step 4: Commit**

```bash
git add src/pages/projects/ProjectsHero.tsx src/pages/projects/ProjectList.tsx
git commit -m "feat: responsive padding for projects page"
```

---

### Task 5: Padding Fix — Contact

**Files:**
- Modify: `src/pages/contact/ContactHero.tsx`
- Modify: `src/pages/contact/index.tsx`

- [ ] **Step 1: Fix ContactHero padding**

In `src/pages/contact/ContactHero.tsx`, change the wrapper div className:
```tsx
// Before
className="px-12 pt-40 pb-16 grid grid-cols-1 lg:grid-cols-2 items-end gap-12"

// After
className="px-4 sm:px-12 pt-28 sm:pt-40 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 items-end gap-12"
```

- [ ] **Step 2: Fix Contact index padding — Representation section**

In `src/pages/contact/index.tsx`, change the Representation section inner div className:
```tsx
// Before
className="mx-auto px-12 pb-16"

// After
className="mx-auto px-4 sm:px-12 pb-12 sm:pb-16"
```

- [ ] **Step 3: Fix Contact index padding — Gear Partner section**

In `src/pages/contact/index.tsx`, change the Gear Partner section inner div className:
```tsx
// Before
className="mx-auto px-12 pb-24"

// After
className="mx-auto px-4 sm:px-12 pb-12 sm:pb-24"
```

- [ ] **Step 4: Verify in browser at 375px**

Navigate to http://localhost:5173/contact at 375px:
- Headline and contact box stack vertically with comfortable padding
- Representation and Gear Partner sections have breathing room
- Email and phone links are tappable (large enough touch targets)
- At 1280px: unchanged

- [ ] **Step 5: Commit**

```bash
git add src/pages/contact/ContactHero.tsx src/pages/contact/index.tsx
git commit -m "feat: responsive padding for contact page"
```

---

### Task 6: Final Check + Push

- [ ] **Step 1: Build to confirm no TypeScript errors**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Step 2: Full mobile walkthrough at 375px**

Open http://localhost:5173 in Chrome DevTools at 375px. Walk through every page:
- `/` — hero, tools grid
- `/services` — all 4 service sections
- `/projects` — both Long Form and Commercials tabs
- `/contact` — hero, representation, gear partner
- On each page: no horizontal scroll, all text readable, nav hamburger works

- [ ] **Step 3: Desktop check at 1280px**

Same pages at 1280px — confirm layout is pixel-identical to before.

- [ ] **Step 4: Push to GitHub (auto-deploys to Vercel)**

```bash
git push
```

Expected: Vercel picks up the push and deploys within ~1 minute.
