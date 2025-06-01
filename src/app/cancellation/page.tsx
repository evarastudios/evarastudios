// src/app/cancellation/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiXCircle, FiRefreshCw, FiAlertTriangle, FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi'
import styles from './Cancellation.module.css'

const CancellationPage: React.FC = () => {
  return (
    <div className={styles.cancellationPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiXCircle className={styles.heroIcon} />
            <h1>Cancellation & Refund Policy</h1>
            <p>Understanding our cancellation terms and refund procedures</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.policyGrid}>
            {/* Client Cancellation */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.cardHeader}>
                <FiXCircle className={styles.cardIcon} />
                <h2>Client Cancellation Policy</h2>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.refundTiers}>
                  <div className={styles.refundTier}>
                    <div className={styles.tierHeader}>
                      <FiClock />
                      <span>30+ Days Before Event</span>
                    </div>
                    <div className={styles.tierDetails}>
                      <span className={styles.refundAmount}>50% Refund</span>
                      <ul>
                        <li>50% of deposit amount refunded</li>
                        <li>Processed within 7-10 business days</li>
                        <li>Administrative fee of ₹1,000 deducted</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.refundTier}>
                    <div className={styles.tierHeader}>
                      <FiClock />
                      <span>15-30 Days Before Event</span>
                    </div>
                    <div className={styles.tierDetails}>
                      <span className={styles.refundAmount}>25% Refund</span>
                      <ul>
                        <li>25% of deposit amount refunded</li>
                        <li>Processed within 7-10 business days</li>
                        <li>Administrative fee of ₹1,000 deducted</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.refundTier}>
                    <div className={styles.tierHeader}>
                      <FiClock />
                      <span>Less Than 15 Days</span>
                    </div>
                    <div className={styles.tierDetails}>
                      <span className={`${styles.refundAmount} ${styles.noRefund}`}>No Refund</span>
                      <ul>
                        <li>No refund of deposit amount</li>
                        <li>Date can be transferred (subject to availability)</li>
                        <li>Transfer fee of ₹2,000 applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rescheduling Policy */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <FiRefreshCw className={styles.cardIcon} />
                <h2>Rescheduling Policy</h2>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.reschedulingOptions}>
                  <div className={styles.option}>
                    <h3><FiCalendar /> Free Rescheduling</h3>
                    <ul>
                      <li>Available for changes made 15+ days before event</li>
                      <li>Subject to photographer availability</li>
                      <li>One free rescheduling per booking</li>
                      <li>Must be within 6 months of original date</li>
                    </ul>
                  </div>

                  <div className={styles.option}>
                    <h3><FiDollarSign /> Paid Rescheduling</h3>
                    <ul>
                      <li>₹2,000 fee for changes within 15 days</li>
                      <li>₹5,000 fee for changes within 7 days</li>
                      <li>Subject to photographer availability</li>
                      <li>Peak season dates may have additional charges</li>
                    </ul>
                  </div>

                  <div className={styles.option}>
                    <h3><FiAlertTriangle /> Emergency Rescheduling</h3>
                    <ul>
                      <li>Medical emergencies handled case-by-case</li>
                      <li>Natural disasters and government restrictions</li>
                      <li>Family emergencies (documentation required)</li>
                      <li>No additional fees for genuine emergencies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weather Policy */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <FiAlertTriangle className={styles.cardIcon} />
                <h2>Weather & Force Majeure</h2>
              </div>
              <div className={styles.cardContent}>
                <h3>Weather Conditions</h3>
                <ul>
                  <li>Extreme weather conditions (heavy rain, storms)</li>
                  <li>Unsafe conditions for outdoor photography</li>
                  <li>Free rescheduling within 30 days</li>
                  <li>Indoor backup options discussed in advance</li>
                </ul>

                <h3>Force Majeure Events</h3>
                <ul>
                  <li>Natural disasters (earthquakes, floods)</li>
                  <li>Government restrictions or lockdowns</li>
                  <li>Pandemics or health emergencies</li>
                  <li>Full refund or complimentary rescheduling</li>
                </ul>

                <h3>Photographer Unavailability</h3>
                <ul>
                  <li>Medical emergencies affecting assigned photographer</li>
                  <li>Qualified replacement photographer provided</li>
                  <li>If replacement unavailable, full refund offered</li>
                  <li>Quality guarantee maintained with replacement</li>
                </ul>
              </div>
            </motion.div>

            {/* Studio Cancellation */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.cardHeader}>
                <FiCalendar className={styles.cardIcon} />
                <h2>Studio Rental Cancellation</h2>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.studioPolicy}>
                  <div className={styles.timeSlots}>
                    <h3>Hourly Bookings</h3>
                    <ul>
                      <li><strong>24+ hours notice:</strong> Full refund</li>
                      <li><strong>12-24 hours notice:</strong> 50% refund</li>
                      <li><strong>Less than 12 hours:</strong> No refund</li>
                      <li><strong>No-show:</strong> No refund</li>
                    </ul>
                  </div>

                  <div className={styles.timeSlots}>
                    <h3>Half/Full Day Bookings</h3>
                    <ul>
                      <li><strong>48+ hours notice:</strong> Full refund</li>
                      <li><strong>24-48 hours notice:</strong> 75% refund</li>
                      <li><strong>Less than 24 hours:</strong> 25% refund</li>
                      <li><strong>Same day:</strong> No refund</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Refund Process */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <FiDollarSign className={styles.cardIcon} />
                <h2>Refund Process</h2>
              </div>
              <div className={styles.cardContent}>
                <h3>How to Request Refund</h3>
                <ol>
                  <li>Email cancellation request to <strong>cancellations@evarastudios.in</strong></li>
                  <li>Include booking reference number and reason</li>
                  <li>Provide bank account details for refund</li>
                  <li>Receive confirmation within 24 hours</li>
                </ol>

                <h3>Processing Timeline</h3>
                <ul>
                  <li><strong>Bank Transfer:</strong> 7-10 business days</li>
                  <li><strong>UPI Refund:</strong> 3-5 business days</li>
                  <li><strong>Cash Payment:</strong> Immediate (office visit required)</li>
                  <li><strong>Cheque:</strong> 15-20 business days</li>
                </ul>

                <h3>Required Documents</h3>
                <ul>
                  <li>Original booking confirmation</li>
                  <li>Government ID proof</li>
                  <li>Bank account details</li>
                  <li>Medical certificate (for medical emergencies)</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className={styles.policyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.cardHeader}>
                <FiCalendar className={styles.cardIcon} />
                <h2>Contact for Cancellations</h2>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.contactDetails}>
                  <div className={styles.contactMethod}>
                    <h3>Email</h3>
                    <p>cancellations@evarastudios.in</p>
                    <small>Response within 24 hours</small>
                  </div>

                  <div className={styles.contactMethod}>
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                    <small>Mon-Sun: 9:00 AM - 9:00 PM</small>
                  </div>

                  <div className={styles.contactMethod}>
                    <h3>WhatsApp</h3>
                    <p>+91 98765 43210</p>
                    <small>Quick responses during business hours</small>
                  </div>

                  <div className={styles.contactMethod}>
                    <h3>Office Visit</h3>
                    <p>123 MG Road, Bangalore</p>
                    <small>By appointment only</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CancellationPage