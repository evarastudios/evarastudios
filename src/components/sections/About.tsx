// src/components/sections/About.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCamera, FiHeart, FiArrowRight } from 'react-icons/fi'
import styles from './About.module.css'

const achievements = [
  { icon: FiCamera, number: '50K+', label: 'Photos Captured' },
  { icon: FiUsers, number: '500+', label: 'Happy Clients' },
  { icon: FiAward, number: '15+', label: 'Awards Won' },
  { icon: FiHeart, number: '1000+', label: 'Events Covered' }
]

const About: React.FC = () => {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Left Content */}
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.aboutLabel} script-font`}>About Evara Studios</span>
            <h2 className={styles.aboutTitle}>
              Crafting Visual Stories
              <span className="text-gradient"> Since 2015</span>
            </h2>
            <p className={styles.aboutDescription}>
              At Evara Studios, we believe that every moment deserves to be captured with 
              artistic excellence and emotional depth. Founded with a passion for visual 
              storytelling, we have been serving clients across Bangalore with professional 
              photography services that exceed expectations.
            </p>
            <p className={styles.aboutDescription}>
              Our team of experienced photographers combines technical expertise with 
              creative vision to deliver stunning results that stand the test of time. 
              From intimate portraits to grand celebrations, we approach each project 
              with dedication and artistic flair.
            </p>

            <div className={styles.aboutFeatures}>
              <div className={styles.feature}>
                <FiAward className={styles.featureIcon} />
                <div>
                  <h4>Award-Winning Quality</h4>
                  <p>Recognized for excellence in photography and customer service</p>
                </div>
              </div>
              <div className={styles.feature}>
                <FiUsers className={styles.featureIcon} />
                <div>
                  <h4>Professional Team</h4>
                  <p>Skilled photographers and support staff for every occasion</p>
                </div>
              </div>
            </div>

            <div className={styles.aboutActions}>
              <Link href="/portfolio" className="btn btn-primary">
                View Our Work
                <FiArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.aboutVisual}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageGrid}>
              <div className={styles.mainImage}>
                <Image
                  src="/images/about/photographer-at-work.jpg"
                  alt="Professional photographer at work"
                  width={400}
                  height={500}
                  className={styles.image}
                />
              </div>
              <div className={styles.secondaryImages}>
                <Image
                  src="/images/about/studio-setup.jpg"
                  alt="Professional studio setup"
                  width={200}
                  height={200}
                  className={styles.image}
                />
                <Image
                  src="/images/about/team-photo.jpg"
                  alt="Evara Studios team"
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div 
              className={styles.floatingCard}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiAward size={24} />
              <div>
                <span className={styles.cardNumber}>8+ Years</span>
                <span className={styles.cardLabel}>Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div 
          className={styles.achievements}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={styles.achievementCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <achievement.icon size={32} className={styles.achievementIcon} />
              <span className={styles.achievementNumber}>{achievement.number}</span>
              <span className={styles.achievementLabel}>{achievement.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About