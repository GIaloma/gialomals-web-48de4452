
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [activeContent, setActiveContent] = useState(0);

  const philosophyContents = [
    {
      title: "Our Ethics",
      content: "Humanizing technology: We believe AI is here to serve us, not replace us. Our goal is to help you work less on repetitive tasks and more on what matters."
    },
    {
      title: "Our Philosophy",
      content: "Gialoma Life Solutions believes that when people get their time back, incredible things happen: their businesses don't just grow, they explode. We're not just technology, we're the catalyst that turns lost time into multiplied income and fulfilled lives."
    }
  ];

  const nextContent = () => {
    setActiveContent((prev) => (prev + 1) % philosophyContents.length);
  };

  const prevContent = () => {
    setActiveContent((prev) => (prev - 1 + philosophyContents.length) % philosophyContents.length);
  };

  const currentContent = philosophyContents[activeContent];

  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gialoma-black">
              Our Name, Our Vision
            </h2>
            <div className="w-24 h-1 bg-gialoma-gold mx-auto mb-8"></div>
            <p className="text-xl text-gialoma-text-on-gray max-w-3xl mx-auto text-justify">
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
                <p className="text-gialoma-darkgray-accessible text-lg text-justify">
                  <span className="text-gialoma-black font-bold">Gianro</span> + <span className="text-gialoma-darkgray-accessible font-bold">Paloma</span> = <span className="text-gialoma-gold-accessible font-bold text-xl">GIALOMA</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">The Foundation</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg text-justify">
                  "<span className="text-gialoma-gold-accessible font-bold">Loma</span>" represents <span className="text-gialoma-darkgray-accessible">stability</span> and <span className="text-gialoma-darkgray-accessible">growth</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">The Mission</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg text-justify">
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
          
          {/* Philosophy Section with Content Switcher */}
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
              
              {/* Content Header with Navigation */}
              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={prevContent}
                  className="bg-gialoma-gold hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 mr-4"
                  aria-label="Previous content"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <h3 className="text-2xl font-bold text-gialoma-black">
                  {currentContent.title}
                </h3>
                
                <button
                  onClick={nextContent}
                  className="bg-gialoma-gold hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 ml-4"
                  aria-label="Next content"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Content Area */}
              <p className="text-xl text-gialoma-darkgray-accessible leading-relaxed transition-all duration-300 text-justify">
                {currentContent.content.includes('catalyst') ? (
                  <>
                    {currentContent.content.split('explode')[0]}
                    <strong className="text-gialoma-gold-accessible">explode</strong>
                    {currentContent.content.split('explode')[1].split('catalyst')[0]}
                    <strong className="text-gialoma-gold-accessible">catalyst</strong>
                    {currentContent.content.split('catalyst')[1].split('multiplied income')[0]}
                    <strong className="text-gialoma-gold-accessible">multiplied income</strong>
                    {currentContent.content.split('multiplied income')[1].split('fulfilled lives')[0]}
                    <strong className="text-gialoma-gold-accessible">fulfilled lives</strong>
                    {currentContent.content.split('fulfilled lives')[1]}
                  </>
                ) : currentContent.content.includes('Humanizing') ? (
                  <>
                    <strong className="text-gialoma-gold-accessible">Humanizing</strong>
                    {currentContent.content.split('Humanizing')[1].split('serve us')[0]}
                    <strong className="text-gialoma-gold-accessible">serve us</strong>
                    {currentContent.content.split('serve us')[1].split('replace us')[0]}
                    <strong className="text-gialoma-gold-accessible">replace us</strong>
                    {currentContent.content.split('replace us')[1].split('matters')[0]}
                    <strong className="text-gialoma-gold-accessible">matters</strong>
                    {currentContent.content.split('matters')[1]}
                  </>
                ) : (
                  currentContent.content
                )}
              </p>
              
              {/* Content Indicators */}
              <div className="mt-6 flex justify-center space-x-2">
                {philosophyContents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveContent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeContent 
                        ? 'bg-gialoma-gold' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View ${philosophyContents[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
