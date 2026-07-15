import React from 'react';

/** Checkbox with label. Checked = navy fill with orange-free check. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style = {}, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(!on); onChange?.({ ...e, target: { ...e.target, checked: !on } }); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }} {...rest}>
      <span
        onClick={toggle}
        style={{
          width: 22, height: 22, flex: '0 0 auto',
          borderRadius: '7px',
          border: `1.5px solid ${on ? 'var(--brand-navy)' : 'var(--border-subtle)'}`,
          background: on ? 'var(--brand-navy)' : 'var(--surface-card)',
          display: 'grid', placeItems: 'center',
          transition: 'all var(--dur-fast) var(--ease-standard)',
        }}
      >
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        )}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
