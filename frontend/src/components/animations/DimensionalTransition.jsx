import React from 'react'
import { motion } from 'framer-motion'
import './DimensionalTransition.css'

const DimensionalTransition = () => {
  return (
    <div className="dimensional-transition">
      <div className="transition-container">
        {/* Morphing Lines */}
        <div className="morph-lines">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="morph-line"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* 4D Portal Effect */}
        <motion.div
          className="portal-effect"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="portal-ring portal-ring--1"></div>
          <div className="portal-ring portal-ring--2"></div>
          <div className="portal-ring portal-ring--3"></div>
        </motion.div>

        {/* Floating Dots */}
        <div className="floating-dots">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="floating-dot"
              style={{
                left: `${(i * 12.5) + 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5,
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

export default DimensionalTransition 