// src/app/contact/page.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend,
  FiMessageSquare,
  FiCalendar,
  FiInstagram,
  FiFacebook,
  FiTwitter
} from 'react-icons/fi'
import ContactForm from '@/components/froms/ContactForm'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 87654 32109'],
    action: 'tel:+919876543210'
  },
  {
    icon: FiMail,
    title: 'Email',
    details: ['info@evarastudios.in', 'bookings@evarastudios.in'],
    action: 'mailto:info@evarastudios.in'
  },
  {
    icon: FiMapPin,
    title: 'Address',
    details: ['123 MG Road, Bangalore', 'Karnataka 560001, India'],
    action: 'https://maps.google.com/?q=MG+Road+Bangalore'
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    details: ['Mon - Sun: 9:00 AM - 9:00 PM', 'Always available for emergencies'],
    action: null
  }
]

const socialLinks = [
  {
    icon: FiInstagram,
    name: 'Instagram',
    handle: '@evarastudios',
    url: 'https://instagram.com/evarastudios',
    color: '#E4405F'
  },
  {
    icon: FiFacebook,
    name: 'Facebook',
    handle: 'Evara Studios',
    url: 'https://facebook.com/evarastudios',
    color: '#1877F2'
  },
  {
    icon: FiTwitter,
    name: 'Twitter',
    handle: '@evarastudios',
    url: 'https://twitter.com/evarastudios',
    color: '#1DA1F2'
  }
]

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 2-4 weeks in advance for regular sessions and 2-3 months for weddings and large events.'
  },
  {
    question: 'Do you provide equipment?',
    answer: 'Yes, all our photography packages include professional cameras, lenses, lighting, and other necessary equipment.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations 30+ days before: 50% refund. 15-30 days: 25% refund. Less than 15 days: No refund.'
  },
  {
    question: 'Do you travel for shoots?',
    answer: 'Yes, we travel across Bangalore and India for destination weddings and events. Travel costs are additional.'
  }
]

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.heroLabel} script-font`}>Get In Touch</span>
            <h1 className={styles.heroTitle}>
              Let's Create Something
              <span className="text-gradient"> Beautiful Together</span>
            </h1>
            <p className={styles.heroDescription}>
              Ready to capture your special moments? We'd love to hear about your project 
              and discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className={`${styles.contactSection} section`}>
        <div className="container">
          <div className={styles.contactContent}>
            {/* Contact Information */}
            <motion.div 
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Contact Information</h2>
              <p>
                Reach out to us through any of the following channels. 
                We respond to all inquiries within 24 hours.
              </p>

              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={styles.contactCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className={styles.cardIcon}>
                      <info.icon size={24} />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className={styles.socialSection}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ '--social-color': social.color } as React.CSSProperties}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                      <div>
                        <span className={styles.socialName}>{social.name}</span>
                        <span className={styles.socialHandle}>{social.handle}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className={styles.formSection}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4729203973335!2d77.58542331482248!3d13.00745909080847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670ba8ef04f%3A0xacf3c1c5b5b8e72!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Evara Studios Location"
              ></iframe>
            </div>
            <div className={styles.mapOverlay}>
              <div className={styles.locationCard}>
                <h3>Visit Our Studio</h3>
                <p>123 MG Road, Bangalore, Karnataka 560001</p>
                <a 
                  href="https://maps.google.com/?q=MG+Road+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faqSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our photography services</p>
          </motion.div>
          
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={styles.faqCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage