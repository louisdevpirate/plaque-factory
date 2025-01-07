'use client'
import { defaultTheme } from '@/config/themes/default.theme';
import { motoTheme } from '@/config/themes/moto.theme';

export const useThemeSelector = () => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const theme = searchParams.get('theme');

    switch (theme) {
      case 'moto':
        return motoTheme;
      default:
        return defaultTheme;
    }
  }

  return defaultTheme; // Valeur par défaut côté serveur
};
