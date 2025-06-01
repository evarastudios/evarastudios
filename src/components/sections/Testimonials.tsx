// src/components/sections/Testimonials.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {GrBlockQuote} from 'react-icons/gr'
import styles from './Testimonials.module.css'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  rating: number
  text: string
  service: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    company: 'Wedding Client',
    image: '/images/testimonials/client-1.jpg',
    rating: 5,
    text: 'Evara Studios captured our wedding day perfectly! Every emotion, every moment was beautifully preserved. The team was professional, creative, and made us feel comfortable throughout the entire process.',
    service: 'Wedding Photography'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'TechCorp Solutions',
    image: '/images/testimonials/client-2.jpg',
    rating: 5,
    text: 'Outstanding corporate photography services. They understood our brand values and delivered images that perfectly represent our company culture. Highly professional and timely delivery.',
    service: 'Corporate Photography'
  },
  {
    id: 3,
    name: 'Anita Patel',
    role: 'Event Manager',
    company: 'Celebrations Plus',
    image: '/images/testimonials/client-3.jpg',
    rating: 5,
    text: 'We have worked with Evara Studios for multiple events, and they never disappoint. Their attention to detail and ability to capture the essence of each event is remarkable.',
    service: 'Event Photography'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Business Owner',
    company: 'Fashion Boutique',
    image: '/images/testimonials/client-4.jpg',
    rating: 5,
    text: 'The product photography for our fashion line exceeded all expectations. The images were so stunning that our online sales increased by 40% after updating our catalog.',
    service: 'Product Photography'
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className={`${styles.testimonials} section`}>
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`${styles.sectionLabel} script-font`}>Testimonials</span>
          <h2 className={styles.sectionTitle}>
            What Our Clients
            <span className="text-gradient"> Say About Us</span>
          </h2>
          <p className={styles.sectionDescription}>
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Evara Studios.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className={styles.testimonialSlider}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className={styles.testimonialContainer}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.testimonialCard}
              >
                <div className={styles.quoteIcon}>
                  <GrBlockQuote size={32} />
                </div>
                
                <div className={styles.rating}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className={styles.star} />
                  ))}
                </div>

                <blockquote className={styles.testimonialText}>
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className={styles.clientInfo}>
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className={styles.clientImage}
                  />
                  <div className={styles.clientDetails}>
                    <h4 className={styles.clientName}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className={styles.clientRole}>
                      {testimonials[currentIndex].role}
                      {testimonials[currentIndex].company && 
                        `, ${testimonials[currentIndex].company}`
                      }
                    </p>
                    <span className={styles.serviceTag}>
                      {testimonials[currentIndex].service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials