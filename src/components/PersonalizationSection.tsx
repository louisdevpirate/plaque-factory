'use client'
import { useEffect } from 'react'

export default function PersonalizationSection() {
  useEffect(() => {
    // Nous attendons que le DOM soit entièrement chargé
    const loadIframe = () => {
      const script = document.createElement('script')
      script.src = 'https://deploy-preview-384--module-plaqueimmat.netlify.app/embed.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }

    // Exécution différée pour assurer que le conteneur existe
    setTimeout(loadIframe, 100)
  }, [])

  return (
    <section id="personnalisation" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Créez votre plaque personnalisée
        </h2>
        {/* Container exact tel que spécifié dans la documentation */}
        <div 
          id="iframe-container" 
          data-iframe-url="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
        ></div>
      </div>
    </section>
  )
}