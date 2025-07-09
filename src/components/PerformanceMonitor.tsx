"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals reporting
    const reportWebVitals = (metric: any) => {
      // Send to analytics or monitoring service
      console.log('Web Vital:', metric);
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Observe Largest Contentful Paint
    const observeLCP = () => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
            id: 'lcp-' + entry.startTime,
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Observe First Input Delay
    const observeFID = () => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any;
          reportWebVitals({
            name: 'FID',
            value: fidEntry.processingStart - fidEntry.startTime,
            id: 'fid-' + fidEntry.startTime,
          });
        }
      }).observe({ entryTypes: ['first-input'] });
    };

    // Observe Cumulative Layout Shift
    const observeCLS = () => {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];

      const sessionValue = () => {
        clsEntries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        return clsValue;
      };

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          clsEntries.push(entry);
          reportWebVitals({
            name: 'CLS',
            value: sessionValue(),
            id: 'CLS',
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Monitor long tasks
    const observeLongTasks = () => {
      if ('PerformanceObserver' in window && 'PerformanceLongTaskTiming' in window) {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              attribution: (entry as any).attribution,
            });
          }
        }).observe({ entryTypes: ['longtask'] });
      }
    };

    // Monitor resource loading
    const observeResources = () => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              type: resourceEntry.initiatorType,
            });
          }
        }
      }).observe({ entryTypes: ['resource'] });
    };

    // Initialize observers
    try {
      observeLCP();
      observeFID();
      observeCLS();
      observeLongTasks();
      observeResources();
    } catch (error) {
      console.error('Error initializing performance monitoring:', error);
    }

    // Report on page unload
    const reportAllMetrics = () => {
      if ('sendBeacon' in navigator) {
        // Send final metrics to server
        const metrics = {
          lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
          fid: (performance.getEntriesByType('first-input')[0] as any)?.processingStart,
          cls: 0, // clsValue is not accessible here
          ttfb: performance.timing.responseStart - performance.timing.requestStart,
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
          windowLoaded: performance.timing.loadEventEnd - performance.timing.navigationStart,
        };
        
        navigator.sendBeacon('/api/metrics', JSON.stringify(metrics));
      }
    };

    window.addEventListener('pagehide', reportAllMetrics);
    
    return () => {
      window.removeEventListener('pagehide', reportAllMetrics);
    };
  }, []);

  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}