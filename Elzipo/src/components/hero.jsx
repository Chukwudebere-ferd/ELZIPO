import { Link } from 'react-router-dom'
import '../styles/hero.css'

const Hero = () => {
  return (
    <section className="hero-minimal main-container">
      <div className="hero-content-minimal fade-in-up">
        <p className="label">Software Engineer</p>
        <h1 className="hero-name">Elzipo</h1>
        <p className="hero-bio">
          Building <span className="italic">exceptional</span> digital experiences. 
          Specializing in high-performance web and mobile applications.
        </p>
        <div className="hero-cta-minimal">
          <Link to="/projects" className="cta-link">VIEW PROJECTS →</Link>
        </div>
      </div>
      
      <div className="hero-footer-minimal fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="muted">&copy; {new Date().getFullYear()} ELZIPO</p>
        <p className="muted">ELZIPO106@GMAIL.COM</p>
      </div>
    </section>
  )
}

export default Hero
