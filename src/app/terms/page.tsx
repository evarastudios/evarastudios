// src/app/terms/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiAlertCircle, FiDollarSign, FiCalendar } from 'react-icons/fi'
import styles from './LegalPages.module.css'

const TermsPage: React.FC = () => {
  return (
    <div className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiFileText className={styles.heroIcon} />
            <h1>Terms of Service</h1>
            <p>Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.contentLayout}>
            <aside className={styles.sidebar}>
              <h3>Quick Navigation</h3>
              <ul>
                <li><a href="#acceptance">Acceptance of Terms</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#booking">Booking and Payment</a></li>
                <li><a href="#cancellation">Cancellation Policy</a></li>
                <li><a href="#intellectual-property">Intellectual Property</a></li>
                <li><a href="#liability">Limitation of Liability</a></li>
                <li><a href="#modifications">Modifications</a></li>
              </ul>
            </aside>

            <main className={styles.mainContent}>
              <div className={styles.section} id="acceptance">
                <h2>Acceptance of Terms</h2>
                <p>By accessing and using Evara Studios' services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div className={styles.section} id="services">
                <h2>Our Services</h2>
                <p>Evara Studios provides professional photography services including:</p>
                <ul>
                  <li>Wedding photography and videography</li>
                  <li>Corporate event photography</li>
                  <li>Portrait and family photography</li>
                  <li>Product photography</li>
                  <li>Studio rental services</li>
                </ul>
              </div>

              <div className={styles.section} id="booking">
                <h2><FiDollarSign /> Booking and Payment Terms</h2>
                <h3>Booking Process</h3>
                <ul>
                  <li>All bookings require a signed contract and deposit</li>
                  <li>A 30% deposit is required to secure your booking date</li>
                  <li>Final payment is due 7 days before the event</li>
                  <li>Late payments may result in cancellation of services</li>
                </ul>

                <h3>Payment Methods</h3>
                <ul>
                  <li>Bank transfer (preferred)</li>
                  <li>UPI payments</li>
                  <li>Cash payments (for small amounts)</li>
                  <li>Cheques (with prior approval)</li>
                </ul>
              </div>

              <div className={styles.section} id="cancellation">
                <h2><FiCalendar /> Cancellation and Rescheduling</h2>
                <h3>Client Cancellation</h3>
                <ul>
                  <li><strong>30+ days before event:</strong> 50% refund of deposit</li>
                  <li><strong>15-30 days before event:</strong> 25% refund of deposit</li>
                  <li><strong>Less than 15 days:</strong> No refund</li>
                </ul>

                <h3>Rescheduling</h3>
                <ul>
                  <li>Free rescheduling if done 15+ days in advance</li>
                  <li>Subject to photographer availability</li>
                  <li>Emergency rescheduling handled case-by-case</li>
                </ul>

                <h3>Weather Conditions</h3>
                <ul>
                  <li>Outdoor events may be rescheduled due to extreme weather</li>
                  <li>Indoor backup plans will be discussed in advance</li>
                  <li>No additional charges for weather-related rescheduling</li>
                </ul>
              </div>

              <div className={styles.section} id="intellectual-property">
                <h2>Intellectual Property Rights</h2>
                <h3>Copyright</h3>
                <ul>
                  <li>Evara Studios retains copyright to all photographs</li>
                  <li>Clients receive usage rights for personal use</li>
                  <li>Commercial use requires separate licensing agreement</li>
                  <li>Credit to Evara Studios appreciated but not required</li>
                </ul>

                <h3>Portfolio Usage</h3>
                <ul>
                  <li>Evara Studios may use images for portfolio and marketing</li>
                  <li>Clients may request exclusion from marketing materials</li>
                  <li>Social media posting rights included in standard packages</li>
                </ul>
              </div>

              <div className={styles.section} id="liability">
                <h2><FiAlertCircle /> Limitation of Liability</h2>
                <ul>
                  <li>Our liability is limited to the amount paid for services</li>
                  <li>We are not responsible for lost or damaged personal items</li>
                  <li>Force majeure events are beyond our control</li>
                  <li>Equipment failure backup plans are in place</li>
                  <li>We carry professional indemnity insurance</li>
                </ul>
              </div>

              <div className={styles.section} id="modifications">
                <h2>Modifications to Terms</h2>
                <p>Evara Studios reserves the right to modify these terms at any time. Changes will be communicated via:</p>
                <ul>
                  <li>Email notification to existing clients</li>
                  <li>Website updates with effective dates</li>
                  <li>Social media announcements</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Contact Information</h2>
                <div className={styles.contactInfo}>
                  <p><strong>Email:</strong> legal@evarastudios.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> 123 MG Road, Bangalore, Karnataka 560001</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage

