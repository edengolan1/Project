import React from "react";
import NavBar from "../components/NavBar";
import Video from "../components/Video";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <NavBar />
      <Video />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
