import React from 'react';
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import '../styles/socials.css'

const Socials = () => {
  return (
    <div className="socials">
      <a 
        href="https://wa.me/2349047594112" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaWhatsapp />
      </a>

      <a 
        href="https://x.com/elzipoferd?t=TcpKQMXzWrJYLSpWJF2Fdg&s=09" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
