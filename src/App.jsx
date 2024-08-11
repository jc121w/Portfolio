import Navbar from "./Navbar";
import Hamburger from "./hamburger/Hamburger";
import Hero from "./hero/Hero";
import Contact from "./contact/Contact";
import About from "./about/About";
import { useAnimationControls } from "framer-motion";
import Project from "./project/Project";

function App() {
  const fadeControls = useAnimationControls();
  return (
    <div>
      <section className="home" id="Home">
        <Hamburger animationControl={fadeControls} />
        <Navbar />
        <Hero animationControl={fadeControls} />
      </section>

      <section id="About">
        {" "}
        <About animationControl={fadeControls} />
      </section>

      <section id="Projects">
        <Project animationControl={fadeControls} />
      </section>

      <section id="Contact">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
