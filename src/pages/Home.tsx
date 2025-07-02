import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Services />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Process />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;