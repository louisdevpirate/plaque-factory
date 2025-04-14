'use client';

import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function HeaderSection() {
  const theme = useTheme();
  const [, setIsHovered] = useState(false);

  return (
    <header className="flex flex-col justify-center items-center text-center header-section">
      {/* Logo */}
     <Link href="/" className="mb-2">
        <Image 
          src={theme.global.branding.logo.path}
          alt={theme.global.branding.logo.alt}
          width={350}
          height={300}                          
          className='mb-6'
        />
     </Link>
      
      <h1 className="header-title">
        La Bonne Plaque, au Bon Prix.
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
        Je crée ma plaque
      </a>
    </header>
  );
}
