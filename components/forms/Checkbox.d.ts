import React from 'react';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Checkbox with label; navy fill when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;
