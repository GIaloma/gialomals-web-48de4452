
import React, { useState, useEffect } from 'react';
import NavbarEs from '../components/Navbar-es';
import HeroEs from '../components/Hero-es';
import AboutEs from '../components/About-es';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CTAEs from '../components/CTA-es';
import ContactEs from '../components/Contact-es';
import FooterEs from '../components/Footer-es';
import CookieBanner from '../components/CookieBanner';
import BookPopup from '../components/BookPopup';

const IndexEs = () => {
  const [showBookPopup, setShowBookPopup] = useState(false);

  // Show the book popup when the page loads, if not already closed in this session
  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('gialoma_book_popup_closed');
    if (!hasClosedPopup) {
      // Add a small delay to ensure both popups don't compete for attention immediately
      const timer = setTimeout(() => {
        setShowBookPopup(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <NavbarEs />
      <HeroEs />
      <AboutEs />
      <Solutions />
      <Services />
      <Blog />
      <Team />
      <Testimonials />
      <CTAEs />
      <ContactEs />
      <FooterEs />
      <CookieBanner />
      
      {/* Book Popup */}
      {showBookPopup && <BookPopup onClose={() => setShowBookPopup(false)} />}
    </div>
  );
};

export default IndexEs;
