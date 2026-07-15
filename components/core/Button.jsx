import React from 'react';

const SIZES = {
  sm: { padding: '9px 18px', fontSize: '13px' },
  md: { padding: '13px 26px', fontSize: '15px' },
  lg: { padding: '17px 34px', fontSize: '17px' },
};

/**
 * Primary action button. Orange = energy/CTA; navy = solid secondary.
 * Pill-shaped, calm hover (no bounce).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconStart,
  iconEnd,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.45 : 1,
    ...SIZES[size],
  };

  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--brand-white)', boxShadow: 'var(--shadow-accent)' },
    secondary: { background: 'var(--brand-navy)', color: 'var(--brand-white)' },
    outline: { background: 'transparent', color: 'var(--brand-navy)', borderColor: 'var(--brand-navy)' },
    ghost: { background: 'transparent', color: 'var(--brand-navy)' },
    'on-dark': { background: 'var(--brand-white)', color: 'var(--brand-navy)' },
  };

  const hoverByVariant = {
    primary: (e, on) => { e.currentTarget.style.background = on ? 'var(--accent-hover)' : 'var(--accent)'; },
    secondary: (e, on) => { e.currentTarget.style.background = on ? 'var(--navy-600)' : 'var(--brand-navy)'; },
    outline: (e, on) => { e.currentTarget.style.background = on ? 'var(--brand-navy)' : 'transparent'; e.currentTarget.style.color = on ? 'var(--brand-white)' : 'var(--brand-navy)'; },
    ghost: (e, on) => { e.currentTarget.style.background = on ? 'var(--peach-100)' : 'transparent'; },
    'on-dark': (e, on) => { e.currentTarget.style.background = on ? 'var(--peach-200)' : 'var(--brand-white)'; },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => { if (!disabled) { hoverByVariant[variant]?.(e, true); e.currentTarget.style.transform = 'translateY(-1px)'; } }}
      onMouseLeave={(e) => { if (!disabled) { hoverByVariant[variant]?.(e, false); e.currentTarget.style.transform = 'translateY(0)'; } }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
}
