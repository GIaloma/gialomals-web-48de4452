
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
// Blog temporarily removed - import Blog from '../components/Blog';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
// BookPopup temporarily removed - import BookPopup from '../components/BookPopup';

const Index = () => {
  // Book popup state temporarily removed
  // const [showBookPopup, setShowBookPopup] = useState(false);

  // Book popup useEffect temporarily removed
  /*
  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('gialoma_book_popup_closed_en');
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
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Services />
      {/* Blog temporarily removed - <Blog /> */}
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
      
      {/* Book Popup temporarily removed */}
      {/* {showBookPopup && <BookPopup onClose={() => setShowBookPopup(false)} />} */}
    </div>
  );
};

export default Index;
