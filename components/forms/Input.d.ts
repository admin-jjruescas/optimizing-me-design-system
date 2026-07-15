import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconStart?: React.ReactNode;
}

/**
 * Text input with label, hint/error, and optional leading icon.
 * @startingPoint section="Forms" subtitle="Text input field" viewport="420x110"
 */
export function Input(props: InputProps): JSX.Element;
