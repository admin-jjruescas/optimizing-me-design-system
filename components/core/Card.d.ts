import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  /** Surface tone. */
  tone?: 'light' | 'soft' | 'dark';
  /** Optional accent top-border color (e.g. var(--accent)). */
  accent?: string;
  /** Lift on hover. */
  interactive?: boolean;
}

/**
 * Rounded surface container with soft shadow.
 * @startingPoint section="Core" subtitle="Card surface" viewport="420x220"
 */
export function Card(props: CardProps): JSX.Element;
