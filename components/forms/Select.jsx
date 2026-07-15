import React from 'react';

/**
 * Native select styled like Input. Options: [{value, label}] or strings.
 */
export function Select({ label, hint, error, options = [], id, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && <label htmlFor={selId} style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)', color: 'var(--text-strong)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={{
            width: '100%', appearance: 'none', WebkitAppearance: 'none',
            padding: '13px 44px 13px 16px',
            background: 'var(--surface-card)',
            border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)',
            boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
            outline: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)',
            transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
            ...style,
          }}
          {...rest}
        >
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {(hint || error) && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-micro)', color: error ? 'var(--brand-pink)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
