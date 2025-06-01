// src/components/Chatbot.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMessageCircle, 
  FiX, 
  FiSend, 
  FiUser,
  FiPhone,
  FiMail,
  FiCalendar
} from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import styles from './Chatbot.module.css'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

interface FAQ {
  question: string
  answer: string
  keywords: string[]
  followUp?: string[]
}

const faqs: FAQ[] = [
  {
    question: "What photography services do you offer?",
    answer: "We offer wedding photography, event photography, corporate photography, portrait photography, product photography, and studio rental services. Each service is tailored to meet your specific needs with professional equipment and experienced photographers.",
    keywords: ["services", "photography", "wedding", "event", "corporate", "portrait", "product", "studio"],
    followUp: ["What are your wedding photography packages?", "How do I book a studio?", "What's included in event photography?"]
  },
  {
    question: "What are your photography packages and pricing?",
    answer: "Our pricing varies by service: Wedding photography starts from ₹50,000, Event photography from ₹15,000, Corporate photography from ₹8,000, Portrait sessions from ₹5,000, and Studio rental from ₹2,000/hour. All packages include professional editing and digital gallery access.",
    keywords: ["price", "cost", "package", "pricing", "rate", "fee", "charge"],
    followUp: ["Can I customize a package?", "Do you offer payment plans?", "What's included in the price?"]
  },
  {
    question: "How do I book a photography session?",
    answer: "You can book a session by calling us at +91 98765 43210, filling out our contact form, or using our studio booking page. We recommend booking at least 2-4 weeks in advance for events and weddings. A 30% advance payment confirms your booking.",
    keywords: ["book", "booking", "schedule", "appointment", "reserve"],
    followUp: ["What's your cancellation policy?", "How far in advance should I book?", "What payment methods do you accept?"]
  },
  {
    question: "Do you provide same-day photo delivery?",
    answer: "Yes! We offer same-day edited highlights for urgent requirements at an additional cost. Standard delivery time is 7-14 days for events and 3-5 days for studio sessions. All photos are delivered through a secure online gallery.",
    keywords: ["delivery", "timeline", "when", "ready", "same day", "urgent"],
    followUp: ["Can I get photos faster?", "How do you deliver photos?", "What format are the photos?"]
  },
  {
    question: "What equipment do you use for photography?",
    answer: "We use professional DSLR cameras (Canon 5D Mark IV, Sony A7R IV), multiple lenses, professional lighting equipment, and backup gear. Our studio features Profoto lighting, various backdrops, and high-end editing workstations for post-processing.",
    keywords: ["equipment", "camera", "gear", "lighting", "technology", "professional"],
    followUp: ["Do you have backup equipment?", "What editing software do you use?", "Can I see your studio setup?"]
  },
  {
    question: "Do you travel for destination weddings?",
    answer: "Yes, we love destination weddings! We travel across India and internationally. Travel costs and accommodation are additional to the photography package. We recommend discussing destination requirements at least 2 months in advance.",
    keywords: ["travel", "destination", "wedding", "outstation", "location"],
    followUp: ["What are the travel charges?", "Do you handle destination logistics?", "Can you recommend venues?"]
  },
  {
    question: "What's included in your wedding photography package?",
    answer: "Our wedding packages include pre-wedding consultation, ceremony coverage (6-12 hours), candid and traditional photography, same-day highlights, full edited gallery (500-1000+ photos), online gallery access, and complimentary engagement session.",
    keywords: ["wedding", "package", "include", "coverage", "ceremony", "reception"],
    followUp: ["Do you offer videography too?", "Can family members access photos?", "Do you provide albums?"]
  },
  {
    question: "How many photographers will be at my event?",
    answer: "For weddings, we typically assign 2-3 photographers to capture different angles and moments. For corporate events, 1-2 photographers depending on the size. For studio sessions, usually 1 photographer with an assistant. Team size can be customized based on your requirements.",
    keywords: ["photographers", "team", "how many", "crew", "staff"],
    followUp: ["Can I meet the photographers beforehand?", "Do you have female photographers?", "What if the photographer is sick?"]
  },
  {
    question: "Do you offer photo editing and retouching services?",
    answer: "Yes! All our packages include professional editing - color correction, exposure adjustment, and artistic enhancement. We also offer advanced retouching for portraits, album design services, and custom editing requests at additional cost.",
    keywords: ["editing", "retouching", "post processing", "photoshop", "enhancement"],
    followUp: ["How much extra for advanced retouching?", "Can I see before/after samples?", "Do you offer raw files?"]
  },
  {
    question: "What's your cancellation and rescheduling policy?",
    answer: "Cancellations 30+ days before: 50% refund. 15-30 days: 25% refund. Less than 15 days: No refund. Rescheduling is free if done 15+ days in advance, subject to availability. We understand emergencies and handle each case individually.",
    keywords: ["cancel", "cancellation", "reschedule", "refund", "policy", "change date"],
    followUp: ["What about weather cancellations?", "Can I get insurance?", "How do you handle emergencies?"]
  }
]

const quickOptions = [
  "Services & Pricing",
  "Book a Session", 
  "Studio Rental",
  "Wedding Packages",
  "Contact Information"
]

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial welcome message
      setTimeout(() => {
        addBotMessage(
          "👋 Hello! I'm Eva, your photography assistant. I'm here to help you with questions about our services, pricing, and bookings. How can I assist you today?",
          quickOptions
        )
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      addMessage(text, true, options)
    }, 1000 + Math.random() * 1000) // Random delay for more natural feel
  }

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase()
    let bestMatch: FAQ | null = null
    let highestScore = 0

    faqs.forEach(faq => {
      let score = 0
      faq.keywords.forEach(keyword => {
        if (input.includes(keyword.toLowerCase())) {
          score += 1
        }
      })
      
      // Bonus points for exact question match
      if (input.includes(faq.question.toLowerCase())) {
        score += 5
      }

      if (score > highestScore) {
        highestScore = score
        bestMatch = faq
      }
    })

    return highestScore > 0 ? bestMatch : null
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    addMessage(userMessage, false)
    setInputValue('')

    // Find matching FAQ
    const match = findBestMatch(userMessage)
    
    if (match) {
      addBotMessage(match.answer, match.followUp)
    } else {
      // Default response for unmatched queries
      addBotMessage(
        "I'd be happy to help! While I don't have specific information about that, our team can provide detailed assistance. Would you like me to connect you with our photography experts?",
        [
          "Call +91 98765 43210",
          "Send an email",
          "Book a consultation",
          "View our services"
        ]
      )
    }
  }

  const handleOptionClick = (option: string) => {
    addMessage(option, false)

    // Handle specific option responses
    switch (option) {
      case "Services & Pricing":
        addBotMessage(
          "Here are our main services:\n\n📸 Wedding Photography: Starting ₹50,000\n🎉 Event Photography: Starting ₹15,000\n💼 Corporate Photography: Starting ₹8,000\n👤 Portrait Photography: Starting ₹5,000\n🏠 Studio Rental: ₹2,000/hour\n📦 Product Photography: ₹500/product\n\nAll packages include professional editing and digital gallery access!",
          ["Book a session", "Learn about wedding packages", "Studio rental details"]
        )
        break
      case "Book a Session":
        addBotMessage(
          "Great! Here are the ways to book your photography session:\n\n📞 Call us: +91 98765 43210\n💌 Email: info@evarastudios.in\n🌐 Online form: Use our contact page\n🏠 Studio booking: Use our studio booking page\n\nWe recommend booking 2-4 weeks in advance. A 30% advance payment confirms your booking.",
          ["Call now", "Visit contact page", "Book studio online"]
        )
        break
      case "Studio Rental":
        addBotMessage(
          "Our professional studio features:\n\n✨ Professional lighting equipment\n🎨 Multiple backdrop options\n📷 Equipment included\n⏰ Flexible timing (9 AM - 9 PM)\n🅿️ Free parking\n☕ Refreshment area\n\nRental: ₹2,000/hour\nHalf day (4 hours): ₹7,000\nFull day (8 hours): ₹12,000",
          ["Book studio now", "See studio photos", "Check availability"]
        )
        break
      case "Wedding Packages":
        addBotMessage(
          "Our wedding photography packages include:\n\n💍 Pre-wedding consultation & planning\n📸 Ceremony coverage (6-12 hours)\n👥 2-3 professional photographers\n🌟 Candid + traditional photography\n⚡ Same-day edited highlights\n🖼️ 500-1000+ edited photos\n💾 Online gallery access\n💝 Complimentary engagement session\n\nStarting from ₹50,000. Destination weddings available!",
          ["Get custom quote", "See wedding portfolio", "Book consultation"]
        )
        break
      case "Contact Information":
        addBotMessage(
          "Here's how to reach us:\n\n📞 Phone: +91 98765 43210\n📧 Email: info@evarastudios.in\n📍 Address: 123 MG Road, Bangalore 560001\n⏰ Hours: Mon-Sun 9 AM - 9 PM\n\n🌐 Website: www.evarastudios.in\n📱 Instagram: @evarastudios\n📘 Facebook: Evara Studios",
          ["Call now", "Send email", "Get directions", "Visit social media"]
        )
        break
      case "Call +91 98765 43210":
        window.open('tel:+919876543210')
        addBotMessage("Opening your phone to call us! We're available Mon-Sun 9 AM - 9 PM.")
        break
      case "Send an email":
        window.open('mailto:info@evarastudios.in')
        addBotMessage("Opening your email client! Feel free to send us your requirements and we'll respond within 24 hours.")
        break
      case "Book a consultation":
        window.open('/contact', '_blank')
        addBotMessage("Opening our contact page for you! Fill out the form for a free consultation.")
        break
      case "View our services":
        window.open('/services', '_blank')
        addBotMessage("Check out our comprehensive services page! You can see detailed information about all our photography offerings.")
        break
      default:
        // Handle other options with generic helpful response
        addBotMessage(
          "Thanks for your interest! For detailed information about this, I'd recommend speaking with our photography team directly. They can provide personalized assistance for your specific needs.",
          ["Call our team", "Send an inquiry", "Book consultation"]
        )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
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
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <motion.div 
            className={styles.notification}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerInfo}>
                <div className={styles.botAvatar}>
                  <FaRobot size={20} />
                </div>
                <div>
                  <h4>Eva - Photography Assistant</h4>
                  <span className={styles.status}>
                    <div className={styles.statusDot}></div>
                    Online
                  </span>
                </div>
              </div>
              <button 
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className={styles.messagesContainer}>
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`${styles.messageWrapper} ${
                      message.isBot ? styles.bot : styles.user
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.messageAvatar}>
                      {message.isBot ? (
                        <FaRobot size={16} />
                      ) : (
                        <FiUser size={16} />
                      )}
                    </div>
                    <div className={styles.messageContent}>
                      <div className={styles.messageBubble}>
                        <p>{message.text}</p>
                        <span className={styles.timestamp}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      {message.options && (
                        <div className={styles.quickOptions}>
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              className={styles.optionButton}
                              onClick={() => handleOptionClick(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className={`${styles.messageWrapper} ${styles.bot}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className={styles.messageAvatar}>
                    <FaRobot size={16} />
                  </div>
                  <div className={styles.messageContent}>
                    <div className={styles.typingIndicator}>
                      <div className={styles.typingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={styles.chatInput}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={styles.textInput}
              />
              <button
                onClick={handleSendMessage}
                className={styles.sendButton}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <FiSend size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot