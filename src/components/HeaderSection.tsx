'use client';

import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

export default function HeaderSection() {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex flex-col justify-center items-center text-center header-section">
      <h1 className="header-title">
        Votre Plaque, Votre Style
      </h1>
      
      <p className="header-text">
        Créez des plaques d&apos;immatriculation personnalisées et homologuées qui reflètent votre personnalité.
      </p>
      
      <a 
        href="#personnalisation"
        className="header-cta"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Commencer à personnaliser
      </a>
    </header>
  );
}
