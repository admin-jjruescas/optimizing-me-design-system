import React from 'react';

/**
 * FAQ-style accordion. Items: [{q, a}]. Single-open by default.
 */
export function Accordion({ items = [], multiple = false, defaultOpen = [], style = {}, ...rest }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => setOpen((prev) => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }} {...rest}>
      {items.map((it, i) => {
        const on = open.has(i);
        return (
          <div key={i} style={{ background: 'var(--surface-card)', border: `1.5px solid ${on ? 'var(--brand-periwinkle)' : 'var(--border-subtle)'}`, borderRadius: 'var(--radius-md)', overflow: 'hidden', transition: 'border-color var(--dur-fast) var(--ease-standard)' }}>
            <button type="button" onClick={() => toggle(i)} aria-expanded={on}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, color: 'var(--brand-navy)' }}>
              {it.q}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto', transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)' }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: 0, padding: '0 20px 18px', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
