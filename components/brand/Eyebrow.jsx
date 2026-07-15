import React from 'react';

/**
 * Uppercase, wide-tracked eyebrow label — echoes the "JJ RUESCAS" logotype.
 * Sits above a heading to categorize a section.
 */
export function Eyebrow({ children, color, dotColor, showDot = true, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: color || 'var(--accent)',
        ...style,
      }}
      {...rest}
    >
      {showDot && (
        <span style={{ width: 6, height: 6, borderRadius: '999px', background: dotColor || 'currentColor', flex: '0 0 auto' }} />
      )}
      {children}
    </span>
  );
}
