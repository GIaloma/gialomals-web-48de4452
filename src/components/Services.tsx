import React from 'react';
import { Rocket, ShieldCheck, Users, LayoutDashboard, BarChartBig, MessageSquare } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            We offer a range of services designed to empower your business with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <Rocket className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">AI Solutions</h3>
            <p className="text-gialoma-darkgray">
              Custom AI development to automate tasks, improve decision-making, and create new opportunities.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ShieldCheck className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Cybersecurity</h3>
            <p className="text-gialoma-darkgray">
              Protect your business with our comprehensive cybersecurity services, including threat detection and data protection.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Users className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">IT Consulting</h3>
            <p className="text-gialoma-darkgray">
              Expert IT consulting services to align your technology strategy with your business goals.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <LayoutDashboard className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Automation</h3>
            <p className="text-gialoma-darkgray">
              Automate repetitive tasks and streamline your workflows with our automation solutions.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <BarChartBig className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Data Analytics</h3>
            <p className="text-gialoma-darkgray">
              Unlock the power of your data with our data analytics services, providing insights for better decision-making.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <MessageSquare className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Chatbot Development</h3>
            <p className="text-gialoma-darkgray">
              Engage your customers with AI-powered chatbots that provide instant support and improve customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
