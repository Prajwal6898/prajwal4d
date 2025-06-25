import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Code, Palette, Rocket } from 'lucide-react'

const Skills = ({ currentDimension, dimensions }) => {
  const skillCategories = [
    {
      id: 0,
      title: "Technical Mastery",
      icon: "⚡",
      color: "#00ff87",
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "Blender", level: 90 },
        { name: "Custom Plugin Development", level: 85 },
        { name: "3D Modeling", level: 92 },
        { name: "Technical Documentation", level: 88 }
      ]
    },
    {
      id: 1,
      title: "Innovation & Design",
      icon: "🎨",
      color: "#ff6b6b",
      skills: [
        { name: "UI/UX Design", level: 87 },
        { name: "Creative Problem Solving", level: 95 },
        { name: "Design Systems", level: 83 },
        { name: "Prototyping", level: 89 },
        { name: "Visual Communication", level: 91 }
      ]
    },
    {
      id: 2,
      title: "Digital Integration",
      icon: "🌐",
      color: "#4ecdc4",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "AI Integration", level: 88 },
        { name: "Web Development", level: 90 },
        { name: "API Development", level: 86 }
      ]
    },
    {
      id: 3,
      title: "Project Leadership",
      icon: "🚀",
      color: "#ffe66d",
      skills: [
        { name: "Team Management", level: 93 },
        { name: "R&D Strategy", level: 91 },
        { name: "Project Planning", level: 89 },
        { name: "Quality Assurance", level: 87 },
        { name: "Innovation Management", level: 94 }
      ]
    }
  ]

  const currentCategory = skillCategories[currentDimension]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag">
            <Zap size={18} />
            <span>4D Skills</span>
          </div>
          <h2 className="section-title">
            Multidimensional <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            My skills span across four dimensions, creating a unique blend of 
            technical mastery, creative innovation, digital fluency, and leadership excellence.
          </p>
        </motion.div>

        {/* Current Dimension Display */}
        <motion.div
          className="current-dimension"
          key={currentDimension}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="dimension-header"
            style={{ borderColor: currentCategory.color }}
          >
            <span className="dimension-emoji">{currentCategory.icon}</span>
            <h3>{currentCategory.title}</h3>
          </div>

          <div className="skills-grid">
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ backgroundColor: currentCategory.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Dimensions Overview */}
        <div className="dimensions-overview">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={index}
              className={`dimension-card ${index === currentDimension ? 'active' : ''}`}
              style={{ borderColor: dimension.color }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="card-icon">{dimension.icon}</span>
              <h4>{dimension.name}</h4>
              <div className="dimension-skills">
                {skillCategories[index].skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="mini-skill">{skill.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 