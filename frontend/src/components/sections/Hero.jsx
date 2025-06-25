import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, MeshDistortMaterial } from '@react-three/drei'
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = ({ currentDimension, dimensions }) => {
  const heroRef = useRef(null)
  const currentDimensionData = dimensions[currentDimension]

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const Cube3D = () => {
    return (
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <MeshDistortMaterial
          color={currentDimensionData.color}
          transparent
          opacity={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    )
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__container">
        {/* 3D Background */}
        <div className="hero__3d-background">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube3D />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        {/* Main Content */}
        <div className="hero__content">
          <div className="hero__text">
            <motion.div
              className="hero__greeting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="greeting-icon" size={20} />
              <span>Welcome to the 4th Dimension</span>
            </motion.div>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I'm <span className="name-highlight">Prajwal</span>
              <br />
              <span className="title-4d">4D</span> Professional
            </motion.h1>

            <motion.div
              className="hero__dimension-display"
              key={currentDimension}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="dimension-card"
                style={{ 
                  borderColor: currentDimensionData.color,
                  boxShadow: `0 0 30px ${currentDimensionData.color}40`
                }}
              >
                <span className="dimension-icon">{currentDimensionData.icon}</span>
                <h3 className="dimension-title">{currentDimensionData.name}</h3>
                <p className="dimension-description">
                  {getDimensionDescription(currentDimension)}
                </p>
              </div>
            </motion.div>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Multidimensional R&D IT Professional specializing in CAD, Web Development, 
              AI Integration, and Project Leadership. I operate beyond traditional boundaries, 
              creating solutions that evolve across time and space.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn btn--primary"
                onClick={() => scrollToNext()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore My Dimensions</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                className="btn btn--secondary"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>

          {/* 4D Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Dimensions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Possibilities</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Vision</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToNext}
        >
          <div className="scroll-text">Discover More</div>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="hero__particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: currentDimensionData.color,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const getDimensionDescription = (index) => {
  const descriptions = [
    "Mastering CAD, Blender, and cutting-edge technical solutions with precision and innovation.",
    "Creating custom plugins, intuitive interfaces, and breakthrough design solutions.",
    "Bridging web development, AI automation, and seamless digital ecosystems.",
    "Leading R&D teams, managing complex projects, and driving technological advancement."
  ]
  return descriptions[index]
}

export default Hero 