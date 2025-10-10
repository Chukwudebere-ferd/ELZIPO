import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/background";
import Hero from "./components/hero";
import Navbar from "./components/nav";
import Socials from "./components/socials";
import Stack from "./components/stack";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Background />

      {/* 👇 Only display on Home page */}
      {location.pathname === "/" && (
        <>
          <Socials />
          <Stack />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
