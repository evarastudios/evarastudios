'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiEye, 
  FiHeart, 
  FiFilter, 
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiShare2,
  FiCalendar,
  FiMapPin,
  FiUser
} from 'react-icons/fi'
import styles from './Portfolio.module.css'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  gallery?: string[]
  client?: string
  date?: string
  location?: string
  likes: number
  views: number
  description: string
  tags: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Dreamy Garden Wedding',
    category: 'wedding',
    image: '/images/portfolio/wedding-1.jpg',
    gallery: [
      '/images/portfolio/wedding-1-1.jpg',
      '/images/portfolio/wedding-1-2.jpg',
      '/images/portfolio/wedding-1-3.jpg',
      '/images/portfolio/wedding-1-4.jpg',
      '/images/portfolio/wedding-1-5.jpg'
    ],
    client: 'Priya & Arjun',
    date: '2024-02-14',
    location: 'Palace Grounds, Bangalore',
    likes: 234,
    views: 1250,
    description: 'A magical garden wedding celebration filled with love, laughter, and beautiful moments under the stars.',
    tags: ['outdoor', 'garden', 'romantic', 'traditional']
  },
  {
    id: 2,
    title: 'Tech Summit 2024',
    category: 'corporate',
    image: '/images/portfolio/corporate-1.jpg',
    gallery: [
      '/images/portfolio/corporate-1-1.jpg',
      '/images/portfolio/corporate-1-2.jpg',
      '/images/portfolio/corporate-1-3.jpg'
    ],
    client: 'TechCorp Solutions',
    date: '2024-01-20',
    location: 'UB City Mall, Bangalore',
    likes: 89,
    views: 567,
    description: 'Corporate event coverage for the annual tech summit featuring industry leaders and innovative presentations.',
    tags: ['business', 'conference', 'professional', 'speakers']
  },
  {
    id: 3,
    title: 'Family Moments',
    category: 'portrait',
    image: '/images/portfolio/portrait-1.jpg',
    gallery: [
      '/images/portfolio/portrait-1-1.jpg',
      '/images/portfolio/portrait-1-2.jpg',
      '/images/portfolio/portrait-1-3.jpg'
    ],
    client: 'The Sharma Family',
    date: '2024-03-05',
    location: 'Cubbon Park, Bangalore',
    likes: 156,
    views: 892,
    description: 'Beautiful family portrait session capturing three generations of love and togetherness.',
    tags: ['family', 'outdoor', 'candid', 'children']
  },
  {
    id: 4,
    title: 'Luxury Watch Collection',
    category: 'product',
    image: '/images/portfolio/product-1.jpg',
    gallery: [
      '/images/portfolio/product-1-1.jpg',
      '/images/portfolio/product-1-2.jpg',
      '/images/portfolio/product-1-3.jpg'
    ],
    client: 'TimeZone Watches',
    date: '2024-02-28',
    location: 'Evara Studios',
    likes: 67,
    views: 423,
    description: 'High-end product photography showcasing luxury timepieces with dramatic lighting and precise detail.',
    tags: ['luxury', 'studio', 'detail', 'commercial']
  },
  {
    id: 5,
    title: 'Birthday Celebration',
    category: 'event',
    image: '/images/portfolio/event-1.jpg',
    gallery: [
      '/images/portfolio/event-1-1.jpg',
      '/images/portfolio/event-1-2.jpg',
      '/images/portfolio/event-1-3.jpg'
    ],
    client: 'The Patel Family',
    date: '2024-03-15',
    location: 'Private Residence',
    likes: 112,
    views: 678,
    description: 'Joyful 50th birthday celebration with family and friends, capturing candid moments of happiness.',
    tags: ['celebration', 'family', 'indoor', 'party']
  },
  {
    id: 6,
    title: 'Fashion Forward',
    category: 'fashion',
    image: '/images/portfolio/fashion-1.jpg',
    gallery: [
      '/images/portfolio/fashion-1-1.jpg',
      '/images/portfolio/fashion-1-2.jpg',
      '/images/portfolio/fashion-1-3.jpg'
    ],
    client: 'Style Studio',
    date: '2024-01-10',
    location: 'Urban Loft',
    likes: 298,
    views: 1456,
    description: 'Contemporary fashion shoot featuring bold designs and creative lighting in an urban setting.',
    tags: ['fashion', 'creative', 'urban', 'contemporary']
  },
  {
    id: 7,
    title: 'Royal Palace Wedding',
    category: 'wedding',
    image: '/images/portfolio/wedding-2.jpg',
    gallery: [
      '/images/portfolio/wedding-2-1.jpg',
      '/images/portfolio/wedding-2-2.jpg',
      '/images/portfolio/wedding-2-3.jpg'
    ],
    client: 'Meera & Vikram',
    date: '2024-01-28',
    location: 'Mysore Palace',
    likes: 345,
    views: 1890,
    description: 'Regal wedding ceremony in a historic palace setting with traditional customs and royal grandeur.',
    tags: ['traditional', 'palace', 'royal', 'heritage']
  },
  {
    id: 8,
    title: 'CEO Portrait Session',
    category: 'corporate',
    image: '/images/portfolio/corporate-2.jpg',
    gallery: [
      '/images/portfolio/corporate-2-1.jpg',
      '/images/portfolio/corporate-2-2.jpg'
    ],
    client: 'InnovateCorp',
    date: '2024-02-05',
    location: 'Corporate Office',
    likes: 78,
    views: 432,
    description: 'Professional executive portraits for annual report and company branding materials.',
    tags: ['executive', 'professional', 'corporate', 'branding']
  },
  {
    id: 9,
    title: 'Maternity Glow',
    category: 'portrait',
    image: '/images/portfolio/portrait-2.jpg',
    gallery: [
      '/images/portfolio/portrait-2-1.jpg',
      '/images/portfolio/portrait-2-2.jpg',
      '/images/portfolio/portrait-2-3.jpg'
    ],
    client: 'Anjali & Rohit',
    date: '2024-03-20',
    location: 'Lalbagh Gardens',
    likes: 189,
    views: 756,
    description: 'Beautiful maternity photoshoot celebrating the journey to parenthood with natural outdoor lighting.',
    tags: ['maternity', 'outdoor', 'natural', 'couple']
  },
  {
    id: 10,
    title: 'Artisanal Jewelry',
    category: 'product',
    image: '/images/portfolio/product-2.jpg',
    gallery: [
      '/images/portfolio/product-2-1.jpg',
      '/images/portfolio/product-2-2.jpg'
    ],
    client: 'Golden Heritage',
    date: '2024-02-12',
    location: 'Evara Studios',
    likes: 92,
    views: 512,
    description: 'Intricate jewelry photography showcasing traditional craftsmanship and precious metals.',
    tags: ['jewelry', 'traditional', 'craftsmanship', 'luxury']
  },
  {
    id: 11,
    title: 'Music Festival',
    category: 'event',
    image: '/images/portfolio/event-2.jpg',
    gallery: [
      '/images/portfolio/event-2-1.jpg',
      '/images/portfolio/event-2-2.jpg',
      '/images/portfolio/event-2-3.jpg'
    ],
    client: 'Bangalore Music Society',
    date: '2024-03-01',
    location: 'Open Air Theatre',
    likes: 167,
    views: 934,
    description: 'Energetic coverage of live music festival capturing performers and audience in concert atmosphere.',
    tags: ['music', 'festival', 'concert', 'energy']
  },
  {
    id: 12,
    title: 'Avant-Garde Editorial',
    category: 'fashion',
    image: '/images/portfolio/fashion-2.jpg',
    gallery: [
      '/images/portfolio/fashion-2-1.jpg',
      '/images/portfolio/fashion-2-2.jpg'
    ],
    client: 'Vogue India',
    date: '2024-01-15',
    location: 'Industrial Studio',
    likes: 412,
    views: 2103,
    description: 'High-fashion editorial shoot with avant-garde styling and dramatic industrial backdrop.',
    tags: ['editorial', 'avant-garde', 'high-fashion', 'dramatic']
  }
]

const categories = ['all', 'wedding', 'corporate', 'portrait', 'product', 'event', 'fashion']

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const openLightbox = (item: PortfolioItem, imageIndex: number = 0) => {
    setSelectedItem(item)
    setCurrentImageIndex(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedItem && selectedItem.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.gallery!.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedItem && selectedItem.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.gallery!.length - 1 : prev - 1
      )
    }
  }

  const getCurrentImage = () => {
    if (!selectedItem) return ''
    if (selectedItem.gallery && selectedItem.gallery.length > 0) {
      return selectedItem.gallery[currentImageIndex]
    }
    return selectedItem.image
  }

  return (
    <div className={styles.portfolioPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.heroLabel} script-font`}>Our Portfolio</span>
            <h1 className={styles.heroTitle}>
              Showcasing Our
              <span className="text-gradient"> Creative Excellence</span>
            </h1>
            <p className={styles.heroDescription}>
              Explore our diverse collection of photography work spanning weddings, 
              corporate events, portraits, and artistic collaborations. Each project 
              tells a unique story through our lens.
            </p>
            <div className={styles.portfolioStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{portfolioItems.length}</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{categories.length - 1}</span>
                <span className={styles.statLabel}>Categories</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Photos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Controls */}
      <section className={styles.controls}>
        <div className="container">
          <div className={styles.controlsContent}>
            {/* Category Filters */}
            <div className={styles.filterTabs}>
              <FiFilter className={styles.filterIcon} />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`${styles.filterTab} ${
                    activeCategory === category ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className={styles.viewControls}>
              <span>View:</span>
              <button
                className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
              <button
                className={`${styles.viewButton} ${viewMode === 'masonry' ? styles.active : ''}`}
                onClick={() => setViewMode('masonry')}
              >
                Masonry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <motion.div 
            className={`${styles.portfolioGrid} ${styles[viewMode]}`}
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
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => openLightbox(item)}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={viewMode === 'masonry' ? Math.random() * 200 + 250 : 300}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        <div className={styles.itemCategory}>
                          {item.category}
                        </div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDescription}>{item.description}</p>
                        <div className={styles.itemMeta}>
                          <span><FiEye size={14} /> {item.views}</span>
                          <span><FiHeart size={14} /> {item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h3>{item.title}</h3>
                      <span className={styles.category}>{item.category}</span>
                    </div>
                    {item.client && (
                      <div className={styles.cardMeta}>
                        <FiUser size={14} />
                        <span>{item.client}</span>
                      </div>
                    )}
                    <div className={styles.cardTags}>
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div 
              className={styles.emptyState}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className={styles.closeButton} onClick={closeLightbox}>
                <FiX size={24} />
              </button>

              {/* Image Navigation */}
              {selectedItem.gallery && selectedItem.gallery.length > 1 && (
                <>
                  <button className={styles.navButton} onClick={prevImage}>
                    <FiChevronLeft size={24} />
                  </button>
                  <button className={`${styles.navButton} ${styles.next}`} onClick={nextImage}>
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Main Image */}
              <div className={styles.lightboxImage}>
                <Image
                  src={getCurrentImage()}
                  alt={selectedItem.title}
                  width={1200}
                  height={800}
                  className={styles.mainImage}
                />
              </div>

              {/* Image Info */}
              <div className={styles.lightboxInfo}>
                <div className={styles.imageDetails}>
                  <h2>{selectedItem.title}</h2>
                  <p>{selectedItem.description}</p>
                  
                  <div className={styles.projectMeta}>
                    {selectedItem.client && (
                      <div className={styles.metaItem}>
                        <FiUser size={16} />
                        <span>Client: {selectedItem.client}</span>
                      </div>
                    )}
                    {selectedItem.date && (
                      <div className={styles.metaItem}>
                        <FiCalendar size={16} />
                        <span>Date: {new Date(selectedItem.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {selectedItem.location && (
                      <div className={styles.metaItem}>
                        <FiMapPin size={16} />
                        <span>Location: {selectedItem.location}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.projectTags}>
                    {selectedItem.tags.map((tag, index) => (
                      <span key={index} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.lightboxActions}>
                  <button className={styles.actionButton}>
                    <FiHeart size={16} />
                    <span>{selectedItem.likes}</span>
                  </button>
                  <button className={styles.actionButton}>
                    <FiShare2 size={16} />
                    <span>Share</span>
                  </button>
                  <button className={styles.actionButton}>
                    <FiDownload size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              {selectedItem.gallery && selectedItem.gallery.length > 1 && (
                <div className={styles.thumbnails}>
                  {selectedItem.gallery.map((image, index) => (
                    <button
                      key={index}
                      className={`${styles.thumbnail} ${
                        index === currentImageIndex ? styles.active : ''
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${selectedItem.title} ${index + 1}`}
                        width={80}
                        height={60}
                        className={styles.thumbImage}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Create Your Own Story?</h2>
            <p>
              Let's work together to capture your special moments with the same 
              passion and creativity you see in our portfolio.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage