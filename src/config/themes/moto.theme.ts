// src/config/themes/moto.theme.ts
import { ThemeConfig } from './theme.types';

export const motoTheme: ThemeConfig = {
  colors: {
    primary: {
      main: '#FF0000',
      light: '#FF4444',
      gradient: 'fixed linear-gradient(135deg, #FF0000 0%, #000000 100%)'
    },
    accent: {
      from: '#FF0000',
      to: '#CC0000',
      gradient: 'linear-gradient(to right, #FF0000, #CC0000)',
      hover: {
        from: '#CC0000',
        to: '#990000'
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
        background: 'rgba(59, 130, 246, 0.5)',
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

  personalization: {
    background: {
      gradient: 'linear-gradient(135deg, #FF0000 0%, #8B0000 100%)'
    }
  },

  gallery: {
    images: {
      sources: [
        {
          path: '/images/carousel/moto1.png',
          alt: 'Plaque moto personnalisée 1'
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
        text: 'Nos réalisations moto',
        color: '#000000',
        fontSize: '1.875rem'
      }
    }
  },
  categories: {
    items: [
      {
        id: 1,
        title: "MOTO STANDARD",
        description: "Format homologué 210x130mm - Le format classique pour toutes les motos",
        sizes: "21x13",
        link: "#"
      }
    ],
    layout: {
      title: {
        text: "Nos Formats Moto",
        color: "#000000",
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
  },
  faq: {
    items: [
      {
        question: "Quelle taille de plaque pour ma moto ?",
        answer: "Le format standard est 21x13cm. Pour les motos légères, optez pour le 17x13cm."
      }
    ],
    layout: {
      title: {
        text: "FAQ",
        color: "#ffffff",
        fontSize: "2.25rem",
        marginBottom: "3rem"
      },
      background: 'linear-gradient(135deg, #8B0000 0%, #FF0000 100%)',
      maxWidth: "42rem",
      spacing: {
        section: "5rem",
        itemGap: "0.75rem"
      }
    },
    item: {
      background: {
        default: "rgba(255, 255, 255, 0.1)",
        hover: "rgba(255, 255, 255, 0.15)"
      },
      border: {
        color: "rgba(255, 255, 255, 0.1)",
        width: "1px",
        radius: "0.75rem"
      },
      text: {
        question: {
          color: "#ffffff",
          fontSize: "1.125rem",
          fontWeight: "normal"
        },
        answer: {
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "1rem",
          lineHeight: "1.5"
        }
      },
      padding: {
        question: "1.5rem 2rem",
        answer: "0 1.5rem 1rem"
      }
    },
    animation: {
      timing: "300ms ease-in-out",
      expandDuration: 300
    },
    toggle: {
      color: "#ffffff",
      fontSize: "1.25rem",
      transition: "transform 300ms ease"
    }
  },
  footer: {
    styling: {
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.9)',
        hover: '#ffffff'
      }
    },
    sections: {
      navigation: ['Personnaliser', 'Galerie', 'Catégories', 'FAQ'],
      legal: ['Mentions légales', 'CGV', 'Politique de remboursement', 'Contact'],
      description: "Personnalisation de plaques moto homologuées et accessoires décoratifs.",
      copyright: `© 2017 - ${new Date().getFullYear()} - PlaqueImmat.fr - Tous droits réservés`
    }
  },
  global: {
    branding: {
      logo: {
        path: '/images/logo/1.png',
        alt: 'Plaque Factory Logo'
      }
    }
  }
}