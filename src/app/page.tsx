// 'use client'

import React from 'react'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import CallToAction from '@/components/sections/CallToAction'
import type { Metadata } from 'next'

// This would be handled differently in app router, but keeping for reference
export const metadata: Metadata = {
  title: 'Professional Photography & Studio Rental in Bangalore',
  description: 'Evara Studios offers premium photography services and studio rental in Bangalore. Capturing your precious moments with professional expertise and state-of-the-art equipment.',
}

const Homepage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Stats/Counter Section */}
      <Stats />
      
      {/* Portfolio Preview */}
      <Portfolio />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Homepage