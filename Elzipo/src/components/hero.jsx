import { useState, useEffect } from 'react'
import { getAllProjects } from '../services/projectService'
import NowPlaying from './NowPlaying'
import '../styles/hero.css'

const Hero = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const firebaseProjects = await getAllProjects()
        if (firebaseProjects && firebaseProjects.length > 0) {
          setProjects(firebaseProjects)
        }
      } catch (err) {
        console.error("Error loading projects:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section className="page main-container">
      <header className="hero-header fade-in-up">
        <h1 className="hero-name">Elzipo</h1>
        <p className="hero-subtitle">Software engineer</p>
        <p className="hero-bio">
          Software engineer. Building exceptional digital experiences.
        </p>
        <div className="hero-socials">
          <a href="https://github.com/Chukwudebere-ferd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="dot">·</span>
          <a href="mailto:elzipo106@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <span className="dot">·</span>
          <a href="https://x.com/elzipoferd" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <NowPlaying />
      </header>

      <section className="projects-section fade-in-up" style={{ animationDelay: '0.1s' }}>
        <p className="label">Projects</p>
        {loading && <p className="muted">Loading projects...</p>}
        <div className="projects-list">
          {projects.map((project, index) => {
            const hostname = new URL(project.link).hostname;
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-row-left">
                  <div className="project-row-header">
                    <span className="project-row-title">{project.title}</span>
                    <span className="project-row-domain">{hostname}</span>
                    <span className="project-row-arrow">↗</span>
                  </div>
                  <p className="project-row-description">{project.description}</p>
                </div>
              </a>
            );
          })}
          {!loading && projects.length === 0 && (
            <p className="muted">No projects yet.</p>
          )}
        </div>
      </section>
      
      <footer className="page-footer fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="muted">&copy; {new Date().getFullYear()} ELZIPO</p>
      </footer>
    </section>
  )
}

export default Hero
