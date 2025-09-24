'use client'
import { defaultTheme } from '@/config/themes/default.theme';
import { useState, useEffect } from 'react';

export const useThemeSelector = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const themeParam = searchParams.get('theme');

    switch (themeParam) {
      default:
        setTheme(defaultTheme);
        break;
    }
  }, []);

  return theme;
};
