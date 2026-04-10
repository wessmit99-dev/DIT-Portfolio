# DIT Portfolio

A portfolio website for a Digital Imaging Technician (DIT) — showcasing on-set work, color pipeline expertise, data management, and technical skills.

## Project Overview

- **Type:** Personal portfolio website
- **Purpose:** Showcase DIT work including color management, data wrangling, LUT creation, and on-set technical roles
- **Status:** Active development — initial build complete

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — tokens defined in `src/index.css` using `@theme {}`)
- **Routing:** React Router v6
- **Design source:** Stitch MCP (project `5456550416105082658` — DIT Film Portfolio)
- **Validation:** `npm run validate <file>` — checks Props interfaces and no hardcoded hex values

## Project Structure

```
src/
├── data/
│   └── mockData.ts         ← ALL editable content lives here (text, projects, services, links)
├── types/
│   └── index.ts            re-exports all TypeScript interfaces
├── hooks/
│   ├── useScrollEffect.ts  nav glassmorphism on scroll
│   ├── useProjectFilter.ts project filter tab logic
│   └── useContactForm.ts   contact form state + validation
├── components/
│   ├── Nav.tsx             fixed, glassmorphism on scroll
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx      variants: primary / ghost / outline
│       ├── Badge.tsx       cyan-tinted label chip
│       └── SectionLabel.tsx
└── pages/
    ├── home/               Hero, SpecsStrip, ServicesTeaser, FeaturedProjects
    ├── services/           ServiceItem, ServicesFooterCTA
    ├── projects/           ProjectsHero, FilterTabs, ProjectGrid, ProjectCard, TechnicalStandards
    └── contact/            ContactHero, ContactForm, ContactInfo

.stitch/designs/            downloaded Stitch HTML + PNG reference files
resources/                  component-template, style-guide, architecture-checklist
scripts/                    fetch-stitch.sh, validate.js
```

## Pages & Routes

| Route | Page | Key sections |
|-------|------|-------------|
| `/` | Home | Hero with bg image, specs strip, services teaser, featured projects grid |
| `/services` | Services | 4 numbered services with tool badges and technical specs |
| `/projects` | Projects | Filterable grid (All / Narrative / Commercial), technical standards |
| `/contact` | Contact | Form (name, email, project type, message) + info panel with coordinates |

## Editing Content

**All text and data is in `src/data/mockData.ts`.** To update the portfolio:

- Change your name/brand → `siteData.nav.brandName`
- Update hero headline/body → `siteData.home.hero`
- Add/edit projects → `siteData.projects.projects[]` (title, category, year, camera, lens, format, imageUrl)
- Update services → `siteData.services.services[]`
- Change contact info → `siteData.contact.infoPanel`, `coordinates`
- Update social links → `siteData.footer.socialLinks`

No component code changes needed for content updates.

## Design System

- **Theme:** Dark — background `#131313`, surfaces `#1c1c1c` → `#353535`
- **Accent:** Cyan `#00e5ff` / `#c3f5ff`
- **Fonts:** Space Grotesk (headlines), Inter (body)
- **Rule:** No 1px borders for section separation — use background color shifts only
- **Nav:** Fixed, glassmorphism (`backdrop-blur: 24px`) kicks in on scroll

## Development Commands

```bash
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build → http://localhost:4173
npm run validate src/[path]  # validate a component (Props interface + no hardcoded hex)
```

## Development Guidelines

- Keep the site fast and lightweight — clients and directors may be viewing on set or on mobile
- Prioritize visual quality; the site itself should reflect an eye for color and composition
- Accessibility matters — ensure contrast ratios and alt text are in place
- All new content goes in `mockData.ts` — never hardcode strings in components
- Every component must have a `Readonly<ComponentNameProps>` TypeScript interface
- No hardcoded hex codes in `className` attributes — use the design system tokens

## Key Terms / Domain Context

- **DIT** — Digital Imaging Technician; responsible for on-set color, data management, and quality control
- **LUT** — Look-Up Table; used to transform or preview color grades on set
- **CDL** — Color Decision List; a standardized format for passing color decisions from set to post
- **Dailies** — same-day viewing copies of footage, often color-corrected for director/client review

## Notes

- Hero background image currently uses a Stitch placeholder. Replace `siteData.home.hero.backgroundImageUrl` with your own production still.
- Project `imageUrl` fields are empty — add your own production stills to `public/` and reference them as `/your-image.jpg`.
- Contact form `handleSubmit` in `src/hooks/useContactForm.ts` uses a mock timeout. Wire up a real endpoint (e.g., Resend, Formspree, or a serverless function) when ready to launch.
