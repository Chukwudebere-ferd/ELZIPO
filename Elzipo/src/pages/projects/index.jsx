import React from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: "COOU Connect",
    image: "https://i.postimg.cc/LssGNnKV/Screenshot-2025-10-10-014247.png",
    description:
      "A dynamic social networking platform designed exclusively for the students (COOU). It serves as a central hub for students to  share updates, and interact in a familiar campus environment.",
    link: "https://www.coouconnect.live",
    resources: ["React", "Firebase", "CSS3", "typescript", "tailwind"],
  },
  {
    id: 2,
    title: "Schoenstatt Blog",
    image: "https://i.postimg.cc/Sss1758k/Screenshot-2025-10-10-013900.png",
    description:
      "This global site offers extensive content, including a 'Youth' section that highlights international activities, events, and initiatives.",
    link: "https://www.schoenstattvictoriousyouth.com",
    resources: ["React", "Blogger API", "Firebase", "Custom CSS", "mongodb", "typescript"],
  },
  {
    id: 3,
    title: "VitaleanersFX",
    image: "https://i.postimg.cc/kXzVntwn/Screenshot-2025-10-10-015214.png",
    description:
      "A smart crypto dashboard where users can sign in to view live prices, trade, and track profits in real-time with simulated authentication.",
    link: "https://vitalearnersfx.vercel.app",
    resources: ["React", "Chart.js", "supabase", "tailwind", "django", "typescript"],
  },
{
  id:4,
  title:"UNIKFITS",
  image:"https://i.postimg.cc/NfyV0Dmg/Screenshot-2025-11-30-033726.png",
  description:
  "UNIKFITS is an e-commerce platform that offers a wide range of clothing and accessories. It features user authentication, product browsing, and a secure checkout process.",
  link:"https://unikfits.vercel.app",
  resources:["React","Node.js","Express","MongoDB","CSS3","typescript","tailwind"],
  },
];

const Projects = () => {
  return (
    <>
    <div className="page projects-page">
  <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="resources">
              <h4>Resources Used:</h4>
              <ul>
                {project.resources.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            <button onClick={() => window.open(project.link, "_blank")}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
    
</div>

    
</>
  );
};

export default Projects;
