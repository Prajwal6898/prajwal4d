import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, MapPin, Phone, Linkedin, Github } from 'lucide-react'

const Contact = ({ currentDimension }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@prajwal4d.com",
      link: "mailto:contact@prajwal4d.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      link: "https://github.com"
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag">
            <MessageSquare size={18} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Let's Create <span className="text-gradient">4D Solutions</span> Together
          </h2>
          <p className="section-subtitle">
            Ready to explore the fourth dimension of innovation? Let's collaborate 
            and build extraordinary solutions that transcend traditional boundaries.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Contact Form */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact__form glass-effect" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project collaboration, consultation, etc."
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project and how we can work together..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn--primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-cards">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="contact-card glass-effect"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="contact__cta glass-effect">
              <h3>Ready for 4D Innovation?</h3>
              <p>
                Whether you need CAD solutions, web development, AI integration, 
                or R&D leadership, I'm here to help transform your ideas into reality.
              </p>
              <div className="cta-features">
                <span>✨ Custom CAD Solutions</span>
                <span>🚀 Modern Web Development</span>
                <span>🤖 AI Integration</span>
                <span>📊 R&D Management</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 