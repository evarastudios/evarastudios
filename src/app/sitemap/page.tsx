// src/app/sitemap/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiMap, 
  FiHome, 
  FiUser, 
  FiCamera, 
  FiImage, 
  FiCalendar,
  FiMail,
  FiFileText,
  FiShield,
  FiHelpCircle,
  FiX
} from 'react-icons/fi'
import styles from './Sitemap.module.css'

interface SitemapSection {
  title: string
  icon: React.ElementType
  links: {
    name: string
    url: string
    description?: string
  }[]
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: FiHome,
    links: [
      { name: 'Home', url: '/', description: 'Welcome to Evara Studios' },
      { name: 'About Us', url: '/about', description: 'Our story, team, and values' },
      { name: 'Services', url: '/services', description: 'Photography services we offer' },
      { name: 'Portfolio', url: '/portfolio', description: 'Showcase of our work' },
      { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
    ]
  },
  {
    title: 'Services',
    icon: FiCamera,
    links: [
      { name: 'Wedding Photography', url: '/services#wedding-photography', description: 'Capturing your special day' },
      { name: 'Event Photography', url: '/services#event-photography', description: 'Corporate and private events' },
      { name: 'Corporate Photography', url: '/services#corporate-photography', description: 'Professional business photography' },
      { name: 'Portrait Photography', url: '/services#portrait-photography', description: 'Individual and family portraits' },
      { name: 'Product Photography', url: '/services#product-photography', description: 'Commercial product images' },
      { name: 'Studio Rental', url: '/studio-booking', description: 'Professional studio space rental' }
    ]
  },
  {
    title: 'Portfolio Categories',
    icon: FiImage,
    links: [
      { name: 'All Portfolio', url: '/portfolio', description: 'Complete portfolio showcase' },
      { name: 'Wedding Gallery', url: '/portfolio?category=wedding', description: 'Wedding photography collection' },
      { name: 'Corporate Gallery', url: '/portfolio?category=corporate', description: 'Corporate event photos' },
      { name: 'Portrait Gallery', url: '/portfolio?category=portrait', description: 'Portrait photography' },
      { name: 'Product Gallery', url: '/portfolio?category=product', description: 'Product photography samples' },
      { name: 'Event Gallery', url: '/portfolio?category=event', description: 'Event photography collection' },
      { name: 'Fashion Gallery', url: '/portfolio?category=fashion', description: 'Fashion photography work' }
    ]
  },
  {
    title: 'Booking & Forms',
    icon: FiCalendar,
    links: [
      { name: 'Studio Booking', url: '/studio-booking', description: 'Book our photography studio' },
      { name: 'Contact Form', url: '/contact', description: 'Send us a message' },
      { name: 'Quote Request', url: '/contact#quote', description: 'Get a custom quote' },
      { name: 'Consultation Booking', url: '/contact#consultation', description: 'Schedule a consultation' }
    ]
  },
  {
    title: 'Legal & Policies',
    icon: FiFileText,
    links: [
      { name: 'Privacy Policy', url: '/privacy-policy', description: 'How we protect your data' },
      { name: 'Terms of Service', url: '/terms', description: 'Service terms and conditions' },
      { name: 'Booking Policy', url: '/booking-policy', description: 'Booking terms and procedures' },
      { name: 'Cancellation Policy', url: '/cancellation', description: 'Cancellation and refund terms' }
    ]
  },
  {
    title: 'Support & Help',
    icon: FiHelpCircle,
    links: [
      { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', url: '/help', description: 'Get help and support' },
      { name: 'Contact Support', url: '/contact#support', description: 'Contact our support team' }
    ]
  }
]

const SitemapPage: React.FC = () => {
  return (
    <div className={styles.sitemapPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiMap className={styles.heroIcon} />
            <h1>Website Sitemap</h1>
            <p>Complete navigation guide to all pages on our website</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.sitemapGrid}>
            {sitemapData.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className={styles.sitemapSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <div className={styles.sectionHeader}>
                  <section.icon className={styles.sectionIcon} />
                  <h2>{section.title}</h2>
                  <span className={styles.linkCount}>{section.links.length} pages</span>
                </div>
                
                <div className={styles.linksList}>
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.url}
                      className={styles.linkItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <Link href={link.url} className={styles.link}>
                        <div className={styles.linkContent}>
                          <h3>{link.name}</h3>
                          {link.description && (
                            <p>{link.description}</p>
                          )}
                          <span className={styles.linkUrl}>{link.url}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div 
            className={styles.additionalInfo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3>XML Sitemap</h3>
              <p>For search engines and developers, our XML sitemap is available at:</p>
              <code>/sitemap.xml</code>
            </div>

            <div className={styles.infoCard}>
              <h3>Last Updated</h3>
              <p>This sitemap was last updated on January 1, 2024</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Missing Something?</h3>
              <p>
                If you can't find what you're looking for, please{' '}
                <Link href="/contact">contact us</Link> and we'll help you find it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SitemapPage