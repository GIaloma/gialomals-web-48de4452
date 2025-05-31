import React from 'react';
import { Rocket, ShieldCheck, Lightbulb, BarChart4, Users, LayoutDashboard } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="soluciones" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Solutions</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            We offer a range of technology solutions designed to streamline your operations and free up your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Rocket className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Automation</h3>
            <p className="text-gialoma-darkgray">Automate repetitive tasks to reduce errors and free up valuable time for strategic initiatives.</p>
          </div>

          {/* Solution Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <ShieldCheck className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Cybersecurity</h3>
            <p className="text-gialoma-darkgray">Protect your business from cyber threats with our comprehensive security solutions and expert support.</p>
          </div>

          {/* Solution Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">AI Solutions</h3>
            <p className="text-gialoma-darkgray">Leverage the power of artificial intelligence to gain insights, improve decision-making, and drive innovation.</p>
          </div>

          {/* Solution Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <BarChart4 className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Data Analytics</h3>
            <p className="text-gialoma-darkgray">Transform raw data into actionable insights with our advanced analytics tools and consulting services.</p>
          </div>

          {/* Solution Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Users className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Collaboration Tools</h3>
            <p className="text-gialoma-darkgray">Enhance teamwork and communication with our suite of collaboration tools designed for modern businesses.</p>
          </div>

          {/* Solution Card 6 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <LayoutDashboard className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Custom Software</h3>
            <p className="text-gialoma-darkgray">Get tailor-made software solutions that perfectly fit your unique business needs and processes.</p>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
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

export default Solutions;
