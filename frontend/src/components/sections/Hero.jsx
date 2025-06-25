import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'
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
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Main Content */}
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <Sparkles className="greeting-icon" size={20} />
              <span>Welcome to the 4th Dimension</span>
            </div>

            <h1 className="hero__title">
              I'm <span className="name-highlight">Prajwal</span>
              <br />
              <span className="title-4d">4D</span> Professional
            </h1>

            <div className="hero__dimension-display">
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
            </div>

            <p className="hero__subtitle">
              Multidimensional R&D IT Professional specializing in CAD, Web Development, 
              AI Integration, and Project Leadership. I operate beyond traditional boundaries, 
              creating solutions that evolve across time and space.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary"
                onClick={() => scrollToNext()}
              >
                <span>Explore My Dimensions</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn--secondary"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* 4D Stats */}
          <div className="hero__stats">
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator" onClick={scrollToNext}>
          <div className="scroll-text">Discover More</div>
          <div className="scroll-arrow">
            <ChevronDown size={24} />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="hero__particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: currentDimensionData.color,
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