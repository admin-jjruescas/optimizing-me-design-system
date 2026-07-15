import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Option objects or plain strings. */
  options: (SelectOption | string)[];
}

/** Native select styled to match Input, with chevron affordance. */
export function Select(props: SelectProps): JSX.Element;
