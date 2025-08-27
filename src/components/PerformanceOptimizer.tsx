'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/images/header.webp',
        '/images/logo/1.svg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
      
      // Preload critical fonts
      const criticalFonts = [
        '/fonts/Montserrat-Regular.woff2',
        '/fonts/Montserrat-Bold.woff2'
      ];
      
      criticalFonts.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        });
        
        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };
    
    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    
    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return null; // This component doesn't render anything
}
