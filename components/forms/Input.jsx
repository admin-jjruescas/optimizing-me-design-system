import React from 'react';

/**
 * Text input with optional label and leading icon. Calm focus ring in orange.
 */
export function Input({ label, hint, error, iconStart, id, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)', color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '0 16px',
        background: 'var(--surface-card)',
        border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      }}>
        {iconStart && <span style={{ display: 'grid', placeItems: 'center', color: 'var(--text-muted)', flex: '0 0 auto' }}>{iconStart}</span>}
        <input
          id={inputId}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            padding: '13px 0',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-micro)', color: error ? 'var(--brand-pink)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
