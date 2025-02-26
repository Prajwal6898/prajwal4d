import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!titleRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Make the effect more subtle for a professional look
      const rotateX = (clientY / innerHeight - 0.5) * 10;
      const rotateY = (clientX / innerWidth - 0.5) * 10;
      
      titleRef.current.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 ref={titleRef} className="hero-title">
              <div className="hero-title-line">
                <span className="hero-title-main">Prajwal</span>
                <span className="hero-title-accent">4D</span>
              </div>
              <div className="hero-title-line">
                <span className="hero-title-descriptor">Digital Polymath</span>
              </div>
            </h1>
            <p className="hero-services">
              <span className="service-tag">3D Visualization</span>
              <span className="service-tag">Web Development</span>
              <span className="service-tag">Data Visualization</span>
              <span className="service-tag">AI Integration</span>
            </p>
            <p className="hero-quote">"Blending dimensions of code, design, data and AI to craft experiences that transcend the ordinary—where technology meets artistry in the fourth dimension."</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Portfolio</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <div className="hero-image-frame">
                <div className="hero-image"></div>
                <div className="hero-image-accent"></div>
              </div>
              <div className="hero-badge">
                <span className="badge-number">5★</span>
                <span className="badge-text">Upwork<br/>Rating</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Who I Am</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text-container">
              <p className="about-text">
                I am a multidisciplinary digital creator specializing in 3D visualization, web development, and data analytics.
                My work bridges the gap between technology and artistry, creating immersive experiences that engage and inspire.
              </p>
              <p className="about-text">
                With expertise in Blender, Unity, Unreal Engine, and full-stack web development, I bring a unique fourth-dimensional 
                perspective to every project. My approach combines technical precision with creative vision, delivering solutions 
                that exceed expectations and push boundaries.
              </p>
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5★</span>
                <span className="stat-label">Upwork Rating</span>
              </div>
            </div>
          </div>
          
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="skill-title">3D Visualization</h3>
              <ul className="skill-list">
                <li>Blender 5</li>
                <li>Unity Game Engine</li>
                <li>Unreal Engine</li>
                <li>Revit</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Web Development</h3>
              <ul className="skill-list">
                <li>Full Stack Development</li>
                <li>Email Automation</li>
                <li>Responsive Design</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Data & AI</h3>
              <ul className="skill-list">
                <li>PowerBI</li>
                <li>D3.js & Chart.js</li>
                <li>Data Visualization</li>
                <li>AI Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image project-image-1"></div>
              <div className="project-content">
                <h3 className="project-title">3D Animation</h3>
                <p className="project-description">Creating stunning 3D animations with depth, movement, and emotion.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image project-image-2"></div>
              <div className="project-content">
                <h3 className="project-title">Motion Graphics</h3>
                <p className="project-description">Dynamic motion graphics and kinetic typography that captivate viewers.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image project-image-3"></div>
              <div className="project-content">
                <h3 className="project-title">Visual Effects</h3>
                <p className="project-description">High-end VFX and compositing work for film and commercial projects.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image project-image-4"></div>
              <div className="project-content">
                <h3 className="project-title">4D Concepts</h3>
                <p className="project-description">Exploring time-based media and fourth-dimensional design concepts.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
          
          <div className="projects-cta">
            <a href="#" className="btn btn-primary">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Client Feedback</span>
            <h2 className="section-title">What Clients Say</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonial-card featured-testimonial">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Professional, and knowledgeable. Prajwal is an excellent tutor. His strengths are - Excellent knowledge on all aspects of Blender. He can innovate and improvise to find efficient solutions. He is very professional. He works with a high level of commitment and dedication. He is very punctual. He is ethical and honest in dealing with clients."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Anshu Bharadwaj</h4>
                  <p className="testimonial-project">Former IAS Officer</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Extremely skilled and talented, amazing to work with and always available and flexible and willing to go the extra mile."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Asad Naveed</h4>
                  <p className="testimonial-project">Real Estate Personality, UAE</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Excellent Artist with Remarkable Skills."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Farrukh Zaib</h4>
                  <p className="testimonial-project">Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Excellent work from Prajwal. He fixed my broken rigs in a very short space of time and left me with an excellent final product. Thank you, I will..."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Prav Singh</h4>
                  <p className="testimonial-project">Huddersfield, United Kingdom</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Gave the extra effort to meet the project expectations. Provided great feedback and suggested options based on experience."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Chris</h4>
                  <p className="testimonial-project">Pflugerville, United States</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Prajwal was great and I'd happily recommend him. He was able to understand my requirements quickly and deliver high quality outputs."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Moiz Alvi</h4>
                  <p className="testimonial-project">GREENACRE, Australia</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"It was great chance to collaborate with mr.Kaundal he did a quick precise job and I'm looking for working with him again for sure."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Ahmed</h4>
                  <p className="testimonial-project">Ras El-Bar City, Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"I had a project that had some challenging reference materials. Prajwal was able to translate measurements and fuzzy pictures to refine a building model. I will be working with him..."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. David Ferringer</h4>
                  <p className="testimonial-project">Mercer, United States</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Prajwal is brilliant to work with. He started straight away and understood the scope of the project. He was always available to message and was very responsive, replying quickly."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Jason Sustain</h4>
                  <p className="testimonial-project">Researcher/Mathematician, Brisbane, Australia</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Prajwal made a 3D map model for my Dickerson Wharf, Alaska construction project. He completed my project on time and understood exactly what I wanted. I recommend..."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Mr. Rich Estabrook</h4>
                  <p className="testimonial-project">Sacramento, United States</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"I appreciate your goal achievement."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Ms. MenKou</h4>
                  <p className="testimonial-project">Tunis, Tunisia</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <p className="testimonial-text">"Best tutor for 3D animation. The best!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Rahul</h4>
                  <p className="testimonial-project">Blender Tutoring</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonials-upwork">
            <div className="upwork-badge">
              <span className="upwork-logo"></span>
              <span className="upwork-rating">5★ Upwork Rating</span>
            </div>
            <a href="#" className="btn btn-secondary">View Upwork Profile</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Let's Create Together</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="contact-content">
            <div className="contact-text-container">
              <p className="contact-text">
                Ready to bring your vision to life? Let's discuss your project and create something extraordinary.
                Whether you need a stunning 3D animation, dynamic motion graphics, or cutting-edge visual effects,
                I'm here to help transform your ideas into reality.
              </p>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" className="form-textarea" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <span>prajwal4d@email.com</span>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>New York, NY</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 