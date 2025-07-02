import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cog, MessageSquare, Palette } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const expertiseAreas = [
    {
      id: 1,
      name: 'Web and App Development',
      icon: Code,
    },
    {
      id: 2,
      name: 'Workflow Automation',
      icon: Cog,
    },
    {
      id: 3,
      name: 'Natural Language Processing',
      icon: MessageSquare,
    },
    {
      id: 4,
      name: 'Logo Design',
      icon: Palette,
    },
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
            Turning Complex AI Concepts Into Business Solutions
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mb-4">
            With extensive experience across multiple industries, I specialize in implementing AI solutions that transform complex workflows and automate repetitive tasks. My expertise lies in identifying opportunities for automation and developing tailored solutions that deliver measurable business value.
          </motion.p>
          
          <motion.p variants={itemVariants} className="mb-6">
            By combining technical expertise with a deep understanding of business processes, I help organizations streamline their operations and achieve significant efficiency gains through strategic AI implementation and process automation.
          </motion.p>
          
          <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">
            Expertise
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
          >
            {expertiseAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-white rounded-lg p-6 flex items-center shadow-sm transition-all duration-300"
              >
                <div className="text-primary mr-4">
                  <area.icon size={32} />
                </div>
                <p className="text-lg font-medium">{area.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;