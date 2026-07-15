# Website UI Kit — Optimizing Me

A high-fidelity recreation of the Optimizing Me / JJ Ruescas marketing site, built entirely from the design-system tokens and components.

## Files
- `index.html` — entry point. Loads `styles.css`, the compiled `_ds_bundle.js`, then `icons.jsx` and `parts.jsx`, and mounts `<Site/>`.
- `icons.jsx` — shared outline icon set (2px stroke), exported to `window.Icons`.
- `parts.jsx` — all page sections composed into `<Site/>`: `Header`, `Hero`, `Framework`, `Programs`, `Testimonials`, `Contact`, `Footer`.

## Sections & interactions
- **Header** — sticky, blurred; EN/ES language toggle (rewrites hero + nav copy); responsive hamburger menu.
- **Hero** — navy, radial accent, JJ portrait in a biomorphic blob mask, Kaizen stat row.
- **Framework** — the HumanOps Infinite Loop diagram + six `PillarCard`s.
- **Programs** — filterable program cards (All / Coaching / Breathwork / AI & Tech) using `Tag` + `Card` + `Badge`.
- **Testimonials** — dark `Testimonial` cards.
- **Contact** — the "Weekly 1%" newsletter form; submit swaps to a success state.
- **Footer** — navy, white logo, link columns.

## Components used
Button, IconButton, Badge, Tag, Card, Stat, Testimonial, Logo, Eyebrow, PillarCard, Input, Checkbox.

Note: this is a plausible brand-accurate recreation — no production website codebase was provided, so structure/content are illustrative of how the brand and components combine, not a 1:1 copy of a live site.
