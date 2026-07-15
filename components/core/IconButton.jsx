import React from 'react';

const SIZES = { sm: 34, md: 42, lg: 50 };

/**
 * Square-ish icon-only button with a pill radius. Pass an outline SVG glyph.
 */
export function IconButton({ variant = 'soft', size = 'md', label, children, disabled = false, style = {}, ...rest }) {
  const dim = SIZES[size];
  const variants = {
    soft: { background: 'var(--peri-100)', color: 'var(--brand-navy)' },
    solid: { background: 'var(--brand-navy)', color: 'var(--brand-white)' },
    accent: { background: 'var(--accent)', color: 'var(--brand-white)' },
    ghost: { background: 'transparent', color: 'var(--brand-navy)' },
    'on-dark': { background: 'rgba(255,255,255,0.12)', color: 'var(--brand-white)' },
  };
  const hover = {
    soft: 'var(--peri-300)', solid: 'var(--navy-600)', accent: 'var(--accent-hover)',
    ghost: 'var(--peach-100)', 'on-dark': 'rgba(255,255,255,0.22)',
  };
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      style={{
        width: dim, height: dim,
        display: 'grid', placeItems: 'center',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard)',
        ...variants[variant], ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = hover[variant]; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = variants[variant].background; }}
      {...rest}
    >
      {children}
    </button>
  );
}
