import React from 'react';

/**
 * Testimonial / quote card. Large orange quotation mark, quote, attribution.
 */
export function Testimonial({ quote, name, role, avatarSrc, tone = 'light', style = {}, ...rest }) {
  const onDark = tone === 'dark';
  return (
    <figure
      style={{
        margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        padding: 'var(--space-7)',
        borderRadius: 'var(--radius-lg)',
        background: onDark ? 'var(--surface-inverse)' : 'var(--surface-card)',
        border: onDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
        boxShadow: onDark ? 'none' : 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-black)', fontSize: '56px', lineHeight: 0.7, color: 'var(--accent)' }}>&ldquo;</span>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)' }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
        {avatarSrc && (
          <img src={avatarSrc} alt="" style={{ width: 44, height: 44, borderRadius: '999px', objectFit: 'cover' }} />
        )}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)', color: onDark ? 'var(--brand-white)' : 'var(--text-strong)' }}>{name}</span>
          {role && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-micro)', color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)' }}>{role}</span>}
        </div>
      </figcaption>
    </figure>
  );
}
