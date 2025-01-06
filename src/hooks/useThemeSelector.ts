'use client'
import { useSearchParams } from 'next/navigation'
import { defaultTheme } from '@/config/themes/default.theme'
import { motoTheme } from '@/config/themes/moto.theme'

export const useThemeSelector = () => {
  const searchParams = useSearchParams()
  const theme = searchParams.get('theme')
  
  switch (theme) {
    case 'moto':
      return motoTheme
    default:
      return defaultTheme
  }
}