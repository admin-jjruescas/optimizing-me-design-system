**Logo** — the official Optimizing Me / JJ Ruescas lockups, rendered from real PNG art (never redrawn). Use on title screens, headers, and footers.

```jsx
<Logo variant="jj-tagline" background="light" height={48} assetBase="../../assets" />
<Logo variant="symbol" background="dark" height={40} assetBase="../../assets" />
```

- `variant`: `jj-tagline` (default parent brand), `optimizing-me` (program/service content), `vertical` (compact), `symbol` (corner watermark / favicon).
- `background`: `light` → blue tone, `dark` → white tone (or set `tone` explicitly).
- Always pass `assetBase` pointing at the design system's `assets/` dir from your page.
