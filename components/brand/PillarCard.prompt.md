**PillarCard** — presents one of the six HumanOps pillars with a colored outline-icon badge, title, and description. Use in a 2×3 or 3×2 grid to map the framework.

```jsx
<PillarCard pillar="respiration" title="Respiration" description="Breathwork to down-regulate the nervous system." icon={<WindIcon/>} />
```

- `pillar` sets the badge color from the HumanOps palette (blue loop: respiration/emotions/movement; orange loop: nutrition/mindset/recovery).
- Pass outline SVG icons (Lucide/Phosphor outline) — never filled glyphs.
