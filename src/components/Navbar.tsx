'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHeader, setIsPastHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsPastHeader(window.scrollY > window.innerHeight * 0.7)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = `
  px-0.2 py-0.2
  rounded-full 
  transition-all duration-300
  mx-auto
  backdrop-blur-md
  p-[1px]
  ${isScrolled ? 'shadow-lg' : ''}
  ${isPastHeader ? 'bg-blue-500/50' : ''}
`

const linkClasses = `
  text-sm transition-all duration-300 hover:-translate-y-[5px] cursor-pointer
  ${isPastHeader ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-white/80'}
`

const personaliserClasses = `
  px-6 py-2 text-sm rounded-full transition-all duration-300 hover:-translate-y-[2px] cursor-pointer min-w-[120px] text-center
  ${isPastHeader 
    ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-white shadow-sm hover:shadow-md hover:from-blue-500 hover:to-blue-400'
    : 'border border-white text-white hover:bg-white/10 hover:border-white/80'
  }
`

return (
  <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[800px]">
    <nav className={navClasses}>
    <div className={`w-full h-full rounded-full backdrop-blur-md px-4 pr-8 ${
  isPastHeader ? 'bg-white/95' : 'bg-white/30 border border-white/20'
}`}>
  <div className="flex items-center justify-center gap-8 py-2">
    <a 
      href="#personnalisation" 
      className={personaliserClasses}
    >
      Personnaliser
    </a>
    <a 
      href="#galerie" 
      className={linkClasses}
    >
      Galerie
    </a>
    <a 
      href="#faq" 
      className={linkClasses}
    >
      FAQ
    </a>
  </div>
</div>
    </nav>
  </div>
)
}