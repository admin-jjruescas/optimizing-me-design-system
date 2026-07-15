import React from 'react';

/** Multi-line text input matching Input styling. */
export function Textarea({ label, hint, error, rows = 4, id, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)', color: 'var(--text-strong)' }}>{label}</label>}
      <textarea
        id={inputId}
        rows={rows}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          width: '100%', resize: 'vertical',
          padding: '13px 16px',
          background: 'var(--surface-card)',
          border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
          outline: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-micro)', color: error ? 'var(--brand-pink)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
