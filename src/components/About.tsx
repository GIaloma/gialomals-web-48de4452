
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
            <p className="text-xl text-gialoma-darkgray max-w-3xl mx-auto">
              Discover the story behind Gialoma and how our mission is reflected in everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: The Names */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gialoma-black mb-3">The Names</h3>
                <p className="text-gialoma-darkgray">The origin of our identity</p>
              </div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <span className="font-bold text-xl text-blue-700">Gianro</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">+</div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                  <span className="font-bold text-xl text-purple-700">Paloma</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">=</div>
                <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-2 border-gialoma-gold transform group-hover:scale-105 transition-transform duration-300">
                  <span className="font-bold text-2xl text-gialoma-gold">GIALOMA</span>
                </div>
              </div>
            </div>

            {/* Card 2: The Foundation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <path d="M21 6H3"></path>
                    <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6"></path>
                    <path d="M8 11h8"></path>
                    <path d="M8 15h5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gialoma-black mb-3">The Foundation</h3>
                <p className="text-gialoma-darkgray">Our fundamental values</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gialoma-gold">Loma</span>
                <p className="text-sm text-gialoma-darkgray mt-2">Spanish word that inspires</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 mr-3">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <span className="font-bold text-green-700 text-lg">Stability</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 mr-3">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="font-bold text-emerald-700 text-lg">Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: The Mission */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gialoma-black mb-3">The Mission</h3>
                <p className="text-gialoma-darkgray">Our purpose and vision</p>
              </div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                  <span className="font-bold text-lg text-purple-700">AI Technology</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">×</div>
                <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <span className="font-bold text-lg text-orange-700">Human Design</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">=</div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-lg border-2 border-gialoma-gold transform group-hover:scale-105 transition-transform duration-300">
                  <span className="font-bold text-gialoma-gold text-lg leading-tight">
                    Live More<br/>
                    Work Less
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
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
              <p className="text-xl text-gialoma-darkgray leading-relaxed">
                We believe in using <strong className="text-gialoma-gold">Artificial Intelligence</strong> and <strong className="text-gialoma-gold">automation</strong> to design life solutions that empower you to <strong className="text-gialoma-gold">live more and work less</strong>.
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
