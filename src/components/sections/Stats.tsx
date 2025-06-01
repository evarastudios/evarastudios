// src/components/sections/Stats.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiCamera, FiAward, FiHeart, FiClock, FiStar } from 'react-icons/fi'
import styles from './Stats.module.css'

interface StatItem {
  icon: React.ElementType
  number: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    icon: FiUsers,
    number: 500,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers across Bangalore'
  },
  {
    icon: FiHeart,
    number: 1000,
    suffix: '+',
    label: 'Events Covered',
    description: 'Weddings, corporate events, and celebrations'
  },
  {
    icon: FiCamera,
    number: 50000,
    suffix: '+',
    label: 'Photos Captured',
    description: 'Precious moments preserved forever'
  },
  {
    icon: FiClock,
    number: 2500,
    suffix: '+',
    label: 'Studio Hours',
    description: 'Professional studio rental bookings'
  },
  {
    icon: FiAward,
    number: 15,
    suffix: '+',
    label: 'Awards Won',
    description: 'Recognition for photography excellence'
  },
  {
    icon: FiStar,
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on customer feedback and reviews'
  }
]

const Counter: React.FC<{ value: number; duration?: number }> = ({ 
  value, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === undefined) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * value)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  return <span ref={countRef}>{count.toLocaleString()}</span>
}

const Stats: React.FC = () => {
  return (
    <section className={`${styles.stats} section`}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`${styles.sectionLabel} script-font`}>Our Numbers</span>
          <h2 className={styles.sectionTitle}>
            Achievements That
            <span className="text-gradient"> Speak Volumes</span>
          </h2>
          <p className={styles.sectionDescription}>
            Every number tells a story of trust, dedication, and excellence in photography services.
          </p>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={styles.statIcon}>
                <stat.icon size={32} />
              </div>
              <div className={styles.statNumber}>
                <Counter value={stat.number} />
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statDescription}>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

