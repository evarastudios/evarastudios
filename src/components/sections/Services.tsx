'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiCamera, 
  FiUsers, 
  FiHeart, 
  FiBriefcase, 
  FiHome, 
  FiStar,
  FiArrowRight,
  FiClock,
  FiAward
} from 'react-icons/fi'
import styles from './Services.module.css'

const services = [
  {
    id: 1,
    title: 'Event Photography',
    description: 'Comprehensive coverage of your special events with professional expertise and artistic vision.',
    icon: FiUsers,
    image: '/images/services/event-photography.jpg',
    features: ['Full Event Coverage', 'Multiple Photographers', 'Same Day Editing', 'Digital Gallery'],
    price: 'Starting from ₹15,000',
    popular: false
  },
  {
    id: 2,
    title: 'Wedding Photography',
    description: 'Capturing your most precious moments with elegance, emotion, and timeless artistry.',
    icon: FiHeart,
    image: '/images/services/wedding-photography.jpg',
    features: ['Pre-wedding Shoot', 'Ceremony Coverage', 'Reception Photography', 'Album Design'],
    price: 'Starting from ₹50,000',
    popular: true
  },
  {
    id: 3,
    title: 'Corporate Photography',
    description: 'Professional business photography for headshots, events, and corporate branding.',
    icon: FiBriefcase,
    image: '/images/services/corporate-photography.jpg',
    features: ['Professional Headshots', 'Event Documentation', 'Product Photography', 'Team Photos'],
    price: 'Starting from ₹8,000',
    popular: false
  },
  {
    id: 4,
    title: 'Portrait Photography',
    description: 'Stunning individual and family portraits that capture personality and emotions.',
    icon: FiCamera,
    image: '/images/services/portrait-photography.jpg',
    features: ['Individual Portraits', 'Family Sessions', 'Creative Concepts', 'Retouching Included'],
    price: 'Starting from ₹5,000',
    popular: false
  },
  {
    id: 5,
    title: 'Studio Rental',
    description: 'Premium photography studio spaces with professional equipment and lighting.',
    icon: FiHome,
    image: '/images/services/studio-rental.jpg',
    features: ['Professional Lighting', 'Multiple Backdrops', 'Equipment Included', 'Flexible Hours'],
    price: 'Starting from ₹2,000/hour',
    popular: true
  },
  {
    id: 6,
    title: 'Product Photography',
    description: 'High-quality product images for e-commerce, catalogs, and marketing materials.',
    icon: FiStar,
    image: '/images/services/product-photography.jpg',
    features: ['White Background', 'Lifestyle Shots', 'Multiple Angles', 'Fast Turnaround'],
    price: 'Starting from ₹500/product',
    popular: false
  }
]

const features = [
  {
    icon: FiAward,
    title: 'Award-Winning Quality',
    description: 'Recognized for excellence in photography and customer service'
  },
  {
    icon: FiClock,
    title: 'Fast Turnaround',
    description: 'Quick delivery of edited photos without compromising quality'
  },
  {
    icon: FiUsers,
    title: 'Professional Team',
    description: 'Experienced photographers and support staff for every project'
  }
]

const Services: React.FC = () => {
  return (
    <section className={`${styles.services} section`} id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`${styles.sectionLabel} script-font`}>Our Services</span>
          <h2 className={styles.sectionTitle}>
            Professional Photography
            <span className="text-gradient"> & Studio Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            From intimate portraits to grand events, we offer comprehensive photography services 
            and premium studio rental facilities to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {service.popular && (
                <div className={styles.popularBadge}>
                  <FiStar size={16} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <service.icon size={32} className={styles.serviceIcon} />
                </div>
              </div>

              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.feature}>
                      <FiStar size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.serviceFooter}>
                  <div className={styles.servicePrice}>
                    {service.price}
                  </div>
                  <Link href="/contact" className={styles.serviceButton}>
                    Get Quote
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div 
          className={styles.featuresSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.featuresTitle}>Why Choose Evara Studios?</h3>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.featureIcon}>
                  <feature.icon size={24} />
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className={styles.servicesCallToAction}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Create Something Amazing?</h3>
            <p className={styles.ctaDescription}>
              Let's discuss your photography needs and bring your vision to life with our professional services.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/studio-booking" className="btn btn-primary">
                Book Studio
                <FiHome size={18} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get Consultation
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services