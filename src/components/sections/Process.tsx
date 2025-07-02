import React from 'react';
import { processSteps } from '../../data/process';
import ProcessStep from '../ui/ProcessStep';

const Process: React.FC = () => {
  return (
    <section id="process" className="section bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary opacity-5 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            My Process
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Work Together
          </h2>
          
          <p className="max-w-2xl mx-auto text-neutral">
            A collaborative, results-focused approach that ensures we deliver AI solutions aligned with your business objectives.
          </p>
        </div>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={step.id} 
                step={step} 
                index={index} 
                isAlternate={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;