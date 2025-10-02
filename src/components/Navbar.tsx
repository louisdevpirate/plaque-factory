"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react";
import { FacebookFIcon, InstagramIcon, TikTokIcon } from "./Icons";

export default function Navbar() {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🌍 Navbar Desktop */}
      <div className={`hidden lg:block fixed left-1/2 -translate-x-1/2 z-50 navbar-desktop w-full bg-white/70 backdrop-blur ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 pt-4 pb-4 transition-all duration-300">
          <div className="w-1/4">
            <Link href="/" title="Retour à l'accueil" className="z-50">
              <Image
                src={theme.global.branding.logo.path}
                alt={theme.global.branding.logo.alt}
                width={120}
                height={100}
                loading="lazy"
                priority={false}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <nav className="flex-1 flex justify-center gap-8 w-2/4">
            <Link href="/" title="Retour à l'accueil" className="nav-link flex items-center">
              Accueil
            </Link>
            <div className="relative group">
              <div className="nav-link flex items-center gap-1 cursor-pointer">
                Catégories
                <svg
                  className="w-3 h-3 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <Link href="/categories/plaques-personnalisees" className="block px-4 py-2 hover:bg-gray-100">Plaques personnalisées</Link>
                <Link href="/categories/moto" className="block px-4 py-2 hover:bg-gray-100">Plaques moto</Link>
                <Link href="/categories/us" className="block px-4 py-2 hover:bg-gray-100">Plaques US</Link>
                <Link href="/categories/suv" className="block px-4 py-2 hover:bg-gray-100">Plaques SUV</Link>
                <Link href="/categories/cyclo" className="block px-4 py-2 hover:bg-gray-100">Cyclo</Link>
                <Link href="/categories/collection" className="block px-4 py-2 hover:bg-gray-100">Collection</Link>
              </div>
            </div>
            <Link href="/#faq" title="Questions fréquentes" className="nav-link flex items-center">
              FAQ
            </Link>
            <Link href="/about" title="À propos de labonneplaque" className="nav-link flex items-center">
              À propos
            </Link>
            <Link href="/blog" title="Lire le blog La Bonne Plaque" className="nav-link flex items-center font-extrabold">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4 w-1/4">
            <div className="flex justify-start items-center gap-4">
              <a
                href="https://www.instagram.com/plaqueimmat.fr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez-nous sur Instagram"
              >
                <InstagramIcon className="h-5 w-5 text-black hover:text-pink-500 transition" />
              </a>
              <a
                href="https://www.facebook.com/PlaqueimmatByPlaqueDigital?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez-nous sur Facebook"
              >
                <FacebookFIcon className="h-4 w-4 text-black hover:text-blue-600 transition" />
              </a>
              <a
                href="https://www.tiktok.com/@plaqueimmat.fr"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez-nous sur TikTok"
              >
                <TikTokIcon className="h-4 w-4 text-black hover:text-cyan-400 transition" />
              </a>
            </div>
            <a
              href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
              title="Créer ma plaque maintenant"
              className="relative overflow-hidden nav-cta text-black font-normal rounded-lg shadow-lg transition duration-300 inline-flex items-center cursor-pointer group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10">Créer ma plaque</span>
            </a>
          </div>
        </div>
      </div>

      {/* 🌍 Navbar Mobile */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/80 pt-2 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" title="Retour à l'accueil" className="flex items-center">
            <Image
              src={theme.global.branding.logo.path}
              alt={theme.global.branding.logo.alt}
              width={110}
              height={40}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* 🌍 Mobile Slide Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex flex-col items-center px-8 justify-center space-y-8 text-2xl font-semibold transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-md hover:bg-gray-100 transition text-black"
          aria-label="Fermer le menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-6 py-6">
          <Link
            href="/"
            title="Retour à l'accueil"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Accueil
          </Link>
          <Link
            href="/#catégories"
            title="Voir les catégories de plaques"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Catégories
          </Link>
          <Link
            href="/about"
            title="En savoir plus sur nous"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            À propos
          </Link>
          <Link
            href="/#faq"
            title="Questions fréquentes"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            title="Lire le blog La Bonne Plaque"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Blog
          </Link>
        </div>

        <a
          href="#personnalisation"
          title="Créer ma plaque maintenant"
          onClick={() => setIsMenuOpen(false)}
          className="header-cta bg-yellow-400 text-black font-normal px-6 py-4 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
        >
          Je crée ma plaque{" "}
        </a>
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Suivez-nous sur Instagram"
          >
            <InstagramIcon className="h-6 w-6 text-gray-800 hover:text-pink-500 transition" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Suivez-nous sur Facebook"
          >
            <FacebookFIcon className="h-6 w-6 text-gray-800 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Suivez-nous sur TikTok"
          >
            <TikTokIcon className="h-6 w-6 text-gray-800 hover:text-cyan-400 transition" />
          </a>
        </div>
      </div>
    </>
  );
}
