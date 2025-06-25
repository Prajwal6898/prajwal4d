import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './TimeBasedBackground.css'

const TimeBasedBackground = ({ timeOfDay }) => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationId
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle system
    const particles = []
    const particleCount = 50
    
    // Create particles based on time of day
    const createParticles = () => {
      particles.length = 0
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: getParticleColor(timeOfDay)
        })
      }
    }
    
    const getParticleColor = (time) => {
      switch (time) {
        case 'morning':
          return `rgba(102, 126, 234, ${Math.random() * 0.8})`
        case 'day':
          return `rgba(240, 147, 251, ${Math.random() * 0.8})`
        case 'evening':
          return `rgba(79, 172, 254, ${Math.random() * 0.8})`
        case 'night':
        default:
          return `rgba(0, 255, 135, ${Math.random() * 0.5})`
      }
    }
    
    createParticles()
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
      
      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 100) * 0.2})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [timeOfDay])
  
  return (
    <div className={`time-based-background time-based-background--${timeOfDay}`}>
      <canvas ref={canvasRef} className="background-canvas" />
      
      {/* Gradient Overlays */}
      <div className="gradient-overlay gradient-overlay--primary" />
      <div className="gradient-overlay gradient-overlay--secondary" />
      
      {/* 4D Grid */}
      <div className="grid-4d">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="grid-line"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Time-based elements */}
      {timeOfDay === 'night' && (
        <div className="stars">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TimeBasedBackground 