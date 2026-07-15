import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'soft' | 'solid' | 'accent' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required — icon-only). */
  label: string;
}

/**
 * Icon-only pill button. Provide an outline SVG glyph as children.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
