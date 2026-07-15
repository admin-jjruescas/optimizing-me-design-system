import React from 'react';

export interface AccordionItem { q: React.ReactNode; a: React.ReactNode; }

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple panels open at once. */
  multiple?: boolean;
  /** Indices open initially. */
  defaultOpen?: number[];
}

/** FAQ accordion with calm expand animation. */
export function Accordion(props: AccordionProps): JSX.Element;
