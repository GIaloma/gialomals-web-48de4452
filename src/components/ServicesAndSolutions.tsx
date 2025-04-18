
import React from 'react';
import { Clock, Users, ChartBar, Globe, HeartPulse, Lightbulb, Cog, Monitor, Bot, FileSpreadsheet, Briefcase, Search } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface SolutionItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Process Automation",
    icon: <Cog className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Creation of automated workflows",
      "Invoice and delivery note control",
      "Automation of bookings, schedules, and appointments"
    ]
  },
  {
    id: 2,
    title: "Web Design & Development",
    icon: <Monitor className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Responsive corporate websites",
      "Landing page websites",
      "Smart form integration",
      "Scalable and manageable websites"
    ]
  },
  {
    id: 3,
    title: "AI Virtual Assistants & Chatbots",
    icon: <Bot className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Basic, advanced, and full assistants depending on the package",
      "Multichannel support",
      "Integration with WhatsApp, web, and social media"
    ]
  },
  {
    id: 4,
    title: "Personalized Tech Consulting",
    icon: <Briefcase className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Free initial diagnostic",
      "Current process analysis",
      "Digital transformation plan design"
    ]
  },
  {
    id: 5,
    title: "Business Optimization & Reporting",
    icon: <FileSpreadsheet className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Interactive dashboards",
      "KPI and metric control",
      "Automated reporting"
    ]
  },
  {
    id: 6,
    title: "Digital Visibility",
    icon: <Search className="w-10 h-10 text-gialoma-gold" />,
    items: [
      "Basic website SEO",
      "Google My Business setup",
      "Web analytics integration"
    ]
  }
];

const solutions: SolutionItem[] = [
  {
    id: 1,
    title: "Time Saving",
    icon: <Clock className="w-10 h-10 text-white" />,
    items: [
      "Avoid repetitive tasks through automation",
      "Invoicing and appointment processes without manual intervention"
    ]
  },
  {
    id: 2,
    title: "Improved Customer Service",
    icon: <Users className="w-10 h-10 text-white" />,
    items: [
      "Instant responses with AI chatbots",
      "Forms and online booking in minutes"
    ]
  },
  {
    id: 3,
    title: "Greater Business Control",
    icon: <ChartBar className="w-10 h-10 text-white" />,
    items: [
      "Real-time visibility of sales, expenses, and metrics",
      "Intuitive dashboards from any device"
    ]
  },
  {
    id: 4,
    title: "Increased Digital Visibility",
    icon: <Globe className="w-10 h-10 text-white" />,
    items: [
      "Optimized websites that rank on Google",
      "Active presence on social media and business listings"
    ]
  },
  {
    id: 5,
    title: "Less Stress, More Order",
    icon: <HeartPulse className="w-10 h-10 text-white" />,
    items: [
      "All data centralized and accessible",
      "Effortless reports and automated insights"
    ]
  },
  {
    id: 6,
    title: "Tech Guidance Tailored to Your Level",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    items: [
      "If you're analog, we'll guide you step by step",
      "If you're digital, we'll help you scale"
    ]
  }
];

const ServicesAndSolutions = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gialoma-gold mr-2">•</span>
                      <span className="text-gialoma-darkgray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How we free up your time and improve your life
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto opacity-90">
              We don't just provide services - we deliver tangible solutions that make a real difference in your business and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.id} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20"
              >
                <div className="flex justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-white">
                  {solution.title}
                </h3>
                <ul className="space-y-2">
                  {solution.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndSolutions;
