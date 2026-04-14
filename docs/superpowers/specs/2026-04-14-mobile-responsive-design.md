# Mobile Responsive Design — Spec

**Date:** 2026-04-14
**Scope:** Full mobile pass across all pages

---

## Overview

The site currently has four mobile problems: no nav menu on small screens, excessive horizontal padding, cramped hero buttons, and oversized vertical section spacing. This spec covers a full responsive pass to fix all of them.

---

## 1. Nav — Hamburger Menu (`src/components/Nav.tsx`)

- Add local `open` boolean state
- On `md` and up: existing layout unchanged (`hidden md:flex` for links)
- On mobile: show a hamburger icon button (3 lines) in place of the nav links
  - When `open === true`, icon switches to X (close)
  - Tapping opens a slide-down panel rendered directly below the nav bar
  - Panel background: `rgba(28,28,28,0.97)` with `backdrop-blur`
  - Links stacked vertically, same style as desktop links
  - Tapping any link closes the menu (`setOpen(false)`)
  - Tapping X closes the menu
- CTA button remains visible at all times on all screen sizes

---

## 2. Padding — Global Fix

Every component currently using `px-12` and `py-24` needs responsive variants:

| Current | Mobile | Desktop |
|---------|--------|---------|
| `px-12` | `px-4 sm:px-12` | unchanged |
| `py-24` | `py-12 sm:py-24` | unchanged |
| `pt-40` | `pt-28 sm:pt-40` | unchanged |
| `pb-24` | `pb-12 sm:pb-24` | unchanged |

**Files affected:**
- `src/pages/home/Hero.tsx`
- `src/pages/home/ToolsGrid.tsx`
- `src/pages/services/ServiceItem.tsx`
- `src/pages/projects/ProjectList.tsx`
- `src/pages/projects/ProjectsHero.tsx`
- `src/pages/contact/ContactHero.tsx`
- `src/pages/contact/index.tsx` (two sections with `px-12`)

---

## 3. Hero (`src/pages/home/Hero.tsx`)

- Buttons: `flex-col sm:flex-row` so they stack vertically on mobile
- Body text: add `text-base sm:text-lg` to prevent overflow on small screens
- Gradient: on mobile shift to `rgba(0,0,0,0.75)` flat overlay so text stays readable regardless of image crop

---

## 4. Tools Grid (`src/pages/home/ToolsGrid.tsx`)

- Already `grid-cols-2 md:grid-cols-5` — no layout change needed
- Padding fix only (covered in §2)

---

## 5. Services (`src/pages/services/ServiceItem.tsx`)

- Padding fix (covered in §2)
- Title: already uses `text-3xl` — no change needed, reads fine on mobile

---

## 6. Projects (`src/pages/projects/ProjectList.tsx`)

- Already has a mobile-specific stacked 2-line layout via `sm:hidden` / `hidden sm:grid`
- Padding fix only (`px-12` → `px-4 sm:px-12`, `pb-24` → `pb-12 sm:pb-24`)

---

## 7. Contact (`src/pages/contact/ContactHero.tsx` + `index.tsx`)

- `ContactHero`: already `grid-cols-1 lg:grid-cols-2` — stacks correctly on mobile
  - Padding fix + `pt-40` → `pt-28 sm:pt-40`
- `index.tsx`: two sections with `px-12` → `px-4 sm:px-12`

---

## Out of Scope

- Gallery page (not linked in nav yet)
- Contact form internals
- Any visual redesign — this is a responsive fix only, not a design change

---

## Success Criteria

- Nav is navigable on a 375px screen
- No horizontal scrolling on any page
- All text and CTAs are readable and tappable without zooming
- Desktop layout is pixel-identical to current
