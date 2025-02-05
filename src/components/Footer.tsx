'use client'
import React, { useState } from 'react' 
import { useTheme } from '@/hooks/useTheme'
import Image from 'next/image';



export default function Footer() {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-evenly items-start text-left gap-8 w-full px-4 md:px-0">

      {/* Logo Section */}
          <div className="max-w-xs">
            <Image 
              src={theme.global.branding.logo.path}
              alt={theme.global.branding.logo.alt}
              width={200}
              height={300}
              className='mb-10'
            />
            <p style={{ color: theme.footer.styling.text.secondary }}>
              {theme.footer.sections.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: theme.footer.styling.text.primary }}>
              Navigation
            </h3>
            <ul className="space-y-4">
              {theme.footer.sections.navigation.map(item => (
                <li key={item}>
                <a href={`#${item.toLowerCase()}`}
                className="transition-colors"
                    style={{ color: hoveredLink === item ? theme.footer.styling.text.hover : theme.footer.styling.text.secondary }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left" style={{ color: theme.footer.styling.text.primary }}>
              Informations
            </h3>
            <ul className="space-y-4">
              {theme.footer.sections.legal.map(item => (
                <li key={item}>
                  
                    <a href="#"
                    className="transition-colors"
                    style={{ color: hoveredLink === item ? theme.footer.styling.text.hover : theme.footer.styling.text.secondary }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 pb-20 text-center">
          <p style={{ color: theme.footer.styling.text.secondary }}>
            {theme.footer.sections.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}