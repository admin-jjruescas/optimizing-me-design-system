import React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Which lockup to render. */
  variant?: 'jj-tagline' | 'optimizing-me' | 'vertical' | 'symbol';
  /** Force a color tone, or let it follow `background`. */
  tone?: 'auto' | 'blue' | 'white';
  /** Background the logo sits on; drives auto tone. */
  background?: 'light' | 'dark';
  /** Rendered height (px number or CSS string). */
  height?: number | string;
  /** Path prefix to the assets/ dir from the consuming page (e.g. "../../assets"). */
  assetBase?: string;
}

/**
 * The official Optimizing Me / JJ Ruescas logo lockups (real PNG art).
 * @startingPoint section="Brand" subtitle="Official logo lockups" viewport="420x140"
 */
export function Logo(props: LogoProps): JSX.Element;
