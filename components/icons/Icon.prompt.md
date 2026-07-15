**Icon** — the brand's curated outline glyph set (2px stroke, rounded joins, Lucide idiom). Inherits `currentColor`.

```jsx
<Icon name="wind" size={24} />
<Icon name="arrow-right" size={18} color="var(--accent)" />
<span style={{color:'var(--brand-periwinkle)'}}><Icon name="brain"/></span>
```

- Names: wind, heart, activity, lightbulb, apple, moon, arrow-right/left, menu, x, check, mail, play, sparkles, clock, users, chevron-down/up/right, brain, infinity, calendar, quote, mic, video.
- Never mix in filled icons or emoji; extend the set in `Icon.jsx` with matching stroke style.
