import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Home from './components/Home';
import './App.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down
      const show = window.scrollY > 50;
      setIsHeaderVisible(show);
      
      // Determine which section is currently in view
      const sections = ['hero', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      }) || 'hero';
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      <header className={`floating-header ${isHeaderVisible ? 'visible' : ''}`}>
        <div className="header-content">
          <div className="header-logo">Prajwal<span className="accent">4D</span></div>
          <nav className="header-nav">
            {['hero', 'about', 'projects', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>
      
      <div className="background-container">
        <ParticleBackground />
      </div>
      
      <main className="App-main">
        <Home />
      </main>
      
      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-logo">Prajwal<span className="accent">4D</span></div>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              <i className="fab fa-vimeo"></i>
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Prajwal4D. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
