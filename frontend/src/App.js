import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Home from './components/Home';
import './App.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      setIsHeaderVisible(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className={`floating-header ${isHeaderVisible ? 'visible' : ''}`}>
        <div className="header-content">
          <div className="header-logo">Prajwal4D</div>
          <nav className="header-nav">
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </header>
      <ParticleBackground />
      <main className="App-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
