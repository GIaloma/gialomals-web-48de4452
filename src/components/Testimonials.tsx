
import React, { useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Gialoma's solutions have transformed our operations, saving us countless hours each week. Their technology is intuitive and effective.",
    author: "Sarah Johnson",
    position: "Operations Director, TechCorp"
  },
  {
    id: 2,
    quote: "Working with Gialoma has been a game-changer for our business. Their custom software has automated our most time-consuming tasks.",
    author: "Michael Chen",
    position: "CEO, Innovate Inc."
  },
  {
    id: 3,
    quote: "The team at Gialoma truly understands how to leverage technology to save time. Our productivity has increased by 40% since implementing their solutions.",
    author: "Alexandra Rivera",
    position: "CTO, Global Solutions"
  },
  {
    id: 4,
    quote: "The chatbot Gialoma developed for us has revolutionized our customer service. It handles over 70% of inquiries without human intervention.",
    author: "David Patel",
    position: "Customer Service Manager, RetailPlus"
  },
  {
    id: 5,
    quote: "As a small business owner with limited tech knowledge, I appreciated Gialoma's patient guidance. They made digital transformation accessible.",
    author: "Maria Gonzalez",
    position: "Owner, Artisan Bakery"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollLeft >= maxScroll) {
          // Reset to beginning when reaching the end
          scrollContainer.scrollLeft = 0;
        } else {
          // Increment scroll position
          scrollContainer.scrollLeft += 1;
        }
      };
      
      // Set a timer to scroll the container
      const timer = setInterval(handleScroll, 50);
      return () => clearInterval(timer);
    }
  }, []);
  
  return (
    <section id="testimonials" className="section-padding bg-gialoma-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">What Our Clients Say</h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-w-[320px] md:min-w-[350px]"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-gialoma-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gialoma-darkgray mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gialoma-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
