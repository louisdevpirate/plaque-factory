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
    },

    navigation: {
        states: {
          default: {
            background: 'rgba(255, 255, 255, 0.3)',
            text: '#ffffff',
            border: 'rgba(255, 255, 255, 0.2)'
          },
          scrolled: {
            background: 'rgba(255, 255, 255, 0.95)',
            text: '#000000',
            border: 'rgba(0, 0, 0, 0.1)'
          },
          pastHeader: {
            background: 'rgba(59, 130, 246, 0.5)', // blue-500 avec transparence
            text: '#ffffff'
          }
        },
        effects: {
          blur: '8px',
          shadow: '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)'
        },
        cta: {
          default: {
            background: 'transparent',
            text: '#ffffff',
            border: 'rgba(255, 255, 255, 0.8)'
          },
          hover: {
            background: 'rgba(255, 255, 255, 0.1)',
            text: '#ffffff',
            border: '#ffffff'
          }
        },
        animation: {
          timing: '300ms',
          hover: 'translateY(-5px)'
        }
      },

      gallery: {
        images: {
          sources: [
            {
              path: '/images/carousel/plaque1.png',
              alt: 'Plaque d\'immatriculation personnalisée modèle 1'
            },
            {
              path: '/images/carousel/Plaque_Marine_2.png',
              alt: 'Plaque d\'immatriculation marine modèle 2'
            },
            {
              path: '/images/carousel/Plaque_Marine_3.png',
              alt: 'Plaque d\'immatriculation marine modèle 3'
            },
            {
              path: '/images/carousel/Plaque_Marine_4.png',
              alt: 'Plaque d\'immatriculation marine modèle 4'
            }
          ],
          settings: {
            height: '300px',
            width: 'auto',
            objectFit: 'contain'
          }
        },
        carousel: {
          speed: 8000,
          slidesToShow: 2,
          spacing: '10px',
          autoplay: true,
          autoplaySpeed: 0,
          pauseOnHover: false,
          cssEase: 'linear'
        },
        layout: {
          background: 'transparent',
          padding: '5rem 0',
          title: {
            text: 'Galerie d\'inspirations',
            color: '#000000',
            fontSize: '1.875rem'  // équivalent à text-3xl
          }
        }
      }
    };
  