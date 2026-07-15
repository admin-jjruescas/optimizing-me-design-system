import React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /** Action row, typically Buttons. */
  footer?: React.ReactNode;
  /** Max width px. */
  width?: number;
}

/** Modal dialog on a blurred navy scrim. */
export function Dialog(props: DialogProps): JSX.Element | null;
