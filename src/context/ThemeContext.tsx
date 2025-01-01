'use client';  // Ajoutez cette ligne en haut du fichier

import { createContext, ReactNode } from 'react';
import { ThemeConfig } from '../config/themes/theme.types';
import { defaultTheme } from '../config/themes/default.theme';

export const ThemeContext = createContext<ThemeConfig>(defaultTheme);

interface ThemeProviderProps {
  theme?: ThemeConfig;
  children: ReactNode;
}

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};