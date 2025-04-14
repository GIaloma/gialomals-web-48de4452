
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About Gialoma Life Solutions</span>
            </h2>
            <p className="text-gialoma-darkgray text-lg mb-6">
              At Gialoma Life Solutions, we believe that technology should simplify life, not complicate it. Our mission is to develop innovative solutions that free up your time so you can focus on what truly matters.
            </p>
            <p className="text-gialoma-darkgray text-lg mb-6">
              Founded by experts in technology and business optimization, our team brings decades of combined experience to every project. We understand the challenges businesses face in today's fast-paced digital world, and we're here to help you navigate them efficiently.
            </p>
            <p className="text-gialoma-darkgray text-lg">
              Our approach combines cutting-edge technology with human-centered design to create solutions that are not only powerful but also intuitive and easy to use.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="About Gialoma Life Solutions" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
