
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Monitor, Bot, Briefcase, FileSpreadsheet, Search, ChevronLeft, ChevronRight } from 'lucide-react';

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
    link: "/services/process-automation"
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "Get a professional online presence with our custom-built websites that are responsive, user-friendly, and designed to convert visitors into customers.",
    features: [
      "Responsive corporate websites",
      "Landing page websites",
      "Smart form integration",
      "Scalable and manageable websites"
    ],
    icon: <Monitor className="h-14 w-14 text-gialoma-gold" />,
    link: "/services/web-development"
  },
  {
    id: 3,
    title: "AI Virtual Assistants & Chatbots",
    description: "Enhance customer service and operational efficiency with intelligent assistants that handle inquiries, appointments, and support around the clock.",
    features: [
      "Basic, advanced, and full assistants depending on the package",
      "Multichannel support",
      "Integration with WhatsApp, web, and social media"
    ],
    icon: <Bot className="h-14 w-14 text-gialoma-gold" />,
    link: "/services/ai-assistants"
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
    link: "/services/tech-consulting"
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
    link: "/services/business-reporting"
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
    link: "/services/digital-visibility"
  }
];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current && isAutoScrolling) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollLeft >= maxScroll) {
          // Reset to beginning when reaching the end
          scrollRef.current.scrollLeft = 0;
        } else {
          // Increment scroll position (increased by 15%)
          scrollRef.current.scrollLeft += 1.15;
        }
      }
    }, 50);
  };
  
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);
  
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What we do for you</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto">
            We offer a range of specialized services designed to streamline your business operations 
            and enhance your digital presence.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-w-[330px] flex flex-col h-[520px]"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Title - Allow text to shrink if needed */}
                  <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black flex items-center justify-center" 
                      style={{ minHeight: '60px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description - Allow text to adjust with smaller font on overflow */}
                  <p className="text-gialoma-darkgray mb-5 text-center text-sm md:text-base overflow-visible" 
                     style={{ minHeight: '100px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.description}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2">•</span>
                          <span className="text-gialoma-darkgray text-sm md:text-base" style={{ wordBreak: 'break-word' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white transition-colors flex items-center w-full justify-center"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gialoma-darkgray mb-6 max-w-2xl mx-auto">
            Need a specialized solution? We offer custom services tailored to your specific business needs.
          </p>
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            onClick={() => window.location.href = "/contact"}
          >
            Request a Free Consultation
          </Button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
        
        /* Responsive font-size adjustments */
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
        }
      `}</style>
    </section>
  );
};

export default Services;
