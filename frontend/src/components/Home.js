import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!titleRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY / innerHeight - 0.5) * 20;
      const rotateY = (clientX / innerWidth - 0.5) * 20;
      
      titleRef.current.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <h1 ref={titleRef} className="hero-title">Prajwal4D</h1>
        <p className="hero-quote">"Time is the fourth dimension of art, transforming space into a living canvas."</p>
        <p className="hero-subtitle">3D Animation | Motion Graphics | Visual Effects</p>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            Professional 3D Artist and Motion Designer with expertise in creating immersive digital experiences. 
            Specializing in time-based media and fourth-dimensional design concepts.
          </p>
          <div className="expertise-grid">
            <div className="expertise-item">
              <span className="expertise-number">5+</span>
              <span className="expertise-label">Years Experience</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-number">100+</span>
              <span className="expertise-label">Projects Completed</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-number">50+</span>
              <span className="expertise-label">Happy Clients</span>
            </div>
          </div>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>3D Animation</h3>
              <ul>
                <li>Character Animation</li>
                <li>Environment Design</li>
                <li>3D Modeling</li>
                <li>Texturing & Lighting</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3>Motion Graphics</h3>
              <ul>
                <li>After Effects</li>
                <li>Cinema 4D</li>
                <li>Logo Animation</li>
                <li>Kinetic Typography</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3>Software</h3>
              <ul>
                <li>Maya</li>
                <li>Blender</li>
                <li>Adobe Creative Suite</li>
                <li>Houdini</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <h3>3D Animation</h3>
              <p>Creating stunning 3D animations and visual effects</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>Motion Graphics</h3>
              <p>Dynamic motion graphics and kinetic typography</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>Visual Effects</h3>
              <p>High-end VFX and compositing work</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>4D Concepts</h3>
              <p>Exploring time-based media and fourth-dimensional design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Let's Create Together</h2>
        <div className="contact-content">
          <p className="contact-text">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary.
          </p>
          <a href="mailto:prajwal4d@email.com" className="cta-button">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home; 