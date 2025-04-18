
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digital Transformation",
    description: "Transform your business operations with our comprehensive digital solutions. We analyze your current processes, identify opportunities for improvement, and implement cutting-edge technologies to drive efficiency and growth.",
    features: [
      "Business Process Analysis",
      "Technology Stack Assessment",
      "Custom Digital Strategy",
      "Implementation & Training",
      "Continuous Improvement"
    ],
    image: "/placeholder.svg",
    link: "/services/digital-transformation"
  },
  {
    id: 2,
    title: "Custom Software Development",
    description: "Tailor-made software solutions to address your unique business challenges. Our experienced development team creates scalable, secure, and user-friendly applications that align perfectly with your specific requirements.",
    features: [
      "Requirements Analysis",
      "User-Centered Design",
      "Agile Development",
      "Quality Assurance",
      "Ongoing Support & Maintenance"
    ],
    image: "/placeholder.svg",
    link: "/services/custom-software"
  },
  {
    id: 3,
    title: "AI & Automation",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights. Our AI solutions help you make data-driven decisions, optimize operations, and create exceptional customer experiences.",
    features: [
      "AI Strategy Consultation",
      "Machine Learning Models",
      "Process Automation",
      "Predictive Analytics",
      "Intelligent Chatbots"
    ],
    image: "/placeholder.svg",
    link: "/services/ai-automation"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gialoma-darkgray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive technology services designed to optimize your operations, boost productivity, and drive business growth through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gialoma-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gialoma-gold">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="text-gialoma-lightgold border-gialoma-lightgold hover:bg-gialoma-lightgold hover:text-gialoma-black transition-colors flex items-center"
                  onClick={() => window.location.href = service.link}
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Need a specialized solution not listed above? We offer custom services tailored to your specific business needs.
          </p>
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-lightgold text-white hover:text-gialoma-black"
            onClick={() => window.location.href = "/services"}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
