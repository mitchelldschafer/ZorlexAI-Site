import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
    </>
  );
};

export default Home;