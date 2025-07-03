// src/types/theme.ts (fusionné)

export interface CategoryItem {
    id: number;
    title: string;
    description: string;
    sizes: string;
    link: string;
    image?: string;
  }
  
  export interface ThemeConfig {
    colors: {
      primary: {
        main: string;
        light: string;
        gradient: string;
      };
      accent: {
        from: string;
        to: string;
        gradient: string;
        hover: {
          from: string;
          to: string;
        };
      };
      text: {
        primary: string;
        secondary: string;
      };
      state: {
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
  
    spacing: {
      header: {
        height: string;
        padding: {
          x: string;
          y: string;
        };
      };
      section: {
        padding: string;
        gap: string;
      };
    };
  
    typography: {
      header: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      body: {
        fontSize: string;
        lineHeight: string;
      };
    };
  
    animation: {
      transition: {
        default: string;
        hover: string;
      };
      transform: {
        hover: string;
      };
    };
  
    navigation: {
      states: {
        default: {
          background: string;
          text: string;
          border: string;
        };
        scrolled: {
          background: string;
          text: string;
          border: string;
        };
        pastHeader: {
          background: string;
          text: string;
        };
      };
      effects: {
        blur: string;
        shadow: string;
      };
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
      animation: {
        timing: string;
        hover: string;
      };
    };
  
    personalization: {
      background: {
        gradient: string;
      };
    };
  
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
        autoplay: boolean;
        autoplaySpeed: number;
        pauseOnHover: boolean;
        cssEase: string;
      };
      layout: {
        background: string;
        padding: string;
        title: {
          text: string;
          color: string;
          fontSize: string;
        };
      };
    };
  
    categories: {
      items: CategoryItem[];
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
      items: Array<{
        question: string;
        answer: string;
      }>;
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
      animation: {
        timing: string;
        expandDuration: number;
      };
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
  