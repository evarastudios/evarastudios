// src/components/ui/ThemeToggle.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/hooks/useTheme'
import styles from './ThemeToggle.module.css'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={styles.toggleTrack}>
        <motion.div
          className={styles.toggleThumb}
          animate={{
            x: theme === 'dark' ? 0 : 24,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {theme === 'dark' ? (
            <FiMoon size={14} />
          ) : (
            <FiSun size={14} />
          )}
        </motion.div>
      </div>
    </motion.button>
  )
}

export default ThemeToggle