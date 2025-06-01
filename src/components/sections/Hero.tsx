'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCamera, FiPlay, FiArrowRight, FiStar } from 'react-icons/fi'
import styles from './Hero.module.css'

const heroSlides = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    title: 'Capturing Life\'s',
    subtitle: 'Precious Moments',
    description: 'Professional photography that tells your story with artistic excellence and emotional depth.',
    cta: 'View Portfolio',
    ctaLink: '/portfolio'
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    title: 'Premium Studio',
    subtitle: 'Rental Services',
    description: 'State-of-the-art photography studios available for rent with professional equipment and lighting.',
    cta: 'Book Studio',
    ctaLink: '/studio-booking'
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    title: 'Event Photography',
    subtitle: 'Excellence',
    description: 'Comprehensive event coverage from corporate functions to intimate celebrations.',
    cta: 'Our Services',
    ctaLink: '/services'
  }
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className={styles.hero}>
      {/* Background Slides */}
      <div className={styles.heroBackground}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.heroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              priority
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={`${styles.floatingElement} ${styles.element1}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiCamera size={24} />
        </motion.div>
        <motion.div
          className={`${styles.floatingElement} ${styles.element2}`}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiStar size={20} />
        </motion.div>
        <motion.div
          className={`${styles.floatingElement} ${styles.element3}`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiPlay size={18} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span 
              className={styles.heroLabel}
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="script-font">Welcome to</span>
            </motion.span>
            
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className={styles.titleLine1}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                  >
                    {heroSlides[currentSlide].title}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className={styles.titleLine2}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`subtitle-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gradient"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p 
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            <motion.div 
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link 
                href={heroSlides[currentSlide].ctaLink} 
                className="btn btn-primary"
              >
                {heroSlides[currentSlide].cta}
                <FiArrowRight />
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-secondary"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className={styles.trustIndicators}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>500+</span>
                <span className={styles.trustLabel}>Happy Clients</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>1000+</span>
                <span className={styles.trustLabel}>Events Covered</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>50K+</span>
                <span className={styles.trustLabel}>Photos Captured</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Video Preview */}
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className={styles.visualFrame}>
              <Image
                src="/images/hero/studio-preview.jpg"
                alt="Professional Photography Studio"
                width={600}
                height={400}
                className={styles.previewImage}
              />
              <motion.div 
                className={styles.playButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className={styles.slideNavigation}>
        <button 
          className={styles.navButton} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className={styles.slideIndicators}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className={styles.navButton} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero