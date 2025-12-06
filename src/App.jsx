import './App.css'

function App() {
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
            <h1>I bridge digital art and engineering.</h1>
            <p className="tagline">Taking projects from concept sketch to automated, production-ready software.</p>

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

          <footer>
            <a href="mailto:hello@prajwal4d.com">Get in touch</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
