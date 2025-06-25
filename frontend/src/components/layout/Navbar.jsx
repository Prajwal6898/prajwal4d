import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Zap, Star } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ currentDimension, dimensions, onDimensionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
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
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo */}
          <div className="navbar__logo">
            <span className="logo-text">Prajwal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  className="nav-item"
                  onClick={() => scrollToSection(item.id)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>



          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__content">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  className="mobile-nav-item"
                  onClick={() => scrollToSection(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
            

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar 