import React from 'react';

/**
 * Generic surface container. Soft shadow, rounded, optional accent top-border.
 */
export function Card({ padding = 'var(--space-6)', tone = 'light', accent, interactive = false, children, style = {}, ...rest }) {
  const tones = {
    light: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
    soft: { background: 'var(--surface-soft)', color: 'var(--text-body)', border: '1px solid transparent' },
    dark: { background: 'var(--surface-inverse)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
  };
  const t = tones[tone] || tones.light;
  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: tone === 'dark' ? 'none' : 'var(--shadow-md)',
        borderTop: accent ? `3px solid ${accent}` : t.border.split(',')[0],
        transition: interactive ? 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)' : 'none',
        ...t,
        ...style,
      }}
      onMouseEnter={interactive ? (e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } : undefined}
      onMouseLeave={interactive ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
