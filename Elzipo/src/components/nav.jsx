import "../styles/nav.css";
import { FaFolderPlus, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/projects" className="nav-item">
        <FaFolderPlus /> <span>Projects</span>
      </Link>

      <Link to="/about" className="nav-item">
        <FaUser /> <span>About</span>
      </Link>

      <Link to="/contact" className="nav-item">
        <FaEnvelope /> <span>Contact</span>
      </Link>
    </nav>
  );
};

export default Navbar;
