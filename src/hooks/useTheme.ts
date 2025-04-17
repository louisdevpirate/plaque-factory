'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeConfig } from '@/types/theme';

export const useTheme = (): ThemeConfig => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};