
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Monitor, Bot, Briefcase, FileSpreadsheet, Search } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';

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
  const renderServiceCard = (service: typeof services[0], index: number) => (
    <div 
      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-center mb-6">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black h-auto min-h-[60px] flex items-center justify-center">
          {service.title}
        </h3>
        <p className="text-gialoma-darkgray mb-5 text-center h-auto min-h-[100px]">
          {service.description}
        </p>
        
        <div className="mb-6 flex-grow">
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-gialoma-gold mr-2">•</span>
                <span className="text-gialoma-darkgray">{feature}</span>
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
  );

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

        <Carousel 
          items={services}
          renderItem={renderServiceCard}
          cardMinWidth="330px"
          cardHeight="auto"
          showPagination={true}
          itemClassName="min-h-[520px]"
        />
        
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
    </section>
  );
};

export default Services;
