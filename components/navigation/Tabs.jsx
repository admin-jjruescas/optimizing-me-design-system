import React from 'react';

/**
 * Pill-style tab bar. Controlled or uncontrolled. Items: [{id, label}].
 */
export function Tabs({ items = [], value, defaultValue, onChange, size = 'md', style = {}, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = isControlled ? value : internal;
  const pad = size === 'sm' ? '7px 14px' : '10px 20px';
  const fs = size === 'sm' ? 13 : 14;
  return (
    <div role="tablist" style={{ display: 'inline-flex', gap: 4, padding: 4, background: 'var(--peri-100)', borderRadius: 'var(--radius-pill)', ...style }} {...rest}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button
            key={it.id} role="tab" aria-selected={on} type="button"
            onClick={() => { if (!isControlled) setInternal(it.id); onChange?.(it.id); }}
            style={{
              padding: pad, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: fs,
              border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)',
              background: on ? 'var(--brand-navy)' : 'transparent',
              color: on ? 'var(--brand-white)' : 'var(--brand-navy)',
              boxShadow: on ? 'var(--shadow-sm)' : 'none',
              transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
            }}
          >{it.label}</button>
        );
      })}
    </div>
  );
}
