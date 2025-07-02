import React from 'react';
import { Code, Cog, MessageSquare, Palette } from 'lucide-react';

const About: React.FC = () => {
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
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          
          <h2 className="text-3xl font-bold mb-6">
            Turning Complex AI Concepts Into Business Solutions
          </h2>
          
          <p className="mb-4">
            With extensive experience across multiple industries, I specialize in implementing AI solutions that transform complex workflows and automate repetitive tasks. My expertise lies in identifying opportunities for automation and developing tailored solutions that deliver measurable business value.
          </p>
          
          <p className="mb-6">
            By combining technical expertise with a deep understanding of business processes, I help organizations streamline their operations and achieve significant efficiency gains through strategic AI implementation and process automation.
          </p>
          
          <h3 className="text-xl font-bold mb-4">
            Expertise
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg p-6 flex items-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-primary mr-4">
                  <area.icon size={32} />
                </div>
                <p className="text-lg font-medium">{area.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;