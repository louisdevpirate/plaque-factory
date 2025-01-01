// src/config/themes/theme.types.ts
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
  }