'use client'
import { useEffect } from 'react'

export default function PersonalizationSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://deploy-preview-384--module-plaqueimmat.netlify.app/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="personnalisation" className="min-h-screen py-20 px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div 
            id="iframe-container" 
            data-iframe-url="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            className="w-full h-[650px]"
          />
        </div>
      </div>
    </section>
   )
}