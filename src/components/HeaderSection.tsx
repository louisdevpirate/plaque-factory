'use client';

import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';


export default function HeaderSection() {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Créons un style pour le bouton CTA qui change en fonction du hover
  const ctaStyles = {
    background: isHovered 
      ? `linear-gradient(to right, ${theme.colors.accent.hover.from}, ${theme.colors.accent.hover.to})`
      : theme.colors.accent.gradient,
    color: theme.colors.text.primary,
    transition: theme.animation.transition.default,
    transform: isHovered ? theme.animation.transform.hover : 'none',
  };

  return (
    <header 
      className="flex flex-col justify-center items-center text-center"
      style={{
        height: theme.spacing.header.height,
        padding: `${theme.spacing.header.padding.y} ${theme.spacing.header.padding.x}`,
      }}
    >
      <h1 
        className="font-bold mb-8"
        style={{
          color: theme.colors.text.primary,
          fontSize: theme.typography.header.fontSize,
          lineHeight: theme.typography.header.lineHeight,
        }}
      >
        Votre Plaque, Votre Style
      </h1>
      
      <p 
        className="max-w-2xl mb-10"
        style={{
          color: theme.colors.text.secondary,
          fontSize: theme.typography.body.fontSize,
          lineHeight: theme.typography.body.lineHeight,
        }}
      >
        Créez des plaques d&apos;immatriculation personnalisées et homologuées qui reflètent votre personnalité.
      </p>
      
      <a 
        href="#personnalisation"
        className="px-10 py-6 text-md rounded-full shadow-sm font-bold cursor-pointer hover:shadow-md"
        style={ctaStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Commencer à personnaliser
      </a>
    </header>
  );
}