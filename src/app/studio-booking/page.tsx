// src/app/studio-booking/page.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FiCamera, 
  FiClock, 
  FiMapPin, 
  FiWifi, 
  FiCoffee, 
  FiShield,
  FiStar,
  FiCheck
} from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'
import BookingForm from '@/components/froms/BookingForm'
import styles from './StudioBooking.module.css'

const studioFeatures = [
  {
    icon: FiCamera,
    title: 'Professional Equipment',
    description: 'High-end cameras, lenses, and lighting equipment included'
  },
  {
    icon: FiClock,
    title: 'Flexible Hours',
    description: 'Available 9 AM - 9 PM, 7 days a week'
  },
  {
    icon: FiMapPin,
    title: 'Prime Location',
    description: 'Easily accessible location in the heart of Bangalore'
  },
  {
    icon: FiWifi,
    title: 'High-Speed WiFi',
    description: 'Reliable internet for instant uploads and communication'
  },
  {
    icon: FiCoffee,
    title: 'Refreshments',
    description: 'Complimentary tea, coffee, and snacks available'
  },
  {
    icon: FaCar,
    title: 'Free Parking',
    description: 'Dedicated parking space for clients and equipment'
  }
]

const studioSpecs = [
  { label: 'Studio Size', value: '1200 sq ft' },
  { label: 'Ceiling Height', value: '12 feet' },
  { label: 'Power Supply', value: '440V, 3-phase' },
  { label: 'AC Available', value: 'Yes, centralized' },
  { label: 'Changing Room', value: '2 private rooms' },
  { label: 'Makeup Station', value: 'Professional setup' }
]

const pricingPlans = [
  {
    name: 'Hourly',
    price: '₹2,000',
    duration: 'per hour',
    features: [
      'Basic lighting setup',
      'White backdrop included',
      'Equipment usage',
      'WiFi access',
      'Parking included'
    ],
    popular: false
  },
  {
    name: 'Half Day',
    price: '₹7,000',
    duration: '4 hours',
    features: [
      'Professional lighting setup',
      'Multiple backdrops',
      'Equipment & props',
      'Makeup station access',
      'Refreshments included',
      'Technical assistance'
    ],
    popular: true
  },
  {
    name: 'Full Day',
    price: '₹12,000',
    duration: '8 hours',
    features: [
      'Complete studio access',
      'Premium lighting setup',
      'All backdrops & props',
      'Dedicated assistance',
      'Meals included',
      'Extended equipment usage',
      'Priority booking'
    ],
    popular: false
  }
]

const StudioBookingPage: React.FC = () => {
  return (
    <div className={styles.studioBooking}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div 
              className={styles.heroText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${styles.heroLabel} script-font`}>Professional Studio</span>
              <h1 className={styles.heroTitle}>
                Book Our Premium
                <span className="text-gradient"> Photography Studio</span>
              </h1>
              <p className={styles.heroDescription}>
                State-of-the-art photography studio with professional equipment, 
                flexible timing, and all amenities to bring your creative vision to life.
              </p>
              
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <FiStar className={styles.statIcon} />
                  <div>
                    <span className={styles.statNumber}>4.9/5</span>
                    <span className={styles.statLabel}>Rating</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <FiShield className={styles.statIcon} />
                  <div>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Secure</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <FiCheck className={styles.statIcon} />
                  <div>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Bookings</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.studioImages}>
                <Image
                  src="/images/studio/main-studio.jpg"
                  alt="Professional Photography Studio"
                  width={500}
                  height={350}
                  className={styles.mainImage}
                />
                <div className={styles.thumbnails}>
                  <Image
                    src="/images/studio/lighting-setup.jpg"
                    alt="Professional Lighting"
                    width={150}
                    height={100}
                    className={styles.thumbnail}
                  />
                  <Image
                    src="/images/studio/backdrop-setup.jpg"
                    alt="Backdrop Setup"
                    width={150}
                    height={100}
                    className={styles.thumbnail}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.features} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Studio Features & Amenities</h2>
            <p>Everything you need for a successful photography session</p>
          </motion.div>
          
          <div className={styles.featuresGrid}>
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.featureIcon}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.pricing} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Studio Rental Pricing</h2>
            <p>Flexible pricing options to suit your photography needs</p>
          </motion.div>
          
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                
                <div className={styles.planHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.duration}>/{plan.duration}</span>
                  </div>
                </div>
                
                <ul className={styles.features}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FiCheck size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Specifications */}
      <section className={`${styles.specifications} section`}>
        <div className="container">
          <div className={styles.specsContent}>
            <motion.div 
              className={styles.specsText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Studio Specifications</h2>
              <p>
                Our professional photography studio is designed to meet all your 
                creative requirements with modern amenities and technical specifications.
              </p>
              
              <div className={styles.specsGrid}>
                {studioSpecs.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.specsVisual}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/studio/studio-layout.jpg"
                alt="Studio Layout"
                width={600}
                height={400}
                className={styles.specsImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={`${styles.bookingSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Book Your Studio Session</h2>
            <p>Fill out the form below to request a booking quote via WhatsApp</p>
          </motion.div>
          
          <div className={styles.bookingFormContainer}>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudioBookingPage