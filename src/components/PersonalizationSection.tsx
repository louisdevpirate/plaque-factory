'use client'
import { useState } from 'react'

export default function PersonalizationSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="personnalisation" className="section-personnalisation">
      <div className="personnalisation-container">
        {/* Loader pendant le chargement de l'iframe */}
        {!iframeLoaded && (
          <div className="iframe-loader">
            <span className="loader text-white"></span>
            <p>Chargement du module...</p>
          </div>
        )}

        <div className="iframe-wrapper">
          <iframe 
            src="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            onLoad={() => setIframeLoaded(true)}
            className={`iframe-content ${iframeLoaded ? 'loaded' : ''}`}
          />
        </div>
      </div>
    </section>
  )
}
