
import React from 'react';
import NavbarEs from '../components/Navbar-es';
import HeroEs from '../components/Hero-es';
import AboutEs from '../components/About-es';
import SolutionsEs from '../components/Solutions-es';
import ServicesEs from '../components/Services-es';
// Blog temporarily removed - import BlogEs from '../components/Blog-es';
import TeamEs from '../components/Team-es';
import TestimonialsEs from '../components/Testimonials-es';
import CTAEs from '../components/CTA-es';
import ContactEs from '../components/Contact-es';
import FooterEs from '../components/Footer-es';
import CookieBannerEs from '../components/CookieBanner-es';
// BookPopup temporarily removed - import BookPopupEs from '../components/BookPopup-es';

const IndexEs = () => {
  // Book popup state temporarily removed
  // const [showBookPopup, setShowBookPopup] = useState(false);

  // Book popup useEffect temporarily removed
  /*
  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('gialoma_book_popup_closed_es');
    if (!hasClosedPopup) {
      const timer = setTimeout(() => {
        setShowBookPopup(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  */

  return (
    <div className="min-h-screen">
      <NavbarEs />
      <HeroEs />
      <AboutEs />
      <SolutionsEs />
      <ServicesEs />
      {/* Blog temporarily removed - <BlogEs /> */}
      <TeamEs />
      <TestimonialsEs />
      <CTAEs />
      <ContactEs />
      <FooterEs />
      <CookieBannerEs />
      
      {/* Spanish Book Popup temporarily removed */}
      {/* {showBookPopup && <BookPopupEs onClose={() => setShowBookPopup(false)} />} */}
    </div>
  );
};

export default IndexEs;
