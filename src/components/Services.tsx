
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digital Transformation",
    description: "Transform your business operations with our digital solutions.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Custom Software Development",
    description: "Tailor-made software solutions to address your unique challenges.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "AI & Automation",
    description: "Harness the power of AI to automate processes and gain insights.",
    image: "/placeholder.svg",
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gialoma-darkgray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive technology services designed to optimize your operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gialoma-black rounded-lg overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gialoma-gold">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button variant="link" className="text-gialoma-lightgold p-0 flex items-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
