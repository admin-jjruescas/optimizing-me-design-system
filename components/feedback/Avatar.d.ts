import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Photo URL; omit for initials fallback. */
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** 'blob' uses the brand biomorphic mask. */
  shape?: 'circle' | 'blob';
}

/** Avatar with initials fallback; circle or brand blob shape. */
export function Avatar(props: AvatarProps): JSX.Element;
