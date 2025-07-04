"use client";
import React, { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="relative bg-gray-900 bg-[url('/images/bg/bg3.png')] bg-cover">
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-evenly items-start text-left gap-8 w-full px-4 md:px-0">
          {/* Logo Section */}
          <div className="max-w-xs">
            <Image
              src={theme.global.branding.logo.path}
              alt={theme.global.branding.logo.alt}
              width={200}
              height={300}
              className="mb-10"
            />
            <p style={{ color: theme.footer.styling.text.secondary }}>
              {theme.footer.sections.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3
              className="text-lg font-bold mb-4 text-left"
              style={{ color: theme.footer.styling.text.primary }}
            >
              Navigation
            </h3>
            <ul className="space-y-4">
              {theme.footer.sections.navigation.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors"
                    style={{
                      color:
                        hoveredLink === item
                          ? theme.footer.styling.text.hover
                          : theme.footer.styling.text.secondary,
                    }}
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
            <h3
              className="text-lg font-bold mb-4 text-left"
              style={{ color: theme.footer.styling.text.primary }}
            >
              Informations
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://plaqueimmat.fr/pages/mentions-legales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{
                    color:
                      hoveredLink === "Mentions légales"
                        ? theme.footer.styling.text.hover
                        : theme.footer.styling.text.secondary,
                  }}
                  onMouseEnter={() => setHoveredLink("Mentions légales")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="https://plaqueimmat.fr/pages/conditions-generales-de-vente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{
                    color:
                      hoveredLink === "CGV"
                        ? theme.footer.styling.text.hover
                        : theme.footer.styling.text.secondary,
                  }}
                  onMouseEnter={() => setHoveredLink("CGV")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  href="https://plaqueimmat.fr/pages/politique-de-remboursement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{
                    color:
                      hoveredLink === "Politique de remboursement"
                        ? theme.footer.styling.text.hover
                        : theme.footer.styling.text.secondary,
                  }}
                  onMouseEnter={() =>
                    setHoveredLink("Politique de remboursement")
                  }
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Politique de remboursement
                </a>
              </li>
              <li>
                <a
                  href="https://plaqueimmat.fr/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{
                    color:
                      hoveredLink === "Contact"
                        ? theme.footer.styling.text.hover
                        : theme.footer.styling.text.secondary,
                  }}
                  onMouseEnter={() => setHoveredLink("Contact")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 mt-12 pt-8 pb-20 text-center">
          <p style={{ color: theme.footer.styling.text.secondary }}>
            {theme.footer.sections.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
