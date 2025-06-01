// src/components/sections/Portfolio.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiHeart, FiArrowRight, FiFilter } from 'react-icons/fi'
import styles from './Portfolio.module.css'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  likes: number
  views: number
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Dream Wedding Ceremony',
    category: 'wedding',
    image: '/images/portfolio/wedding-1.jpg',
    likes: 234,
    views: 1250,
    description: 'Elegant wedding photography capturing intimate moments'
  },
  {
    id: 2,
    title: 'Corporate Annual Meet',
    category: 'corporate',
    image: '/images/portfolio/corporate-1.jpg',
    likes: 89,
    views: 567,
    description: 'Professional corporate event documentation'
  },
  {
    id: 3,
    title: 'Family Portrait Session',
    category: 'portrait',
    image: '/images/portfolio/portrait-1.jpg',
    likes: 156,
    views: 892,
    description: 'Beautiful family portraits in natural lighting'
  },
  {
    id: 4,
    title: 'Product Showcase',
    category: 'product',
    image: '/images/portfolio/product-1.jpg',
    likes: 67,
    views: 423,
    description: 'High-end product photography for e-commerce'
  },
  {
    id: 5,
    title: 'Birthday Celebration',
    category: 'event',
    image: '/images/portfolio/event-1.jpg',
    likes: 112,
    views: 678,
    description: 'Joyful birthday party moments captured'
  },
  {
    id: 6,
    title: 'Fashion Photoshoot',
    category: 'fashion',
    image: '/images/portfolio/fashion-1.jpg',
    likes: 298,
    views: 1456,
    description: 'Creative fashion photography with dramatic lighting'
  }
]

const categories = ['all', 'wedding', 'corporate', 'portrait', 'product', 'event', 'fashion']

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section className={`${styles.portfolio} section`} id="portfolio">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`${styles.sectionLabel} script-font`}>Our Portfolio</span>
          <h2 className={styles.sectionTitle}>
            Showcasing Our
            <span className="text-gradient"> Creative Excellence</span>
          </h2>
          <p className={styles.sectionDescription}>
            Explore our diverse collection of photography work spanning weddings, 
            corporate events, portraits, and artistic collaborations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className={styles.filterTabs}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FiFilter className={styles.filterIcon} />
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterTab} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className={styles.portfolioGrid}
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.portfolioCard}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                      <div className={styles.itemStats}>
                        <span><FiHeart size={16} /> {item.likes}</span>
                        <span><FiEye size={16} /> {item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className={styles.portfolioActions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/portfolio" className="btn btn-primary">
            View Full Portfolio
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Modal for portfolio item details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={800}
                height={600}
                className={styles.modalImage}
              />
              <div className={styles.modalInfo}>
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.description}</p>
                <div className={styles.modalStats}>
                  <span><FiHeart /> {selectedItem.likes} likes</span>
                  <span><FiEye /> {selectedItem.views} views</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio