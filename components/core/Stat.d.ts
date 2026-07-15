import React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: string;
  /** Small suffix rendered in orange next to the value (e.g. "%"). */
  suffix?: string;
  color?: string;
  align?: 'left' | 'center';
  /** Style for navy backgrounds. */
  onDark?: boolean;
}

/** Large metric + label (e.g. the Kaizen "1% every day" stat). */
export function Stat(props: StatProps): JSX.Element;
