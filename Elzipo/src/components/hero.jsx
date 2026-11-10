import { useState, useEffect } from 'react'
import { getAllProjects } from '../services/projectService'
import NowPlaying from './NowPlaying'
import ThemeToggle from './ThemeToggle'
import '../styles/hero.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M4 12 12 4M4 4h8v8" />
  </svg>
);

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
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="site-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <div className="site-nav__links">
            <a href="/" className="site-nav__link" aria-current="page">Home</a>
            <ThemeToggle />
          </div>
        </nav>
        <main id="main" tabIndex={-1}>
          <header className="intro">
            <h1>Elzipo<span className="text-accent">.</span></h1>
            <p className="intro__bio">
              Software engineer. I make things for the web and beyond.
            </p>
            <div className="social-links" aria-label="Find me online">
              <a href="https://github.com/Chukwudebere-ferd" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
              <a href="mailto:elzipo106@gmail.com" target="_blank" rel="noreferrer">Email <ArrowIcon /></a>
              <a href="https://x.com/elzipoferd" target="_blank" rel="noreferrer">Twitter <ArrowIcon /></a>
            </div>
            <div className="intro__music">
              <NowPlaying />
            </div>
          </header>

          <section className="about" aria-labelledby="about-heading">
            <h2 id="about-heading">A little about me</h2>
            <div className="about__copy">
              <p>
                I write code for the web and beyond — building a lot of stuff
                along the way.
              </p>
              <p>
                Off screen, I like quiet moments on the internet and time
                spent offline.
              </p>
            </div>
          </section>

          <section aria-labelledby="projects-heading">
            <div className="projects-heading">
              <h2 id="projects-heading">Projects</h2>
            </div>
            {loading && <p className="muted" style={{ fontSize: 13, marginTop: 16 }}>Loading projects…</p>}
            <ul className="projects-list">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="project-link__name">{project.title}</span>
                    <span className="project-link__description">{project.description}</span>
                    <svg className="project-link__arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                      <path d="M4 12 12 4M4 4h8v8" />
                    </svg>
                  </a>
                </li>
              ))}
              {!loading && projects.length === 0 && (
                <li style={{ paddingBlock: 22, fontSize: 13, color: 'rgb(var(--color-muted))' }}>
                  No projects yet.
                </li>
              )}
            </ul>
          </section>

          <footer className="site-footer">
            <span>© MMXXVI Elzipo</span>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Hero
