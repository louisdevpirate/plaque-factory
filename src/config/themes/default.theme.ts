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
      },

      categories: {
        items: [
          {
            id: 1,
            title: "AUTO",
            description: "Format standard 520x110mm, homologué pour voitures particulières et véhicules légers",
            sizes: "52x11",
            link: "#"
          },
          {
            id: 2,
            title: "4X4",
            description: "Format tout-terrain 275x200mm, adapté aux SUV, pick-up et véhicules de loisirs",
            sizes: "27,5x20",
            link: "#"
          },
          {
            id: 3,
            title: "U.S.",
            description: "Format américain 300x150mm, idéal pour les véhicules importés et style US authentique",
            sizes: "30x15",
            link: "#"
          },
          {
            id: 4,
            title: "MOTO",
            description: "Format standard moto 210x130mm, homologué pour les deux-roues motorisés",
            sizes: "21x13",
            link: "#"
          },
          {
            id: 5,
            title: "PETITE MOTO",
            description: "Format compact 170x130mm, parfait pour les motos légères et scooters",
            sizes: "17x13",
            link: "#"
          },
          {
            id: 6,
            title: "CYCLO",
            description: "Format cyclomoteur 140x120mm, spécifique pour les mobylettes et cyclomoteurs",
            sizes: "14x12",
            link: "#"
          },
          {
            id: 7,
            title: "ENDURO",
            description: "Format spécial 100x100mm, conçu pour les motos d'enduro et tout-terrain",
            sizes: "10x10",
            link: "#"
          },
          {
            id: 8,
            title: "COLLECTION COURTE",
            description: "Format collection 450x100mm, dédié aux véhicules de collection et anciennes",
            sizes: "45x10",
            link: "#"
          },
          {
            id: 9,
            title: "COLLECTION MOTO",
            description: "Format collection moto 275x75mm, spécial pour motos anciennes et classiques",
            sizes: "27,5x7,5",
            link: "#"
          },
        ],
        layout: {
          title: {
            text: "Nos Formats",
            color: "rgb(0, 0, 0)",
            fontSize: "1.875rem",
            marginBottom: "3rem"
          },
          card: {
            background: "white",
            borderColor: "rgb(243, 244, 246)",
            padding: "1.5rem",
            height: "280px",
            borderRadius: "0.75rem",
            shadow: {
              default: "0 1px 3px rgba(0,0,0,0.1)",
              hover: "0 10px 15px -3px rgba(0,0,0,0.1)"
            }
          },
          text: {
            title: {
              color: "rgb(17, 24, 39)",
              fontSize: "1.25rem"
            },
            description: {
              color: "rgb(75, 85, 99)",
              fontSize: "1rem"
            },
            dimensions: {
              color: "rgb(37, 99, 235)",
              fontSize: "0.875rem"
            },
            link: {
              color: "rgb(37, 99, 235)",
              hoverColor: "rgb(30, 64, 175)"
            }
          }
        },
        carousel: {
          slidesToShow: 3,
          speed: 500,
          dots: true,
          dotsStyle: {
            color: "rgb(209, 213, 219)",
            activeColor: "rgb(37, 99, 235)",
            marginTop: "2.5rem"
          },
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        }
      }
    };
  