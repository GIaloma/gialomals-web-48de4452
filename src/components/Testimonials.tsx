
import React from 'react';
import { Star, CheckCircle, Clock, Shield } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Gialoma's agenda automation completely transformed my practice. I used to lose 2 hours daily managing appointments across different platforms. Now everything syncs automatically with Google Calendar.",
    author: "Dr. Elena Martinez",
    position: "Clinical Psychologist",
    rating: 5,
    highlight: "Saves 2 hours daily",
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: 2,
    quote: "As a healthcare professional, patient data security is paramount. Gialoma strictly complies with GDPR and never stores sensitive information. I work confidently knowing everything is protected.",
    author: "Dr. Carlos Ruiz",
    position: "Medical Specialist",
    rating: 5,
    highlight: "GDPR compliance guaranteed",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 3,
    quote: "I had appointments scattered across Doctoralia, my physical calendar, and manual reminders. Gialoma unified everything into one view. My patients get automatic confirmations and I have more time for what matters.",
    author: "Maria Gonzalez",
    position: "Physical Therapist",
    rating: 5,
    highlight: "Complete agenda unification",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: 4,
    quote: "The integration was seamless. In less than a week I went from chaos with multiple calendars to having everything perfectly organized. Technical support was exceptional, guiding me step by step.",
    author: "Dr. Jose Luis Fernandez",
    position: "Dentist",
    rating: 5,
    highlight: "1-week implementation",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: 5,
    quote: "I was amazed by how easy it is to revoke access if needed. In less than 48 hours I can cut any connection. This flexibility gives me total control over my professional data.",
    author: "Ana Lopez",
    position: "Occupational Therapist",
    rating: 5,
    highlight: "Total access control",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 6,
    quote: "I manage three different practices and each had its own system. Gialoma connected Quirónsalud, my private agenda, and Doctoralia into one calendar. Revolutionary for my practice.",
    author: "Dr. Miguel Serrano",
    position: "Orthopedic Surgeon",
    rating: 5,
    highlight: "3 practices unified",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding gold-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Healthcare Professionals Trust Us
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Over 150 healthcare professionals have transformed their agenda management with our solutions. 
            Discover how we've simplified their processes while maintaining maximum security.
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-lg font-semibold text-white ml-2">4.9/5</span>
            <span className="text-white/70 text-sm">(150+ reviews)</span>
          </div>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header with rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl">"</div>
              </div>

              {/* Quote */}
              <p className="text-gialoma-darkgray mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {testimonial.quote}
              </p>

              {/* Highlight Feature */}
              <div className="bg-gialoma-beige rounded-lg p-3 mb-4 flex items-center gap-2">
                <div className="text-gialoma-gold">
                  {testimonial.icon}
                </div>
                <span className="text-sm font-semibold text-gialoma-black">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gialoma-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-center mb-6 text-white">
            Guarantees for Healthcare Professionals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">GDPR Compliant</h4>
              <p className="text-sm text-white/80">Strict compliance with data protection regulations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Revocation &lt; 48h</h4>
              <p className="text-sm text-white/80">Total control over access with immediate revocation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">No Storage</h4>
              <p className="text-sm text-white/80">Real-time processing without storing sensitive data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
