// src/hooks/useTheme.ts
import { useThemeContext } from '@/components/providers/ThemeProvider'

export const useTheme = () => {
  return useThemeContext()
}