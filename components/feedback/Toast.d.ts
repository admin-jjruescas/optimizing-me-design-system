import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'success' | 'info' | 'warning' | 'error';
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** Show a dismiss ✕ and call this on click. */
  onDismiss?: () => void;
}

/** Toast notification card with tone accent. */
export function Toast(props: ToastProps): JSX.Element;
