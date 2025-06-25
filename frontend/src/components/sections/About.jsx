import React from 'react'
import { motion } from 'framer-motion'
import { User, Calendar, MapPin, Award, Target, Lightbulb } from 'lucide-react'
import './About.css'

const About = ({ currentDimension }) => {
  const achievements = [
    {
      icon: Award,
      title: "R&D Leadership",
      description: "Leading innovation teams in cutting-edge technology projects"
    },
    {
      icon: Target,
      title: "CAD Mastery",
      description: "Expert in AutoCAD, Blender, and custom plugin development"
    },
    {
      icon: Lightbulb,
      title: "AI Integration",
      description: "Pioneering AI-powered automation solutions"
    }
  ]

  const timeline = [
    {
      year: "2020",
      title: "Started 4D Journey",
      description: "Began exploring multidimensional approaches to R&D"
    },
    {
      year: "2021",
      title: "CAD Innovation",
      description: "Developed breakthrough CAD block systems"
    },
    {
      year: "2022",
      title: "Web Integration",
      description: "Merged traditional CAD with modern web technologies"
    },
    {
      year: "2023",
      title: "AI Revolution",
      description: "Implemented AI-driven automation across projects"
    },
    {
      year: "2024",
      title: "4D Mastery",
      description: "Achieved multidimensional professional excellence"
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__content">
          {/* Header */}
          <motion.div
            className="about__header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag">
              <User size={18} />
              <span>About Me</span>
            </div>
            <h2 className="section-title">
              Beyond the <span className="text-gradient">Third Dimension</span>
            </h2>
            <p className="section-subtitle">
              I'm a multidimensional R&D IT professional who operates in the fourth dimension 
              of innovation, where time, technology, and creativity converge to create 
              extraordinary solutions.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="about__grid">
            {/* Personal Info */}
            <motion.div
              className="about__personal glass-effect"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Personal Journey</h3>
              <div className="personal-details">
                <div className="detail-item">
                  <MapPin size={16} />
                  <span>Based in India</span>
                </div>
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
              
              <p className="personal-description">
                My journey into the 4th dimension began with a simple question: 
                "What if we could think beyond traditional boundaries?" This led me 
                to develop a unique approach that combines technical mastery with 
                temporal awareness, creating solutions that evolve and adapt over time.
              </p>

              <div className="philosophy">
                <h4>My 4D Philosophy</h4>
                <ul>
                  <li>Think beyond the present moment</li>
                  <li>Navigate challenges from all directions</li>
                  <li>Master multiple competencies simultaneously</li>
                  <li>Create solutions that evolve over time</li>
                </ul>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="about__achievements"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Core Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      className="achievement-card glass-effect"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="achievement-icon">
                        <Icon size={24} />
                      </div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            className="about__timeline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>4D Evolution Timeline</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <span>{item.year}</span>
                  </div>
                  <div className="timeline-content glass-effect">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="about__cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="cta-content glass-effect">
              <h3>Ready to Explore the 4th Dimension?</h3>
              <p>Let's collaborate and create solutions that transcend traditional boundaries.</p>
              <motion.button
                className="btn btn--primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 