import Background from "./components/background";
import Hero from "./components/hero";
import Navbar from "./components/nav";
import Socials from "./components/socials";
import Stack from "./components/stack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Background />
      <Socials />
      <Stack />
    </Router>
  );
}

export default App;
