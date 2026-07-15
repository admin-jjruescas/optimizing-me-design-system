import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'navy' | 'orange' | 'periwinkle' | 'peach' | 'outline';
}

/** Small pill badge for status or category. */
export function Badge(props: BadgeProps): JSX.Element;
