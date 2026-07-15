# O2 Reset Barcelona UI Kit

This is the **REAL page** from `admin-jjruescas/optme-o2r-barcelona` (`o2-reset-barcelona.html`) — a GoHighLevel-deployed static event page — not a recreation. Changes made for the kit: GHL `{{TOKENS}}` filled with sample values (Sep 14 2026, 30€ early bird), GTM/GA4/Meta-Pixel scripts and the deployment-notes comment removed, portrait path pointed at `assets/`.

## Design notes (event sub-brand, Spanish)
- Parent palette + **cream `#FAF6F0`** page background and `--navy-deep #0B1E2C`.
- **Serif display type** for the "O₂ RESET Barcelona" wordmark (high-contrast editorial serif, orange + navy) — the only surface in the family using serif display.
- **Breathing rhythm animation**: 8s scale cycle (`--breath-duration: 8s`, scale 1→1.06) — UI elements literally breathe.
- Orange countdown band (early-bird urgency), pill CTAs, WhatsApp floating button, fade-in-on-scroll.
- `global-reference.css` — the repo's unused-but-canonical stylesheet, kept for token reference.

Assets: `assets/jj-portrait.jpeg`, `assets/logo-blanco.png` (real). Additional event photos from the repo live in the shared `assets/photos/events/`.
