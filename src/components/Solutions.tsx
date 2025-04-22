
import React, { useRef, useEffect, useState } from 'react';
import { Clock, Users, ChartBar, Globe, HeartPulse, Lightbulb, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-12 w-12 text-gialoma-gold" />,
    title: "Time Saving",
    description: "Reclaim your most valuable resource: time. Our solutions automate repetitive tasks and streamline processes so you can focus on what truly matters to your business.",
    benefits: [
      "Avoid repetitive tasks through automation",
      "Invoicing and appointment processes without manual intervention"
    ],
    link: "/solutions/time-saving"
  },
  {
    icon: <Users className="h-12 w-12 text-gialoma-gold" />,
    title: "Improved Customer Service",
    description: "Enhance your customer experience with tools that allow you to respond quickly, professionally, and consistently across all channels.",
    benefits: [
      "Instant responses with AI chatbots",
      "Forms and online booking in minutes"
    ],
    link: "/solutions/customer-service"
  },
  {
    icon: <ChartBar className="h-12 w-12 text-gialoma-gold" />,
    title: "Greater Business Control",
    description: "Stay on top of your business with real-time insights and comprehensive dashboards that give you visibility into all aspects of your operations.",
    benefits: [
      "Real-time visibility of sales, expenses, and metrics",
      "Intuitive dashboards from any device"
    ],
    link: "/solutions/business-control"
  },
  {
    icon: <Globe className="h-12 w-12 text-gialoma-gold" />,
    title: "Increased Digital Visibility",
    description: "Stand out in the digital landscape with optimized online presence that helps potential customers find and trust your business.",
    benefits: [
      "Optimized websites that rank on Google",
      "Active presence on social media and business listings"
    ],
    link: "/solutions/digital-visibility"
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-gialoma-gold" />,
    title: "Less Stress, More Order",
    description: "Reduce business anxiety and create organizational harmony with systems that centralize information and automate reporting.",
    benefits: [
      "All data centralized and accessible",
      "Effortless reports and automated insights"
    ],
    link: "/solutions/stress-reduction"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-gialoma-gold" />,
    title: "Tech Guidance Tailored to Your Level",
    description: "Whether you're starting from scratch or looking to optimize, our approach adapts to your technical comfort level and business maturity.",
    benefits: [
      "If you're analog, we'll guide you step by step",
      "If you're digital, we'll help you scale"
    ],
    link: "/solutions/tech-guidance"
  }
];

const Solutions = () => {
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
    <section id="solutions" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How we free up your time and improve your life
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our solutions deliver real impact by solving concrete problems and providing tangible benefits that transform how you work and live.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white focus:outline-none -ml-4"
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
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 min-w-[330px] flex flex-col h-[500px]"
              >
                <div className="mb-5 flex justify-center">
                  <div className="bg-white/20 p-4 rounded-full">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center h-[60px] flex items-center justify-center">{solution.title}</h3>
                <p className="text-white/90 mb-4 h-[120px] overflow-hidden">{solution.description}</p>
                
                <div className="mb-5 flex-grow">
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="mt-auto bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors"
                  onClick={() => window.location.href = solution.link}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white focus:outline-none -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Ready to experience these benefits in your business? Let's start with a conversation about your needs.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90"
            onClick={() => window.location.href = "/contact"}
          >
            Schedule a Free Consultation
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
      `}</style>
    </section>
  );
};

export default Solutions;
