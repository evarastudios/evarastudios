'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import ThemeToggle from '@/components/ui/ThemeToggle'
import styles from './Header.module.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Studio Booking', href: '/studio-booking' },
  { name: 'Contact', href: '/contact' },
]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+919876543210" className={styles.contactItem}>
                <FiPhone size={14} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@evarastudios.in" className={styles.contactItem}>
                <FiMail size={14} />
                <span>info@evarastudios.in</span>
              </a>
            </div>
            <div className={styles.topBarRight}>
              <span className={styles.workingHours}>Mon - Sun: 9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo-gold.png"
                alt="Evara Studios"
                width={60}
                height={60}
                priority
              />
              <div className={styles.logoText}>
                <span className={styles.brandName}>Evara Studios</span>
                <span className={styles.tagline}>Capturing Moments</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                >
                  {item.name}
                  <span className={styles.navLinkUnderline}></span>
                </Link>
              ))}
            </nav>

            {/* Header Actions */}
            <div className={styles.headerActions}>
              <ThemeToggle />
              <Link href="/studio-booking" className={`btn btn-primary ${styles.bookingBtn}`}>
                Book Studio
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuBtn}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobileNavContent}>
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.mobileNavLink} ${
                        pathname === item.href ? styles.active : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className={styles.mobileNavCTA}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/studio-booking"
                    className="btn btn-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Studio Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header