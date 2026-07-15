import React from 'react';

const PILLAR_COLORS = {
  respiration: 'var(--pillar-respiration)',
  emotions: 'var(--pillar-emotions)',
  movement: 'var(--pillar-movement)',
  nutrition: 'var(--pillar-nutrition)',
  mindset: 'var(--pillar-mindset)',
  recovery: 'var(--pillar-recovery)',
};

/**
 * A HumanOps pillar card — one of the six interconnected optimization areas.
 * `icon` should be an outline SVG glyph (Lucide/Phosphor outline).
 */
export function PillarCard({ pillar = 'respiration', title, description, icon, color, style = {}, ...rest }) {
  const c = color || PILLAR_COLORS[pillar] || 'var(--brand-periwinkle)';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        padding: 'var(--space-6)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-pill)',
          display: 'grid',
          placeItems: 'center',
          background: c,
          color: 'var(--brand-white)',
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-title)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-heading)' }}>
        {title}
      </h3>
      {description && (
        <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
