---
name: optimizing-me-design
description: Use this skill to generate well-branded interfaces and assets for Optimizing Me / JJ Ruescas (Human Optimization — nervous system, breathwork, personal development, AI), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast facts
- **Brand:** Optimizing Me (EN) / Optimizando.me (ES), by JJ Ruescas, Human Optimization Strategist. Mission: human optimization, one human at a time. Philosophy: Kaizen, 1% better every day.
- **Colors:** Navy `#132E41` (dominant), Orange `#EF7D13` (energy/CTA, sparing), Periwinkle `#7592BE`, Salmon Pink `#F09192`, Peach `#F3DDD0`, Near-black `#222222` (body).
- **Type:** Montserrat (Google Fonts). Hero/display = weight 800–900. Uppercase eyebrow labels tracked `0.14em`.
- **Voice:** first-person, science-grounded, systems/tech analogies (nervous system = OS). No spiritual jargon, no emoji, no hype.
- **Bilingual:** EN (Optimizing Me) and ES (Optimizando.me). Use the copy glossary in README.md — brand keywords like Estrés, Sistema Nervioso, Alto Rendimiento, Liderazgo must use the brand's exact ES terms; Coaching/Mindfulness/Breathwork stay untranslated in ES copy.
- **Icons:** outline only (~2px), Lucide/Phosphor idiom.
- **Look:** navy-dominant, generous whitespace, rounded/organic, pill buttons, soft shadows, blob photo masks, spiral-vortex accents, calm motion (no bounce).

## Where things are
- `styles.css` → link this for all tokens + fonts.
- `tokens/` → colors, typography, spacing, effects CSS custom properties.
- `assets/` → logos, JJ photos, HumanOps diagram (copy these into your artifact; never redraw the logo).
- `components/` → React primitives (Logo, Eyebrow, PillarCard, Button, IconButton, Badge, Tag, Card, Stat, Testimonial, Input, Textarea, Select, RadioGroup, Checkbox, Switch, Tabs, Accordion, Dialog, Toast, Avatar, PricingCard, Icon).
- `ui_kits/website/` → full marketing-site recreation to reference/fork.
- `slides/` → Instagram 1080×1080 template slides.

## Notes
- **TT Phobos** (display/highlights) is wired in via `tokens/fonts.css` + `assets/fonts/` — TRIAL license: fine for mocks, must be licensed before commercial production. Body/UI type is Montserrat.
- Always render the logo from the real PNGs in `assets/logos/` — never reconstruct the infinity mark by hand.
