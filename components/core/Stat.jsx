import React from 'react';

/**
 * Big metric with label. Uses display weight for the number.
 * e.g. "1%" / "every day" — the Kaizen stat.
 */
export function Stat({ value, label, suffix, color, align = 'left', onDark = false, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-black)', fontSize: 'var(--fs-h1)', lineHeight: 1, letterSpacing: 'var(--tracking-hero)', color: color || (onDark ? 'var(--brand-white)' : 'var(--brand-navy)') }}>
        {value}
        {suffix && <span style={{ fontSize: '0.5em', fontWeight: 'var(--fw-bold)', color: 'var(--accent)' }}>{suffix}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-caption)', letterSpacing: '0.02em', color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}
