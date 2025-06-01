// src/components/forms/ContactForm.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiMessageSquare,
  FiCalendar,
  FiDollarSign,
  FiSend,
  FiCheck
} from 'react-icons/fi'
import styles from './ContactForm.module.css'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  service: string
  budget: string
  eventDate: string
  preferredContact: string
}

const services = [
  'Wedding Photography',
  'Event Photography',
  'Corporate Photography',
  'Portrait Photography',
  'Product Photography',
  'Studio Rental',
  'Other'
]

const budgetRanges = [
  'Under ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000',
  'Let\'s discuss'
]

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call to Strapi
      const response = await fetch('/api/cms/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        reset()
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
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
        <h3>Message Sent Successfully!</h3>
        <p>
          Thank you for reaching out. We'll get back to you within 24 hours 
          with a detailed response to your inquiry.
        </p>
      </motion.div>
    )
  }

  return (
    <div className={styles.contactForm}>
      <div className={styles.formHeader}>
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Personal Information */}
        <div className={styles.formSection}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <FiUser size={16} />
                Full Name *
              </label>
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
              <label htmlFor="email">
                <FiMail size={16} />
                Email Address *
              </label>
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

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                <FiPhone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={styles.formInput}
                placeholder="Your phone number"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">
                Service of Interest
              </label>
              <select
                id="service"
                {...register('service')}
                className={styles.formInput}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className={styles.formSection}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="budget">
                <FiDollarSign size={16} />
                Budget Range
              </label>
              <select
                id="budget"
                {...register('budget')}
                className={styles.formInput}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="eventDate">
                <FiCalendar size={16} />
                Event/Shoot Date
              </label>
              <input
                type="date"
                id="eventDate"
                {...register('eventDate')}
                className={styles.formInput}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">
              <FiMessageSquare size={16} />
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              {...register('subject', { required: 'Subject is required' })}
              className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
              placeholder="Brief description of your inquiry"
            />
            {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
              rows={6}
              placeholder="Tell us more about your project, requirements, and any specific ideas you have in mind..."
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label>Preferred Contact Method</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="email"
                  {...register('preferredContact')}
                  className={styles.radio}
                />
                <span>Email</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="phone"
                  {...register('preferredContact')}
                  className={styles.radio}
                />
                <span>Phone Call</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="whatsapp"
                  {...register('preferredContact')}
                  className={styles.radio}
                />
                <span>WhatsApp</span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.submitSection}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner} />
                Sending Message...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </button>
          
          <p className={styles.submitNote}>
            We'll respond to your inquiry within 24 hours. For urgent requests, 
            please call us directly at{' '}
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm