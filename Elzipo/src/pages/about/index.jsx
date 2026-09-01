import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="page about-minimal main-container">
      <header className="about-header-minimal fade-in-up">
        <p className="label">A Little Bit About Me</p>
        <h1 className="about-title-serif">Chukwudebere</h1>
      </header>

      <section className="about-content-minimal fade-in-up" style={{ animationDelay: '0.1s' }}>
        <p className="about-bio-minimal">
          Software engineer. Building <a href="#">ElziStudio</a> and other projects.
        </p>
      </section>

      <footer className="about-footer-minimal fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="social-links-minimal">
          <a href="https://github.com/Chukwudebere-ferd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:chukwudebere@example.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://x.com/elzipoferd" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
