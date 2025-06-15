import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Monitor, Bot, Briefcase, FileSpreadsheet, Search } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation solutions that eliminate repetitive tasks, reduce errors, and boost efficiency.",
    features: [
      "Creation of automated workflows",
      "Invoice and delivery note control",
      "Automation of bookings, schedules, and appointments"
    ],
    icon: <Cog className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "automation",
    highlight: true
  },
  {
    id: 3,
    title: "AI Virtual Assistants & Chatbots",
    description: "Enhance customer service and operational efficiency with intelligent assistants that handle inquiries, appointments, and support around the clock.",
    features: [
      "Basic, advanced, or full assistants",
      "Multichannel support",
      "Integration with WhatsApp, web, and social media"
    ],
    icon: <Bot className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "automation",
    highlight: true
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "Get a professional online presence with our custom-built websites that are responsive, user-friendly, and designed to convert visitors into customers.",
    features: [
      "Responsive corporate websites",
      "Landing page websites",
      "Smart form integration"
    ],
    icon: <Monitor className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "digital"
  },
  {
    id: 4,
    title: "Personalized Tech Consulting",
    description: "Get expert guidance tailored to your business needs with our consulting services. We'll help you navigate the digital landscape and implement the right solutions.",
    features: [
      "Free initial diagnostic",
      "Current process analysis",
      "Digital transformation plan design"
    ],
    icon: <Briefcase className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "consulting"
  },
  {
    id: 5,
    title: "Business Optimization & Reporting",
    description: "Gain valuable insights into your business performance with our customized reporting solutions, helping you make data-driven decisions with confidence.",
    features: [
      "Interactive dashboards",
      "KPI and metric control",
      "Automated reporting"
    ],
    icon: <FileSpreadsheet className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "consulting"
  },
  {
    id: 6,
    title: "Digital Visibility",
    description: "Increase your online presence and reach more potential customers with our digital visibility services that help you stand out in a crowded marketplace.",
    features: [
      "Basic website SEO",
      "Google My Business setup",
      "Web analytics integration"
    ],
    icon: <Search className="h-14 w-14 text-gialoma-gold" />,
    link: "#contact",
    category: "digital"
  }
];

const categories = {
  all: "All Services",
  automation: "Automation",
  digital: "Digital Presence",
  consulting: "Consulting"
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleServiceClick = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  const handleConsultationClick = () => {
    // Open TidyCal booking page in a new tab
    window.open('https://tidycal.com/gialomals/solicita-una-consulta', '_blank');
  };

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="services" className="section-padding bg-white overflow-hidden pb-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Automation without supervision is like a car without a driver</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto">
            We offer a range of specialized services designed to streamline your business operations 
            and enhance your digital presence.
          </p>
        </div>

        {/* Filter Buttons - Same height as original carousel navigation area */}
        <div className="relative mb-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1 justify-center">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 md:px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm md:text-base ${
                    activeFilter === key
                      ? 'bg-gialoma-gold text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid - Maintains same content area height as carousel */}
        <div className="relative" style={{ minHeight: '560px' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[560px] ${
                  service.highlight ? 'border-2 border-gialoma-gold bg-white' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gialoma-gold text-white text-xs px-3 py-1 rounded-bl-lg font-medium relative">
                    Popular
                  </div>
                )}
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className={`transition-all duration-300 ${
                      hoveredCard === service.id ? 'transform scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title - Justified text */}
                  <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black flex items-center justify-center" 
                      style={{ minHeight: '60px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description - Justified text */}
                  <p className="text-gialoma-darkgray mb-5 text-justify text-sm md:text-base overflow-visible" 
                     style={{ minHeight: '100px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.description}
                  </p>
                  
                  {/* Features section - Justified text */}
                  <div className="flex-grow mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2">•</span>
                          <span className="text-gialoma-darkgray text-sm md:text-base text-justify" style={{ wordBreak: 'break-word' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button - Same styling as original */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className={`transition-all duration-300 flex items-center w-full justify-center group ${
                        service.highlight 
                          ? 'bg-gialoma-gold text-white border-gialoma-gold hover:bg-gialoma-darkgold' 
                          : 'text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white'
                      }`}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Learn More 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section - Exact same spacing as original */}
        <div className="mt-8 text-center">
          <p className="text-xl text-gialoma-darkgray mb-8 max-w-3xl mx-auto font-medium">
            Need a specialized solution? We offer custom services tailored to your specific business needs.
          </p>
          
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white text-lg px-8 py-3"
            onClick={handleConsultationClick}
          >
            Request a Consultation
          </Button>
        </div>
      </div>

      <style jsx>{`
        /* Preserve all original CSS custom properties and classes */
        .text-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #d4af37;
        }
        
        .text-gialoma-gold {
          color: #d4af37;
        }
        
        .text-gialoma-darkgray {
          color: #6b7280;
        }
        
        .text-gialoma-black {
          color: #1f2937;
        }
        
        .bg-gialoma-gold {
          background-color: #d4af37;
        }
        
        .bg-gialoma-darkgold {
          background-color: #b8941f;
        }
        
        .border-gialoma-gold {
          border-color: #d4af37;
        }
        
        .hover\\:bg-gialoma-gold:hover {
          background-color: #d4af37;
        }
        
        .hover\\:bg-gialoma-darkgold:hover {
          background-color: #b8941f;
        }
        
        .hover\\:bg-gray-200:hover {
          background-color: #e5e7eb;
        }
        
        /* Responsive adjustments matching original */
        @media (max-width: 640px) {
          .service-card-title {
            font-size: 1.1rem;
          }
          .service-card-description {
            font-size: 0.9rem;
          }
          .service-card-feature {
            font-size: 0.9rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 1024px) and (min-width: 641px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;