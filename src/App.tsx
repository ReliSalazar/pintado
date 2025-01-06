import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
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
