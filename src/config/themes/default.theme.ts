// src/config/themes/default.theme.ts
import { ThemeConfig } from './theme.types';

export const defaultTheme: ThemeConfig = {
    colors: {
      primary: {
        main: '#0036ca',
        light: '#c1d9ff',
        gradient: 'fixed linear-gradient(135deg, #0036ca 0%, #c1d9ff 100%)'
      },
      accent: {
        from: 'rgb(249, 115, 22)',    // orange-500
        to: 'rgb(251, 146, 60)',      // orange-400
        gradient: 'linear-gradient(to right, rgb(249, 115, 22), rgb(251, 146, 60))',
        hover: {
          from: 'rgb(234, 88, 12)',   // orange-600
          to: 'rgb(249, 115, 22)'     // orange-500
        }
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.9)'
      },
      state: {
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
      }
    },
    spacing: {
      header: {
        height: '70vh',
        padding: {
          x: '1rem',
          y: '2rem'
        }
      },
      section: {
        padding: '5rem',
        gap: '2rem'
      }
    },
    typography: {
      header: {
        fontSize: '3.75rem',
        fontWeight: '700',
        lineHeight: '1.2'
      },
      body: {
        fontSize: '1.25rem',
        lineHeight: '1.75'
      }
    },
    animation: {
      transition: {
        default: 'all 300ms',
        hover: 'all 300ms ease-in-out'
      },
      transform: {
        hover: 'translateY(-2px)'
      }
    }
  };