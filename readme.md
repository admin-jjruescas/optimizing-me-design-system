# Optimizing Me — Design System

The canonical source of truth for the Optimizing Me / JJ Ruescas brand and design system. If a spec here conflicts with any other document, slide, Notion page, or memory — **this repo wins**.

## What lives here

```
optimizing-me-design-system/
├── readme.md          ← You are here. Rules, usage, and the full system manifest.
├── tokens.md          ← Human-readable token reference: colors, type, gradients, spacing.
├── styles.css         ← Machine-readable entry point — @imports everything in tokens/.
├── tokens/            ← CSS token files (colors, typography, spacing, effects, fonts, dark theme).
├── components/        ← Reusable components (brand, core, forms, navigation, feedback, marketing, icons).
├── assets/            ← Logos, fonts (TT Phobos, trial license), photos, patterns, diagrams.
├── guidelines/        ← Foundation specimen cards + product-ecosystem map.
├── ui_kits/           ← Site recreations (website, ignite, 7-day-challenge, o2-reset, humanos, resetea-bolivia).
├── templates/         ← Starting templates (landing page, IG carousel EN/ES, talk deck).
├── slides/            ← IG carousel / story / banner slide patterns.
├── SKILL.md           ← Agent-Skill entry for AI use.
└── CHANGELOG.md       ← Every change, dated, with the reason why.
```

## How to use this repo

**Humans (team, contractors, collaborators):**
1. Need a color, font, or logo? Check `tokens.md` first (`styles.css` + `tokens/` for the CSS).
2. Building something with buttons, cards, or slides? Check `components/` and `templates/`.
3. Need the actual logo files, fonts, or photos? They're in `assets/`.
4. Never copy a spec into another document as "the source." Link back here instead.

**AI agents & skills (Claude Code, Hermes, subagents):**
- This repo is the canonical design reference. Load `tokens.md` for any visual task.
- The `brand-identity` skill provides quick-reference essentials; this repo holds the full, current truth. When they disagree, this repo is correct — and the skill should be updated.

## Rules of the road

1. **Only approved specs enter this repo.** Work-in-progress lives in Claude Design (or wherever you're exploring). When a decision is final, it gets committed here.
2. **Every change gets a commit message explaining *why*.** Not "updated tokens" but "Softened peach fill for better contrast on amber backgrounds." The changelog is our institutional memory of brand decisions.
3. **No secondary color ever dominates Navy.** Navy `#132E41` is the brand recognition color. Everything else supports it.
4. **One truth, no mirrors.** If a summary of this system lives elsewhere (Notion, a deck), it must say "canonical version: [this repo]" and never be edited independently.

## Brand essence

Brand and product design system for **Optimizing Me / JJ Ruescas** — practical personal & professional development built on the nervous system, breathwork, and a little AI. Mission: *contribute to human optimization, one human at a time.* Philosophy: **Kaizen — improve 1% every day.**

- **English brand:** Optimizing Me — *by JJ Ruescas*
- **Spanish brand:** Optimizando.me — *por JJ Ruescas*
- **Personal / parent brand:** JJ Ruescas — *Human Optimization Strategist*
- **Domain:** optimizando.me

The brand is **modern, scientific, with a hint of philosophical and mystical** — grounded in science, never in spiritual jargon.

---

## Sources
This system was built from the attached brand-guide package:
- `OptMe-Brandguides/optme-brand-guide-v1.skill` — a bundled `brand-identity` skill (unzipped) containing: `brand-foundation.md`, `color-palette.md`, `typography.md`, `logo-usage.md`, `visual-elements.md`, `photography.md`, plus logo/photo/diagram assets.
- `OptMe-Brandguides/jj_ruescas_brandguideline.pdf` — the source brand guideline PDF (not parsed here; the `.skill` content supersedes it).
- Logo, portrait, and HumanOps diagram PNG/JPGs (copied into `assets/`).

No product codebase or Figma file was provided — the Website UI kit and Slides are **brand-accurate recreations** demonstrating how the tokens + components combine, not 1:1 copies of a live product.

---

## Content Fundamentals

**Voice:** first-person, conversational authority — JJ speaks as a peer who's done the work, not a guru. Science-grounded; every claim ties to research or a measurable outcome.

- **Casing:** Sentence case for headlines and body. UPPERCASE only for wide-tracked eyebrow labels and the "JJ RUESCAS" logotype.
- **Person:** "I / you" — direct address. "*I help high performers optimize…*", "*Optimize your 1%.*"
- **Systems analogies are the signature move:** nervous system = operating system, body = hardware, habits = software, breathwork = a system reboot.
- **"Optimize" is the keyword** — use it naturally: *optimize your breathing, optimizing recovery.*
- **Rhythm:** short punchy sentences mixed with longer ones. Punchy statements land hardest.
- **No emoji** in brand copy. No spiritual jargon ("energy healing", "vibrational frequency", "awakening"). No hype, no dumbing down.
- **Bilingual:** default English; lead with the primary audience's language. Spanish uses *Optimizando.me*.

Example copy: *"You are an interconnected system. Optimize one area and it feeds the others."* · *"A small change made consistently beats a big change made once."*

### Bilingual copy glossary (use these exact terms)
Default to English for international/professional audiences; Spanish (**Optimizando.me**) for the LATAM community. Never machine-translate literally — use the brand's own vocabulary:

- Estrés · Stress
- Ansiedad · Anxiety
- Burnout · Burnout (same word in both)
- Salud mental · Mental health
- Respiración / Breathwork · Breathwork (ES copy may keep the English "breathwork" as a technique name)
- Sistema Nervioso · Nervous System (title case when naming the framework pillar)
- Mindfulness · Mindfulness (untranslated in ES copy)
- Desarrollo personal · Personal development
- Productividad · Productivity
- Liderazgo · Leadership
- Emprendimiento · Entrepreneurship
- Coaching · Coaching (untranslated)
- Alto Rendimiento · High Performance
- Inteligencia emocional · Emotional intelligence
- Psicología · Psychology
- Bienestar · Well-being
- Movimiento · Movement
- IA / AI · AI (ES copy may use either; "IA" in formal text)
- Tecnología · Technology
- Agilidad · Agility
- Optimización · Optimization

Signature phrases: **"Optimiza tu 1%, cada día."** / **"Optimize your 1%, every day."** · **"Un humano a la vez."** / **"One human at a time."** · **"Pequeño, consistente, estratégico."** / **"Small, consistent, strategic."**

---

## Visual Foundations

- **Colors:** Navy (`#132E41`) dominates — most surfaces are navy or white/cream. **Orange (`#EF7D13`) is energy** — CTAs, highlights, one accent per view, used sparingly. Periwinkle, salmon pink, and peach are soft supporting accents. Near-black (`#222222`) for body text on light. **Dark scope:** wrap any section in `.theme-dark` (or `data-theme="dark"`) to remap the semantic aliases (navy surfaces, peach body text, hover lightens) — see `tokens/theme-dark.css`.
- **Gradients:** five official diagonal (135°) gradients — warm, dynamic, cool, bold, soft. Used for backgrounds/overlays, never behind body text.
- **Type:** Montserrat everywhere (Google Fonts). Display/hero at weight 800–900 (the digital fallback for the print "Phobos" font). Generous letter-spacing on uppercase labels (`0.14em`) echoing the tracked logotype; tight tracking on big display.
- **Backgrounds:** solid navy or warm cream — **not** busy. Signature decoration is the **spiral vortex** (fine spirograph lines radiating from a point — reusable SVGs in `assets/patterns/spiral-vortex-{white,navy,periwinkle}.svg`, use at 8–20% opacity, anchored off-canvas corner) and **biomorphic blob** photo masks, both derived from the infinity motif. Shapes are subtle support, never focal.
- **Photography:** warm, natural, authentic; neutral backgrounds; 3/4 face turn. Preferred treatment is blob-mask or rounded rectangle — never sharp full-bleed rectangles. No heavy filters. Navy overlay at 20–40% when text sits on a photo.
- **Layout:** generous whitespace, asymmetric balance, rounded/organic over sharp. Breathable and open.
- **Corner radii:** rounded throughout — cards `22px`, buttons and chips fully pill (`999px`).
- **Cards:** white surface, `22px` radius, soft low-contrast shadow, hairline border; optional colored top-border accent. Dark cards are navy with a translucent white border and no shadow.
- **Shadows:** soft and low-contrast (brand avoids strong contrasts). `shadow-sm/md/lg`, plus an orange `shadow-accent` under primary buttons.
- **Motion:** calm, nervous-system-regulating — no bounce. Standard/ease-out curves, 140–420ms. Hover = subtle 1px lift + color shift; press = settle back to baseline (no aggressive shrink). Buttons darken on hover.
- **Transparency & blur:** sparingly — the sticky header uses a cream blur; dark overlays use navy at 20–40%.

---

## Iconography

- **Outline style only**, ~2px stroke (the guide specifies a 5pt feel at large sizes). Navy or periwinkle. **Never filled/solid** glyphs.
- No built-in brand icon font ships with the guides. The kit uses a **small hand-picked outline set** (in `ui_kits/website/icons.jsx`) drawn in the Lucide/Phosphor-outline idiom. **Substitution flagged:** if you need a broader icon library, use **Lucide** or **Phosphor (outline)** from CDN — they match the stroke weight and rounded joins.
- Icons may sit inside a periwinkle circular badge (see `PillarCard`).
- The HumanOps diagram (`assets/diagrams/humanops-infinite-loop.png`) uses its own white outline glyphs — treat it as a fixed illustration, not editable icons.
- **No emoji.** Unicode is used only for typographic marks (e.g. curly quotes `“ ”`).

---

## Fonts — licensing note
**TT Phobos (TypeType)** is now wired in as `--font-display` (7 weights in `assets/fonts/`, `@font-face` in `tokens/fonts.css`) — but these are **TRIAL-license binaries**: fine for design exploration/mocks, NOT licensed for commercial production. Buy the license at TypeType and swap the files (same paths) before shipping. Body/UI type stays Montserrat per the brand guide (Phobos = highlights/titles only).

---

## Logo rules (from the brand guideline PDF)
- **Minimum size:** 3cm print / **85px digital** — never render a lockup smaller.
- **Clear space:** keep a margin around the logo equal to the height of the letter “J” in the logotype.
- **Monochromatic versions** exist but are for exceptional situations only (single-color print, engraving); default to the blue/white lockups.
- **Secondary lockup pattern:** program/initiative logos follow “<Name> BY Optimizing.me” / “<Nombre> POR Optimizando.me”.

## Photography — avoid / repeat (PDF pp. 22–23)
- **Repeat:** balanced lighting, neutral backgrounds, faces & audience reactions in view, positive balanced-neutral expression, open confident body language.
- **Avoid:** non-uniform lighting, very strong contrasts, disproportional composition, submissive posture, hidden faces, full-profile angles.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — `logos/`, `photos/`, `diagrams/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- `components/` — reusable primitives (below).
- `ui_kits/website/` — marketing site recreation.
- `templates/` — starting templates for consuming projects: `landing-page/` (full marketing landing), `ig-carousel/` (5-slide 1080×1080 IG carousel, EN), `ig-carousel-es/` (carrusel en español), `talk-deck/` (6-slide 16:9 presentation).
- `slides/` — Instagram carousel template slides (1080×1080).
- `SKILL.md` — Agent-Skill entry for downloadable use.

**Components** (`window.OptimizingMeDesignSystem_7c7534`)
- **brand/** — `Logo`, `Eyebrow`, `PillarCard`
- **core/** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Stat`, `Testimonial`
- **forms/** — `Input`, `Textarea`, `Select`, `RadioGroup`, `Checkbox`, `Switch`
- **navigation/** — `Tabs`, `Accordion`
- **feedback/** — `Dialog`, `Toast`, `Avatar`
- **marketing/** — `PricingCard`
- **icons/** — `Icon` (curated outline glyph set, Lucide idiom — use this instead of hand-rolled SVGs)

*(These are an authored standard set sized to the brand — no component inventory was supplied by the source. `Logo`, `Eyebrow`, `PillarCard`, `Stat`, and `Testimonial` are intentional brand-specific additions: the Logo renders the real PNG lockups, PillarCard maps the six HumanOps pillars, and Eyebrow/Stat/Testimonial encode recurring brand layouts.)*

**Logos** (`assets/logos/`): `logo-jj-tagline-blue/white`, `logo-optimizing-me-dark/white`, `logo-vertical-stack`, `symbol-blue/white`.
**Photos** (`assets/photos/`): `jj-portrait-square-red`, `jj-portrait-gray-tee`.
**Diagram** (`assets/diagrams/`): `humanops-infinite-loop`.

**UI kits**
- `ui_kits/website/` — illustrative parent-brand marketing site (pre-dates repo access).
- `ui_kits/ignite/` — IGNITE Accelerator landing, recreated from the real `ignite-website` repo (own sub-brand: #132F44/#F57F01, 8px radii).
- `ui_kits/7-day-challenge/` — 7-Day Breathing Challenge funnel, recreated from `optme-7-day-challenge-breathing` (parent tokens + cyan #5ce1e6 accent).
- `ui_kits/o2-reset-barcelona/` — the REAL static page from `optme-o2r-barcelona` (Spanish event page, cream bg, serif display, breathing animation).
- `ui_kits/humanos/` — the REAL static page from `humanos-website` (dark AI sub-brand; EN; references Phobos webfont — binary not in repo).
- `ui_kits/resetea-bolivia/` — Resetea Tu Sistema Bolivia events, recreated from `resetea-tu-sistema-bolivia` (IGNITE palette + green city variant; Spanish).
- See `guidelines/product-ecosystem.md` for the full product map, live-page copy, and sub-brand palette table.

**Slides** — `slides/01–05`: Dark Hero, Split Orange/Navy, Photo + blob, Quote card, CTA close (1080×1080 IG patterns); `slides/06` Story/Reel 1080×1920; `slides/07` LinkedIn banner 1200×627.


---

## Maintainers

- JJ Ruescas (owner, final approval on all brand decisions)
- [Add team members with write access]

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full history of design decisions.

