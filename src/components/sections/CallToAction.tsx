// src/components/sections/CallToAction.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCamera, FiCalendar, FiPhone, FiArrowRight } from 'react-icons/fi'
import styles from './CallToAction.module.css'

const CallToAction: React.FC = () => {
  return (
    <section className={`${styles.cta} section`}>
      <div className="container">
        <motion.div 
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.ctaText}>
            <motion.span 
              className={`${styles.ctaLabel} script-font`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Create Magic?
            </motion.span>
            
            <motion.h2 
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's Capture Your
              <span className="text-gradient"> Perfect Moments</span>
            </motion.h2>
            
            <motion.p 
              className={styles.ctaDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Whether it's a wedding, corporate event, or personal photoshoot, 
              our team is ready to bring your vision to life with professional 
              expertise and creative artistry.
            </motion.p>
          </div>

          <motion.div 
            className={styles.ctaActions}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={styles.actionCards}>
              <motion.div 
                className={styles.actionCard}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.cardIcon}>
                  <FiCamera size={24} />
                </div>
                <h3>Book a Session</h3>
                <p>Schedule your photography session with our experts</p>
                <Link href="/contact" className={styles.cardButton}>
                  Get Started
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div 
                className={styles.actionCard}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.cardIcon}>
                  <FiCalendar size={24} />
                </div>
                <h3>Studio Rental</h3>
                <p>Book our professional studio for your photography needs</p>
                <Link href="/studio-booking" className={styles.cardButton}>
                  Book Studio
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div 
                className={styles.actionCard}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.cardIcon}>
                  <FiPhone size={24} />
                </div>
                <h3>Free Consultation</h3>
                <p>Discuss your project with our photography consultants</p>
                <a href="tel:+919876543210" className={styles.cardButton}>
                  Call Now
                  <FiArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            <motion.div 
              className={styles.mainCTA}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/contact" className="btn btn-primary btn-large">
                Start Your Journey Today
                <FiArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction