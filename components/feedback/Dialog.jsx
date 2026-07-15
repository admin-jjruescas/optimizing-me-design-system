import React from 'react';

/**
 * Modal dialog on a navy scrim. Render conditionally via `open`.
 */
export function Dialog({ open = false, onClose, title, children, footer, width = 480, style = {}, ...rest }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(12,30,44,0.55)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width,
          background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)', padding: 'var(--space-7)',
          fontFamily: 'var(--font-sans)', color: 'var(--text-body)',
          ...style,
        }} {...rest}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 'var(--space-4)' }}>
          {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--fs-h3)', color: 'var(--brand-navy)' }}>{title}</h2>}
          <button type="button" aria-label="Close" onClick={onClose}
            style={{ width: 36, height: 36, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '999px', border: 'none', background: 'var(--peri-100)', color: 'var(--brand-navy)', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 'var(--space-6)' }}>{footer}</div>}
      </div>
    </div>
  );
}
