'use client'
import { useState, useEffect } from 'react'
import { Home, Image as GalleryIcon, HelpCircle, Wrench, PictureInPicture } from 'lucide-react' // Icônes pour desktop et mobile
import Link from 'next/link'

interface NavbarProps {
  forceScrolled?: boolean;  // ✅ Prop pour forcer l'état scrolled
}

export default function Navbar({ forceScrolled = false }: NavbarProps) {
  const [isPastHeader, setIsPastHeader] = useState(forceScrolled)

  useEffect(() => {
    if (!forceScrolled) {
      const handleScroll = () => {
        const section = document.getElementById('personnalisation');
        if (section) {
          const rect = section.getBoundingClientRect();
          setIsPastHeader(rect.top <= 0);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsPastHeader(true);
    }
  }, [forceScrolled]);
  

  return (
    <>
      {/* 🌍 Navbar Desktop */}
      <div className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[800px] navbar-desktop ${isPastHeader ? 'scrolled' : ''}`}>
        <nav className="navbar-desktop-inner">
          {/* 📌 Bouton "Personnaliser" */}
          <Link 
            href="#personnalisation" 
            className={`navbar-cta ${isPastHeader ? 'scrolled' : ''}`}
          >
            Personnaliser
          </Link>

          {/* 📌 Liens de navigation avec icônes */}
          <Link href="#galerie" className="nav-link flex items-center gap-2">
            <GalleryIcon size={18} /> Galerie
          </Link>
          <Link href="#categories" className="nav-link flex items-center gap-2">
            <Wrench size={18} /> Catégories
          </Link>
          <Link href="#faq" className="nav-link flex items-center gap-2">
            <HelpCircle size={18} /> FAQ
          </Link>
          <Link href="#blog" className="nav-link flex items-center gap-2">
            <PictureInPicture size={18} /> Blog
          </Link>
        </nav>
      </div>

      {/* 📌 Navbar Mobile */}
      <div className="navbar-mobile">
        <Link href="/" className="flex flex-col items-center text-gray-700">
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </Link>
        <Link href="#galerie" className="flex flex-col items-center text-gray-700">
          <GalleryIcon size={24} />
          <span className="text-xs">Galerie</span>
        </Link>
        <Link href="#categories" className="flex flex-col items-center text-gray-700">
          <Wrench size={24} />
          <span className="text-xs">Personnaliser</span>
        </Link>
        <Link href="#faq" className="flex flex-col items-center text-gray-700">
          <HelpCircle size={24} />
          <span className="text-xs">FAQ</span>
        </Link>
        <Link href="#blog" className="flex flex-col items-center text-gray-700">
          <PictureInPicture size={24} />
          <span className="text-xs">Blog</span>
        </Link>
      </div>
    </>
  )
}
