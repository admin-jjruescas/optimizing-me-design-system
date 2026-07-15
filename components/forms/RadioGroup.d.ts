import React from 'react';

export interface RadioOption { value: string; label: string; }

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  options: (RadioOption | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  direction?: 'column' | 'row';
}

/** Radio group; navy dot when selected. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
