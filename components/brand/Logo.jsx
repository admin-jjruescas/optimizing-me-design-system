import React from 'react';

/**
 * Optimizing Me / JJ Ruescas logo. Renders the official PNG lockups —
 * never a redrawn mark. Pick variant + tone for the background.
 */
export function Logo({
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
  const resolvedTone = tone === 'auto' ? (onDark ? 'white' : 'blue') : tone;

  const files = {
    'jj-tagline':   { blue: 'logos/logo-jj-tagline-blue.png',    white: 'logos/logo-jj-tagline-white.png' },
    'optimizing-me':{ blue: 'logos/logo-optimizing-me-dark.png', white: 'logos/logo-optimizing-me-white.png' },
    'vertical':     { blue: 'logos/logo-vertical-stack.png',     white: 'logos/logo-vertical-stack.png' },
    'symbol':       { blue: 'logos/symbol-blue.png',             white: 'logos/symbol-white.png' },
  };
  const set = files[variant] || files['jj-tagline'];
  const src = (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + (set[resolvedTone] || set.blue);

  return (
    <img
      src={src}
      alt={alt || 'Optimizing Me — JJ Ruescas'}
      style={{ height: typeof height === 'number' ? height + 'px' : height, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
