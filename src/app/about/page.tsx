'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiCamera, 
  FiUsers, 
  FiAward, 
  FiHeart,
  FiStar,
  FiArrowRight,
  FiPlay,
  FiCalendar,
  FiMapPin,
  FiClock
} from 'react-icons/fi'
import styles from './About.module.css'

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Founder & Lead Photographer',
    image: '/images/team/rajesh.jpg',
    experience: '12+ Years',
    specialization: 'Wedding & Event Photography',
    bio: 'Award-winning photographer with over a decade of experience capturing life\'s most precious moments.',
    social: {
      instagram: 'https://instagram.com/rajesh_photographer',
      linkedin: 'https://linkedin.com/in/rajeshkumar'
    }
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Creative Director',
    image: '/images/team/priya.jpg',
    experience: '8+ Years',
    specialization: 'Portrait & Fashion Photography',
    bio: 'Creative visionary specializing in artistic portraits and fashion photography with an eye for detail.',
    social: {
      instagram: 'https://instagram.com/priya_creative',
      linkedin: 'https://linkedin.com/in/priyasharma'
    }
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Senior Photographer',
    image: '/images/team/amit.jpg',
    experience: '6+ Years',
    specialization: 'Corporate & Product Photography',
    bio: 'Technical expert in corporate and product photography, bringing brands to life through compelling visuals.',
    social: {
      instagram: 'https://instagram.com/amit_photos',
      linkedin: 'https://linkedin.com/in/amitpatel'
    }
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Post-Production Manager',
    image: '/images/team/sneha.jpg',
    experience: '5+ Years',
    specialization: 'Photo Editing & Retouching',
    bio: 'Master of post-production magic, transforming good photos into extraordinary memories.',
    social: {
      instagram: 'https://instagram.com/sneha_edits',
      linkedin: 'https://linkedin.com/in/snehareddy'
    }
  }
]

const achievements = [
  {
    year: '2023',
    title: 'Best Wedding Photography Studio',
    organization: 'Bangalore Photography Awards',
    icon: FiAward
  },
  {
    year: '2022',
    title: 'Excellence in Portrait Photography',
    organization: 'Karnataka Photography Society',
    icon: FiCamera
  },
  {
    year: '2021',
    title: 'Top 10 Photography Studios',
    organization: 'Indian Wedding Photography',
    icon: FiStar
  },
  {
    year: '2020',
    title: 'Customer Choice Award',
    organization: 'Local Business Excellence',
    icon: FiHeart
  }
]

const milestones = [
  {
    year: '2015',
    title: 'Studio Founded',
    description: 'Started Evara Studios with a vision to capture life\'s precious moments',
    icon: FiCalendar
  },
  {
    year: '2017',
    title: 'Team Expansion',
    description: 'Grew to a team of 5 professional photographers and editors',
    icon: FiUsers
  },
  {
    year: '2019',
    title: 'New Studio Location',
    description: 'Moved to premium location in MG Road with state-of-the-art facilities',
    icon: FiMapPin
  },
  {
    year: '2021',
    title: '1000+ Events Covered',
    description: 'Reached the milestone of capturing over 1000 successful events',
    icon: FiCamera
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received multiple awards and recognition from photography associations',
    icon: FiAward
  }
]

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on the quality of our work. Every photo is carefully crafted to perfection.',
    icon: FiStar
  },
  {
    title: 'Client Satisfaction',
    description: 'Your happiness is our priority. We go above and beyond to exceed your expectations.',
    icon: FiHeart
  },
  {
    title: 'Creative Excellence',
    description: 'We bring artistic vision and technical expertise to every project we undertake.',
    icon: FiCamera
  },
  {
    title: 'Professional Service',
    description: 'Punctual, reliable, and professional service that you can always count on.',
    icon: FiClock
  }
]

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div 
              className={styles.heroText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${styles.heroLabel} script-font`}>About Evara Studios</span>
              <h1 className={styles.heroTitle}>
                Capturing Life's Most
                <span className="text-gradient"> Beautiful Moments</span>
              </h1>
              <p className={styles.heroDescription}>
                Since 2015, we've been passionate about telling stories through photography. 
                Our journey began with a simple belief - every moment deserves to be captured 
                with artistic excellence and genuine emotion.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>8+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>Events Covered</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.imageGrid}>
                <Image
                  src="/images/about/studio-team.jpg"
                  alt="Evara Studios Team"
                  width={500}
                  height={600}
                  className={styles.mainImage}
                />
                <div className={styles.floatingCard}>
                  <FiPlay size={24} />
                  <span>Watch Our Story</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`${styles.storySection} section`}>
        <div className="container">
          <div className={styles.storyContent}>
            <motion.div 
              className={styles.storyText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                Evara Studios was born from a passion for capturing the extraordinary in the ordinary. 
                Founded in 2015 by Rajesh Kumar, what started as a small photography venture has grown 
                into one of Bangalore's most trusted photography studios.
              </p>
              <p>
                Our name "Evara" means "forever" in Sanskrit, reflecting our commitment to creating 
                timeless memories that last a lifetime. We believe that every photograph should tell 
                a story, evoke emotion, and preserve moments that matter most.
              </p>
              <p>
                Over the years, we've had the privilege of documenting thousands of precious moments - 
                from intimate family portraits to grand wedding celebrations, from corporate milestones 
                to artistic endeavors. Each project has taught us something new and reinforced our belief 
                in the power of visual storytelling.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.storyVisual}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/about/founder-story.jpg"
                alt="Founder Story"
                width={600}
                height={400}
                className={styles.storyImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.sectionLabel} script-font`}>Our Journey</span>
            <h2>Milestones & Achievements</h2>
            <p>Key moments that shaped our growth and success over the years</p>
          </motion.div>
          
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.timelineIcon}>
                  <milestone.icon size={24} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.sectionLabel} script-font`}>Meet Our Team</span>
            <h2>The Creative Minds Behind Evara Studios</h2>
            <p>Our talented team of photographers and creative professionals</p>
          </motion.div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.memberImage}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={350}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <FiCamera size={20} />
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <FiUsers size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <div className={styles.experience}>
                    <FiStar size={16} />
                    <span>{member.experience}</span>
                  </div>
                  <p className={styles.specialization}>{member.specialization}</p>
                  <p className={styles.bio}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className={`${styles.awardsSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.sectionLabel} script-font`}>Recognition</span>
            <h2>Awards & Achievements</h2>
            <p>Industry recognition for our commitment to excellence</p>
          </motion.div>
          
          <div className={styles.awardsGrid}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.awardCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.awardIcon}>
                  <achievement.icon size={32} />
                </div>
                <div className={styles.awardYear}>{achievement.year}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${styles.sectionLabel} script-font`}>Our Values</span>
            <h2>What Drives Us Every Day</h2>
            <p>The core principles that guide everything we do</p>
          </motion.div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.valueIcon}>
                  <value.icon size={24} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
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
            <h2>Ready to Create Beautiful Memories Together?</h2>
            <p>
              Let's discuss your photography needs and bring your vision to life. 
              Our team is excited to be part of your special moments.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                Get In Touch
                <FiArrowRight />
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage