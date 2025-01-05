import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Creative professional specializing in 3D animation and visual effects</p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img src="/images/profile.jpg" alt="Prajwal D" />
        </div>
        <div className="about-text">
          <h2>Hi, I'm Prajwal</h2>
          <p>With over 5 years of experience in the digital arts industry, I've had the privilege of working on various exciting projects ranging from animated shorts to commercial productions.</p>
          <p>My passion lies in creating visually stunning content that tells compelling stories and engages audiences across different platforms.</p>
        </div>
      </section>

      <section className="skills">
        <h2>Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>3D Animation</h3>
            <ul>
              <li>Character Animation</li>
              <li>Environment Design</li>
              <li>3D Modeling</li>
              <li>Texturing & Lighting</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Motion Graphics</h3>
            <ul>
              <li>After Effects</li>
              <li>Cinema 4D</li>
              <li>Logo Animation</li>
              <li>Kinetic Typography</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Software</h3>
            <ul>
              <li>Maya</li>
              <li>Blender</li>
              <li>Adobe Creative Suite</li>
              <li>Houdini</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2020 - Present</div>
            <div className="timeline-content">
              <h3>Senior 3D Artist</h3>
              <p>Leading animation projects and mentoring junior artists</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <h3>Motion Graphics Designer</h3>
              <p>Created engaging motion graphics for various clients</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2016 - 2018</div>
            <div className="timeline-content">
              <h3>Junior 3D Animator</h3>
              <p>Started career working on animated short films</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 