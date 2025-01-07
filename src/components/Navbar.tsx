'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'


export default function Navbar() {
  // États pour gérer les différentes interactions et positions de défilement
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHeader, setIsPastHeader] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  
  // Récupération des couleurs et styles du thème
  const theme = useTheme()

  // Gestion du défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      // Détection de léger défilement pour l'ombre
      setIsScrolled(window.scrollY > 20)
      // Détection du passage au-delà du header
      setIsPastHeader(window.scrollY > window.innerHeight * 0.7)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Styles pour la barre de navigation principale
  const navStyles = {
    backdropFilter: 'blur(8px)',
    transition: 'all 300ms ease',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
  }

  // Styles pour le conteneur intérieur de la navigation
  const innerNavStyles = {
    backgroundColor: isPastHeader 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(255, 255, 255, 0.3)',
    borderColor: isPastHeader 
      ? theme.colors.primary.main  // Utilise la couleur principale du thème après le scroll
      : 'rgba(255, 255, 255, 0.2)',
    transition: 'all 300ms ease',
  }

  // Styles pour le bouton "Personnaliser"
  const ctaStyles = {
    background: isPastHeader 
      ? 'linear-gradient(to right, rgb(249, 115, 22), rgb(251, 146, 60))'
      : 'transparent',
    color: 'white',
    border: isPastHeader 
      ? 'none'
      : '1px solid rgba(255, 255, 255, 0.8)',
    transition: 'all 300ms ease',
    transform: hoveredLink === 'cta' ? 'translateY(-2px)' : 'none',
  }

  // Styles pour les liens de navigation
  const getLinkStyles = (item: string) => ({
    color: isPastHeader ? theme.colors.primary.main : '#ffffff',
    transform: hoveredLink === item ? 'translateY(-5px)' : 'none',
    opacity: hoveredLink === item ? 0.8 : 1,
    transition: 'all 300ms ease'
  })

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[800px]">
      <nav className="rounded-full p-[1px]" style={navStyles}>
        <div 
          className="w-full h-full rounded-full px-4 pr-8 border"
          style={innerNavStyles}
        >
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
  )
}