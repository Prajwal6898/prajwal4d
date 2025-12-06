import './App.css'

function App() {
  const timelineItems = [
    { year: '2019', title: 'Started Freelancing', desc: '3D modeling & design' },
    { year: '2020', title: 'Full-Stack Dev', desc: 'Web applications' },
    { year: '2021', title: 'Upwork Top Rated', desc: '100+ projects delivered' },
    { year: '2022', title: 'AI Integration', desc: 'ML & automation' },
    { year: '2023', title: 'Tech Consulting', desc: 'Enterprise solutions' },
    { year: 'Now', title: 'Building Products', desc: 'SaaS & tools' },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVentures Inc.',
      platform: 'upwork',
      avatar: 'https://placehold.co/80x80/2a2a2a/707070?text=SM',
      text: 'Exceptional work on our 3D product configurator. Prajwal delivered beyond expectations with clean code and stunning visuals. Will definitely hire again.',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Product Manager, StartupXYZ',
      platform: 'upwork',
      avatar: 'https://placehold.co/80x80/2a2a2a/707070?text=JC',
      text: 'Built our entire dashboard from scratch. Fast communication, great problem-solving skills, and delivered on time. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Student',
      platform: 'Teacheron',
      avatar: 'https://placehold.co/80x80/2a2a2a/707070?text=MG',
      text: 'Amazing tutor! Made complex React concepts easy to understand. Patient and knowledgeable. My coding skills improved dramatically.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Founder, GameStudio',
      platform: 'upwork',
      avatar: 'https://placehold.co/80x80/2a2a2a/707070?text=DP',
      text: 'Prajwal created incredible game assets for our indie project. The attention to detail and texture quality was outstanding.',
      rating: 5,
    },
  ]

  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <span className="logo">Prajwal 4D</span>
          <nav>
            <a href="https://linkedin.com/in/prajwal4d" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </header>

      <div className="content">
        <div className="container">
          <main>
            <div className="intro">
              <div className="intro-text">
                <h1>I bridge digital art and engineering.</h1>
                <p className="tagline">Taking projects from concept sketch to automated, production-ready software.</p>
              </div>
            </div>
          </main>
        </div>

        <div className="container">
          <main>
            <section>
              <h2>What I do</h2>
              <ul>
                <li><strong>3D Creation</strong> — Props, characters, game assets, 4K textures, renders</li>
                <li><strong>Interactive</strong> — Unity, Three.js, WebGL, AR/VR</li>
                <li><strong>Full-Stack</strong> — React, Next.js, Supabase, REST & GraphQL</li>
                <li><strong>Automation</strong> — Apps Script, CAD tools, Python/Node pipelines</li>
                <li><strong>AI & Analytics</strong> — Embeddings, dashboards, predictive models</li>
              </ul>
            </section>

            <section>
              <h2>How I work</h2>
              <p>Rapid prototypes, stakeholder validation, polished deliverables. R&D mindset with ops focus.</p>
            </section>

            <p className="result">Striking assets. Performant code. Streamlined processes.</p>
          </main>
        </div>

        {/* Timeline - Full Width */}
        <section className="timeline-section">
          <h2>Journey</h2>
          <div className="timeline">
            <div className="timeline-line"></div>
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <strong className="timeline-title">{item.title}</strong>
                  <span className="timeline-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials - Grid Layout */}
        <section className="testimonials-section">
          <h2>Client Feedback</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                {testimonial.platform === 'upwork' ? (
                  <img src="/Upwork-logo.svg" alt="Upwork" className="platform-logo" />
                ) : (
                  <span className="platform-badge">{testimonial.platform}</span>
                )}
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-footer">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <strong className="testimonial-name">{testimonial.name}</strong>
                      <span className="testimonial-role">{testimonial.role}</span>
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

              </div>
    </div>
  )
}

export default App
