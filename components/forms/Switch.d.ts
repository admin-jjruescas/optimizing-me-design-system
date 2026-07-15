import React from 'react';

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Toggle switch; orange track when on. */
export function Switch(props: SwitchProps): JSX.Element;
