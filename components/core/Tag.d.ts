import React from 'react';

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state — fills navy. */
  active?: boolean;
}

/** Selectable topic/filter chip. */
export function Tag(props: TagProps): JSX.Element;
