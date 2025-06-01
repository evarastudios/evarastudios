// src/app/booking-policy/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiCreditCard, FiAlertTriangle } from 'react-icons/fi'
import styles from './LegalPages.module.css'

const BookingPolicyPage: React.FC = () => {
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
            <FiCalendar className={styles.heroIcon} />
            <h1>Booking Policy</h1>
            <p>Important information about booking our photography services</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.section}>
              <h2><FiCalendar /> Booking Process</h2>
              <ol>
                <li><strong>Initial Consultation:</strong> Contact us to discuss your requirements and receive a custom quote</li>
                <li><strong>Contract Review:</strong> Review and sign the photography service agreement</li>
                <li><strong>Deposit Payment:</strong> Pay 30% deposit to secure your booking date</li>
                <li><strong>Final Confirmation:</strong> Receive booking confirmation and photographer assignment</li>
                <li><strong>Pre-Event Planning:</strong> Detailed planning session 1-2 weeks before your event</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2><FiCreditCard /> Payment Terms</h2>
              <h3>Deposit Requirements</h3>
              <ul>
                <li>30% deposit required to secure booking date</li>
                <li>Deposit is non-refundable but can be transferred to a new date (conditions apply)</li>
                <li>Booking is not confirmed until deposit is received</li>
              </ul>

              <h3>Final Payment</h3>
              <ul>
                <li>Remaining balance due 7 days before event date</li>
                <li>Late payment may result in service cancellation</li>
                <li>Additional services can be paid on the day of service</li>
              </ul>

              <h3>Accepted Payment Methods</h3>
              <ul>
                <li>Bank transfer (NEFT/RTGS) - preferred method</li>
                <li>UPI payments (Google Pay, PhonePe, Paytm)</li>
                <li>Cash payments (for amounts under ₹10,000)</li>
                <li>Cheques (with prior approval, add 3 days for clearance)</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2><FiClock /> Scheduling and Availability</h2>
              <h3>Booking Timeline</h3>
              <ul>
                <li><strong>Wedding Photography:</strong> Book 2-3 months in advance</li>
                <li><strong>Corporate Events:</strong> Book 2-4 weeks in advance</li>
                <li><strong>Portrait Sessions:</strong> Book 1-2 weeks in advance</li>
                <li><strong>Studio Rental:</strong> Book 3-7 days in advance</li>
              </ul>

              <h3>Peak Season Considerations</h3>
              <ul>
                <li>Wedding season (October-March) requires earlier booking</li>
                <li>Festival dates and weekends have higher demand</li>
                <li>Peak season pricing may apply</li>
                <li>Flexibility with dates helps secure better rates</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2><FiAlertTriangle /> Important Policies</h2>
              <h3>Rescheduling</h3>
              <ul>
                <li>Free rescheduling if done 15+ days before event</li>
                <li>Subject to photographer availability</li>
                <li>Rescheduling fee may apply for short notice changes</li>
                <li>Weather-related rescheduling is complimentary</li>
              </ul>

              <h3>Event Day Policies</h3>
              <ul>
                <li>Photographer arrival time confirmed 48 hours prior</li>
                <li>Timeline changes on event day may incur additional fees</li>
                <li>Meal provision required for events over 6 hours</li>
                <li>Safe parking space must be provided for equipment</li>
              </ul>

              <h3>Travel Requirements</h3>
              <ul>
                <li>Local events within 25km of Bangalore city center included</li>
                <li>Travel charges apply for locations beyond 25km</li>
                <li>Overnight stay required for outstation events</li>
                <li>Travel and accommodation costs are additional</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Special Circumstances</h2>
              <h3>Force Majeure</h3>
              <p>In case of events beyond our control (natural disasters, government restrictions, etc.), we will work with you to reschedule or provide alternative solutions.</p>

              <h3>Equipment Failure</h3>
              <p>We carry backup equipment for all shoots. In the rare case of multiple equipment failures, we will provide partial refund based on coverage achieved.</p>

              <h3>Photographer Illness</h3>
              <p>We maintain a network of qualified backup photographers. If your assigned photographer is unavailable due to illness, we will provide a suitable replacement.</p>
            </div>

            <div className={styles.section}>
              <h2>Contact for Bookings</h2>
              <div className={styles.contactInfo}>
                <p><strong>Booking Email:</strong> bookings@evarastudios.in</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                <p><strong>Office Hours:</strong> Monday-Sunday, 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookingPolicyPage