// src/app/privacy-policy/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiLock, FiEye, FiUserCheck } from 'react-icons/fi'
import styles from './LegalPages.module.css'

const PrivacyPolicyPage: React.FC = () => {
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
            <FiShield className={styles.heroIcon} />
            <h1>Privacy Policy</h1>
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
                <li><a href="#information-we-collect">Information We Collect</a></li>
                <li><a href="#how-we-use">How We Use Information</a></li>
                <li><a href="#information-sharing">Information Sharing</a></li>
                <li><a href="#data-security">Data Security</a></li>
                <li><a href="#your-rights">Your Rights</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
              </ul>
            </aside>

            <main className={styles.mainContent}>
              <div className={styles.section} id="information-we-collect">
                <h2><FiEye /> Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul>
                  <li>Fill out our contact forms or booking requests</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email, phone, or social media</li>
                  <li>Book our photography services</li>
                </ul>
                
                <h3>Types of Information</h3>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, phone number, address</li>
                  <li><strong>Event Details:</strong> Event dates, locations, special requirements</li>
                  <li><strong>Payment Information:</strong> Billing details (processed securely through third-party providers)</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                </ul>
              </div>

              <div className={styles.section} id="how-we-use">
                <h2><FiUserCheck /> How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our photography services</li>
                  <li>Communicate with you about your bookings and inquiries</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Process payments and manage our business operations</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className={styles.section} id="information-sharing">
                <h2>Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you have given explicit consent</li>
                </ul>
              </div>

              <div className={styles.section} id="data-security">
                <h2><FiLock /> Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul>
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and regular security updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and assessments</li>
                </ul>
              </div>

              <div className={styles.section} id="your-rights">
                <h2>Your Rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                </ul>
              </div>

              <div className={styles.section} id="cookies">
                <h2>Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our website functionality</li>
                </ul>
              </div>

              <div className={styles.section} id="contact-us">
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className={styles.contactInfo}>
                  <p><strong>Email:</strong> privacy@evarastudios.in</p>
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

export default PrivacyPolicyPage