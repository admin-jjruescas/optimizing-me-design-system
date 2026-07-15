# Design Tokens — Optimizing Me

Design tokens are the named, atomic decisions of the brand — colors, type, gradients, spacing — defined once here and referenced everywhere else. Components, templates, skills, and agents should reference tokens by **name**, never hardcode raw values.

> **Rule:** If you're about to type `#EF7D13` somewhere, stop — reference `color.orange` instead.

---

## 1. Color Tokens

### Core palette

| Token                | Name        | HEX       | RGB           | Role                                        |
|----------------------|-------------|-----------|---------------|---------------------------------------------|
| `color.navy`         | Navy Blue   | `#132E41` | 19, 46, 65    | **Primary.** Backgrounds, logo, text on light. The brand recognition color — always dominant. |
| `color.orange`       | Orange      | `#EF7D13` | 239, 125, 19  | CTAs, highlights, energy accents            |
| `color.periwinkle`   | Periwinkle  | `#7592BE` | 117, 146, 190 | Supporting elements, icons, soft accents    |
| `color.pink`         | Salmon Pink | `#F09192` | 240, 145, 146 | Warm accents, gradient endpoints            |
| `color.peach`        | Peach       | `#F3DDD0` | 243, 221, 208 | Light backgrounds, soft fills               |
| `color.dark`         | Near Black  | `#222222` | 34, 34, 34    | Body text on light backgrounds              |
| `color.white`        | White       | `#FFFFFF` | 255, 255, 255 | Text on dark, light surfaces                |

### Gradient tokens

All gradients run diagonal (135°).

| Token               | Start → End                                  | Use case                          |
|---------------------|----------------------------------------------|-----------------------------------|
| `gradient.warm`     | `color.pink` → `color.orange`                | Warm, energetic backgrounds       |
| `gradient.dynamic`  | `color.orange` → `color.periwinkle`          | Transitional, dynamic             |
| `gradient.cool`     | `color.periwinkle` → `color.navy`            | Cool, professional backgrounds    |
| `gradient.bold`     | `color.navy` → `color.pink`                  | Bold contrast, statement pieces   |
| `gradient.soft`     | `color.pink` → `color.peach`                 | Soft, light, approachable         |

### Combination rules

| Background                  | Text                          | Accents                              | Logo         |
|-----------------------------|-------------------------------|--------------------------------------|--------------|
| Navy (`color.navy`)         | White or Peach                | Orange or Periwinkle                 | White version|
| White / Peach               | Navy or Near Black            | Orange or Salmon Pink                | Blue version |
| Orange (`color.orange`)     | White or Navy                 | — (avoid Pink text: low contrast)    | White version|

**Accessibility:** Palette verified for color vision deficiency compatibility (Adobe Color). Navy-on-White and White-on-Navy both meet WCAG AA.

---

## 2. Typography Tokens

| Token             | Font                 | Role       | Use for                                      |
|-------------------|----------------------|------------|-----------------------------------------------|
| `type.hero`       | TT Phobos            | Highlights | Hero text, accent callouts, statement pieces  |
| `type.heading`    | Montserrat Regular   | Titles     | Section headings, subheadings                 |
| `type.emphasis`   | Montserrat Bold      | Support    | Body emphasis, buttons, labels                |

**Web/digital fallback:** Where TT Phobos is unavailable, `type.hero` falls back to Montserrat Bold / Extra Bold (Google Fonts).

> **Licensing:** the TT Phobos binaries in `assets/fonts/` are **TRIAL-license** — fine for exploration/mocks, NOT for commercial production. Buy the license at TypeType and swap the files (same paths) before shipping. Body/UI stays Montserrat; Phobos is highlights/titles only.

Font stack for CSS (as defined in `tokens/typography.css`):
```css
--font-display: 'TT Phobos', 'Montserrat', ui-sans-serif, system-ui, sans-serif;
--font-sans: 'Montserrat', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
```

---

## 3. Logo Tokens

Files live in `assets/logos/`.

| Token                    | File                            | Use on              |
|--------------------------|---------------------------------|---------------------|
| `logo.primary.light-bg`  | `logo-jj-tagline-blue.png`      | Light backgrounds   |
| `logo.primary.dark-bg`   | `logo-jj-tagline-white.png`     | Dark backgrounds    |
| `logo.symbol.blue`       | `symbol-blue.png`       | Icons, favicons     |
| `logo.symbol.white`      | `symbol-white.png`           | Dark overlays       |
| `logo.om.dark`           | `logo-optimizing-me-dark.png`   | Light backgrounds   |
| `logo.om.white`          | `logo-optimizing-me-white.png`  | Dark backgrounds    |
| `logo.stack`             | `logo-vertical-stack.png`       | Compact spaces      |

---

## 4. CSS Custom Properties — machine-readable source

**Do not copy-paste token values.** The machine-readable truth is `styles.css`, which `@import`s everything under `tokens/`:

- `tokens/colors.css` — brand palette, navy/orange/periwinkle/peach scales, semantic aliases (`--bg-page`, `--text-body`, `--accent`, …), and the six HumanOps pillar colors
- `tokens/typography.css` — `--font-display` / `--font-sans`, weights, type scale (`--fs-hero` 64px → `--fs-micro` 12px), line heights, tracking
- `tokens/spacing.css` — 4px-grid `--space-1…10`, layout (`--container-max: 1200px`, `--section-y: 96px`)
- `tokens/effects.css` — radii, shadows, motion
- `tokens/fonts.css` — `@font-face` for TT Phobos
- `tokens/theme-dark.css` — `.theme-dark` scope remapping semantic aliases

Web projects link `styles.css` and use the variables — never raw hex.

---

## 5. Spacing & Shape Tokens

| Token            | Value   | Notes                                         |
|------------------|---------|-----------------------------------------------|
| `radius.pill`    | `999px` | Buttons, chips, the white pill boxes from IG carousels |
| `radius.card`    | `22px`  | Card corner radius                            |
| `space.unit`     | `4px`   | Base spacing grid (`--space-1: 4px` … `--space-10: 128px`) |
| `space.section`  | `96px`  | Vertical rhythm between sections (`--section-y`) |

---

*Canonical source: this repo. If any other document disagrees, this file wins. Log every change in [CHANGELOG.md](CHANGELOG.md).*
