import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and particles */}
      <div className="absolute inset-0 bg-gradient-primary z-0">
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary bg-opacity-20 text-secondary text-sm font-medium mb-2">
              AI Automation Specialist
            </span>
          </motion.div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-5xl sm:text-6xl font-bold mb-6 text-white"
          >
            <span className="block">Zorlex AI</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-primary-light mb-8 max-w-2xl"
          >
            Transforming complex business challenges into powerful automated solutions through custom AI development, workflow optimization, and strategic implementation.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary flex items-center justify-center sm:justify-start cursor-pointer"
            >
              See My Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center sm:justify-start cursor-pointer"
            >
              Let's Connect
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"
      ></motion.div>
      
      {/* Hexagon decorations */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/4 right-10 w-32 h-32 bg-secondary hexagon animate-pulse"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary hexagon animate-pulse"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute top-1/3 left-10 w-16 h-16 bg-secondary-dark hexagon animate-pulse"
      ></motion.div>
    </section>
  );
};

export default Hero;