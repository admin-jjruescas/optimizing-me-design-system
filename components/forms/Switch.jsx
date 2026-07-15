import React from 'react';

/** Toggle switch. On = orange track (energy accent). */
export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style = {}, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(!on); onChange?.({ ...e, target: { ...e.target, checked: !on } }); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }} {...rest}>
      <span
        onClick={toggle}
        style={{
          width: 46, height: 26, flex: '0 0 auto',
          borderRadius: '999px',
          background: on ? 'var(--accent)' : 'var(--peri-300)',
          padding: 3,
          transition: 'background var(--dur-base) var(--ease-standard)',
          display: 'flex', alignItems: 'center',
        }}
      >
        <span style={{
          width: 20, height: 20, borderRadius: '999px', background: '#fff',
          boxShadow: 'var(--shadow-sm)',
          transform: on ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
