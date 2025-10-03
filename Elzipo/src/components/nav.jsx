import '../styles/nav.css';
import { FaFolderPlus, FaEnvelope, FaUser, FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <a href="#projects" className="nav-item">
        <FaFolderPlus /> <span>Projects</span>
      </a>
      <a href="#about" className="nav-item">
        <FaUser /> <span>About</span>
      </a>
      <a href="#contact" className="nav-item">
        <FaEnvelope /> <span>Contact</span>
      </a>
    </nav>
  );
};

export default Navbar;
