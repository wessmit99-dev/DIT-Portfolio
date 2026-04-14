# Tools Grid — Home Page Section

## Context
Replace the ServicesTeaser section on the home page with a "Workflow Tools" grid that showcases the apps and software used on set. Gives visitors an immediate read on technical competency without navigating to the Services page.

## Design

### Layout
- Full-width section, background `#1c1c1c` (matches existing surface token)
- Section label: `WORKFLOW TOOLS` using existing `SectionLabel` component
- 5-column grid on desktop (`md:grid-cols-5`), 2-column on mobile (`grid-cols-2`)
- Text-only for now — icon slots deferred until logos are available

### Each Tool Cell
- **Name:** Space Grotesk, bold, white
- **One-liner:** Inter, small, muted gray (`#a0a0a0`)
- No card borders — whitespace does the separation

### Tools & One-liners
| Tool | One-liner |
|------|-----------|
| Pomfort LiveGrade | Real-time on-set color grading |
| Pomfort Silverstack | Data offload, QC and media management |
| Pomfort ReelTime | Live wireless monitoring and set communication |
| DaVinci Resolve | Color grading and dailies output |
| Nobe Omniscope | Real-time signal analysis and waveform monitoring |
| CameraKit | Camera metadata and lens data logging |
| LensKit | Lens profiling and distortion mapping |
| Arri Companion | ARRI camera control and metadata |
| Disk Catalog Maker | Media catalog and archive indexing |
| Parashoot | Camera card formatting |

## Files

### New
- `src/pages/home/ToolsGrid.tsx` — new component

### Modified
- `src/data/mockData.ts` — add `ToolsGridItem`, `ToolsGridData` interfaces + `home.toolsGrid` data; remove `ServicesTeaserItem`, `ServicesTeaserData`, `home.servicesTeaser`
- `src/types/index.ts` — swap ServicesTeaser exports for ToolsGrid exports
- `src/pages/home/index.tsx` — replace `<ServicesTeaser>` with `<ToolsGrid>`

### Deleted
- `src/pages/home/ServicesTeaser.tsx`

## Verification
- `npm run dev` — home page shows Hero → ToolsGrid → Footer
- All 10 tools visible, 5-col desktop / 2-col mobile
- `npm run build` — clean build, no type errors
