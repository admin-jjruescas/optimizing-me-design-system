# Resetea Tu Sistema (Bolivia) UI Kit

Recreation of the **Resetea Tu Sistema** Bolivia events page (`admin-jjruescas/resetea-tu-sistema-bolivia`, Vite + React + Tailwind v4). Spanish-language, in-person breathwork events (La Paz + Santa Cruz, Agosto 2026).

## Tokens & patterns (from the repo)
- `brand-blue #132F44`, `brand-orange #F57F01`, `brand-grey #E6E6E6` (IGNITE-family palette, NOT the parent `#132E41/#EF7D13`).
- **City variants**: La Paz = orange, Santa Cruz = **green** (`green` CityVariant in `src/data/event.ts`).
- Hero: video loop (poster used here) under a **triple brand-blue scrim** (right 75%→0, top 80%→0, bottom 45%→0) + text-shadow — exact recipe from `HeroBackground.tsx`.
- Motion: `reveal` fade-up on scroll (0.7s cubic-bezier(0.22,1,0.36,1)), 12s `hero-float`, 8s Ken Burns on gallery, promo banner drop-in + shine — all defined in the repo's `index.css` (reference kept in this README).
- 12-16px radii (rounded-xl/2xl), NOT pills.

## Real data (from `src/data/event.ts`)
- 3 events: La Paz Dom 9 Ago 9:00 (Círculo Aeronáutico), Santa Cruz Jue 13 + Jue 20 Ago 18:30 (Hotel Camino Real); 200/ciudad.
- Pricing tiers Preventa/Regular × Individual/Parejas/Grupal (Bs 149–290).
- 5-block program timeline (Registro → Somática → Introducción → Breathwork 60 min → Integración).
- Facilitator bio copy verbatim.

`assets/` — real repo files: hero-loop-poster.jpg, jj-ruescas-2.webp, sharon-rahman.jpg.
Omitted: sponsors page/marquee (18 sponsor logos in repo), video testimonials, past-event gallery, promo banner.
