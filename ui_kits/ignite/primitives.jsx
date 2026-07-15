// IGNITE — sub-brand tokens & primitives recreated from ignite-website repo
// (tailwind.config.ts + brand-guidelines.md). NOT the parent OptMe tokens:
// IGNITE uses blue #132F44, orange #F57F01, 8px radius, Montserrat.
const IG = {
  blue: '#132F44', orange: '#F57F01', orangeHover: '#D46F01', grey: '#E6E6E6',
  dark: '#2C2C2C', lightOrange: '#FFE5CC', medGrey: '#666666',
  gradOrange: 'linear-gradient(135deg, #F57F01 0%, #FF9A3C 100%)',
  gradBlue: 'linear-gradient(135deg, #132F44 0%, #1A4663 100%)',
  shadowCard: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
  shadowCardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
  glowOrange: '0 0 20px rgba(245,127,1,0.3), 0 0 40px rgba(245,127,1,0.1)',
};
const igFont = "'Montserrat', system-ui, sans-serif";

function IgButton({ variant = 'primary', size = 'md', children, style = {}, ...rest }) {
  const sizes = { sm: '8px 16px', md: '16px 32px', lg: '20px 40px' };
  const fs = { sm: 14, md: 16, lg: 18 };
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: igFont, fontWeight: 600, fontSize: fs[size], borderRadius: 8,
    padding: sizes[size], cursor: 'pointer', transition: 'all 300ms',
    border: '2px solid transparent',
  };
  const variants = {
    primary: { background: IG.orange, color: '#fff', boxShadow: IG.glowOrange },
    secondary: { background: 'transparent', borderColor: IG.blue, color: IG.blue },
    tertiary: { background: 'transparent', color: IG.orange, padding: '4px 0' },
  };
  return (
    <button type="button" style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => { if (variant === 'primary') e.currentTarget.style.background = IG.orangeHover; if (variant === 'secondary') { e.currentTarget.style.background = IG.blue; e.currentTarget.style.color = '#fff'; } if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'underline'; }}
      onMouseLeave={(e) => { if (variant === 'primary') e.currentTarget.style.background = IG.orange; if (variant === 'secondary') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = IG.blue; } if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'none'; }}
      {...rest}>{children}</button>
  );
}

function Lucide({ name, size = 24, color = 'currentColor', strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth } });
    }
  }, [name, size, color]);
  return <span ref={ref} style={{ display: 'inline-flex', flex: '0 0 auto', ...style }} />;
}

Object.assign(window, { IG, igFont, IgButton, Lucide });
