# 7-Day Challenge UI Kit

Recreation of the **7-Day Optimal Breathing Challenge** funnel (`admin-jjruescas/optme-7-day-challenge-breathing`, Vite + React + Tailwind v4).

Uses the **parent Optimizing Me tokens verbatim** (navy `#132E41`, orange `#EF7D13`, periwinkle, pink, peach — defined in the repo's `src/index.css` `@theme`) plus one page-specific accent: **cyan `#5ce1e6`** for hero sub-headlines and kickers. Footer/dark-gradient navy: `#0C1F2D`.

Signature patterns (all in `sections.jsx`, real copy from `src/App.tsx`):
- Sticky navy header with inline event metadata + pill CTA ("Join the Challenge — $30").
- 52/48 hero: black-weight uppercase headline with orange keyword, cyan subline, pill CTA w/ orange glow, live countdown (real component logic from `Countdown.tsx`), pulsing "16 spots remaining", photo panel with layered play button (`0 0 0 12px/24px` orange ring shadow).
- Social-proof bar (4.9★ / 150+ participants / science-grounded).
- Pain grid: 4 photo cards (3:4) with navy gradient overlays.
- Science cards: slate-50, orange top border, numbered chips.
- Process: 5 steps on navy gradient, giant ghost numbers, emoji icons (the repo genuinely uses emoji here).
- Orange mid-CTA band; About JJ (photo + stats row); testimonial cards with orange corner accent; navy pricing card ($30, orange price); final CTA; deep-navy footer.

`assets/` — real repo images: logo-white, hero-jj, jj-profile-opt, phone/coffee/tired/phones pain photos.

Omitted: Vimeo embeds (play buttons are static), GTM/analytics, ThankYou page, testimonial carousel arrows (3 static cards shown).
