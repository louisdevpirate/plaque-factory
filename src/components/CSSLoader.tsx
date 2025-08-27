'use client';

import { useEffect } from 'react';

export default function CSSLoader() {
  useEffect(() => {
    // Load CSS without blocking render
    const link = document.getElementById('non-blocking-css') as HTMLLinkElement;
    if (link) {
      const loadCSS = () => {
        link.media = 'all';
      };
      
      // Load CSS after page is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCSS);
      } else {
        loadCSS();
      }
    }
  }, []);

  return null;
}
