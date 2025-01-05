import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Prajwal D</h1>
        <p>3D Animation | Motion Graphics | Visual Effects</p>
        <div className="hero-buttons">
          <Link to="/projects" className="cta-button">View Projects</Link>
          <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
        </div>
      </section>
      
      <section className="services">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">🎨</div>
            <h3>3D Animation</h3>
            <p>Creating stunning 3D animations that bring your ideas to life</p>
          </div>
          <div className="service-item">
            <div className="service-icon">✨</div>
            <h3>Motion Graphics</h3>
            <p>Engaging motion graphics for your brand and content</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🎬</div>
            <h3>Visual Effects</h3>
            <p>High-quality VFX that enhance your visual storytelling</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🎥</div>
            <h3>Video Production</h3>
            <p>End-to-end video production services</p>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Work</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="/images/featured1.jpg" alt="Featured work 1" />
            <div className="featured-overlay">
              <h3>Project Title</h3>
              <p>3D Animation</p>
            </div>
          </div>
          <div className="featured-item">
            <img src="/images/featured2.jpg" alt="Featured work 2" />
            <div className="featured-overlay">
              <h3>Project Title</h3>
              <p>Motion Graphics</p>
            </div>
          </div>
          <div className="featured-item">
            <img src="/images/featured3.jpg" alt="Featured work 3" />
            <div className="featured-overlay">
              <h3>Project Title</h3>
              <p>Visual Effects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 