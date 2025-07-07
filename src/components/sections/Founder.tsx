import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Founder: React.FC = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="founder" className="section bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full transform -translate-x-32 translate-y-32"></div>
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              Leadership
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Founder
            </h2>
            
            <p className="max-w-2xl mx-auto text-neutral">
              Driving innovation through strategic AI implementation and business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div 
              variants={imageVariants}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <img
                    src="/prof pic 2025.jpg"
                    alt="Mitchell Schafer - Founder of Zorlex AI"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              variants={itemVariants}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mitchell Schafer
              </h3>
              
              <p className="text-lg text-primary font-medium mb-6">
                Founder & AI Strategy Consultant
              </p>
              
              <div className="space-y-4 text-neutral-dark mb-8">
                <p>
                  With a passion for transforming complex business challenges into streamlined, automated solutions, Mitchell founded Zorlex AI to bridge the gap between cutting-edge artificial intelligence and practical business applications.
                </p>
                
                <p>
                  Drawing from extensive experience across multiple industries, Mitchell specializes in identifying automation opportunities that deliver measurable ROI while maintaining the human touch that makes businesses successful.
                </p>
                
                <p>
                  His approach combines deep technical expertise with strategic business insight, ensuring that every AI implementation not only works flawlessly but also drives meaningful growth and efficiency gains for his clients.
                </p>
              </div>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/mitchell-schafer-4972a615b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0077B5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#005885] transition-colors duration-300"
                >
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </a>
                
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Mail size={20} className="mr-2" />
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;