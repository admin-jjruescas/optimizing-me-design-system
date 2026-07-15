import React from 'react';

/**
 * Radio group. Options: [{value, label}] or strings. Vertical by default.
 */
export function RadioGroup({ label, options = [], value, defaultValue, onChange, name, direction = 'column', style = {}, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const groupName = name || 'rg-' + (label || 'group').replace(/\s+/g, '-').toLowerCase();
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div role="radiogroup" aria-label={label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)', color: 'var(--text-strong)' }}>{label}</span>}
      <div style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 'var(--space-5)' : 'var(--space-3)', flexWrap: 'wrap' }}>
        {opts.map((o) => {
          const on = current === o.value;
          return (
            <label key={o.value} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: 'pointer' }}>
              <input type="radio" name={groupName} value={o.value} checked={on}
                onChange={() => { if (!isControlled) setInternal(o.value); onChange?.(o.value); }}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
              <span style={{
                width: 22, height: 22, flex: '0 0 auto', borderRadius: '999px',
                border: `1.5px solid ${on ? 'var(--brand-navy)' : 'var(--border-subtle)'}`,
                background: 'var(--surface-card)',
                display: 'grid', placeItems: 'center',
                transition: 'border-color var(--dur-fast) var(--ease-standard)',
              }}>
                <span style={{ width: 12, height: 12, borderRadius: '999px', background: on ? 'var(--brand-navy)' : 'transparent', transition: 'background var(--dur-fast) var(--ease-standard)' }} />
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{o.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
