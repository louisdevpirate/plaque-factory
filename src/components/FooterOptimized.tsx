"use client";
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import { FacebookFIcon, InstagramIcon, TikTokIcon } from "./Icons";
import LazyBackgroundSection from "./LazyBackgroundSection";

export default function FooterOptimized() {
  const theme = useTheme();

  return (
    <LazyBackgroundSection
      as="footer"
      backgroundImage="/images/bg/bg2.webp"
      className="relative bg-gray-900 bg-cover bg-fixed bg-no-repeat grayscale"
      threshold={0.1}
      rootMargin="100px"
    >
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-evenly items-start text-left gap-8 w-full px-4 md:px-0">
          {/* Logo Section */}
          <div className="max-w-xs">
            <Image
              src="/images/logo/2.svg"
              alt="LABONNEPLAQUE"
              width={200}
              height={40}
              loading="lazy"
              priority={false}
              className="transition-transform duration-300 hover:scale-105 mb-8"
            />
            <p className="text-white/60">
              Personnalisation de plaques d'immatriculation homologuées et accessoires décoratifs.
            </p>
            <div className="flex justify-start gap-4 pt-6">
              <a
                href="https://www.instagram.com/plaqueimmat.fr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur Instagram"
              >
                <InstagramIcon className="h-5 w-5 mt-[2px] text-white hover:text-pink-500 transition" />
              </a>
              <a
                href="https://www.facebook.com/PlaqueimmatByPlaqueDigital?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur Facebook"
              >
                <FacebookFIcon className="h-5 w-5 pt-1 text-white hover:text-blue-600 transition" />
              </a>
              <a
                href="https://www.tiktok.com/@plaqueimmat.fr"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez La Bonne Plaque sur TikTok"
              >
                <TikTokIcon className="h-5 w-5 pt-1 text-white hover:text-cyan-400 transition" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#personnaliser"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Aller à la section Personnaliser"
                >
                  Personnaliser
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Aller à la section Galerie"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="#catégories"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Aller à la section Catégories"
                >
                  Catégories
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Aller à la section FAQ"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Aller à la section Blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Nos Catégories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/moto"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Plaques moto personnalisées"
                >
                  🏍️ Plaques Moto
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/us"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Plaques US pour véhicules américains"
                >
                  🇺🇸 Plaques US
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/suv"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Plaques SUV et 4x4"
                >
                  🚙 Plaques SUV
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/collection"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Plaques collection vintage"
                >
                  🏆 Plaques Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/plaques-personnalisees"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Personnaliser votre plaque"
                >
                  ✨ Personnalisées
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Informations
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                  title="En savoir plus sur LABONNEPLAQUE.fr"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Lire notre blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://plaqueimmat.fr/pages/mentions-legales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
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
                  className="text-white/60 hover:text-white transition-colors"
                  title="Lire les conditions générales de vente"
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  href="https://plaqueimmat.fr/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
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
          <p className="text-white/90">
            © 2025 La Bonne Plaque – Tous droits réservés.
          </p>
        </div>
      </div>
    </LazyBackgroundSection>
  );
}
