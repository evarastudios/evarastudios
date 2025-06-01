// src/components/layout/Footer.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiArrowRight,
  FiHeart
} from 'react-icons/fi'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Wedding Photography', href: '/services#wedding' },
        { name: 'Event Photography', href: '/services#event' },
        { name: 'Corporate Photography', href: '/services#corporate' },
        { name: 'Portrait Photography', href: '/services#portrait' },
        { name: 'Studio Rental', href: '/studio-booking' },
        { name: 'Product Photography', href: '/services#product' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Awards', href: '/about#awards' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Booking Policy', href: '/booking-policy' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cancellation', href: '/cancellation' }
      ]
    }
  ]

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com/evarastudios', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://instagram.com/evarastudios', label: 'Instagram' },
    { icon: FiTwitter, href: 'https://twitter.com/evarastudios', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/evarastudios', label: 'LinkedIn' },
    { icon: FiYoutube, href: 'https://youtube.com/evarastudios', label: 'YouTube' }
  ]

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className="container">
          <motion.div 
            className={styles.newsletterContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.newsletterText}>
              <h3>Stay Updated with Our Latest Work</h3>
              <p>Subscribe to our newsletter for photography tips, behind-the-scenes content, and special offers.</p>
            </div>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className={styles.emailInput}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
                <FiArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerContent}>
            {/* Company Info */}
            <motion.div 
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src="/images/logo-gold.png"
                  alt="Evara Studios"
                  width={50}
                  height={50}
                />
                <div className={styles.logoText}>
                  <span className={styles.brandName}>Evara Studios</span>
                  <span className={styles.tagline}>Capturing Moments</span>
                </div>
              </Link>
              
              <p className={styles.companyDescription}>
                Professional photography services in Bangalore, specializing in weddings, 
                events, portraits, and studio rental. Creating timeless memories with 
                artistic excellence since 2015.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FiMapPin size={16} />
                  <span>123 MG Road, Bangalore, Karnataka 560001</span>
                </div>
                <div className={styles.contactItem}>
                  <FiPhone size={16} />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className={styles.contactItem}>
                  <FiMail size={16} />
                  <a href="mailto:info@evarastudios.in">info@evarastudios.in</a>
                </div>
                <div className={styles.contactItem}>
                  <FiClock size={16} />
                  <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div 
                key={section.title}
                className={styles.footerSection}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Google Maps */}
            <motion.div 
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className={styles.sectionTitle}>Find Us</h4>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4729203973335!2d77.58542331482248!3d13.00745909080847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670ba8ef04f%3A0xacf3c1c5b5b8e72!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Evara Studios Location"
                ></iframe>
              </div>
              <div className={styles.quickActions}>
                <Link href="/studio-booking" className="btn btn-secondary btn-small">
                  Book Studio
                </Link>
                <Link href="/contact" className="btn btn-outline btn-small">
                  Get Directions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                © {currentYear} Evara Studios. All rights reserved. Made with{' '}
                <FiHeart className={styles.heartIcon} /> in Bangalore.
              </p>
            </div>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer