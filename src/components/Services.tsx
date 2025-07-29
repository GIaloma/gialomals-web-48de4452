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

        {/* Filter Buttons - Mobile Responsive */}
        <div className="relative mb-4">
          <div className="flex justify-center px-2">
            <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1 justify-center max-w-full">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
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

        {/* Services Grid - Mobile Responsive */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-4 px-2 sm:px-0">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[480px] sm:min-h-[520px] lg:h-[560px] ${
                  service.highlight ? 'border-2 border-gialoma-gold bg-white' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gialoma-gold text-white text-xs px-2 sm:px-3 py-1 rounded-bl-lg font-medium relative">
                    Popular
                  </div>
                )}
                
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`transition-all duration-300 ${
                      hoveredCard === service.id ? 'transform scale-110' : ''
                    }`}>
                      <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-gialoma-gold">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 text-gialoma-black leading-tight px-1">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gialoma-darkgray mb-4 sm:mb-5 text-center sm:text-justify text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features section */}
                  <div className="flex-grow mb-3 sm:mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2 flex-shrink-0">•</span>
                          <span className="text-gialoma-darkgray text-sm text-center sm:text-justify leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className={`transition-all duration-300 flex items-center w-full justify-center group text-sm py-3 ${
                        service.highlight 
                          ? 'bg-gialoma-gold text-white border-gialoma-gold hover:bg-gialoma-darkgold' 
                          : 'text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white'
                      }`}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Learn More 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
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

    </section>
  );
};

export default Services;