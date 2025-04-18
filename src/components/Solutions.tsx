
import React from 'react';
import { Clock, Users, ChartBar, Globe, HeartPulse, Lightbulb, ArrowRight } from 'lucide-react';
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
    caseStudy: "A small accounting firm saved 15 hours per week by automating their invoice processing and client appointment scheduling.",
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
    caseStudy: "A real estate agency increased client satisfaction by 40% after implementing our AI chatbots for property inquiries.",
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
    caseStudy: "A retail shop owner increased profitability by 22% after gaining clear visibility into inventory performance and sales trends.",
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
    caseStudy: "A local service provider doubled their new client inquiries after improving their Google visibility and online profiles.",
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
    caseStudy: "A consulting firm eliminated end-of-month reporting stress by implementing automated dashboards that update in real-time.",
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
    caseStudy: "A traditional family business successfully transitioned to digital operations with personalized guidance that respected their pace and culture.",
    link: "/solutions/tech-guidance"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How we free up your time and improve your life
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our solutions deliver real impact by solving concrete problems and providing tangible benefits that transform how you work and live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="mb-5 flex justify-center">
                <div className="bg-white/20 p-4 rounded-full">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{solution.title}</h3>
              <p className="text-white/90 mb-4">{solution.description}</p>
              
              <div className="mb-5">
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-white/5 rounded-md text-sm mb-5 border border-white/10">
                <p className="text-white font-medium mb-2">Success Story:</p>
                <p className="text-white/80">{solution.caseStudy}</p>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-2 border-white text-white hover:bg-white hover:text-gialoma-gold flex items-center w-full justify-center"
                onClick={() => window.location.href = solution.link}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
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
    </section>
  );
};

export default Solutions;
