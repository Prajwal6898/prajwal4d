import React from 'react'
import './Skills.css'

// Four core skill areas representing Prajwal4D
const skillCategories = [
  {
    title: 'Technical Mastery',
    skills: ['AutoCAD', 'Blender', 'Custom Plugin Development', '3D Modeling', 'Technical Documentation'],
  },
  {
    title: 'Innovation & Design',
    skills: ['UI/UX Design', 'Creative Problem Solving', 'Design Systems', 'Prototyping', 'Visual Communication'],
  },
  {
    title: 'Digital Integration',
    skills: ['React.js', 'Node.js', 'AI Integration', 'Web Development', 'API Development'],
  },
  {
    title: 'Project Leadership',
    skills: ['Team Management', 'R&D Strategy', 'Project Planning', 'Quality Assurance', 'Innovation Management'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills minimal">
      <h2 className="skills__title">Core Skills</h2>
      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skills__card">
            <h3 className="skills__card-title">{cat.title}</h3>
            <ul className="skills__list">
              {cat.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 