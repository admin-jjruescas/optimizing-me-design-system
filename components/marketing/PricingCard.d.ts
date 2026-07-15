import React from 'react';

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** e.g. "$450" or "Gratis". */
  price: React.ReactNode;
  /** e.g. "/month", "· 8 weeks". */
  period?: string;
  description?: string;
  features?: React.ReactNode[];
  ctaLabel?: string;
  onCta?: () => void;
  /** Floating orange badge, e.g. "Most popular". */
  badge?: string;
  /** Navy emphasis treatment with orange CTA. */
  featured?: boolean;
}

/**
 * Program/pricing tier card.
 * @startingPoint section="Marketing" subtitle="Program pricing card" viewport="360x480"
 */
export function PricingCard(props: PricingCardProps): JSX.Element;
