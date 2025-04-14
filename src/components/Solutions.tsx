
import React from 'react';
import { Clock, Smartphone, Shield, Zap, BarChart, Users } from 'lucide-react';

const solutions = [
  {
    icon: <Clock className="h-10 w-10 text-gialoma-gold" />,
    title: "Time Management",
    description: "Automate repetitive tasks and optimize your workflow to save valuable time."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-gialoma-gold" />,
    title: "Mobile Solutions",
    description: "Access your business tools anywhere, anytime with our mobile-first approach."
  },
  {
    icon: <Shield className="h-10 w-10 text-gialoma-gold" />,
    title: "Security",
    description: "Protect your data with enterprise-grade security solutions."
  },
  {
    icon: <Zap className="h-10 w-10 text-gialoma-gold" />,
    title: "Performance",
    description: "Lightning-fast systems designed for optimal performance and reliability."
  },
  {
    icon: <BarChart className="h-10 w-10 text-gialoma-gold" />,
    title: "Analytics",
    description: "Gain valuable insights with our advanced analytics and reporting tools."
  },
  {
    icon: <Users className="h-10 w-10 text-gialoma-gold" />,
    title: "Collaboration",
    description: "Enhance team productivity with our collaborative platforms and tools."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Innovative Solutions</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            We create technology solutions that streamline operations, enhance productivity, and give you back your most valuable resource: time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm card-hover"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gialoma-black">{solution.title}</h3>
              <p className="text-gialoma-darkgray">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
