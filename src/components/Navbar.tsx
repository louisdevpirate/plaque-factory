'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Home, Image as GalleryIcon, HelpCircle, Wrench } from 'lucide-react' // Icônes pour mobile

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHeader, setIsPastHeader] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsPastHeader(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyles = {
    backdropFilter: 'blur(8px)',
    transition: 'all 300ms ease',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
  }

  const innerNavStyles = {
    backgroundColor: isPastHeader ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.3)',
    borderColor: isPastHeader ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.2)',
    transition: 'all 300ms ease',
  }

  const ctaStyles = {
    background: isPastHeader ? 'linear-gradient(to right, rgb(249, 115, 22), rgb(251, 146, 60))' : 'transparent',
    color: 'white',
    border: isPastHeader ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 300ms ease',
    transform: hoveredLink === 'cta' ? 'translateY(-2px)' : 'none',
  }

  const getLinkStyles = (item: string) => ({
    color: isPastHeader ? theme.colors.primary.main : '#ffffff',
    transform: hoveredLink === item ? 'translateY(-5px)' : 'none',
    opacity: hoveredLink === item ? 0.8 : 1,
    transition: 'all 300ms ease'
  })

  return (
    <>
      {/* Navbar flottante Desktop */}
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[800px]">
        <nav className="rounded-full p-[1px]" style={navStyles}>
          <div className="w-full h-full rounded-full px-4 pr-8 border" style={innerNavStyles}>
            <div className="flex items-center justify-center gap-8 py-2">
              {/* Bouton CTA "Personnaliser" */}
              <a 
                href="#personnalisation" 
                className="px-6 py-2 text-sm rounded-full shadow-sm font-medium min-w-[120px] text-center"
                style={ctaStyles}
                onMouseEnter={() => setHoveredLink('cta')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Personnaliser
              </a>
              
              {/* Liens de navigation */}
              {['Galerie', 'Categories', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm transition-all cursor-pointer"
                  style={getLinkStyles(item)}
                  onMouseEnter={() => setHoveredLink(item)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar fixe en bas pour Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around items-center py-3 z-50">
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
