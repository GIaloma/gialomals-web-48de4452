
import React, { useEffect } from 'react';
import BookNavbar from '../components/BookNavbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Download, Star, Users, BookOpen, Clock, Mail } from 'lucide-react';
import CookieBanner from '../components/CookieBanner';

const Book = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Digital Transformation Made Simple - Digital Book | Gialoma Life Solutions";
    
    // Remove existing meta tags
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    const existingTwitterCard = document.querySelector('meta[name="twitter:card"]');
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    
    [existingDescription, existingKeywords, existingOgTitle, existingOgDescription, existingOgImage, existingTwitterCard, existingCanonical].forEach(el => {
      if (el) el.remove();
    });

    // Add new meta tags
    const metaTags = [
      { name: 'description', content: 'Practical guide to business digital transformation. Learn to implement AI and automation without technical knowledge. Instant download for only €5.99.' },
      { name: 'keywords', content: 'digital transformation, business automation, artificial intelligence, AI for business, digitalization, business technology, Gialoma, digital book' },
      { property: 'og:title', content: 'Digital Transformation Made Simple - Digital Book | Gialoma' },
      { property: 'og:description', content: 'Your practical guide to leveraging cutting-edge technologies in your business without technical overwhelm. Proven strategies from Gialoma founders.' },
      { property: 'og:image', content: '/lovable-uploads/book-cover-en.png' },
      { property: 'og:url', content: 'https://gialoma.com/book' },
      { property: 'og:type', content: 'product' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Digital Transformation Made Simple - Digital Book' },
      { name: 'twitter:description', content: 'Practical guide to implement AI and automation in your business. Only €5.99.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Paloma Firgaira, Gianro Compagno' },
      { name: 'language', content: 'en' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://gialoma.com/book';
    document.head.appendChild(canonical);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Digital Transformation Made Simple",
      "author": [
        {
          "@type": "Person",
          "name": "Paloma Firgaira"
        },
        {
          "@type": "Person", 
          "name": "Gianro Compagno"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Gialoma Life Solutions"
      },
      "datePublished": "2025-04-01",
      "inLanguage": "en",
      "genre": "Business Technology",
      "numberOfPages": 320,
      "bookFormat": "EBook",
      "offers": {
        "@type": "Offer",
        "price": "5.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://gialoma.com/book"
      },
      "description": "Your practical guide to leveraging AI and automation to transform your business operations and improve efficiency.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "74"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const addedElements = document.querySelectorAll('meta[name], meta[property], link[rel="canonical"], script[type="application/ld+json"]');
      addedElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <BookNavbar />
      
      {/* Main Content - adding more padding to top to give navbar more space */}
      <div className="flex-grow pt-32 md:pt-36">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Digital Transformation Made Simple
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Your practical guide to leveraging AI and automation to transform your business operations and improve efficiency.
                </p>
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="white" className="text-white" size={20} />
                  ))}
                  <span className="text-white ml-2">Based on 74 reviews</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
                  >
                    Buy Now - €5.99
                  </Button>
                  <Button 
                    className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
                  >
                    <Download className="mr-2" size={18} /> Preview Chapter
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt="Digital Transformation Made Simple Book Cover" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Book details section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <BookOpen className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">320 Pages</h3>
                  <p className="text-gray-600 text-sm">Comprehensive Guide</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <Clock className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">Published April 2025</h3>
                  <p className="text-gray-600 text-sm">Includes Latest Trends</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <Users className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">For All Business Sizes</h3>
                  <p className="text-gray-600 text-sm">From Startups to Enterprises</p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">About This Book</h2>
                <div className="prose max-w-none text-gialoma-darkgray space-y-4">
                  <p>
                    <span className="font-semibold">Digital Transformation Made Simple</span> is your practical guide to understanding and implementing cutting-edge technologies in your business without technical overwhelm.
                  </p>
                  <p>
                    Written by Gialoma's founders, Paloma Firgaira and Gianro Compagno, this book distills years of hands-on experience helping businesses of all sizes leverage technology to improve efficiency and increase profitability.
                  </p>
                  <p>
                    Whether you're a tech-savvy entrepreneur or a business owner who finds technology intimidating, this book offers clear explanations, real-world examples, and step-by-step implementation plans that anyone can follow.
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "How to identify the right technologies for your specific business needs",
                    "Step-by-step processes for automating repetitive tasks in your business",
                    "Practical approaches to using AI without needing a technical background",
                    "Methods for measuring ROI on technology investments",
                    "Strategies for helping your team adapt to new technologies",
                    "Real case studies from businesses that transformed their operations",
                    "Common pitfalls to avoid in digital transformation projects",
                    "How to create a sustainable tech roadmap for your business"
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <p className="text-gialoma-darkgray">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">About the Authors</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h3 className="font-bold text-gialoma-black text-xl">Paloma Firgaira</h3>
                        <p className="text-gialoma-darkgray">Co-founder & CEO, Gialoma Life Solutions</p>
                      </div>
                    </div>
                    <p className="text-gialoma-darkgray">
                      Paloma is the visionary leader behind Gialoma's innovative approach to business technology. Her focus on creating practical solutions that give back valuable time has transformed how companies approach digital transformation.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h3 className="font-bold text-gialoma-black text-xl">Gianro Compagno</h3>
                        <p className="text-gialoma-darkgray">Co-founder & CTO, Gialoma Life Solutions</p>
                      </div>
                    </div>
                    <p className="text-gialoma-darkgray">
                      Gianro brings technical expertise in translating complex AI concepts into practical business applications. His talent for simplifying technology makes this book accessible to readers of all technical backgrounds.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gialoma-black mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-gialoma-darkgray mb-6">
                      Get your copy of <span className="font-semibold">Digital Transformation Made Simple</span> today and start implementing powerful tech strategies in your business immediately.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Special Launch Price</p>
                        <p className="text-3xl font-bold text-gialoma-gold">€5.99</p>
                      </div>
                      <p className="text-md text-gray-500 line-through">€15.99</p>
                      <p className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">Save 63%</p>
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-gialoma-gold hover:border-gialoma-gold transition-colors px-8 py-6 text-lg"
                      >
                        Buy Digital Copy
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Questions? Contact us at gialomals@gmail.com
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                      <div className="flex flex-col">
                        <p className="text-center mb-2">Available Format:</p>
                        <div className="bg-gray-100 p-2 rounded text-center">
                          PDF eBook
                        </div>
                        <p className="text-xs text-center mt-4 text-gray-500">
                          Instant download after purchase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">What Readers Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "This book transformed how I approach technology in my business. The ROI framework alone saved us thousands in unnecessary tech investments.",
                  author: "Sarah J., Small Business Owner"
                },
                {
                  quote: "Finally, a tech book that doesn't require an engineering degree to understand! Clear, practical, and immediately applicable to my business.",
                  author: "Michael T., Marketing Director"
                },
                {
                  quote: "As someone who was always intimidated by AI, this book broke down complex concepts into actionable steps our entire team could implement.",
                  author: "Elena R., Operations Manager"
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} fill="#FFC107" className="text-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-gialoma-darkgray mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-medium text-gialoma-black">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Is this book suitable for non-technical business owners?",
                  answer: "Absolutely! This book was specifically written for business owners and managers who may not have a technical background but want to leverage technology effectively."
                },
                {
                  question: "In what format is the book available?",
                  answer: "Currently, the book is available only as a PDF digital download. This allows you to read it on any device and have instant access to the content after purchase."
                },
                {
                  question: "What if I have issues with my purchase?",
                  answer: "If you have any issues with your purchase or download, please contact us at gialomals@gmail.com and we'll be happy to help."
                },
                {
                  question: "How is the digital version delivered?",
                  answer: "Immediately after purchase, you'll receive an email with download links for the PDF. If you have any issues with delivery, please contact us at gialomals@gmail.com."
                },
                {
                  question: "Are there any physical copies available?",
                  answer: "No, the book is currently only available in digital format (PDF). This allows us to offer it at a much lower price and provide instant access."
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gialoma-black text-lg mb-2">{faq.question}</h3>
                  <p className="text-gialoma-darkgray">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gialoma-darkgray mb-4">Have more questions?</p>
              <div className="flex justify-center items-center">
                <Mail className="mr-2 text-gialoma-gold" size={20} />
                <a href="mailto:gialomals@gmail.com" className="text-gialoma-gold hover:text-gialoma-darkgold">
                  gialomals@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-gialoma-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Digital Transformation Journey Today</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of business owners who have successfully transformed their operations with the practical strategies in this book.
            </p>
            <Button 
              className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
            >
              Get Your Copy Now - €5.99
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              PDF format • Instant download
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Book;
