
import React from 'react';
import { Clock, Smartphone, Shield, Zap, BarChart, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-10 w-10 text-gialoma-gold" />,
    title: "Time Management",
    description: "Reclaim your most valuable resource with our AI-powered time management solutions. Automate repetitive tasks, streamline workflows, and focus on what truly matters to your business.",
    caseStudy: "A marketing agency reduced administrative work by 65% using our time management solutions.",
    link: "/solutions/time-management"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-gialoma-gold" />,
    title: "Mobile Solutions",
    description: "Access your business tools anywhere, anytime with our mobile-first approach. Our solutions are designed for seamless operation across all devices, providing flexibility and convenience.",
    caseStudy: "A field service company increased technician productivity by 40% after implementing our mobile solutions.",
    link: "/solutions/mobile-solutions"
  },
  {
    icon: <Shield className="h-10 w-10 text-gialoma-gold" />,
    title: "Security",
    description: "Protect your valuable data with our enterprise-grade security solutions. We implement multi-layered security measures to safeguard your information from threats and unauthorized access.",
    caseStudy: "A financial services firm strengthened their data protection and achieved regulatory compliance with our security solutions.",
    link: "/solutions/security"
  },
  {
    icon: <Zap className="h-10 w-10 text-gialoma-gold" />,
    title: "Performance",
    description: "Experience lightning-fast systems designed for optimal performance and reliability. Our solutions are built to handle high-volume operations efficiently, ensuring smooth business processes.",
    caseStudy: "An e-commerce platform reduced page load times by 70% and increased conversions by 25% with our performance optimization.",
    link: "/solutions/performance"
  },
  {
    icon: <BarChart className="h-10 w-10 text-gialoma-gold" />,
    title: "Analytics",
    description: "Gain valuable insights with our advanced analytics and reporting tools. Transform raw data into actionable intelligence to make informed business decisions and identify growth opportunities.",
    caseStudy: "A retail chain increased sales by 30% after implementing our analytics solution to optimize inventory and marketing strategies.",
    link: "/solutions/analytics"
  },
  {
    icon: <Users className="h-10 w-10 text-gialoma-gold" />,
    title: "Collaboration",
    description: "Enhance team productivity with our collaborative platforms and tools. Create a connected work environment that fosters communication, idea sharing, and efficient project management.",
    caseStudy: "A distributed team of 50+ professionals improved project delivery time by 35% using our collaboration tools.",
    link: "/solutions/collaboration"
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
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="bg-gialoma-gold/10 inline-block p-3 rounded-full">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gialoma-black">{solution.title}</h3>
              <p className="text-gialoma-darkgray mb-5">{solution.description}</p>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md text-sm mb-5">
                <p className="text-gialoma-black font-medium mb-2">Success Story:</p>
                <p className="text-gialoma-darkgray">{solution.caseStudy}</p>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-2 border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white flex items-center"
                onClick={() => window.location.href = solution.link}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            onClick={() => window.location.href = "/solutions"}
          >
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
