import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = orange CTA, `secondary` = solid navy, `on-dark` = white on navy. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

/**
 * Pill-shaped action button in the brand palette.
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, outline, ghost" viewport="700x120"
 */
export function Button(props: ButtonProps): JSX.Element;
