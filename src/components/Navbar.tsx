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
      <div className="hidden md:block top-2 fixed left-1/2 -translate-x-1/2 z-50 navbar-desktop scrolled w-2/3">
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
          <nav className="flex-1 flex justify-center gap-8">
            <Link href="#galerie" className="nav-link flex items-center">
              Galerie
            </Link>
            <Link
              href="#catégories"
              className="nav-link flex items-center"
            >
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
    </>
  );
}
