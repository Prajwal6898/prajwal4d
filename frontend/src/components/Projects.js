import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "3D Animation",
      description: "Creating stunning 3D animations and visual effects",
      image: "/images/3d-animation.jpg"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics and kinetic typography",
      image: "/images/motion-graphics.jpg"
    },
    {
      title: "Visual Effects",
      description: "High-end VFX and compositing work",
      image: "/images/vfx.jpg"
    },
    {
      title: "Video Editing",
      description: "Professional video editing and color grading",
      image: "/images/video-editing.jpg"
    }
  ];

  return (
    <div className="projects">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Showcasing creativity through digital artistry</p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-project">View Project</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects; 