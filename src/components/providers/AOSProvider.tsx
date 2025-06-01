// src/components/providers/AOSProvider.tsx
'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'

interface AOSProviderProps {
  children: React.ReactNode
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    })
  }, [])

  return <>{children}</>
}

export default AOSProvider