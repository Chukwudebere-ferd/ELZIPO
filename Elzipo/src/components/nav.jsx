import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="site-nav">
      <nav className="site-nav__links" aria-label="Main navigation">
        <Link to="/" className="site-nav__link" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link>
      </nav>
    </header>
  );
};

export default Navbar;
