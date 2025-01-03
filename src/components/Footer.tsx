'use client'
import React, { useState } from 'react' 
import { useTheme } from '@/hooks/useTheme'

interface StyleProps {
  color: string;
}

export default function Footer() {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleHover = (item: string) => setHoveredLink(item);
  const handleLeave = () => setHoveredLink(null);

  const linkStyles = (item: string): StyleProps => ({
    color: hoveredLink === item ? theme.footer.styling.text.hover : theme.footer.styling.text.secondary
  });

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-evenly items-start">
          {/* Logo Section */}
          <div className="max-w-xs">
            <img 
              src={theme.global.branding.logo.path}
              alt={theme.global.branding.logo.alt}
              className="h-8 w-auto mb-4"
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
            <ul className="space-y-2">
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
            <h3 className="text-lg font-bold mb-4" style={{ color: theme.footer.styling.text.primary }}>
              Informations
            </h3>
            <ul className="space-y-2">
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
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p style={{ color: theme.footer.styling.text.secondary }}>
            {theme.footer.sections.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}