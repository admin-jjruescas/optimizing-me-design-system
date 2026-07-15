import React from 'react';

export type IconName =
  | 'wind' | 'heart' | 'activity' | 'lightbulb' | 'apple' | 'moon'
  | 'arrow-right' | 'arrow-left' | 'menu' | 'x' | 'check' | 'mail'
  | 'play' | 'sparkles' | 'clock' | 'users' | 'chevron-down' | 'chevron-up'
  | 'chevron-right' | 'brain' | 'infinity' | 'calendar' | 'quote' | 'mic' | 'video';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Glyph name from the curated brand set. */
  name?: IconName;
  /** Square size in px. */
  size?: number;
  strokeWidth?: number;
  /** Stroke color; defaults to currentColor. */
  color?: string;
}

/**
 * Curated outline icon set (2px stroke, Lucide idiom) — the brand's approved icon style.
 */
export function Icon(props: IconProps): JSX.Element;
