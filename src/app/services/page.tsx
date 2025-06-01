'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiCamera, 
  FiHeart, 
  FiBriefcase, 
  FiUsers,
  FiHome,
  FiStar,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiPhone,
  FiMail,
  FiCalendar
} from 'react-icons/fi'
import styles from './Services.module.css'

const services = [
  {
    id: 1,
    name: 'Wedding Photography',
    slug: 'wedding-photography',
    shortDescription: 'Capturing your most precious day with elegance and artistry',
    description: 'Your wedding day is one of the most important days of your life, and we understand the significance of every moment. Our wedding photography service combines traditional elegance with contemporary artistry to create a timeless collection of memories. From the intimate getting-ready moments to the grand celebration, we capture every emotion, every smile, and every tear of joy.',
    startingPrice: '₹50,000',
    duration: '8-12 hours',
    category: 'wedding',
    popular: true,
    image: '/images/services/wedding-photography-detail.jpg',
    features: [
      'Pre-wedding consultation and planning',
      'Engagement session included',
      'Full ceremony and reception coverage',
      '2-3 professional photographers',
      'Same-day edited highlights',
      '500-1000+ high-resolution edited photos',
      'Online gallery for family sharing',
      'USB drive with all photos',
      'Print release for personal use'
    ],
    deliverables: [
      'Digital photo gallery within 7 days',
      'Edited photos within 3-4 weeks',
      'Custom wedding album (optional)',
      'Print-ready files',
      'Social media optimized images'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your vision, preferences, and wedding timeline'
      },
      {
        step: 2,
        title: 'Engagement Session',
        description: 'Complimentary pre-wedding shoot to get comfortable with our style'
      },
      {
        step: 3,
        title: 'Wedding Day Coverage',
        description: 'Full day photography from preparation to celebration'
      },
      {
        step: 4,
        title: 'Post-Production',
        description: 'Professional editing and retouching of your photos'
      },
      {
        step: 5,
        title: 'Delivery',
        description: 'Online gallery and final edited photos delivered'
      }
    ],
    packages: [
      {
        name: 'Essential',
        price: '₹50,000',
        duration: '8 hours',
        photographers: 1,
        photos: '300-500',
        features: ['Basic editing', 'Online gallery', 'USB delivery']
      },
      {
        name: 'Premium',
        price: '₹75,000',
        duration: '10 hours',
        photographers: 2,
        photos: '500-800',
        features: ['Advanced editing', 'Same-day highlights', 'Engagement session', 'Print release']
      },
      {
        name: 'Luxury',
        price: '₹1,00,000',
        duration: '12 hours',
        photographers: 3,
        photos: '800-1200',
        features: ['Premium editing', 'Custom album', 'Canvas prints', 'Video highlights']
      }
    ]
  },
  {
    id: 2,
    name: 'Event Photography',
    slug: 'event-photography',
    shortDescription: 'Professional coverage for corporate events and celebrations',
    description: 'Whether it\'s a corporate function, birthday celebration, anniversary party, or any special occasion, our event photography service ensures every important moment is beautifully documented. We blend into your event seamlessly while capturing candid moments, formal group photos, and all the special details that make your event unique.',
    startingPrice: '₹15,000',
    duration: '4-8 hours',
    category: 'event',
    popular: false,
    image: '/images/services/event-photography-detail.jpg',
    features: [
      'Pre-event consultation',
      'Professional event coverage',
      'Candid and posed photography',
      'Group photos and portraits',
      'Detail shots of decor and setup',
      'Same-day edited highlights',
      '200-500+ edited photos',
      'Online gallery access',
      'Quick turnaround time'
    ],
    deliverables: [
      'Event highlights within 24 hours',
      'Full edited gallery within 1 week',
      'High-resolution download',
      'Social media ready images',
      'Print-ready files'
    ]
  },
  {
    id: 3,
    name: 'Corporate Photography',
    slug: 'corporate-photography',
    shortDescription: 'Professional business photography for companies and executives',
    description: 'Elevate your business image with our professional corporate photography services. From executive headshots to company events, product launches to team photos, we help businesses communicate their brand story through powerful visual content. Our corporate photography is tailored to reflect your company\'s professionalism and values.',
    startingPrice: '₹8,000',
    duration: '2-6 hours',
    category: 'corporate',
    popular: false,
    image: '/images/services/corporate-photography-detail.jpg',
    features: [
      'Executive headshots',
      'Team photography',
      'Office environment shots',
      'Corporate event coverage',
      'Product photography',
      'Professional lighting setup',
      'Multiple outfit changes',
      'Same-day previews',
      'LinkedIn optimized photos'
    ],
    deliverables: [
      'Professional headshots within 48 hours',
      'Edited photos within 3-5 days',
      'Multiple format options',
      'Web and print ready files',
      'Professional retouching included'
    ]
  },
  {
    id: 4,
    name: 'Portrait Photography',
    slug: 'portrait-photography',
    shortDescription: 'Beautiful individual and family portraits that capture personality',
    description: 'Our portrait photography sessions are designed to capture the essence of who you are. Whether it\'s individual portraits, family photos, or milestone celebrations, we create a comfortable environment where your personality shines through. Every portrait session is customized to reflect your style and preferences.',
    startingPrice: '₹5,000',
    duration: '1-2 hours',
    category: 'portrait',
    popular: false,
    image: '/images/services/portrait-photography-detail.jpg',
    features: [
      'Individual and family portraits',
      'Studio or outdoor locations',
      'Professional lighting',
      'Multiple pose variations',
      'Outfit change options',
      'Creative compositions',
      '50-100+ edited photos',
      'Print recommendations',
      'Personal consultation'
    ],
    deliverables: [
      'Portrait previews within 24 hours',
      'Edited photos within 3-5 days',
      'High-resolution files',
      'Print-ready formats',
      'Professional retouching'
    ]
  },
  {
    id: 5,
    name: 'Product Photography',
    slug: 'product-photography',
    shortDescription: 'High-quality product images for e-commerce and marketing',
    description: 'Make your products stand out with our professional product photography. We create clean, compelling images that showcase your products in the best light. From e-commerce white backgrounds to lifestyle shots, our product photography helps drive sales and builds brand credibility.',
    startingPrice: '₹500',
    duration: 'Per product',
    category: 'product',
    popular: false,
    image: '/images/services/product-photography-detail.jpg',
    features: [
      'White background photography',
      'Lifestyle product shots',
      'Multiple angle coverage',
      'Detail and texture shots',
      'Professional lighting setup',
      'Color accurate images',
      'Fast turnaround',
      'Bulk pricing available',
      'E-commerce ready formats'
    ],
    deliverables: [
      'Edited photos within 1-2 days',
      'Multiple format options',
      'E-commerce specifications',
      'Color-corrected images',
      'Consistent styling'
    ]
  },
  {
    id: 6,
    name: 'Studio Rental',
    slug: 'studio-rental',
    shortDescription: 'Professional photography studio space with equipment',
    description: 'Rent our state-of-the-art photography studio for your creative projects. Our studio features professional lighting equipment, multiple backdrop options, and all the amenities you need for a successful photo shoot. Perfect for photographers, content creators, and businesses looking for a professional photography space.',
    startingPrice: '₹2,000',
    duration: 'Per hour',
    category: 'studio',
    popular: true,
    image: '/images/services/studio-rental-detail.jpg',
    features: [
      'Professional lighting equipment',
      'Multiple backdrop options',
      'Seamless paper backgrounds',
      'Props and accessories',
      'Makeup station available',
      'Changing rooms',
      'Free parking',
      'WiFi and refreshments',
      'Equipment assistance'
    ],
    deliverables: [
      'Full studio access',
      'Equipment usage included',
      'Technical support',
      'Flexible booking hours',
      'Additional equipment rentals'
    ]
  }
]

const additionalServices = [
  {
    name: 'Photo Editing & Retouching',
    description: 'Professional post-processing for your existing photos',
    icon: FiCamera,
    price: 'Starting ₹100/photo'
  },
  {
    name: 'Album Design & Printing',
    description: 'Custom photo albums and premium printing services',
    icon: FiHeart,
    price: 'Starting ₹5,000'
  },
  {
    name: 'Video Highlights',
    description: 'Short video compilations of your special moments',
    icon: FiUsers,
    price: 'Starting ₹10,000'
  },
  {
    name: 'Rush Delivery',
    description: 'Expedited editing and delivery for urgent needs',
    icon: FiClock,
    price: '50% additional charge'
  }
]

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 2-4 weeks in advance for regular sessions and 2-3 months for weddings. However, we can accommodate last-minute bookings based on availability.'
  },
  {
    question: 'What is included in the pricing?',
    answer: 'Our pricing includes the photography session, professional editing, and digital delivery. Specific inclusions vary by service and are detailed in each package.'
  },
  {
    question: 'Do you provide raw/unedited photos?',
    answer: 'We typically provide professionally edited photos. Raw files can be provided upon request for an additional fee, as they require special handling and storage.'
  },
  {
    question: 'Can we customize packages?',
    answer: 'Absolutely! We understand every client has unique needs. We\'re happy to create custom packages that fit your specific requirements and budget.'
  },
  {
    question: 'What happens if weather affects outdoor shoots?',
    answer: 'We monitor weather conditions closely and will work with you to reschedule if necessary. We also have backup indoor locations and covered areas for emergency situations.'
  },
  {
    question: 'Do you travel for destination events?',
    answer: 'Yes, we love destination events! Travel costs will be added to the package, and we recommend discussing destination requirements well in advance.'
  }
]

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0])
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.heroLabel} script-font`}>Our Services</span>
            <h1 className={styles.heroTitle}>
              Professional Photography
              <span className="text-gradient"> Services in Bangalore</span>
            </h1>
            <p className={styles.heroDescription}>
              From intimate portraits to grand celebrations, we offer comprehensive photography 
              services tailored to capture your most precious moments with artistic excellence.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <FiCamera size={24} />
                <span>6 Specialized Services</span>
              </div>
              <div className={styles.statItem}>
                <FiUsers size={24} />
                <span>500+ Happy Clients</span>
              </div>
              <div className={styles.statItem}>
                <FiStar size={24} />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${styles.servicesGrid} section`}>
        <div className="container">
          <div className={styles.servicesLayout}>
            {/* Services List */}
            <motion.div 
              className={styles.servicesList}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Choose a Service</h3>
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  className={`${styles.serviceItem} ${
                    selectedService.id === service.id ? styles.active : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.serviceIcon}>
                    {service.category === 'wedding' && <FiHeart size={20} />}
                    {service.category === 'event' && <FiUsers size={20} />}
                    {service.category === 'corporate' && <FiBriefcase size={20} />}
                    {service.category === 'portrait' && <FiCamera size={20} />}
                    {service.category === 'product' && <FiStar size={20} />}
                    {service.category === 'studio' && <FiHome size={20} />}
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4>{service.name}</h4>
                    <span className={styles.servicePrice}>{service.startingPrice}</span>
                    {service.popular && <span className={styles.popularBadge}>Popular</span>}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Service Details */}
            <motion.div 
              className={styles.serviceDetails}
              key={selectedService.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.serviceHeader}>
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  width={600}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceOverlay}>
                  <h2>{selectedService.name}</h2>
                  <p>{selectedService.shortDescription}</p>
                  <div className={styles.serviceMeta}>
                    <span><FiDollarSign size={16} /> {selectedService.startingPrice}</span>
                    <span><FiClock size={16} /> {selectedService.duration}</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className={styles.serviceTabs}>
                <button
                  className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'features' ? styles.active : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  What's Included
                </button>
                {selectedService.packages && (
                  <button
                    className={`${styles.tab} ${activeTab === 'packages' ? styles.active : ''}`}
                    onClick={() => setActiveTab('packages')}
                  >
                    Packages
                  </button>
                )}
                {selectedService.process && (
                  <button
                    className={`${styles.tab} ${activeTab === 'process' ? styles.active : ''}`}
                    onClick={() => setActiveTab('process')}
                  >
                    Process
                  </button>
                )}
              </div>

              {/* Tab Content */}
              <div className={styles.tabContent}>
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className={styles.serviceDescription}>{selectedService.description}</p>
                    
                    <div className={styles.deliverables}>
                      <h4>Deliverables</h4>
                      <ul>
                        {selectedService.deliverables?.map((item, index) => (
                          <li key={index}>
                            <FiCheck size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.featuresList}>
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                          <FiCheck size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'packages' && selectedService.packages && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.packagesGrid}>
                      {selectedService.packages.map((pkg, index) => (
                        <div key={index} className={styles.packageCard}>
                          <h4>{pkg.name}</h4>
                          <div className={styles.packagePrice}>{pkg.price}</div>
                          <ul>
                            <li>{pkg.duration}</li>
                            <li>{pkg.photographers} photographer{pkg.photographers > 1 ? 's' : ''}</li>
                            <li>{pkg.photos} photos</li>
                            {pkg.features.map((feature, fIndex) => (
                              <li key={fIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'process' && selectedService.process && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.processSteps}>
                      {selectedService.process.map((step, index) => (
                        <div key={index} className={styles.processStep}>
                          <div className={styles.stepNumber}>{step.step}</div>
                          <div className={styles.stepContent}>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className={styles.serviceActions}>
                <Link href="/contact" className="btn btn-primary">
                  Get Quote
                  <FiArrowRight />
                </Link>
                <Link href="/studio-booking" className="btn btn-secondary">
                  Book Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`${styles.additionalServices} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Additional Services</h2>
            <p>Extra services to enhance your photography experience</p>
          </motion.div>
          
          <div className={styles.additionalGrid}>
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className={styles.additionalCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.additionalIcon}>
                  <service.icon size={24} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className={styles.additionalPrice}>{service.price}</div>
              </motion.div>
            ))}
          </div>
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
            <p>Common questions about our photography services</p>
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
            <h2>Ready to Book Your Photography Session?</h2>
            <p>
              Contact us today to discuss your photography needs and get a custom quote 
              tailored to your requirements.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                <FiMail />
                Get Quote
              </Link>
              <a href="tel:+919876543210" className="btn btn-secondary">
                <FiPhone />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage