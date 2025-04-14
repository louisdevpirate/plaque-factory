// src/types/theme.ts

export interface CategoryItem {
    id: number;
    title: string;
    description: string;
    sizes: string;
    link: string;
    icon: string;
}
  
export interface ColorPalette {
    primary: string;
    secondary: string;
    background: string;
    [key: string]: string;
}

export interface Spacing {
    padding: string;
    margin: string;
    [key: string]: string;
}

export interface Typography {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    [key: string]: string;
}

export interface AnimationConfig {
    duration: string;
    easing: string;
    [key: string]: string;
}

export interface NavigationConfig {
    showLogo: boolean;
    links: Array<{ label: string; href: string }>;
}

export interface PersonalizationConfig {
    showCTA: boolean;
    ctaLabel: string;
}

export interface GalleryConfig {
    columns: number;
    imageAspectRatio: string;
}

export interface CategoryLayout {
    type: string;
    columns: number;
}

export interface CategoryCarousel {
    enabled: boolean;
    autoplay: boolean;
}

export interface FAQConfig {
    enabled: boolean;
    questions: Array<{ question: string; answer: string }>;
}

export interface FooterConfig {
    copyright: string;
    links: Array<{ label: string; href: string }>;
}

export interface GlobalConfig {
    siteName: string;
    locale: string;
}

export interface ThemeConfig {
    colors: ColorPalette;
    spacing: Spacing;
    typography: Typography;
    animation: AnimationConfig;
    navigation: NavigationConfig;
    personalization: PersonalizationConfig;
    gallery: GalleryConfig;
    categories: {
      items: CategoryItem[];
      layout: CategoryLayout;
      carousel: CategoryCarousel;
    };
    faq: FAQConfig;
    footer: FooterConfig;
    global: GlobalConfig;
}