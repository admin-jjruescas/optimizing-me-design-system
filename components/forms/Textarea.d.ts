import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

/** Multi-line text area, styled to match Input. */
export function Textarea(props: TextareaProps): JSX.Element;
