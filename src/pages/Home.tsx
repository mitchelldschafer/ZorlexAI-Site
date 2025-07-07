import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Founder from '../components/sections/Founder';
import Process from '../components/sections/Process';
import Contact from '../components/sections/Contact';

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <div>
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Founder />
      <Process />
      <Contact />
    </div>
  );
};

export default Home;