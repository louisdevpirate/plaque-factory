'use client'
import { defaultTheme } from '@/config/themes/default.theme';

export const useThemeSelector = () => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const theme = searchParams.get('theme');

    switch (theme) {
      default:
        return defaultTheme;
    }
  }

  return defaultTheme; // Valeur par défaut côté serveur
};
