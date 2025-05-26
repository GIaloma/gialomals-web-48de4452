
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexEs from "./pages/Index-es";
import BlogPost from "./pages/BlogPost";
import BlogIndex from "./pages/BlogIndex";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import FounderDashboard from "./pages/FounderDashboard";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Book from "./pages/Book";
import Digitalization from "./pages/Digitalization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
          
          {/* Other pages - these should also be translated eventually */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/founder-dashboard" element={<FounderDashboard />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/book" element={<Book />} />
          <Route path="/digitalization" element={<Digitalization />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
