"use client";
import {
  Home,
  Image as GalleryIcon,
  HelpCircle,
  Wrench,
  PictureInPicture,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

export default function Navbar() {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 🌍 Navbar Desktop */}
      <div className="hidden md:block fixed left-1/2 -translate-x-1/2 z-50 navbar-desktop scrolled w-full bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 pt-4 pb-4 transition-all duration-300">
          <div className="shrink-0">
            <Link href="/" className="z-50">
              <Image
                src={theme.global.branding.logo.path}
                alt={theme.global.branding.logo.alt}
                width={150}
                height={100}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <nav className="flex-1 flex justify-center gap-14">
            <Link href="#galerie" className="nav-link flex items-center">
              Galerie
            </Link>
            <Link href="#catégories" className="nav-link flex items-center">
              Catégories
            </Link>
            <Link href="#faq" className="nav-link flex items-center">
              FAQ
            </Link>
            <Link href="#blog" className="nav-link flex items-center">
              Blog
            </Link>
          </nav>
          <div className="shrink-0">
            <a
              href="#personnalisation"
              className="relative overflow-hidden nav-cta text-black font-normal rounded-lg shadow-lg transition duration-300 inline-flex items-center cursor-pointer group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10">Créer ma plaque</span>
            </a>
          </div>
        </div>
      </div>

      {/* 🌍 Navbar Mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/80 pt-2 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center">
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
        className={`fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex flex-col items-center px-8 justify-center space-y-8 text-2xl font-semibold transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Fermer le menu"
        >
          <X className="h-8 w-8 text-gray-800" />
        </button>
        <div className="flex flex-col items-center gap-6 py-6">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Accueil
          </Link>
          <Link
            href="#catégories"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Catégories
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            À propos
          </Link>
          <Link
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-light"
          >
            Blog
          </Link>
        </div>

        <a
          href="#personnalisation"
          onClick={() => setIsMenuOpen(false)}
          className="header-cta bg-yellow-400 text-black font-normal px-6 py-4 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
        >
          Je crée ma plaque{" "}
        </a>
      </div>
    </>
  );
}
