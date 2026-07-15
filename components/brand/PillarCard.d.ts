import React from 'react';

export interface PillarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which of the six HumanOps pillars (drives the icon-badge color). */
  pillar?: 'respiration' | 'emotions' | 'movement' | 'nutrition' | 'mindset' | 'recovery';
  title: string;
  description?: string;
  /** Outline SVG glyph for the badge. */
  icon?: React.ReactNode;
  /** Override the badge color. */
  color?: string;
}

/**
 * Card for a single HumanOps pillar (Respiration, Emotions, Movement, Nutrition, Mindset, Recovery).
 * @startingPoint section="Brand" subtitle="HumanOps pillar card" viewport="360x260"
 */
export function PillarCard(props: PillarCardProps): JSX.Element;
