import React from 'react';

export interface TabItem { id: string; label: React.ReactNode; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled active tab id. */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  size?: 'sm' | 'md';
}

/** Pill-style segmented tab bar on a periwinkle track. */
export function Tabs(props: TabsProps): JSX.Element;
