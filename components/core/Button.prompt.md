**Button** — pill-shaped action button. Orange `primary` for the main CTA (use sparingly), navy `secondary` for supporting actions, `outline`/`ghost` for tertiary, `on-dark` when placed on a navy section.

```jsx
<Button variant="primary" size="lg">Start optimizing</Button>
<Button variant="outline" iconEnd={<ArrowRight/>}>Learn the framework</Button>
<Button variant="on-dark">Book a call</Button>
```

- Sizes: `sm` / `md` (default) / `lg`. `fullWidth` for stacked mobile CTAs.
- Only one orange primary per view — it's the energy accent.
