import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './FourDLoader.css'

const FourDLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  
  const phases = [
    'Initializing 4D Space...',
    'Loading Dimensions...',
    'Calibrating Temporal Matrix...',
    'Entering Portfolio...'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100
        return prev + 2
      })
    }, 60)

    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length)
    }, 750)

    return () => {
      clearInterval(interval)
      clearInterval(phaseInterval)
    }
  }, [phases.length])

  return (
    <div className="fourD-loader">
      <div className="loader-container">
        {/* 4D Cube Animation */}
        <div className="cube-container">
          <motion.div
            className="cube"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </motion.div>
        </div>

        {/* Progress Ring */}
        <div className="progress-ring">
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * loadingProgress) / 100}
              style={{ transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ff87" />
                <stop offset="25%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#4ecdc4" />
                <stop offset="75%" stopColor="#ffe66d" />
                <stop offset="100%" stopColor="#00ff87" />
              </linearGradient>
            </defs>
          </svg>
          <div className="progress-text">
            <span className="progress-number">{loadingProgress}%</span>
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          key={currentPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {phases[currentPhase]}
        </motion.div>

        {/* 4D Particles */}
        <div className="particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FourDLoader 