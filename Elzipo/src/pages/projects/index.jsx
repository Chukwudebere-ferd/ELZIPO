import React, { useState, useEffect } from "react";
import "./projects.css";
import { getAllProjects } from "../../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const firebaseProjects = await getAllProjects();
        if (firebaseProjects && firebaseProjects.length > 0) {
          setProjects(firebaseProjects);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("Error loading projects from Firebase:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="page projects-minimal main-container">
      <header className="projects-header-minimal fade-in-up">
        <p className="label">Selected Works</p>
        <h1 className="projects-title-serif">Projects</h1>
      </header>

      {loading && <p className="muted">Loading projects...</p>}

      <div className="projects-list-minimal">
        {projects.map((project, index) => (
          <div 
            className="project-row fade-in-up" 
            key={project.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-row-content">
              <div className="project-row-header">
                <h2 className="project-row-title">{project.title}</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                  ↗
                </a>
              </div>
              
              <div className="project-row-meta">
                <span className="label-small">{Array.isArray(project.resources) ? project.resources.join(" / ") : ""}</span>
              </div>
              
              <p className="project-row-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
