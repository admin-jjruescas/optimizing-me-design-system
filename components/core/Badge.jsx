import React from 'react';

const TONES = {
  navy: { bg: 'var(--brand-navy)', fg: 'var(--brand-white)' },
  orange: { bg: 'var(--accent)', fg: 'var(--brand-white)' },
  periwinkle: { bg: 'var(--peri-100)', fg: 'var(--peri-600)' },
  peach: { bg: 'var(--peach-200)', fg: 'var(--brand-navy)' },
  outline: { bg: 'transparent', fg: 'var(--brand-navy)', border: '1.5px solid var(--brand-navy)' },
};

/**
 * Small status/category badge. Pill by default.
 */
export function Badge({ tone = 'periwinkle', children, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.periwinkle;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
        padding: '5px 12px',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-micro)', letterSpacing: '0.04em',
        lineHeight: 1.2,
        borderRadius: 'var(--radius-pill)',
        background: t.bg, color: t.fg, border: t.border || '1.5px solid transparent',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
