import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Testimonials from './components/sections/Testimonials'
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

  if (loading) {
    return <FourDLoader />
  }

  return (
    <Router>
      <div className={`app app--${timeOfDay}`} data-dimension={currentDimension}>
        <TimeBasedBackground timeOfDay={timeOfDay} />
        
        <div className="app__content">
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
                  <Testimonials currentDimension={currentDimension} />
                  <DimensionalTransition />
                  <Projects currentDimension={currentDimension} />
                  <DimensionalTransition />
                  <Contact currentDimension={currentDimension} />
                </>
              } />
            </Routes>
          </main>
          
          <Footer currentDimension={currentDimension} dimensions={dimensions} />
        </div>

      </div>
    </Router>
  )
}

export default App 