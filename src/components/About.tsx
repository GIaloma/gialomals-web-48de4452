
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gialoma-black">
              Our Name, Our Vision
            </h2>
            <div className="w-24 h-1 bg-gialoma-gold mx-auto mb-8"></div>
            <p className="text-xl text-gialoma-text-on-gray max-w-3xl mx-auto">
              Discover the story behind Gialoma and how our mission is reflected in every aspect of what we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Story Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">The Names</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  <span className="text-gialoma-black font-bold">Gianro</span> + <span className="text-gialoma-darkgray-accessible font-bold">Paloma</span> = <span className="text-gialoma-gold-accessible font-bold text-xl">GIALOMA</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">The Foundation</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  "<span className="text-gialoma-gold-accessible font-bold">Loma</span>" represents <span className="text-gialoma-darkgray-accessible">stability</span> and <span className="text-gialoma-darkgray-accessible">growth</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">The Mission</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  <span className="text-gialoma-black">AI</span> + <span className="text-gialoma-darkgray-accessible">Human Design</span> = <span className="text-gialoma-gold-accessible font-bold">Life Solutions</span>
                </p>
              </div>
            </div>
            
            {/* Right Side - Brand Display */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="text-center text-gialoma-black">
                  <div className="text-6xl font-bold mb-4 tracking-wider">
                    G<span className="text-gialoma-gold-accessible font-bold">IA</span>LOMA
                  </div>
                  <div className="text-2xl text-gialoma-darkgray-accessible mb-8">
                    Life Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-black font-semibold">AI Technology</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-darkgray-accessible font-semibold">Human Focus</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-darkgray-accessible font-semibold">Automation</div>
                    </div>
                    <div className="bg-gradient-to-br from-gialoma-gold/10 to-gialoma-gold/20 rounded p-4 border border-gialoma-gold">
                      <div className="text-gialoma-gold-accessible font-semibold">Freedom</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/40 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gialoma-black mb-4">Our Philosophy</h3>
              <p className="text-xl text-gialoma-darkgray-accessible leading-relaxed">
                Gialoma Life Solutions believes that when people get their time back, incredible things happen: their businesses don't just grow, they <strong className="text-gialoma-gold-accessible">explode</strong>. We're not just technology, we're the <strong className="text-gialoma-gold-accessible">catalyst</strong> that turns lost time into <strong className="text-gialoma-gold-accessible">multiplied income</strong> and <strong className="text-gialoma-gold-accessible">fulfilled lives</strong>.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-2 text-gialoma-gold">
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;