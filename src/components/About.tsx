
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-8 md:mb-0 md:mr-16 md:-ml-6">
            <img 
              src="/lovable-uploads/d00cb800-f381-49d2-8d84-33ae4a851dae.png" 
              alt="Gialoma Life Solutions Logo Explanation" 
              className="w-full rounded-lg shadow-lg transform md:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">
              Our Name, Our Vision
            </h2>
            <div className="text-lg text-gialoma-darkgray space-y-4">
              <p>The name "Gialoma" is a combination of two names: Gianro & Paloma. "Loma" is a Spanish word that we use to inspire stability and growth.</p>
              <p>Our logo represents the fusion of Artificial Intelligence and human-centric design. The interconnected neural network symbolizes how technology can seamlessly integrate into your life, freeing up your time to focus on what matters most.</p>
              <p>We believe in using AI and automation to design life solutions that empower you to live more and work less.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
