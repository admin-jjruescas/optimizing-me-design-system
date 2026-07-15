/* @ds-bundle: {"format":4,"namespace":"OptimizingMeDesignSystem_7c7534","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PillarCard","sourcePath":"components/brand/PillarCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Testimonial","sourcePath":"components/core/Testimonial.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"53e0c6270395","components/brand/Logo.jsx":"6bebf86d89a5","components/brand/PillarCard.jsx":"b549e158a67c","components/core/Badge.jsx":"5fdc5c7002e3","components/core/Button.jsx":"e8246f2ee807","components/core/Card.jsx":"796cd1c6e6cb","components/core/IconButton.jsx":"a9cd981a1422","components/core/Stat.jsx":"604c372ec146","components/core/Tag.jsx":"f6bccfb6cec7","components/core/Testimonial.jsx":"ee3d4cc595d3","components/feedback/Avatar.jsx":"ebf86d2a638b","components/feedback/Dialog.jsx":"f266986af544","components/feedback/Toast.jsx":"bfc765bc114a","components/forms/Checkbox.jsx":"0cb36acef880","components/forms/Input.jsx":"a4f9807736c5","components/forms/RadioGroup.jsx":"ec5e9581fc58","components/forms/Select.jsx":"474dbe081977","components/forms/Switch.jsx":"8cbbf9400422","components/forms/Textarea.jsx":"a5eebccf1fca","components/icons/Icon.jsx":"de5667003561","components/marketing/PricingCard.jsx":"c5ed387a57e7","components/navigation/Accordion.jsx":"9d76918205c1","components/navigation/Tabs.jsx":"8ef56c5d9fd3","ui_kits/7-day-challenge/sections.jsx":"aa9a1b4b378a","ui_kits/ignite/primitives.jsx":"a3b462add1d3","ui_kits/ignite/sections.jsx":"095faa0dcbf0","ui_kits/resetea-bolivia/sections.jsx":"caa7cd0f0d04","ui_kits/website/icons.jsx":"97f12e631371","ui_kits/website/parts.jsx":"5556407e0284","ui_kits/website/parts.standalone.jsx":"c89425e40ab8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OptimizingMeDesignSystem_7c7534 = window.OptimizingMeDesignSystem_7c7534 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase, wide-tracked eyebrow label — echoes the "JJ RUESCAS" logotype.
 * Sits above a heading to categorize a section.
 */
function Eyebrow({
  children,
  color,
  dotColor,
  showDot = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: color || 'var(--accent)',
      ...style
    }
  }, rest), showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '999px',
      background: dotColor || 'currentColor',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Optimizing Me / JJ Ruescas logo. Renders the official PNG lockups —
 * never a redrawn mark. Pick variant + tone for the background.
 */
function Logo({
  variant = 'jj-tagline',
  tone = 'auto',
  background = 'light',
  height = 48,
  assetBase = '',
  alt,
  style = {},
  ...rest
}) {
  const onDark = background === 'dark';
  const resolvedTone = tone === 'auto' ? onDark ? 'white' : 'blue' : tone;
  const files = {
    'jj-tagline': {
      blue: 'logos/logo-jj-tagline-blue.png',
      white: 'logos/logo-jj-tagline-white.png'
    },
    'optimizing-me': {
      blue: 'logos/logo-optimizing-me-dark.png',
      white: 'logos/logo-optimizing-me-white.png'
    },
    'vertical': {
      blue: 'logos/logo-vertical-stack.png',
      white: 'logos/logo-vertical-stack.png'
    },
    'symbol': {
      blue: 'logos/symbol-blue.png',
      white: 'logos/symbol-white.png'
    }
  };
  const set = files[variant] || files['jj-tagline'];
  const src = (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + (set[resolvedTone] || set.blue);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt || 'Optimizing Me — JJ Ruescas',
    style: {
      height: typeof height === 'number' ? height + 'px' : height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PILLAR_COLORS = {
  respiration: 'var(--pillar-respiration)',
  emotions: 'var(--pillar-emotions)',
  movement: 'var(--pillar-movement)',
  nutrition: 'var(--pillar-nutrition)',
  mindset: 'var(--pillar-mindset)',
  recovery: 'var(--pillar-recovery)'
};

/**
 * A HumanOps pillar card — one of the six interconnected optimization areas.
 * `icon` should be an outline SVG glyph (Lucide/Phosphor outline).
 */
function PillarCard({
  pillar = 'respiration',
  title,
  description,
  icon,
  color,
  style = {},
  ...rest
}) {
  const c = color || PILLAR_COLORS[pillar] || 'var(--brand-periwinkle)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: c,
      color: 'var(--brand-white)'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-title)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  navy: {
    bg: 'var(--brand-navy)',
    fg: 'var(--brand-white)'
  },
  orange: {
    bg: 'var(--accent)',
    fg: 'var(--brand-white)'
  },
  periwinkle: {
    bg: 'var(--peri-100)',
    fg: 'var(--peri-600)'
  },
  peach: {
    bg: 'var(--peach-200)',
    fg: 'var(--brand-navy)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--brand-navy)',
    border: '1.5px solid var(--brand-navy)'
  }
};

/**
 * Small status/category badge. Pill by default.
 */
function Badge({
  tone = 'periwinkle',
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.periwinkle;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: '0.04em',
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: t.border || '1.5px solid transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: '13px'
  },
  md: {
    padding: '13px 26px',
    fontSize: '15px'
  },
  lg: {
    padding: '17px 34px',
    fontSize: '17px'
  }
};

/**
 * Primary action button. Orange = energy/CTA; navy = solid secondary.
 * Pill-shaped, calm hover (no bounce).
 */
function Button({
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
    ...SIZES[size]
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--brand-white)',
      boxShadow: 'var(--shadow-accent)'
    },
    secondary: {
      background: 'var(--brand-navy)',
      color: 'var(--brand-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-navy)',
      borderColor: 'var(--brand-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-navy)'
    },
    'on-dark': {
      background: 'var(--brand-white)',
      color: 'var(--brand-navy)'
    }
  };
  const hoverByVariant = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--accent-hover)' : 'var(--accent)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--navy-600)' : 'var(--brand-navy)';
    },
    outline: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--brand-navy)' : 'transparent';
      e.currentTarget.style.color = on ? 'var(--brand-white)' : 'var(--brand-navy)';
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--peach-100)' : 'transparent';
    },
    'on-dark': (e, on) => {
      e.currentTarget.style.background = on ? 'var(--peach-200)' : 'var(--brand-white)';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (!disabled) {
        hoverByVariant[variant]?.(e, true);
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      if (!disabled) {
        hoverByVariant[variant]?.(e, false);
        e.currentTarget.style.transform = 'translateY(0)';
      }
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface container. Soft shadow, rounded, optional accent top-border.
 */
function Card({
  padding = 'var(--space-6)',
  tone = 'light',
  accent,
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    soft: {
      background: 'var(--surface-soft)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: tone === 'dark' ? 'none' : 'var(--shadow-md)',
      borderTop: accent ? `3px solid ${accent}` : t.border.split(',')[0],
      transition: interactive ? 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)' : 'none',
      ...t,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 42,
  lg: 50
};

/**
 * Square-ish icon-only button with a pill radius. Pass an outline SVG glyph.
 */
function IconButton({
  variant = 'soft',
  size = 'md',
  label,
  children,
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = SIZES[size];
  const variants = {
    soft: {
      background: 'var(--peri-100)',
      color: 'var(--brand-navy)'
    },
    solid: {
      background: 'var(--brand-navy)',
      color: 'var(--brand-white)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--brand-white)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-navy)'
    },
    'on-dark': {
      background: 'rgba(255,255,255,0.12)',
      color: 'var(--brand-white)'
    }
  };
  const hover = {
    soft: 'var(--peri-300)',
    solid: 'var(--navy-600)',
    accent: 'var(--accent-hover)',
    ghost: 'var(--peach-100)',
    'on-dark': 'rgba(255,255,255,0.22)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hover[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big metric with label. Uses display weight for the number.
 * e.g. "1%" / "every day" — the Kaizen stat.
 */
function Stat({
  value,
  label,
  suffix,
  color,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h1)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-hero)',
      color: color || (onDark ? 'var(--brand-white)' : 'var(--brand-navy)')
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--accent)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.02em',
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable topic chip (e.g. brand keyword filters: Estrés, Breathwork, AI…).
 * Outline by default; fills navy when active.
 */
function Tag({
  active = false,
  children,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '8px 16px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-caption)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      border: '1.5px solid var(--border-subtle)',
      background: active ? 'var(--brand-navy)' : 'var(--surface-card)',
      color: active ? 'var(--brand-white)' : 'var(--text-body)',
      borderColor: active ? 'var(--brand-navy)' : 'var(--border-subtle)',
      ...style
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--brand-periwinkle)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial / quote card. Large orange quotation mark, quote, attribution.
 */
function Testimonial({
  quote,
  name,
  role,
  avatarSrc,
  tone = 'light',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-7)',
      borderRadius: 'var(--radius-lg)',
      background: onDark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: onDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
      boxShadow: onDark ? 'none' : 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: '56px',
      lineHeight: 0.7,
      color: 'var(--accent)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-1)'
    }
  }, avatarSrc && /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: '999px',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-caption)',
      color: onDark ? 'var(--brand-white)' : 'var(--text-strong)'
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96
};

/**
 * Avatar — photo or initials fallback on a periwinkle disc.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  shape = 'circle',
  style = {},
  ...rest
}) {
  const dim = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const radius = shape === 'blob' ? '46% 54% 54% 46% / 46% 46% 54% 54%' : '999px';
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return src ? /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: name,
    style: {
      width: dim,
      height: dim,
      objectFit: 'cover',
      borderRadius: radius,
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, rest)) : /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": name,
    style: {
      width: dim,
      height: dim,
      borderRadius: radius,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--peri-100)',
      color: 'var(--brand-navy)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: dim * 0.38,
      ...style
    }
  }, rest), initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal dialog on a navy scrim. Render conditionally via `open`.
 */
function Dialog({
  open = false,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(12,30,44,0.55)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-7)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'var(--fs-h3)',
      color: 'var(--brand-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '999px',
      border: 'none',
      background: 'var(--peri-100)',
      color: 'var(--brand-navy)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    border: 'var(--brand-periwinkle)',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })
  },
  info: {
    border: 'var(--brand-navy)',
    icon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8h.01M12 12v4"
    }))
  },
  warning: {
    border: 'var(--brand-orange)',
    icon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    }))
  },
  error: {
    border: 'var(--brand-pink)',
    icon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m15 9-6 6M9 9l6 6"
    }))
  }
};

/**
 * Toast notification card. Position it yourself (usually fixed bottom-right stack).
 */
function Toast({
  tone = 'info',
  title,
  message,
  onDismiss,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      width: 360,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${t.border}`,
      boxShadow: 'var(--shadow-lg)',
      padding: '16px 18px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t.border,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto',
      marginTop: 1
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--brand-navy)',
      marginBottom: message ? 3 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      flex: '0 0 auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Checked = navy fill with orange-free check. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        checked: !on
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '7px',
      border: `1.5px solid ${on ? 'var(--brand-navy)' : 'var(--border-subtle)'}`,
      background: on ? 'var(--brand-navy)' : 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label and leading icon. Calm focus ring in orange.
 */
function Input({
  label,
  hint,
  error,
  iconStart,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '0 16px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '13px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: error ? 'var(--brand-pink)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio group. Options: [{value, label}] or strings. Vertical by default.
 */
function RadioGroup({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const groupName = name || 'rg-' + (label || 'group').replace(/\s+/g, '-').toLowerCase();
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-5)' : 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, opts.map(o => {
    const on = current === o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      value: o.value,
      checked: on,
      onChange: () => {
        if (!isControlled) setInternal(o.value);
        onChange?.(o.value);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: '0 0 auto',
        borderRadius: '999px',
        border: `1.5px solid ${on ? 'var(--brand-navy)' : 'var(--border-subtle)'}`,
        background: 'var(--surface-card)',
        display: 'grid',
        placeItems: 'center',
        transition: 'border-color var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '999px',
        background: on ? 'var(--brand-navy)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        color: 'var(--text-body)'
      }
    }, o.label));
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native select styled like Input. Options: [{value, label}] or strings.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: '13px 44px 13px 16px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
      outline: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-navy)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: error ? 'var(--brand-pink)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. On = orange track (energy accent). */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        checked: !on
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 46,
      height: 26,
      flex: '0 0 auto',
      borderRadius: '999px',
      background: on ? 'var(--accent)' : 'var(--peri-300)',
      padding: 3,
      transition: 'background var(--dur-base) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '999px',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input matching Input styling. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '13px 16px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--brand-pink)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 4px rgba(239,125,19,0.14)' : 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: error ? 'var(--brand-pink)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Curated brand glyph set — outline, 2px stroke, rounded joins (Lucide idiom).
// Add new glyphs here as <path>/<g> JSX; never use filled icons.
const GLYPHS = {
  wind: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.6 4.6A2 2 0 1 1 11 8H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.6 19.4A2 2 0 1 0 14 16H2"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"
  }),
  activity: /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }),
  lightbulb: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"
  })),
  apple: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 8c-2-3-6-2-6 2 0 5 3 10 6 10s6-5 6-10c0-4-4-5-6-2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8c0-2 1-4 3-4"
  })),
  moon: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  }),
  'arrow-right': /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6l6 6-6 6"
  })),
  'arrow-left': /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18l-6-6 6-6"
  })),
  menu: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  })),
  x: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  mail: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 7 10 6 10-6"
  })),
  play: /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  }),
  sparkles: /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
  }),
  clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.9"
  })),
  'chevron-down': /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  'chevron-up': /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }),
  'chevron-right': /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  brain: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4.5 17.5c0-.66.26-1.27.68-1.72A2.5 2.5 0 0 1 3.5 13c0-1 .59-1.85 1.44-2.25A2.5 2.5 0 0 1 4.5 8.5c0-1.21.86-2.22 2-2.45A2.5 2.5 0 0 1 9.5 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.54-2.44c0-.66-.26-1.27-.68-1.72A2.5 2.5 0 0 0 20.5 13c0-1-.59-1.85-1.44-2.25a2.5 2.5 0 0 0 .44-2.25c0-1.21-.86-2.22-2-2.45A2.5 2.5 0 0 0 14.5 2Z"
  })),
  infinity: /*#__PURE__*/React.createElement("path", {
    d: "M12 12c-2-2.7-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.3 6-4Zm0 0c2 2.7 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.3-6 4Z"
  }),
  calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  quote: /*#__PURE__*/React.createElement("path", {
    d: "M8 11c0-2.5 1.5-4.5 4-5.5M8 11a3 3 0 1 0 3 3v-3H8Zm9 0c0-2.5 1.5-4.5 4-5.5M17 11a3 3 0 1 0 3 3v-3h-3Z"
  }),
  mic: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10a7 7 0 0 0 14 0M12 19v3"
  })),
  video: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "m16 10 6-4v12l-6-4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "6",
    width: "14",
    height: "12",
    rx: "2"
  }))
};

/**
 * Brand icon — a curated outline glyph set (2px stroke, rounded joins,
 * Lucide idiom). Colors via currentColor; wrap in a colored element or pass `color`.
 */
function Icon({
  name = 'infinity',
  size = 22,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      flex: '0 0 auto',
      ...style
    },
    "aria-hidden": "true"
  }, rest), GLYPHS[name] || GLYPHS.infinity);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Program/pricing card. Featured version is navy with orange CTA.
 */
function PricingCard({
  name,
  price,
  period,
  description,
  features = [],
  ctaLabel = 'Get started',
  onCta,
  badge,
  featured = false,
  style = {},
  ...rest
}) {
  const fg = featured ? '#fff' : 'var(--brand-navy)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-7)',
      background: featured ? 'var(--brand-navy)' : 'var(--surface-card)',
      border: featured ? '1px solid var(--brand-navy)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      ...style
    }
  }, rest), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -13,
      left: 'var(--space-7)',
      padding: '5px 14px',
      borderRadius: '999px',
      background: 'var(--accent)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.04em'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 'var(--fs-title)',
      color: fg
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 'var(--fs-h1)',
      lineHeight: 1,
      color: featured ? 'var(--brand-orange)' : 'var(--brand-navy)'
    }
  }, price), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: featured ? 'var(--peach-200)' : 'var(--text-muted)'
    }
  }, period)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: featured ? 'var(--peach-200)' : 'var(--text-muted)'
    }
  }, description), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: featured ? '#fff' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: featured ? 'var(--brand-orange)' : 'var(--brand-periwinkle)',
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), f))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      marginTop: 'auto',
      padding: '14px 26px',
      borderRadius: '999px',
      border: featured ? 'none' : '1.5px solid var(--brand-navy)',
      background: featured ? 'var(--accent)' : 'transparent',
      color: featured ? '#fff' : 'var(--brand-navy)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      boxShadow: featured ? 'var(--shadow-accent)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQ-style accordion. Items: [{q, a}]. Single-open by default.
 */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: `1.5px solid ${on ? 'var(--brand-periwinkle)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--brand-navy)'
      }
    }, it.q, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: '0 0 auto',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 20px 18px',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill-style tab bar. Controlled or uncontrolled. Items: [{id, label}].
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = isControlled ? value : internal;
  const pad = size === 'sm' ? '7px 14px' : '10px 20px';
  const fs = size === 'sm' ? 13 : 14;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--peri-100)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (!isControlled) setInternal(it.id);
        onChange?.(it.id);
      },
      style: {
        padding: pad,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: fs,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--brand-navy)' : 'transparent',
        color: on ? 'var(--brand-white)' : 'var(--brand-navy)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/7-day-challenge/sections.jsx
try { (() => {
// 7-Day Optimal Breathing Challenge — recreated from optme-7-day-challenge-breathing repo (src/App.tsx).
// Uses PARENT brand tokens (navy #132E41, orange #EF7D13) + the page's cyan accent #5ce1e6.
const C = {
  navy: '#132E41',
  orange: '#EF7D13',
  peri: '#7592BE',
  pink: '#F09192',
  peach: '#F3DDD0',
  dark: '#222222',
  cyan: '#5ce1e6',
  navyDeep: '#0C1F2D'
};
const dcFont = "'Montserrat', ui-sans-serif, system-ui, sans-serif";
const eyebrow = {
  color: C.orange,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  margin: '0 0 16px'
};
function DcCountdown() {
  const target = new Date('2026-04-06T07:00:00-05:00').getTime();
  const calc = () => {
    const d = Math.max(0, target - Date.now());
    return {
      Days: Math.floor(d / 864e5),
      Hrs: Math.floor(d % 864e5 / 36e5),
      Min: Math.floor(d % 36e5 / 6e4),
      Sec: Math.floor(d % 6e4 / 1e3)
    };
  };
  const [t, setT] = React.useState(calc);
  React.useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 8,
      overflow: 'hidden',
      width: 'fit-content'
    }
  }, Object.entries(t).map(([label, v], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center',
      padding: '10px 20px',
      borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 900,
      color: C.orange,
      display: 'block',
      lineHeight: 1
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'rgba(255,255,255,0.3)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginTop: 4,
      display: 'block',
      fontWeight: 600
    }
  }, label))));
}
function DcHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: C.navy,
      padding: '14px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "Optimizing Me \u2013 JJ Ruescas",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "April 6\u201312, 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: 'rgba(255,255,255,0.3)',
      borderRadius: 99
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u23F1 15-min daily practice"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: 'rgba(255,255,255,0.3)',
      borderRadius: 99
    }
  }), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF99 Live guidance & Q&A"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: 'rgba(255,255,255,0.3)',
      borderRadius: 99
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "Limited Spots")), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      background: C.orange,
      color: '#fff',
      padding: '10px 24px',
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 14,
      textDecoration: 'none',
      boxShadow: '0 10px 15px rgba(239,125,19,0.2)'
    }
  }, "Join the Challenge \u2014 $30"));
}
function DcHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '92vh',
      background: C.navy,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '52% 48%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "400",
    height: "400",
    viewBox: "0 0 400 400",
    fill: "none",
    style: {
      position: 'absolute',
      bottom: -80,
      left: -80,
      opacity: 0.1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    stroke: "white",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "130",
    stroke: "white",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "80",
    stroke: "white",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "20",
    x2: "200",
    y2: "380",
    stroke: "white",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "200",
    x2: "380",
    y2: "200",
    stroke: "white",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      padding: '80px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.cyan,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      margin: '0 0 20px'
    }
  }, "7-Day Functional Breathing Live Course"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontWeight: 900,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 32px',
      fontSize: 56
    }
  }, "YOUR ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "NERVOUS SYSTEM"), /*#__PURE__*/React.createElement("br", null), "DRIVES YOUR PERFORMANCE"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.cyan,
      fontSize: 34,
      fontWeight: 300,
      margin: '0 0 40px',
      lineHeight: 1.25
    }
  }, "In ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800,
      color: '#fff'
    }
  }, "7 days,"), " you will", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800,
      color: '#fff'
    }
  }, "learn to regulate"), " it"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: C.orange,
      color: '#fff',
      padding: '20px 48px',
      borderRadius: 999,
      fontWeight: 900,
      fontSize: 20,
      textDecoration: 'none',
      boxShadow: '0 25px 50px rgba(239,125,19,0.4)'
    }
  }, "Reserve My Spot \u2014 $30 \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      fontSize: 14,
      fontWeight: 500,
      margin: '16px 0 0'
    }
  }, "\uD83C\uDDFA\uD83C\uDDF8 7AM CDT \xB7 \uD83C\uDDE7\uD83C\uDDF4 8AM BOL \xB7 \uD83C\uDDEC\uD83C\uDDE7 1PM UK \xB7 \uD83C\uDDEC\uD83C\uDDF7 3PM Athens"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DcCountdown, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.4)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: C.pink,
      borderRadius: 99
    }
  }), "16 spots remaining")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-jj.jpg",
    alt: "JJ Ruescas",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(19,46,65,0.6), rgba(19,46,65,0.2), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      right: '28%',
      transform: 'translate(50%,-50%)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      width: 64,
      height: 64,
      background: C.orange,
      borderRadius: 999,
      border: 'none',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: '0 0 0 12px rgba(239,125,19,0.15), 0 0 0 24px rgba(239,125,19,0.06)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      bottom: '32%',
      right: '8%',
      zIndex: 20,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 12,
      fontWeight: 700,
      textAlign: 'right',
      letterSpacing: '0.05em'
    }
  }, "Watch JJ explain what changes in 7 days \u2192")));
}
function DcProofBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid #f1f5f9',
      padding: '24px 48px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 14,
      color: '#475569'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFB800',
      letterSpacing: '0.1em'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.navy,
      fontWeight: 800
    }
  }, "4.9/5"), " average rating")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: '#e2e8f0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#475569'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.navy,
      fontWeight: 800
    }
  }, "150+"), " participants in 8+ countries"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: '#e2e8f0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#475569'
    }
  }, "Science-grounded ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.navy,
      fontWeight: 800
    }
  }, "Functional Breathing"), " Live Course"));
}
const PAINS = [['assets/phone.jpg', 'You grab your phone first', "Your attention is gone before you're even out of bed"], ['assets/coffee.jpg', 'You reach for coffee next', "It's how you survive the morning."], ['assets/tired.jpg', 'Energy crashes by afternoon', 'Focus fades. The cycle repeats'], ['assets/phones.jpg', "You've tried to fix it", 'Apps, routines… nothing sticks']];
function DcPain() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.navy,
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Does this feel familiar?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontWeight: 900,
      margin: 0,
      fontSize: 52,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, "YOU WAKE UP\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 400,
      fontSize: 40,
      margin: '8px 0 0'
    }
  }, "but your day is already running you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, PAINS.map(([img, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      position: 'relative',
      aspectRatio: '3/4',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #132E41, rgba(19,46,65,0.6), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 18,
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0
    }
  }, desc)))))));
}
const SCIENCE = [['01', 'Breathe to slow the stress response', "Controlled exhales signal your brain to switch from urgency to calm. You don't need hours — you need the right input."], ['02', 'Breathe to stop the false alarm', "Fast breathing signals danger. Slowing it down tells your brain: 'You are safe.' Anxiety lives in your rhythm, not just your mind."], ['03', 'Breathe to raise your threshold', "If you can't hold your breath for 20 seconds, your system is on high alert. Training this builds real resilience under pressure."]];
function DcScience() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 896,
      margin: '0 auto 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "THE SCIENCE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: C.navy,
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: '0 0 24px'
    }
  }, "What's actually happening?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#475569',
      fontSize: 18,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Your system isn't broken \u2014 it's stuck in survival mode.", /*#__PURE__*/React.createElement("br", null), "Your breath is the fastest way to reset it \u2014 and Functional Breathing is the science-backed method to do it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, SCIENCE.map(([id, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      background: '#f8fafc',
      border: '1px solid #f1f5f9',
      borderTop: `4px solid ${C.orange}`,
      borderRadius: 16,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      background: 'rgba(239,125,19,0.1)',
      color: C.navy,
      borderRadius: 8,
      display: 'grid',
      placeItems: 'center',
      fontWeight: 900,
      fontSize: 14,
      marginBottom: 24
    }
  }, id), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: C.navy,
      fontWeight: 800,
      fontSize: 18,
      margin: '0 0 12px',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#475569',
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0
    }
  }, desc)))));
}
const STEPS = [[1, '📋', 'Sign Up', 'Reserve your spot. Get instant access to the challenge details and the Optimizing Me Tribe.'], [2, '🎙', 'Show Up Live', 'Join JJ on Zoom every morning for 15 min. 7AM CDT · 8AM BOL · 1PM UK · 3PM Athens.'], [3, '🎧', 'Ask JJ Anything', 'Live Q&A after each session — like having a personal coach in your corner every morning.'], [4, '⚡', 'Practice Daily', 'Reinforce with recordings and the tools JJ provides. Build your personal breathing protocol.'], [5, '🔥', 'Transform', 'By Day 7, breathing becomes your most powerful daily tool — automatic, fast, and yours forever.']];
function DcProcess() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: `linear-gradient(to bottom, ${C.navyDeep}, #1a4260)`,
      padding: '96px 48px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "THE PROCESS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: '0 0 16px'
    }
  }, "How the Functional Breathing Course Works"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.cyan,
      fontWeight: 500,
      margin: 0
    }
  }, "7 days. 15 minutes each morning. A system that actually sticks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 16
    }
  }, STEPS.map(([num, icon, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 16,
      padding: 24,
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 8,
      fontSize: 96,
      fontWeight: 900,
      color: 'rgba(239,125,19,0.05)',
      lineHeight: 1,
      userSelect: 'none'
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      background: C.orange,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontWeight: 900,
      fontSize: 18,
      margin: '0 auto 20px',
      boxShadow: '0 10px 15px rgba(239,125,19,0.4)',
      position: 'relative',
      zIndex: 10
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      display: 'block',
      marginBottom: 16,
      position: 'relative',
      zIndex: 10
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontWeight: 800,
      fontSize: 18,
      margin: '0 0 12px',
      position: 'relative',
      zIndex: 10
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0,
      position: 'relative',
      zIndex: 10
    }
  }, desc))))));
}
function DcMidCta() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.orange,
      padding: '48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 900,
      margin: '0 0 8px'
    }
  }, "Your next 7 mornings can be different."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 16,
      margin: '0 0 32px'
    }
  }, "Functional Breathing Live Course \xA0\xB7\xA0 15 min each morning \xA0\xB7\xA0 Live with JJ Ruescas"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      background: '#fff',
      color: C.orange,
      padding: '16px 40px',
      borderRadius: 999,
      fontWeight: 900,
      fontSize: 18,
      textDecoration: 'none',
      boxShadow: '0 20px 25px rgba(0,0,0,0.1)',
      display: 'inline-block'
    }
  }, "Reserve My Spot \u2014 $30 \u2192"));
}
function DcAbout() {
  const stats = [['150+', 'Participants'], ['3', 'Continents'], ['7', 'Editions'], ['4.9★', 'Rating']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.navy,
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/jj-profile-opt.jpg",
    alt: "JJ Ruescas",
    style: {
      width: '100%',
      borderRadius: 24,
      aspectRatio: '4/5',
      objectFit: 'cover',
      objectPosition: 'top',
      boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      right: -20,
      width: 128,
      height: 128,
      background: 'rgba(239,125,19,0.2)',
      borderRadius: 999,
      filter: 'blur(24px)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "HUMAN OPTIMIZATION STRATEGIST"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: '0 0 32px'
    }
  }, "JJ Ruescas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      color: 'rgba(255,255,255,0.75)',
      fontSize: 18,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I've guided ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "150+ people across 3 continents"), " through this exact protocol."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "People who showed up on Day 1 dependent on caffeine, cognitively scattered by 2pm, and stuck in a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "chronic stress response"), " that wasn't sustainable."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "By Day 7, almost every one of them reported the same shift: waking up before the alarm, less reactivity to stressors, and a practical tool they could use anywhere \u2014 without an app, without 20 minutes, without sitting in silence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I'm not a wellness influencer. I experiment with the science, run the protocols on myself first, and teach what produces measurable results. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "That's what this challenge is \u2014 live, direct, and tailored to you."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 48,
      paddingTop: 40,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, stats.map(([val, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 36,
      fontWeight: 900,
      color: C.orange,
      lineHeight: 1
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10,
      color: 'rgba(255,255,255,0.4)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 700,
      marginTop: 8
    }
  }, label)))))));
}
const QUOTES = [["I'm very thankful for a whole week where I was able to learn about breathing habits and how I can apply it to my daily routine.", 'Mariana Molina', 'Bolivia'], ['You are an amazing teacher and such a powerful healer. Thank you for the space you hold for all of us.', 'Chastity Acosta', 'Austin, TX'], ["It's helped me build my capacity and control with my breath, my calm throughout the day, and improved my sleep at night.", 'Amy Freeman', 'Austin, TX']];
function DcTestimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "WHAT PAST PARTICIPANTS EXPERIENCED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: C.navy,
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Don't take my word for it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1024,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, QUOTES.map(([text, author, loc]) => /*#__PURE__*/React.createElement("div", {
    key: author,
    style: {
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: 16,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      opacity: 0.5,
      fontSize: 24,
      fontWeight: 900,
      lineHeight: 1
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#FFB800',
      fontSize: 14,
      letterSpacing: 2,
      margin: '12px 0'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#475569',
      fontSize: 14,
      lineHeight: 1.5,
      margin: '0 0 16px',
      flex: 1
    }
  }, "\"", text, "\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 800,
      color: C.navy,
      fontSize: 14,
      margin: 0
    }
  }, author), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: '#94a3b8',
      margin: '4px 0 0'
    }
  }, loc), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 48,
      height: 48,
      background: 'rgba(239,125,19,0.1)',
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 24
    }
  })))));
}
const INCLUDES = ['7 live Functional Breathing sessions with JJ Ruescas (April 6–12)', 'Personal breathing protocol — built around you', 'Session recordings — 24h access', 'Optimizing Me Tribe community access', 'Science-based framework you keep forever'];
function DcPricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      background: '#f8fafc',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "YOUR MOVE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: C.navy,
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      margin: 0
    }
  }, "One decision.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "Seven mornings that change everything."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.navy,
      borderRadius: 24,
      position: 'relative',
      minHeight: 500,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-jj.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      width: 80,
      height: 80,
      background: C.orange,
      borderRadius: 999,
      border: 'none',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: '0 0 0 14px rgba(239,125,19,0.15), 0 0 0 28px rgba(239,125,19,0.06)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      fontWeight: 700,
      marginTop: 24,
      maxWidth: 280
    }
  }, "Watch a real session from a previous challenge \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.navy,
      borderRadius: 32,
      padding: 48,
      boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingBottom: 32,
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      margin: '0 0 8px'
    }
  }, "April 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.orange,
      fontWeight: 900,
      fontSize: 72,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      verticalAlign: 'top'
    }
  }, "$"), "30"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      fontSize: 14,
      margin: '16px 0 0'
    }
  }, "7-Day Functional Breathing Live Course \xB7 April 6\u201312"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.orange,
      fontSize: 14,
      fontWeight: 700,
      margin: '8px 0 0'
    }
  }, "Less than a single therapy session.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 40px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, INCLUDES.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'rgba(255,255,255,0.8)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.orange,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), item))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      background: C.orange,
      color: '#fff',
      padding: '20px',
      borderRadius: 999,
      fontWeight: 900,
      fontSize: 20,
      textAlign: 'center',
      textDecoration: 'none',
      boxShadow: '0 25px 50px rgba(239,125,19,0.4)'
    }
  }, "Reserve My Spot \u2014 $30 \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.3)',
      fontSize: 11,
      margin: '16px 0 0'
    }
  }, "\u23F1 Challenge starts April 6 \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.pink
    }
  }, "Limited spots"))))));
}
function DcFinal() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.navy,
      padding: '128px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 896,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: C.cyan,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      margin: '0 0 24px'
    }
  }, "APRIL 6\u201312, 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 52,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      margin: '0 0 32px'
    }
  }, "Your nervous system is either your strongest asset \u2014", /*#__PURE__*/React.createElement("br", null), "or your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "silent liability.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 18,
      margin: '0 0 48px'
    }
  }, "7 days. 15 minutes a day. A Functional Breathing practice you'll use for life."), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      background: C.orange,
      color: '#fff',
      padding: '24px 56px',
      borderRadius: 999,
      fontWeight: 900,
      fontSize: 24,
      textDecoration: 'none',
      boxShadow: '0 25px 50px rgba(239,125,19,0.5)',
      display: 'inline-block'
    }
  }, "Reserve My Spot \u2014 $30 \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.3)',
      fontSize: 12,
      margin: '24px 0 0',
      fontWeight: 500
    }
  }, "April 6\u201312 \xA0\xB7\xA0 7AM CDT / 8AM BOL / 1PM UK / 3PM Athens \xA0\xB7\xA0 Limited spots")));
}
function DcFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: C.navyDeep,
      padding: '40px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "Optimizing Me \u2013 JJ Ruescas",
    style: {
      height: 32,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.3)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 700,
      margin: 0
    }
  }, "\xA9 2026 JJRuescas.com \xA0\xB7\xA0 Terms & Conditions"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.2)',
      fontSize: 9,
      margin: '8px 0 0'
    }
  }, "Join the Optimizing Me Tribe \xA0\xB7\xA0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(239,125,19,0.5)'
    }
  }, "jjruescas.com"))));
}
function ChallengeSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: dcFont,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(DcHeader, null), /*#__PURE__*/React.createElement(DcHero, null), /*#__PURE__*/React.createElement(DcProofBar, null), /*#__PURE__*/React.createElement(DcPain, null), /*#__PURE__*/React.createElement(DcScience, null), /*#__PURE__*/React.createElement(DcProcess, null), /*#__PURE__*/React.createElement(DcMidCta, null), /*#__PURE__*/React.createElement(DcAbout, null), /*#__PURE__*/React.createElement(DcTestimonials, null), /*#__PURE__*/React.createElement(DcPricing, null), /*#__PURE__*/React.createElement(DcFinal, null), /*#__PURE__*/React.createElement(DcFooter, null));
}
Object.assign(window, {
  ChallengeSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/7-day-challenge/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ignite/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// IGNITE — sub-brand tokens & primitives recreated from ignite-website repo
// (tailwind.config.ts + brand-guidelines.md). NOT the parent OptMe tokens:
// IGNITE uses blue #132F44, orange #F57F01, 8px radius, Montserrat.
const IG = {
  blue: '#132F44',
  orange: '#F57F01',
  orangeHover: '#D46F01',
  grey: '#E6E6E6',
  dark: '#2C2C2C',
  lightOrange: '#FFE5CC',
  medGrey: '#666666',
  gradOrange: 'linear-gradient(135deg, #F57F01 0%, #FF9A3C 100%)',
  gradBlue: 'linear-gradient(135deg, #132F44 0%, #1A4663 100%)',
  shadowCard: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
  shadowCardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
  glowOrange: '0 0 20px rgba(245,127,1,0.3), 0 0 40px rgba(245,127,1,0.1)'
};
const igFont = "'Montserrat', system-ui, sans-serif";
function IgButton({
  variant = 'primary',
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '8px 16px',
    md: '16px 32px',
    lg: '20px 40px'
  };
  const fs = {
    sm: 14,
    md: 16,
    lg: 18
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: igFont,
    fontWeight: 600,
    fontSize: fs[size],
    borderRadius: 8,
    padding: sizes[size],
    cursor: 'pointer',
    transition: 'all 300ms',
    border: '2px solid transparent'
  };
  const variants = {
    primary: {
      background: IG.orange,
      color: '#fff',
      boxShadow: IG.glowOrange
    },
    secondary: {
      background: 'transparent',
      borderColor: IG.blue,
      color: IG.blue
    },
    tertiary: {
      background: 'transparent',
      color: IG.orange,
      padding: '4px 0'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (variant === 'primary') e.currentTarget.style.background = IG.orangeHover;
      if (variant === 'secondary') {
        e.currentTarget.style.background = IG.blue;
        e.currentTarget.style.color = '#fff';
      }
      if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseLeave: e => {
      if (variant === 'primary') e.currentTarget.style.background = IG.orange;
      if (variant === 'secondary') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = IG.blue;
      }
      if (variant === 'tertiary') e.currentTarget.style.textDecoration = 'none';
    }
  }, rest), children);
}
function Lucide({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      flex: '0 0 auto',
      ...style
    }
  });
}
Object.assign(window, {
  IG,
  igFont,
  IgButton,
  Lucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ignite/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ignite/sections.jsx
try { (() => {
// IGNITE landing recreation — sections from ignite-website repo, real copy from lib/constants.ts
const PAIN = [['circle-dashed', 'Optimization Paralysis', "You know what to do, you just can't do it consistently. The gap between knowledge and execution keeps growing."], ['trending-down', 'Diminishing Returns', "You've tried everything—journaling, cold plunges, therapy, coaches, courses. They work... until they don't."], ['puzzle', 'Tactics Without Foundation', 'Your toolkit is full, but you keep shopping for the next framework, the next system, the next answer.'], ['heart-crack', 'High Achiever, Low Fulfillment', "You've checked the boxes, hit the milestones, but something's missing. Success hasn't translated to satisfaction."], ['brain', 'Knowing vs. Being', 'You can talk the talk—mindfulness, boundaries, self-compassion—but living it is another story.'], ['pause-circle', 'Analysis Over Action', "You're great at understanding your patterns, terrible at changing them. Insight hasn't led to transformation."]];
const PHASES = [[1, 'Nervous System Foundation', 'Weeks 1-2', 'Learn to regulate your state before you try to change your behavior. Build the capacity to feel safe in your own body.', ['Identify your activation patterns', 'Build self-regulation tools', 'Create safety anchors', 'Understand your window of tolerance']], [2, 'Emotional Liberation', 'Weeks 3-4', "Release the backlog. Process what's been stuck. Make space for what wants to emerge.", ['Discharge stored stress', 'Process incomplete emotions', 'Reclaim energy from the past', 'Build emotional fluency']], [3, 'Identity Integration', 'Week 5', 'Align who you are with who you want to be. Embody the version of yourself that naturally does the things.', ['Define your new operating system', 'Integrate new patterns', 'Build sustainable practices', 'Create your post-cohort plan']]];
const FEATURES = ['5 weekly live sessions (90 min)', '2 individual 1:1 coaching sessions with JJ (30 min each)', 'Optional co-working sessions (Wed & Fri)', 'Complete IGNITE Framework curriculum', 'Private community access', 'Daily implementation prompts', '3-month post-cohort check-ins', 'All session recordings', 'Resource library access', '100% satisfaction guarantee (first 2 weeks)'];
const FAQS = [["Why is this different from what I've already tried?", "Most programs give you more tactics, frameworks, and information. IGNITE starts where they end—with your nervous system. We address why you can't execute what you already know, not just what to do. This is about changing your operating system, not adding more apps."], ['Is 5 weeks really enough time?', "Yes, when we're working at the right level. We're not teaching you productivity hacks—we're helping you build the foundation that makes follow-through natural. Most participants report noticeable shifts in weeks 2-3."], ["What if I can't make all the live sessions?", 'All sessions are recorded and available within 24 hours. However, the live cohort experience is where the magic happens. We recommend attending at least 4 of 5 live sessions for optimal results.'], ['How much time do I need to commit each week?', "90-minute Tuesday session + 2-3 hours of integration work. Optional co-working sessions (Wed/Fri) are open to everyone. This isn't about cramming more into your life—it's about reorganizing how you operate."], ['Is this therapy or coaching?', 'Neither—and both. This is a structured cohort program focused on practical integration. Think of it as a hybrid: the depth of therapeutic work with the structure and accountability of coaching.']];
function IgHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    const onScroll = () => setScrolled((window.scrollY || el.scrollTop) > 8);
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);
  const fg = scrolled ? IG.blue : '#fff';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 50,
      transition: 'all 300ms',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      boxShadow: scrolled ? IG.shadowCard : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      display: 'flex',
      height: 80,
      maxWidth: 1200,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: fg
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/ignite-logo.png",
    alt: "IGNITE logo",
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.28em',
      color: scrolled ? IG.medGrey : 'rgba(255,255,255,0.8)'
    }
  }, "Ignite"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 18,
      fontWeight: 700
    }
  }, "Accelerator"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: fg
    }
  }, [['How It Works', false], ['Schedule', false], ['Curriculum', false], ['Apply Now', true], ['FAQ', false]].map(([label, cta]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    style: {
      color: cta ? IG.orange : 'inherit',
      textDecoration: 'none'
    }
  }, label)))));
}
function IgHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: "url('assets/hero-background.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 18%',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.35), rgba(0,0,0,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 1200,
      margin: '0 auto',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginBottom: 24,
      background: IG.lightOrange,
      border: `2px solid ${IG.orange}`,
      color: IG.blue,
      padding: '8px 24px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600
    }
  }, "June 30, 2026 Cohort \u2022 Limited to 12 Participants"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      lineHeight: 1.2,
      fontWeight: 700,
      margin: '0 0 24px'
    }
  }, "Stop Starting Over", /*#__PURE__*/React.createElement("br", null), "Every Monday"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      maxWidth: 800,
      margin: '0 auto 32px',
      color: 'rgba(255,255,255,0.9)'
    }
  }, "A 5-week cohort for high-achievers tired of optimization paralysis. Build the nervous system foundation that makes follow-through natural."), /*#__PURE__*/React.createElement(IgButton, {
    variant: "primary",
    size: "lg"
  }, "Apply for IGNITE June 30, 2026 Cohort ", /*#__PURE__*/React.createElement(Lucide, {
    name: "arrow-right",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      maxWidth: 460,
      margin: '48px auto 0',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/carla-quisbert.webp",
    alt: "Carla Quisbert",
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      objectFit: 'cover',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontStyle: 'italic',
      fontSize: 15,
      color: 'rgba(255,255,255,0.9)'
    }
  }, "\u201CThis isn't training that gives quick answers\u2014it allows you to have fun with the questions. And sometimes, that's what changes everything.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "\u2014 Carla Quisbert, Marketing & Brand Strategist")))));
}
function IgProblem() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '128px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      lineHeight: 1.3,
      fontWeight: 800,
      color: IG.blue,
      margin: '0 0 24px'
    }
  }, "You Have the Knowledge.", /*#__PURE__*/React.createElement("br", null), "You Need the System."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      color: IG.dark,
      maxWidth: 800,
      margin: '0 auto'
    }
  }, "You've read the books, tried the frameworks, hired the coaches. You know what to do. The problem isn't knowledge\u2014it's execution.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, PAIN.map(([icon, title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: i % 2 === 1 ? IG.lightOrange : '#fff',
      borderRadius: 8,
      boxShadow: IG.shadowCard,
      padding: 32,
      transition: 'box-shadow 300ms'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = IG.shadowCardHover,
    onMouseLeave: e => e.currentTarget.style.boxShadow = IG.shadowCard
  }, /*#__PURE__*/React.createElement(Lucide, {
    name: icon,
    size: 40,
    color: IG.orange,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: IG.blue,
      margin: '0 0 16px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: IG.dark,
      margin: 0
    }
  }, desc)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: 800,
      margin: '48px auto 0',
      textAlign: 'center',
      fontSize: 30,
      lineHeight: 1.4,
      fontWeight: 600,
      color: IG.blue
    }
  }, "What if the problem isn't that you need more tactics\u2014it's that you need to upgrade your operating system?")));
}
function IgFramework() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: IG.lightOrange,
      padding: '128px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: IG.orange,
      textTransform: 'uppercase',
      margin: '0 0 16px'
    }
  }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      color: IG.blue,
      margin: '0 0 24px'
    }
  }, "The IGNITE Framework"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      color: IG.dark,
      maxWidth: 800,
      margin: '0 auto'
    }
  }, "Three phases that rebuild your foundation from the ground up\u2014nervous system first, tactics second.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, PHASES.map(([n, title, sub, desc, outcomes]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#fff',
      borderRadius: 8,
      boxShadow: IG.shadowCard,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 96,
      height: 96,
      background: IG.orange,
      opacity: 0.1,
      borderBottomLeftRadius: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      fontSize: 36,
      fontWeight: 700,
      color: IG.orange,
      opacity: 0.3
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: IG.blue,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: IG.orange
    }
  }, sub)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: IG.dark,
      margin: '0 0 24px'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, outcomes.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Lucide, {
    name: "check-circle-2",
    size: 20,
    color: IG.orange,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: IG.dark
    }
  }, o))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      textAlign: 'center',
      background: '#fff',
      padding: 32,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: IG.blue,
      margin: '0 0 16px'
    }
  }, "Integration Over Information"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      color: IG.dark,
      margin: 0
    }
  }, "This isn't about learning more. It's about integrating what you already know into a nervous system that can actually execute it."))));
}
function IgPricing() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '128px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      color: IG.blue,
      margin: '0 0 24px'
    }
  }, "Investment Options"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      color: IG.dark,
      maxWidth: 800,
      margin: '0 auto'
    }
  }, "One program, everything included: the 5-week IGNITE Framework with personalized 1:1 coaching and post-cohort support. Maximum 12 participants per cohort.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 512,
      margin: '0 auto',
      background: '#fff',
      border: `2px solid ${IG.grey}`,
      borderRadius: 8,
      boxShadow: IG.shadowCard,
      padding: 48,
      transition: 'all 300ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = IG.orange;
      e.currentTarget.style.boxShadow = IG.shadowCardHover;
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = IG.grey;
      e.currentTarget.style.boxShadow = IG.shadowCard;
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: IG.blue,
      margin: '0 0 12px'
    }
  }, "IGNITE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 60,
      fontWeight: 700,
      color: IG.blue,
      marginBottom: 12
    }
  }, "$1,100"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: IG.medGrey,
      margin: 0
    }
  }, "or 3 payments of $385")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: IG.grey,
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 32px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Lucide, {
    name: "check-circle-2",
    size: 24,
    color: IG.orange,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: IG.dark
    }
  }, f)))), /*#__PURE__*/React.createElement(IgButton, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      fontWeight: 700
    }
  }, "Apply Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      maxWidth: 800,
      margin: '64px auto 0',
      background: IG.gradOrange,
      color: '#fff',
      padding: 40,
      borderRadius: 8,
      textAlign: 'center',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement(Lucide, {
    name: "shield",
    size: 56,
    color: "#fff",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      margin: '0 0 16px'
    }
  }, "100% Satisfaction Guarantee"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.8,
      margin: 0,
      color: 'rgba(255,255,255,0.95)'
    }
  }, "If after the second session you feel this isn't the right fit, full refund\u2014no questions asked. We want you all-in, not feeling trapped."))));
}
function IgFAQ() {
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '128px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      color: IG.blue,
      margin: '0 0 24px'
    }
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: IG.dark,
      margin: 0
    }
  }, "Everything you need to know about the IGNITE program.")), FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: i < FAQS.length - 1 ? `1px solid ${IG.grey}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      padding: '24px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: igFont
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 18,
      color: IG.blue,
      paddingRight: 32
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open === i ? 'rotate(180deg)' : 'none',
      transition: 'transform 300ms',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Lucide, {
    name: "chevron-down",
    size: 24,
    color: IG.orange
  }))), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24,
      fontSize: 16,
      lineHeight: 1.6,
      color: IG.dark
    }
  }, a)))));
}
function IgFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: IG.blue,
      color: '#fff',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 48,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/ignite-logo.png",
    alt: "IGNITE Logo",
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      margin: '0 0 12px'
    }
  }, "IGNITE"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: IG.grey,
      fontSize: 14,
      margin: 0
    }
  }, "Optimize one human at a time, 1% each day.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 600,
      margin: '0 0 16px'
    }
  }, "Quick Links"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['How It Works', 'Pricing', 'FAQ', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: IG.grey,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 600,
      margin: '0 0 16px'
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@jjruescas.com",
    style: {
      color: IG.grey,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "info@jjruescas.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 32,
      borderTop: '1px solid rgba(230,230,230,0.2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: IG.grey,
      fontSize: 14,
      margin: 0
    }
  }, "\xA9 2026 IGNITE. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: IG.grey,
      fontSize: 12,
      margin: '8px 0 0'
    }
  }, "Curiosity. Learning. Kaizen."))));
}
function IgniteSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: igFont,
      color: IG.dark
    }
  }, /*#__PURE__*/React.createElement(IgHeader, null), /*#__PURE__*/React.createElement(IgHero, null), /*#__PURE__*/React.createElement(IgProblem, null), /*#__PURE__*/React.createElement(IgFramework, null), /*#__PURE__*/React.createElement(IgPricing, null), /*#__PURE__*/React.createElement(IgFAQ, null), /*#__PURE__*/React.createElement(IgFooter, null));
}
Object.assign(window, {
  IgniteSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ignite/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resetea-bolivia/sections.jsx
try { (() => {
// Resetea Tu Sistema — Bolivia. Recreated from resetea-tu-sistema-bolivia repo.
// Tokens (tailwind.config.js): brand-blue #132F44, brand-orange #F57F01, brand-grey #E6E6E6.
// Santa Cruz uses the 'green' city variant; all copy is real, from src/data/event.ts + App.tsx.
const RB = {
  blue: '#132F44',
  orange: '#F57F01',
  grey: '#E6E6E6',
  green: '#16a34a',
  greenDark: '#15803d'
};
const rbFont = "'Montserrat', system-ui, sans-serif";
const RB_CITIES = [{
  name: 'La Paz',
  date: 'Domingo 9 de Agosto, 2026',
  dateShort: '9 Ago',
  time: '9:00 am - 12:00 pm',
  heroTime: '9:00 AM',
  variant: 'orange',
  location: 'Círculo Aeronáutico',
  preventa: [['Individual', 'Bs 169'], ['En Parejas', 'Bs 159'], ['Grupal (3+)', 'Bs 149']],
  regular: [['Individual', 'Bs 200'], ['En Parejas', 'Bs 185'], ['Grupal (3+)', 'Bs 170']],
  preventaNote: 'Hasta el 5 de Agosto',
  cta: 'Comprar Ticket La Paz'
}, {
  name: 'Santa Cruz',
  date: 'Jueves 13 de Agosto, 2026',
  dateShort: '13 Ago',
  time: '6:30 pm - 9:30 pm',
  heroTime: '6:30 PM',
  variant: 'green',
  location: 'Hotel Camino Real',
  preventa: [['Individual', 'Bs 259'], ['En Parejas', 'Bs 249'], ['Grupal (3+)', 'Bs 239']],
  regular: [['Individual', 'Bs 290'], ['En Parejas', 'Bs 275'], ['Grupal (3+)', 'Bs 260']],
  preventaNote: 'Hasta el 6 de Agosto',
  cta: 'Comprar Ticket Santa Cruz'
}, {
  name: 'Santa Cruz',
  date: 'Jueves 20 de Agosto, 2026',
  dateShort: '20 Ago',
  time: '6:30 pm - 9:30 pm',
  heroTime: '6:30 PM',
  variant: 'green',
  location: 'Hotel Camino Real',
  preventa: [['Individual', 'Bs 259'], ['En Parejas', 'Bs 249'], ['Grupal (3+)', 'Bs 239']],
  regular: [['Individual', 'Bs 290'], ['En Parejas', 'Bs 275'], ['Grupal (3+)', 'Bs 260']],
  preventaNote: 'Hasta el 13 de Agosto',
  cta: 'Comprar Ticket Santa Cruz'
}];
const RB_PROGRAM = [['9:00 - 9:30', 'Registro y Bienvenida', 'Llegada, registro y entrega de material (antifaz + 1 botella agua).'], ['9:30 - 9:50', 'Preparación Somática', 'Yoga y movimiento consciente para preparar tu cuerpo.'], ['10:00 - 10:30', 'Introducción al Breathwork con JJ', 'Explicación de la técnica, beneficios y cómo navegar tu experiencia.'], ['10:30 - 11:30', 'Práctica de Breathwork Guiado', '60 minutos de superventilación con música inmersiva. Facilitación adaptativa en tiempo real.'], ['11:30 - 12:15', 'Integración y Cierre', 'Espacio para compartir, entrega de bolsa de regalos y fotos del recuerdo.']];
function RbHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-loop-poster.jpg",
    alt: "Sesi\xF3n de breathwork",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(19,47,68,0.75), rgba(19,47,68,0.3), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(19,47,68,0.8), rgba(19,47,68,0.1), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(19,47,68,0.45), transparent, transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 1152,
      margin: '0 auto',
      padding: '96px 48px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: RB.orange,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      margin: '0 0 20px',
      textShadow: '0 1px 8px rgba(0,0,0,0.4)'
    }
  }, "Agosto 2026 \xB7 Bolivia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 68,
      fontWeight: 700,
      lineHeight: 1.05,
      margin: '0 0 20px',
      textShadow: '0 2px 16px rgba(0,0,0,0.35)',
      textWrap: 'balance'
    }
  }, "Resetea Tu Sistema"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 22,
      lineHeight: 1.5,
      maxWidth: 620,
      margin: '0 0 36px',
      textShadow: '0 1px 10px rgba(0,0,0,0.4)'
    }
  }, "Una experiencia de Respiraci\xF3n, Movimiento y Neurociencia para el Bienestar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 36
    }
  }, RB_CITIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 12,
      padding: '10px 18px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 99,
      background: c.variant === 'orange' ? RB.orange : RB.green
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      opacity: 0.8
    }
  }, c.dateShort, " \xB7 ", c.heroTime)))), /*#__PURE__*/React.createElement("a", {
    href: "#tickets",
    style: {
      display: 'inline-block',
      background: RB.orange,
      color: '#fff',
      fontWeight: 700,
      fontSize: 18,
      padding: '18px 40px',
      borderRadius: 12,
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(245,127,1,0.4)'
    }
  }, "Comprar Tickets")));
}
function RbPrograma() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1024,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: RB.blue,
      fontSize: 44,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 12px'
    }
  }, "\xBFQu\xE9 es Resetea Tu Sistema?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#475569',
      fontSize: 18,
      lineHeight: 1.7,
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 64px'
    }
  }, "Una experiencia transformadora de 3 horas: respiraci\xF3n consciente, movimiento y neurociencia aplicada, guiada en vivo por JJ Ruescas. Programa id\xE9ntico en ambas ciudades (horario de La Paz mostrado)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, RB_PROGRAM.map(([time, title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 24px 1fr',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontWeight: 700,
      fontSize: 15,
      color: RB.orange,
      paddingTop: 2
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 99,
      background: RB.blue,
      border: `3px solid ${RB.grey}`,
      flex: '0 0 auto'
    }
  }), i < RB_PROGRAM.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      flex: 1,
      background: RB.grey
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: RB.blue,
      fontSize: 19,
      fontWeight: 700,
      margin: '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#475569',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, desc)))))));
}
function RbTickets() {
  return /*#__PURE__*/React.createElement("section", {
    id: "tickets",
    style: {
      background: '#f8fafc',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: RB.blue,
      fontSize: 44,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 64px'
    }
  }, "Tickets \xB7 Agosto 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, RB_CITIES.map((c, i) => {
    const accent = c.variant === 'orange' ? RB.orange : RB.green;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: accent,
        color: '#fff',
        padding: '20px 24px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        margin: 0
      }
    }, c.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        margin: '4px 0 0',
        opacity: 0.9
      }
    }, c.date), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        margin: '2px 0 0',
        opacity: 0.85
      }
    }, c.time, " \xB7 ", c.location)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: RB.blue,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, "Preventa"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: '#64748b'
      }
    }, c.preventaNote)), c.preventa.map(([label, price]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 0',
        borderBottom: '1px solid #f1f5f9',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#475569'
      }
    }, label), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: accent
      }
    }, price)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: RB.blue,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, "Regular"), c.regular.map(([label, price]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 0',
        borderBottom: '1px solid #f1f5f9',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#475569'
      }
    }, label), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: RB.blue
      }
    }, price)))), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        marginTop: 'auto',
        display: 'block',
        textAlign: 'center',
        background: accent,
        color: '#fff',
        fontWeight: 700,
        fontSize: 15,
        padding: '14px',
        borderRadius: 12,
        textDecoration: 'none'
      }
    }, c.cta)));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: '#64748b',
      fontSize: 14,
      marginTop: 32
    }
  }, "Capacidad limitada: 200 personas por ciudad.")));
}
function RbFacilitador() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: RB.blue,
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1024,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/jj-ruescas-2.webp",
    alt: "Retrato de JJ Ruescas, facilitador de Resetea Tu Sistema",
    style: {
      width: '100%',
      borderRadius: 20,
      aspectRatio: '4/5',
      objectFit: 'cover',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: RB.orange,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      margin: '0 0 12px'
    }
  }, "Facilitador Principal"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 700,
      margin: '0 0 8px'
    }
  }, "JJ Ruescas"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: RB.orange,
      fontSize: 17,
      fontWeight: 600,
      margin: '0 0 24px'
    }
  }, "Estratega de Optimizaci\xF3n Humana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      color: 'rgba(255,255,255,0.8)',
      fontSize: 16,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Boliviano radicado en Estados Unidos. Formaci\xF3n en neurociencia, coaching de alto rendimiento, cuidado informado de trauma y optimizaci\xF3n del sistema nervioso."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Con m\xE1s de 10 a\xF1os de experiencia, ha facilitado cientos de eventos en Estados Unidos y recientemente complet\xF3 su tour por Londres y Grecia."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "En agosto de 2026 regresa a Bolivia con dos eventos de breathwork: La Paz y Santa Cruz.")))));
}
function RbFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#0d2233',
      color: RB.grey,
      padding: '40px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0
    }
  }, "\xA9 2026 Resetea Bolivia \u2014 Una experiencia de ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Optimizing Me")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      margin: '8px 0 0',
      opacity: 0.7
    }
  }, "Una experiencia integral."));
}
function ReseteaSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: rbFont,
      color: '#1f2933'
    }
  }, /*#__PURE__*/React.createElement(RbHero, null), /*#__PURE__*/React.createElement(RbPrograma, null), /*#__PURE__*/React.createElement(RbTickets, null), /*#__PURE__*/React.createElement(RbFacilitador, null), /*#__PURE__*/React.createElement(RbFooter, null));
}
Object.assign(window, {
  ReseteaSite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resetea-bolivia/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared outline icons for the Optimizing Me website kit.
// Outline style, 2px stroke — matches brand iconography (Lucide/Phosphor family).
const Icon = ({
  d,
  size = 22,
  stroke = 2
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const Icons = {
  wind: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.6 4.6A2 2 0 1 1 11 8H2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.6 19.4A2 2 0 1 0 14 16H2"
    }))
  })),
  heart: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"
    })
  })),
  activity: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    })
  })),
  bulb: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 22h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"
    }))
  })),
  apple: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 8c-2-3-6-2-6 2 0 5 3 10 6 10s6-5 6-10c0-4-4-5-6-2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8c0-2 1-4 3-4"
    }))
  })),
  moon: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
    })
  })),
  arrow: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 6l6 6-6 6"
    }))
  })),
  menu: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M4 6h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 12h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 18h16"
    }))
  })),
  close: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12"
    }))
  })),
  check: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })
  })),
  mail: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m2 7 10 6 10-6"
    }))
  })),
  play: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("polygon", {
      points: "6 4 20 12 6 20 6 4"
    })
  })),
  spark: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
    })
  })),
  clock: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    }))
  })),
  users: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.9"
    }))
  }))
};
Object.assign(window, {
  Icon,
  Icons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Optimizing Me — marketing website recreation. Composes DS components.
const DS = window.OptimizingMeDesignSystem_7c7534;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Stat,
  Testimonial,
  Logo,
  Eyebrow,
  PillarCard,
  Input,
  Textarea,
  Checkbox
} = DS;
const A = '../../assets';
const COPY = {
  en: {
    nav: ['Framework', 'Programs', 'About', 'Journal'],
    cta: 'Book a call',
    eyebrow: 'Human Optimization Strategist',
    title1: 'Optimize your',
    title2: '1%',
    title3: ', every day.',
    lede: 'Practical personal development for high performers — grounded in the nervous system, breathwork, and a little AI. Small, consistent, strategic changes that compound into a better you.',
    primary: 'Start optimizing',
    secondary: 'See the framework',
    lang: 'ES'
  },
  es: {
    nav: ['Método', 'Programas', 'Sobre mí', 'Diario'],
    cta: 'Agenda una llamada',
    eyebrow: 'Estratega de Optimización Humana',
    title1: 'Optimiza tu',
    title2: '1%',
    title3: ', cada día.',
    lede: 'Desarrollo personal práctico para alto rendimiento — basado en el sistema nervioso, la respiración y un poco de IA. Cambios pequeños, consistentes y estratégicos que se acumulan.',
    primary: 'Empieza a optimizar',
    secondary: 'Ver el método',
    lang: 'EN'
  }
};

// ---------- Header ----------
function Header({
  lang,
  setLang,
  t
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(252,247,243,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "jj-tagline",
    background: "light",
    height: 40,
    assetBase: A
  })), /*#__PURE__*/React.createElement("nav", {
    className: "desk-nav",
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12
    }
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === 'en' ? 'es' : 'en'),
    style: {
      background: 'none',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 14px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.06em',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, t.lang), /*#__PURE__*/React.createElement("span", {
    className: "desk-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, t.cta)), /*#__PURE__*/React.createElement("span", {
    className: "mob-only"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    variant: "soft",
    onClick: () => setOpen(!open)
  }, open ? /*#__PURE__*/React.createElement(Icons.close, null) : /*#__PURE__*/React.createElement(Icons.menu, null))))), open && /*#__PURE__*/React.createElement("div", {
    className: "mob-only",
    style: {
      padding: '8px var(--gutter) 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      padding: '10px 4px',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, t.cta))));
}

// ---------- Hero ----------
function Hero({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--brand-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "radial",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px var(--gutter) 92px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-orange)"
  }, t.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(44px, 6vw, 72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.01em',
      margin: '18px 0 0'
    }
  }, t.title1, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-orange)'
    }
  }, t.title2), t.title3), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--peach-200)',
      margin: '22px 0 32px'
    }
  }, t.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 18
    })
  }, t.primary), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg"
  }, t.secondary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    suffix: "%",
    label: "better, every day",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "HumanOps pillars",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "systems, one you",
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/photos/jj-portrait-square-red.jpg',
    alt: "JJ Ruescas",
    style: {
      width: 'min(380px, 78vw)',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: '46% 54% 54% 46% / 46% 46% 54% 54%',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: A + '/logos/symbol-white.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      width: 84,
      opacity: 0.95
    }
  })))));
}

// ---------- Framework ----------
const PILLARS = [['respiration', 'Respiration', 'Breathwork to down-regulate the nervous system on demand.', 'wind'], ['emotions', 'Emotions', 'Name it to tame it — emotional granularity as a skill.', 'heart'], ['movement', 'Movement', 'Move daily to keep the hardware running clean.', 'activity'], ['nutrition', 'Nutrition', 'Fuel that stabilizes energy and focus, not spikes.', 'apple'], ['mindset', 'Mindset', 'Reframe the inner narrative that runs in the background.', 'bulb'], ['recovery', 'Recovery', 'Sleep and rest are where the upgrade installs.', 'moon']];
function Framework() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-warm)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The HumanOps Framework"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: 'var(--brand-navy)',
      margin: '14px 0 12px',
      lineHeight: 1.12
    }
  }, "You are an interconnected system."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Optimize one area and it feeds the others. Six pillars, one infinite loop of improvement.")), /*#__PURE__*/React.createElement("img", {
    src: A + '/diagrams/humanops-infinite-loop.png',
    alt: "HumanOps Infinite Loop",
    style: {
      display: 'block',
      width: 'min(760px,100%)',
      height: 'auto',
      margin: '28px auto 44px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillar-grid"
  }, PILLARS.map(([p, title, desc, ic]) => /*#__PURE__*/React.createElement(PillarCard, {
    key: p,
    pillar: p,
    title: title,
    description: desc,
    icon: React.createElement(Icons[ic], {
      size: 26
    })
  })))));
}

// ---------- Programs ----------
const PROGRAMS = [{
  badge: ['orange', 'Flagship'],
  title: 'IGNITE',
  tag: 'coaching',
  meta: [['clock', '8 weeks'], ['users', '1:1 + cohort']],
  desc: 'A full-system reset: breathwork, mindset, and recovery protocols tailored to your life.'
}, {
  badge: ['periwinkle', 'Live'],
  title: 'Breathwork Reset',
  tag: 'breathwork',
  meta: [['clock', '60 min'], ['users', 'Group']],
  desc: 'A guided session to reset your nervous system and walk out calmer, clearer, sharper.'
}, {
  badge: ['peach', 'Popular'],
  title: '1:1 Coaching',
  tag: 'coaching',
  meta: [['clock', 'Monthly'], ['users', 'Private']],
  desc: 'Personal strategy for leaders and founders optimizing performance under pressure.'
}, {
  badge: ['navy', 'New'],
  title: 'AI Habit OS',
  tag: 'ai',
  meta: [['spark', 'Self-paced'], ['clock', '10 min/day']],
  desc: 'Use lightweight AI nudges to install habits that actually stick. Systems, not willpower.'
}];
function Programs() {
  const [filter, setFilter] = React.useState('all');
  const filters = [['all', 'All'], ['coaching', 'Coaching'], ['breathwork', 'Breathwork'], ['ai', 'AI & Tech']];
  const shown = PROGRAMS.filter(p => filter === 'all' || p.tag === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      gap: 20,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-periwinkle)"
  }, "Programs & Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: 'var(--brand-navy)',
      margin: '12px 0 0',
      lineHeight: 1.12
    }
  }, "Pick your next 1%.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, filters.map(([k, label]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    active: filter === k,
    onClick: () => setFilter(k)
  }, label)))), /*#__PURE__*/React.createElement("div", {
    className: "prog-grid"
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "light",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge[0]
  }, p.badge[1])), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--brand-navy)',
      margin: '0 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginBottom: 18
    }
  }, p.meta.map(([ic, txt]) => /*#__PURE__*/React.createElement("span", {
    key: txt,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-periwinkle)'
    }
  }, React.createElement(Icons[ic], {
    size: 16
  })), txt))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 16
    })
  }, "Explore"))))));
}

// ---------- Testimonials ----------
const QUOTES = [{
  quote: 'Breathwork rewired how I handle stress before big meetings. I feel it in my body within two minutes.',
  name: 'Ana M.',
  role: 'Product Lead'
}, {
  quote: 'JJ treats the mind like a system you can debug. The 1% framing finally made habits stick for me.',
  name: 'Diego R.',
  role: 'Founder'
}, {
  quote: 'No fluff, no mysticism — just tools that work. My sleep and focus are measurably better.',
  name: 'Carla V.',
  role: 'Physician'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-navy)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-orange)"
  }, "Transformations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: '#fff',
      margin: '14px 0 0'
    }
  }, "One human at a time.")), /*#__PURE__*/React.createElement("div", {
    className: "quote-grid"
  }, QUOTES.map(q => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: q.name,
    tone: "dark"
  }, q))))));
}

// ---------- Newsletter / Contact ----------
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-warm)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    padding: "clamp(28px,5vw,52px)",
    style: {
      borderTop: '3px solid var(--accent)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 999,
      background: 'var(--peri-100)',
      color: 'var(--brand-navy)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--brand-navy)',
      margin: '0 0 8px'
    }
  }, "You're in."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Check your inbox for your first 1% \u2014 a 3-minute breathwork reset.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Weekly 1%"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(26px,3vw,34px)',
      color: 'var(--brand-navy)',
      margin: '12px 0 8px'
    }
  }, "One optimization, every Sunday."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 24px',
      lineHeight: 1.6
    }
  }, "Actionable, science-grounded, no spam. Join leaders optimizing their nervous system."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row",
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Alex"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@work.com",
    iconStart: /*#__PURE__*/React.createElement(Icons.mail, {
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me weekly optimization tips (unsubscribe anytime)",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true),
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 18
    })
  }, "Get the Weekly 1%")))))));
}

// ---------- Footer ----------
function Footer({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--peach-200)',
      padding: '56px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "jj-tagline",
    background: "dark",
    height: 44,
    assetBase: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 14,
      lineHeight: 1.6,
      opacity: 0.85
    }
  }, "Optimizing 1% each day, one human at a time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Explore"), t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--peach-200)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Connect"), ['Instagram', 'LinkedIn', 'YouTube', 'optimizando.me'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--peach-200)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '36px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      fontSize: 12.5,
      opacity: 0.7
    }
  }, "\xA9 ", new Date().getFullYear(), " JJ Ruescas \xB7 Optimizing Me. Human Optimization Strategist."));
}
function Site() {
  const [lang, setLang] = React.useState('en');
  const t = COPY[lang];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang,
    t: t
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(Framework, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, {
    t: t
  }));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.standalone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Optimizing Me — marketing website recreation. Composes DS components.
const DS = window.OptimizingMeDesignSystem_7c7534;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Stat,
  Testimonial,
  Logo,
  Eyebrow,
  PillarCard,
  Input,
  Textarea,
  Checkbox
} = DS;
const A = '../../assets';
const COPY = {
  en: {
    nav: ['Framework', 'Programs', 'About', 'Journal'],
    cta: 'Book a call',
    eyebrow: 'Human Optimization Strategist',
    title1: 'Optimize your',
    title2: '1%',
    title3: ', every day.',
    lede: 'Practical personal development for high performers — grounded in the nervous system, breathwork, and a little AI. Small, consistent, strategic changes that compound into a better you.',
    primary: 'Start optimizing',
    secondary: 'See the framework',
    lang: 'ES'
  },
  es: {
    nav: ['Método', 'Programas', 'Sobre mí', 'Diario'],
    cta: 'Agenda una llamada',
    eyebrow: 'Estratega de Optimización Humana',
    title1: 'Optimiza tu',
    title2: '1%',
    title3: ', cada día.',
    lede: 'Desarrollo personal práctico para alto rendimiento — basado en el sistema nervioso, la respiración y un poco de IA. Cambios pequeños, consistentes y estratégicos que se acumulan.',
    primary: 'Empieza a optimizar',
    secondary: 'Ver el método',
    lang: 'EN'
  }
};

// ---------- Header ----------
function Header({
  lang,
  setLang,
  t
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(252,247,243,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoBlue,
    alt: "Optimizing Me \u2014 JJ Ruescas",
    style: {
      height: 40,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "desk-nav",
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12
    }
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === 'en' ? 'es' : 'en'),
    style: {
      background: 'none',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 14px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.06em',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, t.lang), /*#__PURE__*/React.createElement("span", {
    className: "desk-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, t.cta)), /*#__PURE__*/React.createElement("span", {
    className: "mob-only"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    variant: "soft",
    onClick: () => setOpen(!open)
  }, open ? /*#__PURE__*/React.createElement(Icons.close, null) : /*#__PURE__*/React.createElement(Icons.menu, null))))), open && /*#__PURE__*/React.createElement("div", {
    className: "mob-only",
    style: {
      padding: '8px var(--gutter) 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      padding: '10px 4px',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, t.cta))));
}

// ---------- Hero ----------
function Hero({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--brand-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "radial",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px var(--gutter) 92px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-orange)"
  }, t.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(44px, 6vw, 72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.01em',
      margin: '18px 0 0'
    }
  }, t.title1, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-orange)'
    }
  }, t.title2), t.title3), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--peach-200)',
      margin: '22px 0 32px'
    }
  }, t.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 18
    })
  }, t.primary), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg"
  }, t.secondary)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    suffix: "%",
    label: "better, every day",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "HumanOps pillars",
    onDark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "systems, one you",
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.portrait,
    alt: "JJ Ruescas",
    style: {
      width: 'min(380px, 78vw)',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: '46% 54% 54% 46% / 46% 46% 54% 54%',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.symbolWhite,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      width: 84,
      opacity: 0.95
    }
  })))));
}

// ---------- Framework ----------
const PILLARS = [['respiration', 'Respiration', 'Breathwork to down-regulate the nervous system on demand.', 'wind'], ['emotions', 'Emotions', 'Name it to tame it — emotional granularity as a skill.', 'heart'], ['movement', 'Movement', 'Move daily to keep the hardware running clean.', 'activity'], ['nutrition', 'Nutrition', 'Fuel that stabilizes energy and focus, not spikes.', 'apple'], ['mindset', 'Mindset', 'Reframe the inner narrative that runs in the background.', 'bulb'], ['recovery', 'Recovery', 'Sleep and rest are where the upgrade installs.', 'moon']];
function Framework() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-warm)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The HumanOps Framework"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: 'var(--brand-navy)',
      margin: '14px 0 12px',
      lineHeight: 1.12
    }
  }, "You are an interconnected system."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Optimize one area and it feeds the others. Six pillars, one infinite loop of improvement.")), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.humanops,
    alt: "HumanOps Infinite Loop",
    style: {
      display: 'block',
      width: 'min(760px,100%)',
      height: 'auto',
      margin: '28px auto 44px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillar-grid"
  }, PILLARS.map(([p, title, desc, ic]) => /*#__PURE__*/React.createElement(PillarCard, {
    key: p,
    pillar: p,
    title: title,
    description: desc,
    icon: React.createElement(Icons[ic], {
      size: 26
    })
  })))));
}

// ---------- Programs ----------
const PROGRAMS = [{
  badge: ['orange', 'Flagship'],
  title: 'IGNITE',
  tag: 'coaching',
  meta: [['clock', '8 weeks'], ['users', '1:1 + cohort']],
  desc: 'A full-system reset: breathwork, mindset, and recovery protocols tailored to your life.'
}, {
  badge: ['periwinkle', 'Live'],
  title: 'Breathwork Reset',
  tag: 'breathwork',
  meta: [['clock', '60 min'], ['users', 'Group']],
  desc: 'A guided session to reset your nervous system and walk out calmer, clearer, sharper.'
}, {
  badge: ['peach', 'Popular'],
  title: '1:1 Coaching',
  tag: 'coaching',
  meta: [['clock', 'Monthly'], ['users', 'Private']],
  desc: 'Personal strategy for leaders and founders optimizing performance under pressure.'
}, {
  badge: ['navy', 'New'],
  title: 'AI Habit OS',
  tag: 'ai',
  meta: [['spark', 'Self-paced'], ['clock', '10 min/day']],
  desc: 'Use lightweight AI nudges to install habits that actually stick. Systems, not willpower.'
}];
function Programs() {
  const [filter, setFilter] = React.useState('all');
  const filters = [['all', 'All'], ['coaching', 'Coaching'], ['breathwork', 'Breathwork'], ['ai', 'AI & Tech']];
  const shown = PROGRAMS.filter(p => filter === 'all' || p.tag === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      gap: 20,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-periwinkle)"
  }, "Programs & Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: 'var(--brand-navy)',
      margin: '12px 0 0',
      lineHeight: 1.12
    }
  }, "Pick your next 1%.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, filters.map(([k, label]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    active: filter === k,
    onClick: () => setFilter(k)
  }, label)))), /*#__PURE__*/React.createElement("div", {
    className: "prog-grid"
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "light",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge[0]
  }, p.badge[1])), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--brand-navy)',
      margin: '0 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginBottom: 18
    }
  }, p.meta.map(([ic, txt]) => /*#__PURE__*/React.createElement("span", {
    key: txt,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-periwinkle)'
    }
  }, React.createElement(Icons[ic], {
    size: 16
  })), txt))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 16
    })
  }, "Explore"))))));
}

// ---------- Testimonials ----------
const QUOTES = [{
  quote: 'Breathwork rewired how I handle stress before big meetings. I feel it in my body within two minutes.',
  name: 'Ana M.',
  role: 'Product Lead'
}, {
  quote: 'JJ treats the mind like a system you can debug. The 1% framing finally made habits stick for me.',
  name: 'Diego R.',
  role: 'Founder'
}, {
  quote: 'No fluff, no mysticism — just tools that work. My sleep and focus are measurably better.',
  name: 'Carla V.',
  role: 'Physician'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-navy)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--brand-orange)"
  }, "Transformations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,40px)',
      color: '#fff',
      margin: '14px 0 0'
    }
  }, "One human at a time.")), /*#__PURE__*/React.createElement("div", {
    className: "quote-grid"
  }, QUOTES.map(q => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: q.name,
    tone: "dark"
  }, q))))));
}

// ---------- Newsletter / Contact ----------
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page-warm)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    padding: "clamp(28px,5vw,52px)",
    style: {
      borderTop: '3px solid var(--accent)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 999,
      background: 'var(--peri-100)',
      color: 'var(--brand-navy)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--brand-navy)',
      margin: '0 0 8px'
    }
  }, "You're in."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Check your inbox for your first 1% \u2014 a 3-minute breathwork reset.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Weekly 1%"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'clamp(26px,3vw,34px)',
      color: 'var(--brand-navy)',
      margin: '12px 0 8px'
    }
  }, "One optimization, every Sunday."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 24px',
      lineHeight: 1.6
    }
  }, "Actionable, science-grounded, no spam. Join leaders optimizing their nervous system."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row",
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Alex"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@work.com",
    iconStart: /*#__PURE__*/React.createElement(Icons.mail, {
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me weekly optimization tips (unsubscribe anytime)",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true),
    iconEnd: /*#__PURE__*/React.createElement(Icons.arrow, {
      size: 18
    })
  }, "Get the Weekly 1%")))))));
}

// ---------- Footer ----------
function Footer({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--peach-200)',
      padding: '56px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoWhite,
    alt: "Optimizing Me \u2014 JJ Ruescas",
    style: {
      height: 44,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 14,
      lineHeight: 1.6,
      opacity: 0.85
    }
  }, "Optimizing 1% each day, one human at a time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Explore"), t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--peach-200)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Connect"), ['Instagram', 'LinkedIn', 'YouTube', 'optimizando.me'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--peach-200)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '36px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      fontSize: 12.5,
      opacity: 0.7
    }
  }, "\xA9 ", new Date().getFullYear(), " JJ Ruescas \xB7 Optimizing Me. Human Optimization Strategist."));
}
function Site() {
  const [lang, setLang] = React.useState('en');
  const t = COPY[lang];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang,
    t: t
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(Framework, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, {
    t: t
  }));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.standalone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
