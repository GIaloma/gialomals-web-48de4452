
import React, { useRef, useEffect, useState } from 'react';
import { Clock, Users, ChartBar, Globe, HeartPulse, Lightbulb, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-12 w-12 text-gialoma-gold" />,
    title: "Quality time is not a luxury, it's a necessity",
    description: "Reclaim your most valuable resource: time. Our solutions streamline processes so you can focus on what truly matters.",
    benefits: [
      "Avoid repetitive tasks through automation",
      "AI implementation for accurate results"
    ],
    link: "#contact"
  },
  {
    icon: <Users className="h-12 w-12 text-gialoma-gold" />,
    title: "Don't seek technical perfection, seek human authenticity",
    description: "Enhance your customer experience with tools that allow you to respond quickly, professionally, and consistently across all channels.",
    benefits: [
      "Instant responses with AI chatbots",
      "Forms and online booking in minutes"
    ],
    link: "#contact"
  },
  {
    icon: <ChartBar className="h-12 w-12 text-gialoma-gold" />,
    title: "Technology for Human Fulfillment",
    description: "Stay on top of your business with real-time insights and comprehensive dashboards that give you visibility into all aspects of your operations.",
    benefits: [
      "Real-time visibility of sales, expenses, and metrics",
      "Intuitive dashboards"
    ],
    link: "#contact"
  },
  {
    icon: <Globe className="h-12 w-12 text-gialoma-gold" />,
    title: "Online visibility is no longer optional",
    description: "Stand out in the digital landscape with optimized online presence that helps potential customers find and trust your business.",
    benefits: [
      "Optimized websites that rank on Google",
      "Active presence on social media and business listings"
    ],
    link: "#contact"
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-gialoma-gold" />,
    title: "We don't optimize processes, we optimize lives",
    description: "Reduce business anxiety and create organizational harmony with systems that centralize information and automate reporting.",
    benefits: [
      "All data centralized and accessible",
      "Effortless reports and automated insights"
    ],
    link: "#contact"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-gialoma-gold" />,
    title: "It's not about automating everything, but about automating intelligently",
    description: "Whether you're starting from scratch or looking to optimize, our approach adapts to your technical comfort level and business maturity.",
    benefits: [
      "If you're analog, we'll guide you step by step",
      "If you're digital, we'll help you scale"
    ],
    link: "#contact"
  }
];

const Solutions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
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
          setCurrentIndex(0);
        } else {
          // Increment scroll position (increased by 15%)
          scrollRef.current.scrollLeft += 1.15;
          // Update current index based on scroll position
          const cardWidth = 340; // approximate card width + gap
          setCurrentIndex(Math.round(scrollLeft / cardWidth));
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
      const newIndex = currentIndex > 0 ? currentIndex - 1 : solutions.length - 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const newIndex = currentIndex < solutions.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };

  const handleSolutionClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            We have automated what can be automated to humanize what is human
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 min-w-[330px] flex flex-col"
                style={{ height: "560px" }}
              >
                {/* Top section with fixed height */}
                <div>
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white/20 p-4 rounded-full">
                      {solution.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white text-center flex items-center justify-center min-h-[80px]">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/90 mb-4 text-sm md:text-base">
                    {solution.description}
                  </p>
                </div>
                
                {/* Middle section with flex-grow */}
                <div className="flex-grow">
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-white mr-2 flex-shrink-0">•</span>
                        <span className="text-white/90 text-sm md:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom section with fixed position */}
                <div className="mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    className="bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors"
                    onClick={() => handleSolutionClick(solution.link)}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
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
        
        <div className="mt-8 text-center">
          <p className="text-xl text-white/95 mb-6 max-w-3xl mx-auto font-medium">
            Ready to experience these benefits in your business? Let's start with a conversation about your needs.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90 text-lg px-8 py-3"
            onClick={scrollToContact}
          >
            Schedule a Consultation
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
