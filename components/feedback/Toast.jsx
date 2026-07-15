import React from 'react';

const TONES = {
  success: { border: 'var(--brand-periwinkle)', icon: <path d="M20 6 9 17l-5-5"/> },
  info: { border: 'var(--brand-navy)', icon: <g><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 12v4"/></g> },
  warning: { border: 'var(--brand-orange)', icon: <g><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></g> },
  error: { border: 'var(--brand-pink)', icon: <g><circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/></g> },
};

/**
 * Toast notification card. Position it yourself (usually fixed bottom-right stack).
 */
export function Toast({ tone = 'info', title, message, onDismiss, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 14,
      width: 360, maxWidth: '100%',
      background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${t.border}`,
      boxShadow: 'var(--shadow-lg)', padding: '16px 18px',
      fontFamily: 'var(--font-sans)', ...style,
    }} {...rest}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.border} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto', marginTop: 1 }}>{t.icon}</svg>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--brand-navy)', marginBottom: message ? 3 : 0 }}>{title}</div>}
        {message && <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>{message}</div>}
      </div>
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={onDismiss} style={{ flex: '0 0 auto', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
