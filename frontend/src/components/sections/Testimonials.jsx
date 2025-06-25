import React from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = ({ currentDimension }) => {
  const testimonials = [
    {
      id: 1,
      name: "Anshu Bharadwaj",
      title: "Former IAS Officer",
      location: "Delhi, India",
      rating: 5,
      text: "Professional, and knowledgeable. Prajwal is an excellent tutor. His strengths are - Excellent knowledge on all aspects of Blender. He can innovate and improvise to find efficient solutions. He is very professional. He works with a high level of commitment and dedication. He is very punctual. He is ethical and honest in dealing with clients.",
      featured: true
    },
    {
      id: 2,
      name: "Asad Naveed",
      title: "Real Estate Personality",
      location: "UAE",
      rating: 5,
      text: "Extremely skilled and talented, amazing to work with and always available and flexible and willing to go the extra mile."
    },
    {
      id: 3,
      name: "Jason Sustain",
      title: "Researcher/Mathematician",
      location: "Brisbane, Australia",
      rating: 5,
      text: "Prajwal is brilliant to work with. He started straight away and understood the scope of the project. He was always available to message and was very responsive, replying quickly."
    },
    {
      id: 4,
      name: "Rich Estabrook",
      title: "3D Landscape Project",
      location: "Sacramento, United States",
      rating: 5,
      text: "Prajwal made a 3D map model for my Dickerson Wharf, Alaska construction project. He completed my project on time and understood exactly what I wanted. I recommend him for his 3D skills and his excellent communication."
    },
    {
      id: 5,
      name: "Chris Okey",
      title: "Project Manager",
      location: "Pflugerville, United States",
      rating: 5,
      text: "Gave the extra effort to meet the project expectations. Provided great feedback and suggested options based on experience."
    },
    {
      id: 6,
      name: "Moiz Alvi",
      title: "Business Owner",
      location: "GREENACRE, Australia",
      rating: 5,
      text: "Prajwal was great and I'd happily recommend him. He was able to understand my requirements quickly and deliver high quality outputs."
    },
    {
      id: 7,
      name: "Ahmed",
      title: "Developer",
      location: "Ras El-Bar City, Egypt",
      rating: 5,
      text: "It was great chance to collaborate with mr.Kaundal he did a quick precise job and I'm looking for working with him again for sure."
    },
    {
      id: 8,
      name: "David Ferringer",
      title: "Construction Professional",
      location: "Mercer, United States",
      rating: 5,
      text: "I had a project that had some challenging reference materials. Prajwal was able to translate measurements and fuzzy pictures to refine a building model. I will be working with him again."
    },
    {
      id: 9,
      name: "Prav Singh",
      title: "Woodlea Games",
      location: "Huddersfield, United Kingdom",
      rating: 5,
      text: "Excellent work from Prajwal. He fixed my broken rigs in a very short space of time and left me with an excellent final product."
    },
    {
      id: 10,
      name: "Farrukh Zaib",
      title: "Creative Professional",
      location: "Pakistan",
      rating: 5,
      text: "Excellent Artist with Remarkable Skills."
    },
    {
      id: 11,
      name: "MenKou",
      title: "Client",
      location: "Tunis, Tunisia",
      rating: 5,
      text: "I appreciate your goal achievement."
    },
    {
      id: 12,
      name: "Rahul",
      title: "Student",
      location: "India",
      rating: 5,
      text: "Best tutor for 3D animation. The best!"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'star star--filled' : 'star'}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ))
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <div className="section-header">
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">What Clients Say</h2>
          <div className="section-underline"></div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${testimonial.featured ? 'testimonial-card--featured' : ''}`}
            >
              <div className="testimonial-card__header">
                <Quote className="testimonial-quote-icon" size={24} />
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                  <span className="rating-text">{testimonial.rating}.0</span>
                </div>
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-title">{testimonial.title}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__footer">
          <div className="upwork-badge">
            <div className="upwork-icon">
              <span>U</span>
            </div>
            <span className="upwork-text">5★ Upwork Rating</span>
          </div>
          <a 
            href="https://www.upwork.com/freelancers/prajwal4d" 
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Upwork Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 