import React from 'react';
import { FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";
import '../styles/socials.css'

const Socials = () => {
  return (
    <div className="socials-container fade-in">
      <div className="socials-line"></div>
      <div className="socials-links">
        <a 
          href="https://wa.me/2349047594112" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a 
          href="https://x.com/elzipoferd?t=TcpKQMXzWrJYLSpWJF2Fdg&s=09" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="Twitter / X"
        >
          <FaTwitter />
        </a>
        
        <a 
          href="https://github.com/Chukwudebere-ferd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Socials;
