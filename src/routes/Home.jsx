import React from 'react';
import About from '../pages/About';
import Projects from '../pages/Work';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <>
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
