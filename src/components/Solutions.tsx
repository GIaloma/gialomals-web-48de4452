import React, { useState } from 'react';
import { Clock, Users, BarChart3, Globe, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-12 w-12 text-white" />,
    title: "Quality time is not a luxury, it's a necessity",
    description: "Reclaim your most valuable resource: time. Our solutions streamline processes so you can focus on what truly matters.",
    benefits: [
      "Automate repetitive tasks",
      "AI implementation for accurate results"
    ],
    link: "#contact",
    category: "efficiency"
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: "Don't seek technical perfection, seek human authenticity",
    description: "Enhance your customer experience with tools that allow you to respond quickly, professionally, and consistently across all channels.",
    benefits: [
      "Instant responses with AI chatbots",
      "Forms and online booking"
    ],
    link: "#contact",
    category: "experience"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-white" />,
    title: "Technology for Human Fulfillment",
    description: "Stay on top of your business with real-time insights and comprehensive dashboards that give you visibility into all aspects of your operations.",
    benefits: [
      "Real-time visibility of sales, expenses, and metrics",
      "Intuitive dashboards"
    ],
    link: "#contact",
    category: "growth"
  },
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    title: "Online visibility is no longer optional",
    description: "Stand out in the digital landscape with optimized online presence that helps potential customers find and trust your business.",
    benefits: [
      "Optimized websites that appear on Google",
      "Active presence on social media and business directories"
    ],
    link: "#contact",
    category: "experience"
  },
  {
    icon: <Heart className="h-12 w-12 text-white" />,
    title: "We don't optimize processes, we optimize lives",
    description: "Reduce business anxiety and create organizational harmony with systems that centralize information and automate reporting.",
    benefits: [
      "All data centralized and accessible",
      "Effortless reports and automated insights"
    ],
    link: "#contact",
    category: "growth"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    title: "It's not about automating everything, but about automating intelligently",
    description: "Whether you're starting from scratch or looking to optimize, our approach adapts to your technical comfort level and business maturity.",
    benefits: [
      "If you're analog, we'll guide you step by step",
      "If you're digital, we'll help you scale"
    ],
    link: "#contact",
    category: "efficiency"
  }
];

const categories = {
  efficiency: {
    name: "Efficiency",
    description: "Optimize your time and processes",
    icon: <Clock className="h-5 w-5" />
  },
  experience: {
    name: "Experience",
    description: "Improve customer experience", 
    icon: <Users className="h-5 w-5" />
  },
  growth: {
    name: "Growth",
    description: "Drive business growth",
    icon: <BarChart3 className="h-5 w-5" />
  }
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('efficiency');

  const handleSolutionClick = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  const handleScheduleConsultation = () => {
    // Open TidyCal booking page in a new tab
    window.open('https://tidycal.com/gialomals/programa-una-consulta', '_blank');
  };

  const filteredSolutions = solutions.filter(solution => solution.category === activeTab);

  return (
    <section id="solutions" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            We have automated what can be automated to humanize what is human
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our solutions deliver real impact by solving concrete problems and providing tangible benefits that transform how you work and live.
          </p>
        </div>

        <div className="relative">
          {/* Tab Navigation - Replaces the navigation arrows area */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-wrap gap-1 justify-center">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 md:px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-white text-gialoma-gold shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <div className="text-center">
                    <div className="font-semibold text-base md:text-lg">{category.name}</div>
                    <div className="text-sm opacity-80 hidden md:block">{category.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content area - Centered cards taking full space */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-8">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col"
                  style={{ 
                    minHeight: "650px",
                    height: "650px" 
                  }}
                >
                  {/* Icon section - fixed height */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-5 rounded-full">
                      {solution.icon}
                    </div>
                  </div>
                  
                  {/* Title section - fixed height */}
                  <div className="h-24 flex items-center justify-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white text-center leading-tight">
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Description section - fixed height */}
                  <div className="h-28 mb-6">
                    <p className="text-white/90 text-base md:text-lg text-justify leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Benefits section - flexible height but contained */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white mr-3 flex-shrink-0 text-lg">•</span>
                          <span className="text-white/90 text-base md:text-lg text-justify leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button section - fixed at bottom */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors text-base py-6"
                      onClick={() => handleSolutionClick(solution.link)}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto font-medium">
            Ready to experience these benefits in your business? Let's start with a conversation about your needs.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90 text-lg md:text-xl px-8 py-4"
            onClick={handleScheduleConsultation}
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