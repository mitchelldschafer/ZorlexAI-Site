import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ProcessStep as ProcessStepType } from '../../types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isAlternate: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isAlternate }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons];
  
  const isEven = index % 2 === 0;
  
  return (
    <div className={`md:grid md:grid-cols-12 items-center relative mb-10 md:mb-0 md:min-h-[150px]`}>
      {/* Left content for even items on larger screens */}
      {isAlternate && (
        <>
          <div
            className={`${
              isEven ? 'md:col-span-5 md:text-right md:pr-12' : 'md:col-span-5 md:col-start-8 md:text-left md:pl-12'
            } md:order-1 order-2 mb-6 md:mb-0`}
          >
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-neutral">{step.description}</p>
          </div>
          
          {/* Center number */}
          <div className="md:col-span-2 md:flex justify-center order-1 md:order-2 hidden">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
              {index + 1}
            </div>
          </div>
          
          {/* Right content for odd items on larger screens */}
          <div
            className={`${
              isEven ? 'md:col-span-5 md:col-start-8 md:text-left md:pl-12' : 'md:col-span-5 md:text-right md:pr-12'
            } order-3 hidden md:block`}
          >
            <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center justify-center">
              {IconComponent && <IconComponent size={32} className="text-primary" />}
            </div>
          </div>
        </>
      )}
      
      {/* For mobile or non-alternate layout */}
      {!isAlternate && (
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-neutral">{step.description}</p>
          </div>
        </div>
      )}
      
      {/* Mobile layout */}
      <div className="md:hidden flex items-center space-x-4 mb-6">
        <div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
            {index + 1}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;