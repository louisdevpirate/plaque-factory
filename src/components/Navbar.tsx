"use client";
import {
  Home,
  Image as GalleryIcon,
  HelpCircle,
  Wrench,
  PictureInPicture,
} from "lucide-react"; // Icônes pour desktop et mobile
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const theme = useTheme();

  return (
    <>
      {/* 🌍 Navbar Desktop */}
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full navbar-desktop scrolled">
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 transition-all duration-300"
        >
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
          <nav className="flex-1 flex justify-center">
            <Link href="#galerie" className="nav-link flex items-center gap-3">
              Galerie
            </Link>
            <Link
              href="#catégories"
              className="nav-link flex items-center gap-3"
            >
              Catégories
            </Link>
            <Link href="#faq" className="nav-link flex items-center gap-3">
              FAQ
            </Link>
            <Link href="#blog" className="nav-link flex items-center gap-3">
              Blog
            </Link>
          </nav>
          <div className="shrink-0">
            <a
              href="#personnalisation"
              className="nav-cta text-black font-normal rounded-lg shadow-lg transition duration-300 inline-flex items-center cursor-pointer"
            >
              Créer ma plaque <i className="fas fa-arrow-right cta-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
