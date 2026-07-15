import React from 'react';

/**
 * Selectable topic chip (e.g. brand keyword filters: Estrés, Breathwork, AI…).
 * Outline by default; fills navy when active.
 */
export function Tag({ active = false, children, onClick, style = {}, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '8px 16px',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-caption)',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'all var(--dur-fast) var(--ease-standard)',
        border: '1.5px solid var(--border-subtle)',
        background: active ? 'var(--brand-navy)' : 'var(--surface-card)',
        color: active ? 'var(--brand-white)' : 'var(--text-body)',
        borderColor: active ? 'var(--brand-navy)' : 'var(--border-subtle)',
        ...style,
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--brand-periwinkle)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
