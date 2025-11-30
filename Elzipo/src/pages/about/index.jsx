import React from "react";
import "./about.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaFigma, } from "react-icons/fa";
import { SiFirebase, SiMongodb,  SiTailwindcss, SiExpress, SiFlutter} from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="about-banner">
        <img
          src="https://i.postimg.cc/zDgRjSs1/Elzipo-banner.jpg"
          alt="Elzipo Banner"
          className="banner-img"
        />
      </div>

      <section className="about-content">
        <div className="profile-row">
          <img
            className="profile-img"
            src="https://i.postimg.cc/zDgRjSs1/Elzipo-pp.jpg"
            alt="Chukwudebere Ferdinard Ifesinachi"
          />
          <div className="profile-info">
            <h1>Chukwudebere Ferdinard Ifesinachi</h1>
            <p className="bio">
              I'm a <strong>Full Stack Developer</strong> with over 3 years of
              experience in building high-performing, modern, and responsive
              web applications. I specialize in creating seamless user
              experiences powered by solid backend logic — bringing ideas to
              life through clean code and creativity.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill"><FaHtml5 /> HTML5</div>
            <div className="skill"><FaCss3Alt /> CSS3</div>
            <div className="skill"><FaJs /> JavaScript</div>
            <div className="skill"><FaReact /> React.js</div>
            <div className="skill"><SiFlutter /> Flutter</div>
            <div className="skill"><SiTailwindcss /> Tailwind CSS</div>
            <div className="skill"><FaNodeJs /> Node.js</div>
            <div className="skill"><SiExpress /> Express.js</div>
            <div className="skill"><SiMongodb /> MongoDB</div>
            <div className="skill"><SiFirebase /> Firebase</div>
            <div className="skill"><FaDatabase /> SQL</div>
            <div className="skill"><FaPython /> Python</div>
            <div className="skill"><FaGitAlt /> Git & GitHub</div>
            <div className="skill"><FaFigma /> Figma</div>
          </div>
        </div>
      </section>
    </>
  );
}
