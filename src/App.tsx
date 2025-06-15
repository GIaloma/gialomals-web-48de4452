
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import IndexEs from "./pages/Index-es";
import BlogPost from "./pages/BlogPost";
import BlogIndex from "./pages/BlogIndex";
import BlogIndexEs from "./pages/BlogIndex-es";
import Login from "./pages/Login";
import LoginEs from "./pages/Login-es";
import ClientDashboard from "./pages/ClientDashboard";
import FounderDashboard from "./pages/FounderDashboard";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Book from "./pages/Book";
import BookEs from "./pages/Book-es";
import Digitalization from "./pages/Digitalization";
import DigitalizationEn from "./pages/Digitalization-en";
import NotFound from "./pages/NotFound";
import FloatingAgentButton from "./components/FloatingAgentButton";
import VoiceAgent from "./components/VoiceAgent";
import CookieBannerEs from "./components/CookieBanner-es";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

// Component to handle the floating button based on current route
const FloatingButtonWrapper = () => {
  const location = useLocation();
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  
  // Determine language based on the current route
  const getLanguage = (): 'en' | 'es' => {
    const path = location.pathname;
    if (path.startsWith('/en') || path === '/english' || path === '/book' || path === '/login' || path === '/digitalization') {
      return 'en';
    }
    return 'es'; // Default to Spanish
  };

  // Don't show the floating button on dashboard or login pages
  const hiddenRoutes = [
    '/client-dashboard', '/panel-cliente', 
    '/founder-dashboard', '/panel-fundador',
    '/login', '/acceso', '/en/login', '/es/acceso'
  ];
  
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  const handleVoiceClick = () => {
    setIsVoiceOpen(true);
  };

  const handleVoiceClose = () => {
    setIsVoiceOpen(false);
  };

  return (
    <>
      <FloatingAgentButton
        language={getLanguage()}
        onVoiceClick={handleVoiceClick}
      />
      
      <VoiceAgent
        isOpen={isVoiceOpen}
        onClose={handleVoiceClose}
        language={getLanguage()}
      />
    </>
  );
};

// Component to handle the cookie banner based on current route
const CookieBannerWrapper = () => {
  const location = useLocation();
  
  // Determine language based on the current route
  const getLanguage = (): 'en' | 'es' => {
    const path = location.pathname;
    if (path.startsWith('/en') || path === '/english' || path === '/book' || path === '/login' || path === '/digitalization') {
      return 'en';
    }
    return 'es'; // Default to Spanish
  };

  // Show appropriate cookie banner based on language
  if (getLanguage() === 'en') {
    return <CookieBanner />;
  } else {
    return <CookieBannerEs />;
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Spanish as main/default language */}
          <Route path="/" element={<IndexEs />} />
          <Route path="/es" element={<IndexEs />} />
          <Route path="/español" element={<IndexEs />} />
          
          {/* English as secondary language */}
          <Route path="/en" element={<Index />} />
          <Route path="/english" element={<Index />} />
          
          {/* Italian placeholder (will use English for now, can be translated later) */}
          <Route path="/it" element={<Index />} />
          <Route path="/italiano" element={<Index />} />
          
          {/* Book pages - with language support */}
          <Route path="/libro" element={<BookEs />} />
          <Route path="/es/libro" element={<BookEs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/en/book" element={<Book />} />
          
          {/* Login pages - with language support */}
          <Route path="/acceso" element={<LoginEs />} />
          <Route path="/es/acceso" element={<LoginEs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/en/login" element={<Login />} />
          
          {/* Blog pages - with language support */}
          <Route path="/blog" element={<BlogIndexEs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/es/blog" element={<BlogIndexEs />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          <Route path="/en/blog" element={<BlogIndex />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />
          
          {/* Dashboard pages */}
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/panel-cliente" element={<ClientDashboard />} />
          <Route path="/founder-dashboard" element={<FounderDashboard />} />
          <Route path="/panel-fundador" element={<FounderDashboard />} />
          
          {/* Legal pages */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terminos-servicio" element={<TermsOfService />} />
          
          {/* Digitalization pages - with language support */}
          <Route path="/digitalization" element={<DigitalizationEn />} />
          <Route path="/en/digitalization" element={<DigitalizationEn />} />
          <Route path="/digitalizacion" element={<Digitalization />} />
          <Route path="/es/digitalizacion" element={<Digitalization />} />
          
          {/* Legacy redirects for SEO */}
          <Route path="/inicio" element={<IndexEs />} />
          <Route path="/home" element={<Index />} />
          
          {/* Redirect old evaluation routes to digitalization pages */}
          <Route path="/evaluacion-digital" element={<Digitalization />} />
          <Route path="/digital-evaluation" element={<DigitalizationEn />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Optimized Floating Voice Agent Button */}
        <FloatingButtonWrapper />
        
        {/* Cookie Banner for GDPR Compliance - Language aware */}
        <CookieBannerWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
