
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import BookPopup from '../components/BookPopup';

const Index = () => {
  const [showBookPopup, setShowBookPopup] = useState(false);

  // Show the book popup when the page loads
  useEffect(() => {
    setShowBookPopup(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Blog />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
      
      {/* Book Popup */}
      {showBookPopup && <BookPopup onClose={() => setShowBookPopup(false)} />}
    </div>
  );
};

export default Index;
