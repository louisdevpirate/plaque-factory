'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = `
  px-0.5 py-0.5
  rounded-full 
  transition-all duration-50
  mx-auto
  backdrop-blur-md
  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
  p-[1px]
  animate-gradient-xy
  ${isScrolled ? 'shadow-lg' : ''}
`

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[50%] max-w-[800px]">
      <nav className={navClasses}>
        <div className="w-full h-full rounded-full bg-white/100 backdrop-blur-md">
          <div className="flex items-center justify-center gap-8 py-3">
          <a 
             href="#personnalisation" 
             className="px-5 py-2 text-sm bg-gradient-to-r from-blue-400 to-blue-300 rounded-full shadow-sm
               text-white font-medium transition-all duration-300 hover:-translate-y-[2px] cursor-pointer 
               hover:shadow-md hover:from-blue-500 hover:to-blue-400"
           >
              Personnaliser
           </a>
           <a 
             href="#galerie" 
             className="text-sm text-gray-700 hover:text-black transition-all duration-300 hover:-translate-y-[5px] cursor-pointer"
           >
              Galerie
            </a>
            <a 
              href="#faq" 
              className="text-sm text-gray-700 hover:text-black transition-all duration-300 hover:-translate-y-[5px] cursor-pointer"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}