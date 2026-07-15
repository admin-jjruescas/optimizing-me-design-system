import React from 'react';

// Curated brand glyph set — outline, 2px stroke, rounded joins (Lucide idiom).
// Add new glyphs here as <path>/<g> JSX; never use filled icons.
const GLYPHS = {
  wind: <g><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></g>,
  heart: <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>,
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
  lightbulb: <g><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/></g>,
  apple: <g><path d="M12 8c-2-3-6-2-6 2 0 5 3 10 6 10s6-5 6-10c0-4-4-5-6-2Z"/><path d="M12 8c0-2 1-4 3-4"/></g>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>,
  'arrow-right': <g><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></g>,
  'arrow-left': <g><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></g>,
  menu: <g><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></g>,
  x: <g><path d="M18 6 6 18"/><path d="M6 6l12 12"/></g>,
  check: <path d="M20 6 9 17l-5-5"/>,
  mail: <g><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></g>,
  play: <polygon points="6 4 20 12 6 20 6 4"/>,
  sparkles: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>,
  clock: <g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
  users: <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/></g>,
  'chevron-down': <path d="m6 9 6 6 6-6"/>,
  'chevron-up': <path d="m18 15-6-6-6 6"/>,
  'chevron-right': <path d="m9 18 6-6-6-6"/>,
  brain: <g><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4.5 17.5c0-.66.26-1.27.68-1.72A2.5 2.5 0 0 1 3.5 13c0-1 .59-1.85 1.44-2.25A2.5 2.5 0 0 1 4.5 8.5c0-1.21.86-2.22 2-2.45A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.54-2.44c0-.66-.26-1.27-.68-1.72A2.5 2.5 0 0 0 20.5 13c0-1-.59-1.85-1.44-2.25a2.5 2.5 0 0 0 .44-2.25c0-1.21-.86-2.22-2-2.45A2.5 2.5 0 0 0 14.5 2Z"/></g>,
  infinity: <path d="M12 12c-2-2.7-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.3 6-4Zm0 0c2 2.7 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.3-6 4Z"/>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></g>,
  quote: <path d="M8 11c0-2.5 1.5-4.5 4-5.5M8 11a3 3 0 1 0 3 3v-3H8Zm9 0c0-2.5 1.5-4.5 4-5.5M17 11a3 3 0 1 0 3 3v-3h-3Z"/>,
  mic: <g><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/></g>,
  video: <g><path d="m16 10 6-4v12l-6-4"/><rect x="2" y="6" width="14" height="12" rx="2"/></g>,
};

/**
 * Brand icon — a curated outline glyph set (2px stroke, rounded joins,
 * Lucide idiom). Colors via currentColor; wrap in a colored element or pass `color`.
 */
export function Icon({ name = 'infinity', size = 22, strokeWidth = 2, color = 'currentColor', style = {}, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', flex: '0 0 auto', ...style }} aria-hidden="true" {...rest}>
      {GLYPHS[name] || GLYPHS.infinity}
    </svg>
  );
}
