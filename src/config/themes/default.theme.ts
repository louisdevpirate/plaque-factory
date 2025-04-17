import type { ThemeConfig } from '@/types/theme';

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
        fontSize: "clamp(3rem, 5vw, 4rem)", // ✅ Dynamique et responsive
        fontWeight: "700",
        lineHeight: "1.2",
      },
      body: {
        fontSize: "clamp(1rem, 2vw, 1.5rem)", // ✅ Texte général adaptable
        lineHeight: "1.5"
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

      personalization: {
        background: {
          gradient: 'linear-gradient(135deg, #0036ca 0%, #c1d9ff 100%)'
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
            width: '300px',
            objectFit: 'contain'
          }
        },
        carousel: {
          speed: 20000,
          slidesToShow: 3,
          spacing: '30px',
          autoplay: true,
          autoplaySpeed: 0,
          pauseOnHover: false,
          cssEase: 'linear',
        },
        layout: {
          background: 'transparent',
          padding: '5rem 0',
          title: {
            text: 'FAQ', // ou ce que tu veux
            color: '#000000',
            fontSize: '1.875rem'
          }
        }
      },

      categories: {
        items: [
          {
            id: 1,
            title: "AUTO",
            description: "Homologué pour voitures particulières et véhicules légers",
            sizes: "52x11",
            link: "#",
            icon: "images/icons/categories/car.svg"
          },
          {
            id: 2,
            title: "MOTO",
            description: "Homologué pour les deux-roues motorisés",
            sizes: "21x13",
            link: "#",
            icon: "images/icons/categories/moto.svg"
          },
          {
            id: 3,
            title: "U.S.",
            description: "Idéal pour les véhicules importés et style US authentique",
            sizes: "30x15",
            link: "#",
            icon: "images/icons/categories/us.svg"
          },
          
          {
            id: 4,
            title: "4X4",
            description: "Adapté aux SUV, pick-up et véhicules de loisirs",
            sizes: "27,5x20",
            link: "#",
            icon: "images/icons/categories/suv.svg"
          },
          {
            id: 5,
            title: "PETITE MOTO",
            description: "Parfait pour les motos légères et scooters",
            sizes: "17x13",
            link: "#",
            icon: "images/icons/categories/little-moto.svg"
          },
          {
            id: 6,
            title: "CYCLO",
            description: "Spécifique pour les mobylettes et cyclomoteurs",
            sizes: "14x12",
            link: "#",
            icon: "images/icons/categories/cyclo.svg"
          },
          {
            id: 7,
            title: "ENDURO",
            description: "Conçu pour les motos d'enduro et tout-terrain",
            sizes: "10x10",
            link: "#",
            icon: "images/icons/categories/enduro.svg"
          },
          {
            id: 8,
            title: "COLLECTION",
            description: "Dédié aux véhicules de collection et anciennes",
            sizes: "45x10",
            link: "#",
            icon: "images/icons/categories/collection.svg"
          },
          {
            id: 9,
            title: "COLLECTION COMPACT",
            description: "Spécial pour motos anciennes et classiques",
            sizes: "27,5x7,5",
            link: "#",
            icon: "images/icons/categories/collection-compact.svg"
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
          slidesToShow: 2, // PC par défaut
          speed: 500,
          dots: true,
          dotsStyle: {
            color: "rgb(209, 213, 219)",
            activeColor: "rgb(37, 99, 235)",
            marginTop: "2.5rem"
          },
          responsive: [
            {
              breakpoint: 1280, // Large PC
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1024, // Tablette
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 768, // Petit écran/Tablette verticale
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480, // Mobile
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
            question: "Les plaques sont-elles en plexiglass ?",
            answer: "Oui nos plaques sont produites en plexiglass. Nous utilisons des plaques en plexiglass PMMA aux bords moulés (arrondis), de 3mm d'épaisseur. C'est la meilleure qualité disponible en France."
          },
          {
            question: "Est-ce que les plaques sont homologuées ?",
            answer: "Oui, nos plaques sont homologuées par défaut. Lors de la personnalisation, une pastille colorée vous indique en temps réel le statut d'homologation de votre plaque : \n\n• Pastille verte : votre plaque est homologuée \n• Pastille rouge : vos modifications rendent la plaque non homologuée. \n\nCela vous permet de savoir immédiatement si vos personnalisations respectent les normes d'homologation."
          },
          {
            question: "Les plaques sont-elles vendues à l'unité ?",
            answer: "Oui, les plaques sont vendues à l'unité. Vous pouvez commander le nombre exact de plaques dont vous avez besoin. Il suffit d'indiquer la quantité souhaitée dans votre panier : 1 plaque, 2 plaques pour un jeu complet (avant + arrière), 3 plaques, 4 plaques...ou plus selon vos besoins."
          },
          {
            question: "Puis-je intégrer un logo personnalisé ?",
            answer: "Oui, à l'aide du module de personnalisation de votre plaque, vous pouvez ajouter des logos à plusieurs endroits : \n\n• Remplacer les étoiles européennes (non homologué)\n• Remplacer le logo de région (non homologué)\n• Ajouter des logos en bas de plaque, de chaque côté du texte (homologué)\n• Intégrer un logo en fond de plaque (non homologué)"
          },
          {
            question: "De quel couleurs sont les rivets ?",
            answer: "Les rivets sont disponibles en option avec deux possibilités :\n• Vous pouvez choisir leur couleur lors de la validation de votre plaque\n• Par défaut, ils s'adaptent à la couleur du fond (généralement blancs pour les plaques homologuées)\n\nD'autres systèmes de fixation sont disponibles dans notre rubrique \"Accessoires\"."
          },
          {
            question: "Les paiements sont-ils sécurisés ? ",
            answer: "Oui, tous vos paiements sont entièrement sécurisés grâce à notre partenariat avec PayPal, leader mondial du paiement en ligne. Nous avons choisi les options de sécurité les plus avancées pour protéger vos transactions. Vous pouvez payer en toute tranquillité via :\n\n• Carte bancaire\n• PayPal\n• Apple Pay\n• American Express\n\nTous les paiements sont cryptés et sécurisés, quel que soit le mode de paiement choisi."
          }
        ],
        
        layout: {
          title: {
            text: "FAQ",
            color: "#ffffff",
            fontSize: "2.25rem", // text-4xl
            marginBottom: "3rem"
          },
          background: "transparent",
          maxWidth: "42rem", // max-w-2xl
          spacing: {
            section: "5rem", // py-20
            itemGap: "0.75rem" // space-y-3
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
            radius: "0.75rem" // rounded-xl
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
          description: "Personnalisation de plaques d'immatriculation homologuées et accessoires décoratifs.",
          copyright: `© 2017 - ${new Date().getFullYear()} - PlaqueImmat.fr - Tous droits réservés`
        }
      },
      global: {
        branding: {
          logo: {
            path: '/images/logo/plaque-factory.svg',
            alt: 'Plaque Factory Logo'
          }
        }
      }
    };