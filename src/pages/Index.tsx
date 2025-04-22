
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Pricing />
      <Blog />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
