export interface ThemeConfig {
    colors: {
      // Couleurs principales
      primary: {
        main: string;          // Bleu principal #0036ca
        light: string;         // Bleu clair #c1d9ff
        gradient: string;      // Le dégradé complet
      };
      // Couleurs d'accent (pour les CTA)
      accent: {
        from: string;          // Orange de départ
        to: string;           // Orange d'arrivée
        gradient: string;      // Le dégradé complet
        hover: {
          from: string;       // Orange hover de départ
          to: string;        // Orange hover d'arrivée
        };
      };
      // Textes
      text: {
        primary: string;      // Blanc pur pour les titres
        secondary: string;    // Blanc légèrement transparent pour les paragraphes
      };
      // États et feedback
      state: {
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
    spacing: {
      header: {
        height: string;       // 70vh pour le header
        padding: {
          x: string;         // Padding horizontal
          y: string;         // Padding vertical
        };
      };
      section: {
        padding: string;     // Espacement standard des sections
        gap: string;         // Espacement entre les éléments
      };
    };
    typography: {
      header: {
        fontSize: string;    // 6xl pour le titre principal
        fontWeight: string;  // bold
        lineHeight: string;  // Pour un espacement optimal
      };
      body: {
        fontSize: string;    // xl pour le texte courant
        lineHeight: string;  // leading-relaxed
      };
    };
    animation: {
      transition: {
        default: string;     // Transition standard
        hover: string;       // Transition au survol
      };
      transform: {
        hover: string;       // Translation au survol
      };
    };

    navigation: {
    // États de la barre de navigation
    states: {
      default: {
        background: string;    // Fond initial
        text: string;         // Couleur du texte initial
        border: string;       // Bordure initiale
      };
      scrolled: {
        background: string;    // Fond après défilement
        text: string;         // Couleur du texte après défilement
        border: string;       // Bordure après défilement
      };
      pastHeader: {
        background: string;    // Fond quand on dépasse le header
        text: string;         // Couleur du texte quand on dépasse le header
      };
    };
    // Effets visuels
    effects: {
      blur: string;           // Intensité du flou (backdrop-blur)
      shadow: string;         // Ombre portée
    };
    // Bouton "Personnaliser"
    cta: {
      default: {
        background: string;
        text: string;
        border: string;
      };
      hover: {
        background: string;
        text: string;
        border: string;
      };
    };
    // Animations
    animation: {
      timing: string;         // Durée de transition
      hover: string;          // Translation au survol
    };
  },

  gallery: {
    images: {
      sources: Array<{
        path: string;
        alt: string;
      }>;
      settings: {
        height: string;
        width: string;
        objectFit: 'contain' | 'cover';
      };
    };
    carousel: {
      speed: number;
      slidesToShow: number;
      spacing: string;
      autoplay: boolean;        // Ajouté
      autoplaySpeed: number;    // Ajouté
      pauseOnHover: boolean;    // Ajouté
      cssEase: string;         // Ajouté
    };
    layout: {
      background: string;
      padding: string;
      title: {              // Section titre ajoutée
        text: string;
        color: string;
        fontSize: string;
      };
    };
  };

  categories: {
    items: Array<{
      id: number;
      title: string;
      description: string;
      sizes: string;
      link: string;
    }>;
    layout: {
      title: {
        text: string;
        color: string;
        fontSize: string;
        marginBottom: string;
      };
      card: {
        background: string;
        borderColor: string;
        padding: string;
        height: string;
        borderRadius: string;
        shadow: {
          default: string;
          hover: string;
        };
      };
      text: {
        title: {
          color: string;
          fontSize: string;
        };
        description: {
          color: string;
          fontSize: string;
        };
        dimensions: {
          color: string;
          fontSize: string;
        };
        link: {
          color: string;
          hoverColor: string;
        };
      };
    };
    carousel: {
      slidesToShow: number;
      speed: number;
      dots: boolean;
      dotsStyle: {
        color: string;
        activeColor: string;
        marginTop: string;
      };
      responsive: Array<{
        breakpoint: number;
        settings: {
          slidesToShow: number;
        };
      }>;
    };
  };

  faq: {
    // Structure des questions/réponses
    items: Array<{
      question: string;
      answer: string;
    }>;
    
    // Mise en page globale
    layout: {
      title: {
        text: string;
        color: string;
        fontSize: string;
        marginBottom: string;
      };
      background: string;
      maxWidth: string;
      spacing: {
        section: string;
        itemGap: string;
      };
    };
    
    // Style des items de FAQ
    item: {
      background: {
        default: string;
        hover: string;
      };
      border: {
        color: string;
        width: string;
        radius: string;
      };
      text: {
        question: {
          color: string;
          fontSize: string;
          fontWeight: string;
        };
        answer: {
          color: string;
          fontSize: string;
          lineHeight: string;
        };
      };
      padding: {
        question: string;
        answer: string;
      };
    };
    
    // Animations et transitions
    animation: {
      timing: string;
      expandDuration: number;
    };
    
    // Style du bouton toggle
    toggle: {
      color: string;
      fontSize: string;
      transition: string;
    };
  };

  footer: {
    styling: {
      text: {
        primary: string;
        secondary: string;
        hover: string;
      };
    };
    sections: {
      legal: string[];
      navigation: string[];
      description: string;
      copyright: string;
    };
  };
  global: {
    branding: {
      logo: {
        path: string;
        alt: string;
      };
    };
  };
}

// Structure pour la galerie :
interface GalleryConfig {
    images: {
      sources: Array<{
        path: string;
        alt: string;
        title?: string;
      }>;
      settings: {
        height: string;
        width: string;
        objectFit: 'contain' | 'cover';
      };
    };
    carousel: {
      speed: number;
      autoplay: boolean;
      pauseOnHover: boolean;
      slidesToShow: number;
      spacing: string;
    };
    layout: {
      padding: string;
      background: string;
      title: {
        text: string;
        color: string;
        fontSize: string;
      };
    };
  }

  