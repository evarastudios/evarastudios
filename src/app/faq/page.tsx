// src/app/faq/page.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHelpCircle, FiChevronDown, FiSearch, FiCamera, FiDollarSign, FiCalendar, FiSettings } from 'react-icons/fi'
import styles from './FAQ.module.css'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking 2-4 weeks in advance for regular sessions and 2-3 months for weddings and large events. However, we can accommodate last-minute bookings based on availability.',
    category: 'booking'
  },
  {
    id: 2,
    question: 'What is included in your wedding photography packages?',
    answer: 'Our wedding packages include pre-wedding consultation, engagement session, full ceremony and reception coverage, 2-3 professional photographers, same-day edited highlights, 500-1000+ edited photos, online gallery, and USB delivery.',
    category: 'services'
  },
  {
    id: 3,
    question: 'Do you provide raw/unedited photos?',
    answer: 'We typically provide professionally edited photos. Raw files can be provided upon request for an additional fee, as they require special handling and storage.',
    category: 'services'
  },
  {
    id: 4,
    question: 'What are your payment terms?',
    answer: 'We require a 30% deposit to secure your booking date, with the remaining balance due 7 days before your event. We accept bank transfers, UPI payments, and cash for smaller amounts.',
    category: 'pricing'
  },
  {
    id: 5,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations 30+ days before the event receive a 50% refund, 15-30 days receive 25% refund, and less than 15 days receive no refund. Emergency situations are handled case-by-case.',
    category: 'booking'
  },
  {
    id: 6,
    question: 'Do you travel for destination weddings?',
    answer: 'Yes, we love destination weddings! Travel costs and accommodation are additional to the photography package. We recommend discussing destination requirements at least 2 months in advance.',
    category: 'services'
  },
  {
    id: 7,
    question: 'How long does it take to receive edited photos?',
    answer: 'We provide same-day highlights for urgent needs. Standard delivery is 7-14 days for events and 3-5 days for studio sessions. Wedding photos typically take 3-4 weeks.',
    category: 'delivery'
  },
  {
    id: 8,
    question: 'Can we customize our photography package?',
    answer: 'Absolutely! We understand every client has unique needs. We\'re happy to create custom packages that fit your specific requirements and budget.',
    category: 'pricing'
  },
  {
    id: 9,
    question: 'What happens if the weather affects our outdoor shoot?',
    answer: 'We monitor weather conditions closely and will work with you to reschedule if necessary. We also have backup indoor locations and covered areas for emergency situations.',
    category: 'booking'
  },
  {
    id: 10,
    question: 'Do you offer videography services?',
    answer: 'Yes, we offer video services including wedding cinematography, event coverage, and promotional videos. Video services can be added to any photography package.',
    category: 'services'
  },
  {
    id: 11,
    question: 'What equipment do you use?',
    answer: 'We use professional DSLR cameras (Canon 5D Mark IV, Sony A7R IV), multiple lenses, professional lighting equipment, and always carry backup gear to ensure uninterrupted service.',
    category: 'technical'
  },
  {
    id: 12,
    question: 'Can family members access our photos?',
    answer: 'Yes, our online galleries can be shared with family and friends. You can provide them with the gallery link and password for easy access and downloading.',
    category: 'delivery'
  },
  {
    id: 13,
    question: 'Do you offer photo albums and prints?',
    answer: 'Yes, we offer custom photo album design and premium printing services. Albums start from ₹5,000 and can be added to any package.',
    category: 'services'
  },
  {
    id: 14,
    question: 'What if our photographer is sick on the event day?',
    answer: 'We have a network of professional backup photographers. In the unlikely event of illness, we ensure a qualified photographer covers your event without compromising quality.',
    category: 'technical'
  },
  {
    id: 15,
    question: 'Do you offer engagement sessions?',
    answer: 'Yes, engagement sessions are included in our wedding packages and can be booked separately. They\'re a great way to get comfortable with our photography style.',
    category: 'services'
  }
]

const categories = [
  { key: 'all', label: 'All Questions', icon: FiHelpCircle },
  { key: 'services', label: 'Services', icon: FiCamera },
  { key: 'booking', label: 'Booking', icon: FiCalendar },
  { key: 'pricing', label: 'Pricing', icon: FiDollarSign },
  { key: 'technical', label: 'Technical', icon: FiSettings },
  { key: 'delivery', label: 'Delivery', icon: FiSearch }
]

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className={styles.faqPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiHelpCircle className={styles.heroIcon} />
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our photography services</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.faqContent}>
        <div className="container">
          {/* Search Bar */}
          <motion.div 
            className={styles.searchSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.searchBar}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            className={styles.categoryFilters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category.key}
                className={`${styles.categoryButton} ${
                  activeCategory === category.key ? styles.active : ''
                }`}
                onClick={() => setActiveCategory(category.key)}
              >
                <category.icon size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className={styles.faqList}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(faq.id)}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {filteredFAQs.length === 0 && (
            <motion.div 
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No questions found matching your search criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all')}}
                className="btn btn-secondary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div 
            className={styles.contactCTA}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? We're here to help!</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="tel:+919876543210" className="btn btn-secondary">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage