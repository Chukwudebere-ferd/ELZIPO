import React from "react";
import "./about.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaFigma, } from "react-icons/fa";
import { SiFirebase, SiMongodb,  SiTailwindcss, SiExpress, SiFlutter} from "react-icons/si";

export default function About() {
  return (
    <div className="page about-minimal main-container">
      <header className="about-header-minimal fade-in-up">
        <p className="label">A Little Bit About Me</p>
        <h1 className="about-title-serif">I'm a Developer <br /> & Thinker.</h1>
      </header>

      <section className="about-content-minimal fade-in-up" style={{ animationDelay: '0.1s' }}>
        <p className="about-bio-minimal">
          I'm a <strong>Full Stack Developer</strong> with over 3 years of experience. 
          I specialize in building high-performing, modern, and responsive web applications. 
          I believe in clean code, purposeful design, and building things that solve real problems.
        </p>
        
        <div className="about-skills-minimal">
          <p className="label">Tech Stack</p>
          <div className="skills-list-minimal">
            <span>React.js</span>
            <span>Flutter</span>
            <span>Node.js</span>
            <span>Firebase</span>
            <span>MongoDB</span>
            <span>SQL</span>
            <span>Python</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </section>

      <footer className="about-footer-minimal fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="muted">Currently based in Enugu, Nigeria.</p>
        <div className="social-links-minimal">
          <a href="https://github.com/Chukwudebere-ferd" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://x.com/elzipoferd" target="_blank" rel="noopener noreferrer">TWITTER</a>
          <a href="https://wa.me/2349047594112" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        </div>
      </footer>
    </div>
  );
}
