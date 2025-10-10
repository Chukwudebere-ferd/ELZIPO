import { Link, useLocation } from "react-router-dom";
import { FaFolderPlus, FaEnvelope, FaUser, FaHome } from "react-icons/fa";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();
  const isProjects = location.pathname === "/projects";

  return (
    <nav className={`navbar ${isProjects ? "projects-nav" : ""}`}>
      <Link to="/" className="nav-item"><FaHome /> <span>Home</span></Link>
      <Link to="/projects" className="nav-item"><FaFolderPlus /> <span>Projects</span></Link>
      <Link to="/about" className="nav-item"><FaUser /> <span>About</span></Link>
      <Link to="/contact" className="nav-item"><FaEnvelope /> <span>Contact</span></Link>
    </nav>
  );
};

export default Navbar;
