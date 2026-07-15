// Shared outline icons for the Optimizing Me website kit.
// Outline style, 2px stroke — matches brand iconography (Lucide/Phosphor family).
const Icon = ({ d, size = 22, stroke = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

const Icons = {
  wind: (p) => <Icon {...p} d={<g><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></g>}/>,
  heart: (p) => <Icon {...p} d={<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>}/>,
  activity: (p) => <Icon {...p} d={<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>}/>,
  bulb: (p) => <Icon {...p} d={<g><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/></g>}/>,
  apple: (p) => <Icon {...p} d={<g><path d="M12 8c-2-3-6-2-6 2 0 5 3 10 6 10s6-5 6-10c0-4-4-5-6-2Z"/><path d="M12 8c0-2 1-4 3-4"/></g>}/>,
  moon: (p) => <Icon {...p} d={<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>}/>,
  arrow: (p) => <Icon {...p} d={<g><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></g>}/>,
  menu: (p) => <Icon {...p} d={<g><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></g>}/>,
  close: (p) => <Icon {...p} d={<g><path d="M18 6 6 18"/><path d="M6 6l12 12"/></g>}/>,
  check: (p) => <Icon {...p} d={<path d="M20 6 9 17l-5-5"/>}/>,
  mail: (p) => <Icon {...p} d={<g><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></g>}/>,
  play: (p) => <Icon {...p} d={<polygon points="6 4 20 12 6 20 6 4"/>}/>,
  spark: (p) => <Icon {...p} d={<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>}/>,
  clock: (p) => <Icon {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>}/>,
  users: (p) => <Icon {...p} d={<g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/></g>}/>,
};
Object.assign(window, { Icon, Icons });
