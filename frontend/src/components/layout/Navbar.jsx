import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Zap } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ currentDimension, dimensions, onDimensionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const currentDimensionData = dimensions[currentDimension]

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ '--accent-color': currentDimensionData.color }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <motion.div
            className="navbar__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">Prajwal</span>
            <span className="logo-4d">4D</span>
            <div className="logo-dimension-indicator">
              <span 
                className="dimension-badge"
                style={{ backgroundColor: currentDimensionData.color }}
              >
                {currentDimensionData.icon}
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  className="nav-item"
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Dimension Selector */}
          <div className="dimension-selector">
            <motion.button
              className="dimension-toggle"
              onClick={() => onDimensionChange((currentDimension + 1) % dimensions.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="dimension-icon">{currentDimensionData.icon}</span>
              <span className="dimension-name">{currentDimensionData.name}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-menu__content">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    className="mobile-nav-item"
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
              
              {/* Mobile Dimension Selector */}
              <div className="mobile-dimensions">
                <h4>Dimensions</h4>
                <div className="mobile-dimension-grid">
                  {dimensions.map((dim, index) => (
                    <motion.button
                      key={index}
                      className={`mobile-dimension-item ${index === currentDimension ? 'active' : ''}`}
                      onClick={() => {
                        onDimensionChange(index)
                        setIsMobileMenuOpen(false)
                      }}
                      style={{ backgroundColor: dim.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span>{dim.icon}</span>
                      <span>{dim.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 