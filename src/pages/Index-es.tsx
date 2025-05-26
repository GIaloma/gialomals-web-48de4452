
import React, { useState, useEffect } from 'react';
import NavbarEs from '../components/Navbar-es';
import HeroEs from '../components/Hero-es';
import AboutEs from '../components/About-es';
import SolutionsEs from '../components/Solutions-es';
import ServicesEs from '../components/Services-es';
import BlogEs from '../components/Blog-es';
import TeamEs from '../components/Team-es';
import TestimonialsEs from '../components/Testimonials-es';
import CTAEs from '../components/CTA-es';
import ContactEs from '../components/Contact-es';
import FooterEs from '../components/Footer-es';
import CookieBanner from '../components/CookieBanner';
import BookPopupEs from '../components/BookPopup-es';

const IndexEs = () => {
  const [showBookPopup, setShowBookPopup] = useState(false);

  // Show the book popup when the page loads, if not already closed in this session for Spanish
  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('gialoma_book_popup_closed_es');
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
      <SolutionsEs />
      <ServicesEs />
      <BlogEs />
      <TeamEs />
      <TestimonialsEs />
      <CTAEs />
      <ContactEs />
      <FooterEs />
      <CookieBanner />
      
      {/* Spanish Book Popup */}
      {showBookPopup && <BookPopupEs onClose={() => setShowBookPopup(false)} />}
    </div>
  );
};

export default IndexEs;
