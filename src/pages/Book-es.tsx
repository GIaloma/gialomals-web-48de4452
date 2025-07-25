import React, { useState } from 'react';
import BookNavbarEs from '../components/BookNavbar-es';
import FooterEs from '../components/Footer-es';
import BookLeadForm from '../components/BookLeadForm';
import CookieBannerEs from '../components/CookieBanner-es';

// Import modular book components
import BookSEO from '../components/book/BookSEO';
import BookHero from '../components/book/BookHero';
import BookValueProposition from '../components/book/BookValueProposition';
import BookContent from '../components/book/BookContent';
import BookAuthors from '../components/book/BookAuthors';
import BookTestimonials from '../components/book/BookTestimonials';
import BookFAQ from '../components/book/BookFAQ';
import BookCTA from '../components/book/BookCTA';

const BookEs = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleDownloadClick = () => {
    setShowLeadForm(true);
    
    // Track the download button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'Book',
        event_label: 'Free PDF Download Button',
      });
    }
  };

  const handleFormSuccess = () => {
    // Additional success tracking if needed
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Lead Generation',
        event_label: 'Book PDF Download Completed',
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BookSEO />
      <BookNavbarEs />
      
      {/* Main Content */}
      <div className="flex-grow pt-32 md:pt-36">
        <BookHero onDownloadClick={handleDownloadClick} />
        <BookValueProposition />
        <BookContent />
        <BookAuthors />
        <BookTestimonials />
        <BookFAQ />
        <BookCTA onDownloadClick={handleDownloadClick} />
      </div>
      
      {/* Lead Form Modal */}
      <BookLeadForm 
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        onSuccess={handleFormSuccess}
      />
      
      <FooterEs />
      <CookieBannerEs />
    </div>
  );
};

export default BookEs;