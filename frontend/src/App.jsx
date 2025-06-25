import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import FourDLoader from './components/ui/FourDLoader'
import TimeBasedBackground from './components/background/TimeBasedBackground'
import DimensionalTransition from './components/animations/DimensionalTransition'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentDimension, setCurrentDimension] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState('day')
  
  // Four dimensions of the portfolio
  const dimensions = [
    { name: 'Technical Mastery', icon: '⚡', color: '#00ff87' },
    { name: 'Innovation & Design', icon: '🎨', color: '#ff6b6b' },
    { name: 'Digital Integration', icon: '🌐', color: '#4ecdc4' },
    { name: 'Project Leadership', icon: '🚀', color: '#ffe66d' }
  ]

  useEffect(() => {
    // Simulate loading time for 4D initialization
    const timer = setTimeout(() => setLoading(false), 3000)
    
    // Set time-based theme
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 12) setTimeOfDay('morning')
    else if (hour >= 12 && hour < 18) setTimeOfDay('day')
    else if (hour >= 18 && hour < 22) setTimeOfDay('evening')
    else setTimeOfDay('night')
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-rotate dimensions every 10 seconds
    const interval = setInterval(() => {
      setCurrentDimension((prev) => (prev + 1) % dimensions.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [dimensions.length])

  if (loading) {
    return <FourDLoader />
  }

  return (
    <Router>
      <div className={`app app--${timeOfDay}`} data-dimension={currentDimension}>
        <TimeBasedBackground timeOfDay={timeOfDay} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDimension}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="app__content"
          >
            <Navbar 
              currentDimension={currentDimension}
              dimensions={dimensions}
              onDimensionChange={setCurrentDimension}
            />
            
            <main className="main">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero currentDimension={currentDimension} dimensions={dimensions} />
                    <DimensionalTransition />
                    <About currentDimension={currentDimension} />
                    <DimensionalTransition />
                    <Skills currentDimension={currentDimension} dimensions={dimensions} />
                    <DimensionalTransition />
                    <Projects currentDimension={currentDimension} />
                    <DimensionalTransition />
                    <Contact currentDimension={currentDimension} />
                  </>
                } />
              </Routes>
            </main>
            
            <Footer currentDimension={currentDimension} dimensions={dimensions} />
          </motion.div>
        </AnimatePresence>
        
        {/* 4D Dimension Indicator */}
        <div className="dimension-indicator">
          {dimensions.map((dim, index) => (
            <motion.div
              key={index}
              className={`dimension-dot ${index === currentDimension ? 'active' : ''}`}
              style={{ backgroundColor: dim.color }}
              onClick={() => setCurrentDimension(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="dimension-icon">{dim.icon}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Router>
  )
}

export default App 