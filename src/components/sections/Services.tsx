import React, { useState } from 'react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Services
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Solutions Tailored to Your Business
          </h2>
          
          <p className="max-w-2xl mx-auto text-neutral">
            From strategic planning to implementation and optimization, we provide end-to-end AI services designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              expanded={expandedId === service.id}
              toggleExpand={() => toggleExpand(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;