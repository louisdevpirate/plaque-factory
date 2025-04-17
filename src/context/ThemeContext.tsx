// src/context/ThemeContext.tsx
'use client'
import { createContext, ReactNode } from 'react'
import { useThemeSelector } from '@/hooks/useThemeSelector'
import { ThemeConfig } from '@/types/theme'

export const ThemeContext = createContext<ThemeConfig | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useThemeSelector()
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}