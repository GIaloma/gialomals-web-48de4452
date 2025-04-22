
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/Index";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import FounderDashboard from "./pages/FounderDashboard";
import NotFound from "./pages/NotFound";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/founder-dashboard" element={<FounderDashboard />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
