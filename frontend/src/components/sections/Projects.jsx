import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, Github, Eye } from 'lucide-react'

const Projects = ({ currentDimension }) => {
  const projects = [
    {
      id: 1,
      title: "4D CAD Block System",
      description: "Revolutionary CAD block management system with temporal tracking and automated versioning.",
      category: "CAD Innovation",
      dimension: 0,
      technologies: ["AutoCAD", "Custom APIs", "Database Management"],
      image: "/api/placeholder/400/250",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Interactive Design Platform",
      description: "Web-based platform for collaborative design with real-time 3D visualization and AI assistance.",
      category: "Web Development",
      dimension: 1,
      technologies: ["React", "Three.js", "WebGL", "AI Integration"],
      image: "/api/placeholder/400/250",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "AI-Powered Automation Suite",
      description: "Intelligent automation system that learns from user behavior and optimizes workflows.",
      category: "AI Innovation",
      dimension: 2,
      technologies: ["Python", "Machine Learning", "API Integration"],
      image: "/api/placeholder/400/250",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "R&D Project Management Hub",
      description: "Comprehensive project management solution designed specifically for R&D teams.",
      category: "Leadership Tools",
      dimension: 3,
      technologies: ["React", "Node.js", "MongoDB", "Analytics"],
      image: "/api/placeholder/400/250",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag">
            <Briefcase size={18} />
            <span>Projects</span>
          </div>
          <h2 className="section-title">
            4D <span className="text-gradient">Project Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Explore my multidimensional projects that showcase innovation across 
            technical mastery, design excellence, digital integration, and leadership.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <div className="placeholder-image">
                  <span className="project-icon">💻</span>
                </div>
                <div className="project-overlay">
                  <motion.button
                    className="overlay-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span 
                    className="dimension-badge"
                    style={{ 
                      backgroundColor: currentDimension === project.dimension ? 
                        'var(--accent-color)' : 'rgba(255,255,255,0.1)' 
                    }}
                  >
                    D{project.dimension + 1}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <motion.a
                    href={project.links.demo}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="project-link project-link--secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 