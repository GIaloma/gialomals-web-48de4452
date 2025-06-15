
import React, { useState, useRef } from 'react';
import { Star, CheckCircle, Clock, Shield, ChevronDown, ChevronUp, Users, MapPin } from 'lucide-react';

const testimonials = [
  // First 6 - diversified sectors (healthcare, beauty, hospitality, legal, restaurant, professional)
  {
    id: 1,
    quote: "Gialoma's agenda automation completely transformed my practice. I used to lose 2 hours daily managing appointments across different platforms. Now everything syncs automatically with Google Calendar.",
    author: "Dr. Elena Martinez",
    position: "Clinical Psychologist",
    rating: 5,
    highlight: "Saves 2 hours daily",
    icon: <Clock className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 2,
    quote: "I felt overwhelmed in my own business, managing appointments via WhatsApp, suppliers, and social media. Gialoma helped me implement simple systems that freed up 8 hours weekly. Now I can enjoy bedtime conversations with my daughter again.",
    author: "Lucia Martinez",
    position: "Owner of 'Essence' Salon",
    rating: 5,
    highlight: "8 hours weekly freed up",
    icon: <Clock className="w-5 h-5" />,
    category: "beauty"
  },
  {
    id: 3,
    quote: "Our rural hotel had reservations scattered across Booking, phone calls, and a physical notebook. Gialoma's automatic chatbot now handles 70% of inquiries, and synchronization with our internal system is perfect.",
    author: "Carmen Ruiz",
    position: "Director, Las Encinas Rural Hotel",
    rating: 5,
    highlight: "70% inquiries automated",
    icon: <Users className="w-5 h-5" />,
    category: "hospitality"
  },
  {
    id: 4,
    quote: "As a law firm, we handle very sensitive information. Gialoma automated our appointment system and case tracking without ever compromising confidentiality. Administrative time savings have been 60%.",
    author: "Roberto Vazquez",
    position: "Managing Partner, Vazquez & Associates",
    rating: 5,
    highlight: "60% less administrative time",
    icon: <Shield className="w-5 h-5" />,
    category: "legal"
  },
  {
    id: 5,
    quote: "Our family restaurant had delivery orders on five different platforms. Gialoma unified everything into one central tablet. Errors reduced by 85% and we recovered 3 hours daily to better serve in-person customers.",
    author: "Antonio Jimenez",
    position: "Owner, La Tradición Restaurant",
    rating: 5,
    highlight: "85% fewer errors",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "restaurant"
  },
  {
    id: 6,
    quote: "I was afraid technology would complicate my small accounting business further. Gialoma proved me wrong: simple systems that my clients can use without training. My productivity increased 40% and I can work from home when needed.",
    author: "Isabel Moreno",
    position: "Freelance Accountant",
    rating: 5,
    highlight: "40% more productivity",
    icon: <Clock className="w-5 h-5" />,
    category: "professional"
  },

  // Additional testimonials (collapsed by default) 
  {
    id: 7,
    quote: "As a healthcare professional, patient data security is paramount. Gialoma strictly complies with GDPR and never stores sensitive information. I work confidently knowing everything is protected.",
    author: "Dr. Carlos Ruiz",
    position: "Medical Specialist",
    rating: 5,
    highlight: "GDPR compliance guaranteed",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 8,
    quote: "I had appointments scattered across Doctoralia, my physical calendar, and manual reminders. Gialoma unified everything into one view. My patients get automatic confirmations and I have more time for what matters.",
    author: "Maria Gonzalez",
    position: "Physical Therapist",
    rating: 5,
    highlight: "Complete agenda unification",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 9,
    quote: "The integration was seamless. In less than a week I went from chaos with multiple calendars to having everything perfectly organized. Technical support was exceptional, guiding me step by step.",
    author: "Dr. Jose Luis Fernandez",
    position: "Dentist",
    rating: 5,
    highlight: "1-week implementation",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 10,
    quote: "I manage three different practices and each had its own system. Gialoma connected Quirónsalud, my private agenda, and Doctoralia into one calendar. Revolutionary for my practice.",
    author: "Dr. Miguel Serrano",
    position: "Orthopedic Surgeon",
    rating: 5,
    highlight: "3 practices unified",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 11,
    quote: "I was amazed by how easy it is to revoke access if needed. In less than 48 hours I can cut any connection. This flexibility gives me total control over my professional data.",
    author: "Ana Lopez",
    position: "Occupational Therapist",
    rating: 5,
    highlight: "Total access control",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 12,
    quote: "Our physical therapy center had three locations with incompatible systems. Gialoma created a solution that allows patients to book at any center and us to manage everything from a unified panel. We increased occupancy by 25%.",
    author: "Patricia Sanchez",
    position: "Director, FisioSalud Center",
    rating: 5,
    highlight: "25% more occupancy",
    icon: <MapPin className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 13,
    quote: "My dental clinic handles high patient volume. Gialoma's automation allows me to send automatic reminders, manage cancellations and reschedule appointments without wasting time. My patients are more satisfied and I'm more organized.",
    author: "Dr. Fernando Castillo",
    position: "Dentist",
    rating: 5,
    highlight: "Automatic reminder management",
    icon: <Clock className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 14,
    quote: "As owner of a language academy, I had freelance teachers with changing schedules and students in multiple modalities. Gialoma synchronized everything: in-person classes, online, level tests. A radical change in our operational efficiency.",
    author: "Sofia Morales",
    position: "Director, Lingua Plus Academy",
    rating: 5,
    highlight: "Multi-modality synchronization",
    icon: <Users className="w-5 h-5" />,
    category: "education"
  },
  {
    id: 15,
    quote: "My beauty center had problems with double bookings and schedule confusion among my team of three specialists. With Gialoma each professional sees their individual agenda but I have a global view. Zero conflicts for 6 months now.",
    author: "Valentina Torres",
    position: "Owner, Bellezza Beauty Center",
    rating: 5,
    highlight: "Zero schedule conflicts",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "beauty"
  }
];

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const visibleTestimonials = isExpanded ? testimonials : testimonials.slice(0, 6);

  const handleToggleExpand = () => {
    if (isExpanded && buttonRef.current) {
      // Store the current button position before collapsing
      const buttonPosition = buttonRef.current.getBoundingClientRect().top + window.pageYOffset;
      
      setIsExpanded(false);
      
      // After the state updates and content collapses, scroll to maintain button position
      setTimeout(() => {
        const newButtonPosition = buttonRef.current?.getBoundingClientRect().top + window.pageYOffset;
        if (newButtonPosition && newButtonPosition !== buttonPosition) {
          window.scrollTo({
            top: window.pageYOffset + (newButtonPosition - buttonPosition),
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      setIsExpanded(true);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      healthcare: 'text-blue-600',
      beauty: 'text-pink-600',
      hospitality: 'text-green-600', 
      legal: 'text-purple-600',
      restaurant: 'text-orange-600',
      professional: 'text-indigo-600',
      education: 'text-teal-600'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600';
  };

  const getCategoryBg = (category: string) => {
    const backgrounds = {
      healthcare: 'bg-blue-100',
      beauty: 'bg-pink-100',
      hospitality: 'bg-green-100',
      legal: 'bg-purple-100', 
      restaurant: 'bg-orange-100',
      professional: 'bg-indigo-100',
      education: 'bg-teal-100'
    };
    return backgrounds[category as keyof typeof backgrounds] || 'bg-gray-100';
  };

  return (
    <section id="testimonials" className="section-padding bg-gialoma-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">
            Professionals of All Types Trust Us
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto mb-8">
            Over 300 professionals and small businesses have transformed their management with our solutions. 
            From medical consultations to rural hotels, discover how we've simplified processes while maintaining maximum security.
          </p>
          <div className="flex justify-center items-center gap-2 text-gialoma-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-lg font-semibold text-gialoma-black ml-2">4.9/5</span>
            <span className="text-gialoma-darkgray text-sm">(300+ reviews)</span>
          </div>
        </div>

        {/* Gallery Grid Layout - 6 cards visible on desktop/tablet, responsive to 3-2-1 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >
              {/* Header with rating and category */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl">"</div>
              </div>

              {/* Quote - justified text, flexible growth */}
              <p className="text-gialoma-darkgray mb-6 leading-relaxed text-justify flex-grow">
                {testimonial.quote}
              </p>

              {/* Bottom section - Highlight Feature + Author aligned to bottom */}
              <div className="mt-auto">
                {/* Highlight Feature */}
                <div className={`${getCategoryBg(testimonial.category)} rounded-lg p-3 mb-4 flex items-center gap-2`}>
                  <div className={getCategoryColor(testimonial.category)}>
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
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mb-12">
          <button
            ref={buttonRef}
            onClick={handleToggleExpand}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gialoma-gold text-white rounded-lg hover:bg-gialoma-darkgold transition-colors duration-200 font-semibold shadow-lg"
          >
            {isExpanded ? (
              <>
                Show fewer testimonials
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show more testimonials ({testimonials.length - 6} additional)
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Business Categories */}
        {isExpanded && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12 border border-gialoma-gold/20">
            <h3 className="text-xl font-bold text-center mb-6 text-gialoma-black">
              Sectors We've Transformed
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Healthcare</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Beauty</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Hospitality</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Legal</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Restaurant</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-gialoma-gold" />
                </div>
                <span className="text-sm font-medium text-gialoma-black">Services</span>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gialoma-gold/20">
          <h3 className="text-xl font-bold text-center mb-6 text-gialoma-black">
            Guarantees for All Sectors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-gialoma-gold" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">GDPR Compliant</h4>
              <p className="text-sm text-gialoma-darkgray">Strict compliance with data protection regulations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-gialoma-gold" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">Revocation &lt; 48h</h4>
              <p className="text-sm text-gialoma-darkgray">Total control over access with immediate revocation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-gialoma-gold" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">No Storage</h4>
              <p className="text-sm text-gialoma-darkgray">Real-time processing without storing sensitive data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
