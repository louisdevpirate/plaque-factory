// src/types/theme.ts

export interface CategoryItem {
    id: number;
    title: string;
    description: string;
    sizes: string;
    link: string;
    icon: string;
  }
  
  export interface ThemeConfig {
    colors: any;
    spacing: any;
    typography: any;
    animation: any;
    navigation: any;
    personalization: any;
    gallery: any;
    categories: {
      items: CategoryItem[];
      layout: any;
      carousel: any;
    };
    faq: any;
    footer: any;
    global: any;
  }