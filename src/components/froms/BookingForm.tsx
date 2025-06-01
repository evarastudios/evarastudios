// src/components/forms/BookingForm.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiBriefcase,
  FiMessageSquare,
  FiCamera,
  FiSend,
  FiCheck
} from 'react-icons/fi'
import styles from './BookingForm.module.css'

interface BookingFormData {
  name: string
  designation: string
  company: string
  mobile: string
  email: string
  date: string
  startTime: string
  endTime: string
  hours: number
  purpose: string
  equipmentRequired: string[]
  theme: string
  additionalRequirements: string
}

const equipmentOptions = [
  'Professional Lighting Setup',
  'Multiple Backdrops',
  'Softbox Lighting',
  'Ring Light',
  'Tripods & Stands',
  'Reflectors',
  'Props & Accessories',
  'Makeup Station',
  'Changing Room',
  'Audio Equipment'
]

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>()

  const watchedStartTime = watch('startTime')
  const watchedEndTime = watch('endTime')

  // Calculate hours automatically
  const calculateHours = () => {
    if (watchedStartTime && watchedEndTime) {
      const start = new Date(`2000-01-01T${watchedStartTime}`)
      const end = new Date(`2000-01-01T${watchedEndTime}`)
      const diffInMs = end.getTime() - start.getTime()
      const diffInHours = diffInMs / (1000 * 60 * 60)
      return Math.max(0, diffInHours)
    }
    return 0
  }

  const hours = calculateHours()
  const totalCost = hours * 2000 // ₹2000 per hour

  const handleEquipmentChange = (equipment: string) => {
    setSelectedEquipment(prev => {
      if (prev.includes(equipment)) {
        return prev.filter(item => item !== equipment)
      } else {
        return [...prev, equipment]
      }
    })
  }

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    // Prepare WhatsApp message
    const bookingDetails = {
      ...data,
      equipmentRequired: selectedEquipment,
      hours: hours,
      totalCost: totalCost
    }

    const message = `
🏠 *STUDIO BOOKING REQUEST* 🏠

👤 *Client Details:*
Name: ${bookingDetails.name}
Designation: ${bookingDetails.designation}
Company: ${bookingDetails.company}
Mobile: ${bookingDetails.mobile}
Email: ${bookingDetails.email}

📅 *Booking Details:*
Date: ${bookingDetails.date}
Time: ${bookingDetails.startTime} - ${bookingDetails.endTime}
Duration: ${bookingDetails.hours} hours
Purpose: ${bookingDetails.purpose}

🎨 *Requirements:*
Theme: ${bookingDetails.theme || 'Not specified'}
Equipment Required:
${selectedEquipment.map(item => `• ${item}`).join('\n')}

💬 *Additional Requirements:*
${bookingDetails.additionalRequirements || 'None'}

💰 *Estimated Cost:* ₹${totalCost.toLocaleString()}

Please confirm availability and send booking confirmation.
`

    // Create WhatsApp link
    const whatsappNumber = '919876543210'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank')
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false)
        reset()
        setSelectedEquipment([])
      }, 3000)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className={styles.successMessage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.successIcon}>
          <FiCheck size={48} />
        </div>
        <h3>Booking Request Sent!</h3>
        <p>Your studio booking request has been sent via WhatsApp. We'll confirm your booking shortly.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.bookingForm}>
      {/* Personal Information */}
      <motion.div 
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.sectionTitle}>
          <FiUser className={styles.sectionIcon} />
          Personal Information
        </h3>
        
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              {...register('designation')}
              className={styles.formInput}
              placeholder="Your job title"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company">Company/Organization</label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className={styles.formInput}
              placeholder="Company name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile Number *</label>
            <input
              type="tel"
              id="mobile"
              {...register('mobile', { 
                required: 'Mobile number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Please enter a valid 10-digit mobile number'
                }
              })}
              className={`${styles.formInput} ${errors.mobile ? styles.error : ''}`}
              placeholder="10-digit mobile number"
            />
            {errors.mobile && <span className={styles.errorMessage}>{errors.mobile.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
          </div>
        </div>
      </motion.div>

      {/* Booking Details */}
      <motion.div 
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className={styles.sectionTitle}>
          <FiCalendar className={styles.sectionIcon} />
          Booking Details
        </h3>
        
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Date *</label>
            <input
              type="date"
              id="date"
              {...register('date', { required: 'Date is required' })}
              className={`${styles.formInput} ${errors.date ? styles.error : ''}`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className={styles.errorMessage}>{errors.date.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="startTime">Start Time *</label>
            <input
              type="time"
              id="startTime"
              {...register('startTime', { required: 'Start time is required' })}
              className={`${styles.formInput} ${errors.startTime ? styles.error : ''}`}
              min="09:00"
              max="21:00"
            />
            {errors.startTime && <span className={styles.errorMessage}>{errors.startTime.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="endTime">End Time *</label>
            <input
              type="time"
              id="endTime"
              {...register('endTime', { required: 'End time is required' })}
              className={`${styles.formInput} ${errors.endTime ? styles.error : ''}`}
              min="09:00"
              max="21:00"
            />
            {errors.endTime && <span className={styles.errorMessage}>{errors.endTime.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="purpose">Purpose of Booking *</label>
            <select
              id="purpose"
              {...register('purpose', { required: 'Purpose is required' })}
              className={`${styles.formInput} ${errors.purpose ? styles.error : ''}`}
            >
              <option value="">Select purpose</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Product Photography">Product Photography</option>
              <option value="Fashion Shoot">Fashion Shoot</option>
              <option value="Corporate Headshots">Corporate Headshots</option>
              <option value="Video Recording">Video Recording</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Model Portfolio">Model Portfolio</option>
              <option value="Family Photos">Family Photos</option>
              <option value="Other">Other</option>
            </select>
            {errors.purpose && <span className={styles.errorMessage}>{errors.purpose.message}</span>}
          </div>
        </div>

        {hours > 0 && (
          <motion.div 
            className={styles.costCalculator}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.costItem}>
              <span>Duration:</span>
              <span>{hours} hours</span>
            </div>
            <div className={styles.costItem}>
              <span>Rate:</span>
              <span>₹2,000/hour</span>
            </div>
            <div className={`${styles.costItem} ${styles.totalCost}`}>
              <span>Total Cost:</span>
              <span>₹{totalCost.toLocaleString()}</span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Equipment & Requirements */}
      <motion.div 
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className={styles.sectionTitle}>
          <FiCamera className={styles.sectionIcon} />
          Equipment & Requirements
        </h3>
        
        <div className={styles.formGroup}>
          <label>Equipment Required</label>
          <div className={styles.checkboxGrid}>
            {equipmentOptions.map((equipment) => (
              <label key={equipment} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedEquipment.includes(equipment)}
                  onChange={() => handleEquipmentChange(equipment)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>{equipment}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="theme">Theme/Style (Optional)</label>
          <input
            type="text"
            id="theme"
            {...register('theme')}
            className={styles.formInput}
            placeholder="e.g., Minimalist, Vintage, Corporate, Creative"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="additionalRequirements">Additional Requirements</label>
          <textarea
            id="additionalRequirements"
            {...register('additionalRequirements')}
            className={styles.textarea}
            rows={4}
            placeholder="Any specific requirements, special setup needs, or additional information..."
          />
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div 
        className={styles.submitSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
        >
          {isSubmitting ? (
            <>
              <div className={styles.spinner} />
              Processing...
            </>
          ) : (
            <>
              <FiSend />
              Get Quote via WhatsApp
            </>
          )}
        </button>
        
        <p className={styles.submitNote}>
          Your booking request will be sent via WhatsApp for quick confirmation. 
          Our team will respond within 30 minutes during business hours.
        </p>
      </motion.div>
    </form>
  )
}

export default BookingForm