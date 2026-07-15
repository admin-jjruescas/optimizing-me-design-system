import React from 'react';

/**
 * Program/pricing card. Featured version is navy with orange CTA.
 */
export function PricingCard({ name, price, period, description, features = [], ctaLabel = 'Get started', onCta, badge, featured = false, style = {}, ...rest }) {
  const fg = featured ? '#fff' : 'var(--brand-navy)';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      padding: 'var(--space-7)',
      background: featured ? 'var(--brand-navy)' : 'var(--surface-card)',
      border: featured ? '1px solid var(--brand-navy)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      ...style,
    }} {...rest}>
      {badge && (
        <span style={{ position: 'absolute', top: -13, left: 'var(--space-7)', padding: '5px 14px', borderRadius: '999px', background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 12, letterSpacing: '.04em' }}>{badge}</span>
      )}
      <div style={{ fontWeight: 800, fontSize: 'var(--fs-title)', color: fg }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontWeight: 900, fontSize: 'var(--fs-h1)', lineHeight: 1, color: featured ? 'var(--brand-orange)' : 'var(--brand-navy)' }}>{price}</span>
        {period && <span style={{ fontWeight: 600, fontSize: 14, color: featured ? 'var(--peach-200)' : 'var(--text-muted)' }}>{period}</span>}
      </div>
      {description && <p style={{ margin: 0, fontSize: 15, lineHeight: 'var(--lh-body)', color: featured ? 'var(--peach-200)' : 'var(--text-muted)' }}>{description}</p>}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.5, color: featured ? '#fff' : 'var(--text-body)' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={featured ? 'var(--brand-orange)' : 'var(--brand-periwinkle)'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto', marginTop: 2 }}><path d="M20 6 9 17l-5-5"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <button type="button" onClick={onCta} style={{
        marginTop: 'auto', padding: '14px 26px', borderRadius: '999px', border: featured ? 'none' : '1.5px solid var(--brand-navy)',
        background: featured ? 'var(--accent)' : 'transparent',
        color: featured ? '#fff' : 'var(--brand-navy)',
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, cursor: 'pointer',
        boxShadow: featured ? 'var(--shadow-accent)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-standard)',
      }}>{ctaLabel}</button>
    </div>
  );
}
