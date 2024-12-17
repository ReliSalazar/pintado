import { useState } from "react";
import Navbar from "./components/Navbar";
import FullScreenMenu from "./components/FullScreenMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const menuOptions = ["Home", "About", "Services", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <FullScreenMenu isOpen={menuOpen} menuOptions={menuOptions} />

      <div className="snap-start">
        <Home />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Services />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
}

export default App;
