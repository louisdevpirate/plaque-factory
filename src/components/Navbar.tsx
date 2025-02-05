'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Home, Image as GalleryIcon, HelpCircle, Wrench } from 'lucide-react' // Icônes pour desktop et mobile

export default function Navbar() {
  const [isPastHeader, setIsPastHeader] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('personnalisation')
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsPastHeader(rect.top <= 0) // ✅ Change d'état SEULEMENT quand on atteint cette section
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 🌍 Navbar Desktop */}
      <div className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[800px] navbar-desktop ${isPastHeader ? 'scrolled' : ''}`}>
        <nav className="navbar-desktop-inner">
          {/* 📌 Bouton "Personnaliser" */}
          <a 
            href="#personnalisation" 
            className={`navbar-cta ${isPastHeader ? 'scrolled' : ''}`}
          >
            Personnaliser
          </a>

          {/* 📌 Liens de navigation avec icônes */}
          <a href="#galerie" className="nav-link flex items-center gap-2">
            <GalleryIcon size={18} /> Galerie
          </a>
          <a href="#categories" className="nav-link flex items-center gap-2">
            <Wrench size={18} /> Catégories
          </a>
          <a href="#faq" className="nav-link flex items-center gap-2">
            <HelpCircle size={18} /> FAQ
          </a>
        </nav>
      </div>

      {/* 📌 Navbar Mobile */}
      <div className="navbar-mobile">
        <a href="/" className="flex flex-col items-center text-gray-700">
          <Home size={24} />
          <span className="text-xs">Accueil</span>
        </a>
        <a href="#galerie" className="flex flex-col items-center text-gray-700">
          <GalleryIcon size={24} />
          <span className="text-xs">Galerie</span>
        </a>
        <a href="#categories" className="flex flex-col items-center text-gray-700">
          <Wrench size={24} />
          <span className="text-xs">Personnaliser</span>
        </a>
        <a href="#faq" className="flex flex-col items-center text-gray-700">
          <HelpCircle size={24} />
          <span className="text-xs">FAQ</span>
        </a>
      </div>
    </>
  )
}
