import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | UI/UX Enthusiast | Problem Solver</p>
      </section>
      
      <section className="featured">
        <h2>Featured Work</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <h3>Project 1</h3>
            <p>A revolutionary web application</p>
          </div>
          <div className="featured-item">
            <h3>Project 2</h3>
            <p>Mobile-first design implementation</p>
          </div>
          <div className="featured-item">
            <h3>Project 3</h3>
            <p>AI-powered analytics dashboard</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 