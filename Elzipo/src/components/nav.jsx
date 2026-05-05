import { Link, useLocation } from "react-router-dom";
import { FaFolderPlus, FaEnvelope, FaUser, FaHome } from "react-icons/fa";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="nav-header">
      <nav className="nav-minimal main-container">
        <Link to="/" className="nav-brand">ELZIPO</Link>
        <div className="nav-links-minimal">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>HOME</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>PROJECTS</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>ABOUT</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
