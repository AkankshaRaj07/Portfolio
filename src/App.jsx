import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Particle from "./components/Particle";
import "./index.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col relative`}>
      <Particle />
      <Navbar />

      <main className="grow pt-20" id={load ? "no-scroll" : "scroll"}>
        <Home />
        <About />
        <Projects />
        <Resume />
      </main>

      <Footer />
    </div>
  );
}

export default App;
