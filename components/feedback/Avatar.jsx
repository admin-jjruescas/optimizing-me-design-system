import React from 'react';

const SIZES = { sm: 32, md: 44, lg: 64, xl: 96 };

/**
 * Avatar — photo or initials fallback on a periwinkle disc.
 */
export function Avatar({ src, name = '', size = 'md', shape = 'circle', style = {}, ...rest }) {
  const dim = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const radius = shape === 'blob' ? '46% 54% 54% 46% / 46% 46% 54% 54%' : '999px';
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  return src ? (
    <img src={src} alt={name} style={{ width: dim, height: dim, objectFit: 'cover', borderRadius: radius, display: 'block', flex: '0 0 auto', ...style }} {...rest} />
  ) : (
    <span aria-label={name} style={{
      width: dim, height: dim, borderRadius: radius, flex: '0 0 auto',
      display: 'grid', placeItems: 'center',
      background: 'var(--peri-100)', color: 'var(--brand-navy)',
      fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: dim * 0.38,
      ...style,
    }} {...rest}>{initials || '?'}</span>
  );
}
