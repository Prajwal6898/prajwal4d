import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = ({ currentDimension, dimensions }) => {
  const currentYear = new Date().getFullYear()
  const currentDimensionData = dimensions[currentDimension]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3>Prajwal<span className="text-gradient">4D</span></h3>
              <p>Multidimensional R&D IT Professional</p>
              <div className="footer__dimension">
                <span 
                  className="current-dimension-badge"
                  style={{ backgroundColor: currentDimensionData.color }}
                >
                  {currentDimensionData.icon} {currentDimensionData.name}
                </span>
              </div>
            </div>

            <div className="footer__links">
              <div className="link-group">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>4D Dimensions</h4>
                <ul>
                  {dimensions.map((dim, index) => (
                    <li key={index}>
                      <span className="dimension-link">
                        {dim.icon} {dim.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Connect</h4>
                <ul>
                  <li><a href="mailto:contact@prajwal4d.com">Email</a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>
                © {currentYear} Prajwal4D. Made with <Heart size={16} className="heart-icon" /> 
                and powered by 4D innovation.
              </p>
            </div>

            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 