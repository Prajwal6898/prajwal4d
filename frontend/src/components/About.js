import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Passionate developer with a love for creating beautiful and functional web applications</p>
      </section>

      <section className="skills">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>RESTful APIs</li>
              <li>Database Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 