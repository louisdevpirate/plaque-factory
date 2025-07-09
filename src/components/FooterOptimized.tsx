"use client";
import React, { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { TikTok } from "./icons/TikTok";
import LazyBackgroundSection from "./LazyBackgroundSection";

export default function FooterOptimized() {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <LazyBackgroundSection
      as="footer"
      backgroundImage="/images/bg/bg2.webp"
      className="relative bg-gray-900 bg-cover bg-fixed bg-no-repeat"
      threshold={0.1}
      rootMargin="100px"
    >
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
              loading="lazy"
            />
            <p style={{ color: theme.footer.styling.text.secondary }}>
              {theme.footer.sections.description}
            </p>
            <div className="flex justify-start gap-4 pt-6">
              <a
                href="https://www.instagram.com/plaqueimmat.fr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur Instagram"
              >
                <Instagram className="h-6 w-6 text-white hover:text-pink-500 transition" />
              </a>
              <a
                href="https://www.facebook.com/PlaqueimmatByPlaqueDigital?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur Facebook"
              >
                <Facebook className="h-6 w-6 text-white hover:text-blue-600 transition" />
              </a>
              <a
                href="https://www.tiktok.com/@plaqueimmat.fr"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur TikTok"
              >
                <TikTok className="h-6 w-6 text-white hover:text-cyan-400 transition" />
              </a>
            </div>
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
                    title={`Aller à la section ${item}`}
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
                  title="Lire les mentions légales"
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
                  title="Lire les conditions générales de vente"
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
                  title="Lire la politique de remboursement"
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
                  title="Nous contacter"
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
    </LazyBackgroundSection>
  );
}