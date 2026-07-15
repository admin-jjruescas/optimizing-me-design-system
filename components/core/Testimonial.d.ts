import React from 'react';

export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  name: string;
  role?: string;
  avatarSrc?: string;
  tone?: 'light' | 'dark';
}

/**
 * Quote card with orange quotation mark and attribution.
 * @startingPoint section="Core" subtitle="Testimonial / quote card" viewport="460x300"
 */
export function Testimonial(props: TestimonialProps): JSX.Element;
