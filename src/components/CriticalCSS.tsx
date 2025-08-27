'use client';

import { useEffect, useState } from 'react';

export default function CriticalCSS() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // CSS critique minimal pour le rendu initial
    const criticalCSS = `
      /* Reset et base critique */
      * { box-sizing: border-box; }
      html, body { 
        width: 100%; 
        margin: 0; 
        padding: 0; 
        font-family: "Montserrat", sans-serif;
      }
      
      /* Layout critique */
      .wrapper { min-height: 100vh; }
      
      /* Header critique */
      header { padding: 0 1rem; }
      section { padding: 0 1rem; }
      
      /* Typographie critique */
      h1, h2, h3, h4 { 
        font-family: "Raleway", sans-serif; 
        margin: 0;
      }
      h1 { font-size: 2.5rem; line-height: 1.2; }
      h2 { font-size: 2rem; line-height: 1.3; }
      
      /* Navigation critique */
      .navbar { 
        position: fixed; 
        top: 0; 
        left: 0; 
        right: 0; 
        z-index: 50; 
        background: white;
      }
      
      /* Boutons critiques */
      .header-cta { 
        display: inline-block; 
        padding: 1rem 2rem; 
        background: #fbbf24; 
        color: black; 
        text-decoration: none; 
        border-radius: 0.5rem; 
        font-weight: 500;
      }
      
      /* Images critiques */
      .critical-image { 
        width: 100%; 
        height: auto; 
        display: block; 
      }
      
      /* Utilitaires critiques */
      .hidden { display: none !important; }
      .block { display: block !important; }
      .flex { display: flex !important; }
      .items-center { align-items: center !important; }
      .justify-center { justify-content: center !important; }
      
      /* Responsive critique */
      @media (max-width: 768px) {
        h1 { font-size: 2rem; }
        h2 { font-size: 1.5rem; }
        .header-cta { padding: 0.75rem 1.5rem; }
      }
    `;

    // Injecter le CSS critique
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);

    // Charger le CSS complet de manière non-bloquante
    const loadFullCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/globals.css';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
        setIsLoaded(true);
      };
      document.head.appendChild(link);
    };

    // Charger le CSS complet après un délai minimal
    const timer = setTimeout(loadFullCSS, 100);
    
    return () => {
      clearTimeout(timer);
      // Nettoyer le CSS critique si nécessaire
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
}
