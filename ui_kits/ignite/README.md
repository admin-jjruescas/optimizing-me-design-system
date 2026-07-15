# IGNITE UI Kit

Recreation of the **IGNITE Accelerator** landing page from the real codebase (`admin-jjruescas/ignite-website`, Next.js + Tailwind).

**IGNITE is a sub-brand with its own tokens** (from `tailwind.config.ts` + `brand-guidelines/brand-guidelines.md`), deliberately different from the parent Optimizing Me system:
- Blue `#132F44` (vs parent navy `#132E41`), Orange `#F57F01` (vs `#EF7D13`), Grey `#E6E6E6`, Dark `#2C2C2C`, Light Orange `#FFE5CC`, Medium Grey `#666666`.
- **8px border-radius buttons** (NOT pills), orange glow shadow on primary CTAs, hover scale 1.05 / active 0.95.
- Montserrat; hero 60px/700, sections 42px/600·800, body 16-18px/1.6-1.8.
- 8px spacing base; sections `py-128px`; container 1200px, content 800px.
- Lucide icons (the repo's real icon lib, loaded from CDN here).
- Tagline: "Curiosity. Learning. Kaizen." Logo: rocket in circular frame (`assets/ignite-logo.png`, real asset).

## Files
- `index.html` — full landing: fixed header (transparent → white on scroll), photo hero w/ dark gradient overlay + urgency badge, Problem (6 pain-point cards, alternating `#FFE5CC`), IGNITE Framework (3 phase cards w/ corner number badge), Pricing ($1,100 single tier + gradient guarantee card), FAQ accordion, blue footer.
- `primitives.jsx` — `IG` token object, `IgButton` (primary/secondary/tertiary), `Lucide` icon wrapper.
- `sections.jsx` — all sections with REAL copy from `lib/constants.ts` (pain points, phases, features, FAQs, testimonials).
- `assets/` — real repo assets: logo, hero background, founder + testimonial photos, cohort Zoom screenshot.

Omitted (present in repo, out of scope for a single-screen kit): WeeklySchedule calendar, FounderStory, SocialProof carousel, WhoThisIsFor, workshop pages, waitlist/contact forms.
