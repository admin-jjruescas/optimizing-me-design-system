import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text color (defaults to brand orange). */
  color?: string;
  /** Leading-dot color (defaults to currentColor). */
  dotColor?: string;
  /** Show the leading dot. */
  showDot?: boolean;
}

/**
 * Wide-tracked uppercase eyebrow/section label.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
