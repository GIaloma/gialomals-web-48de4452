import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVisitCount, incrementVisitCount } from "../utils/visitCounter";

const FOUNDER_EMAIL = "founder@gialoma.com";

const FounderDashboard = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [isFounder, setIsFounder] = useState(true);
  const navigate = useNavigate();

  // Check session - here, fake check using localStorage; in real app use backend/auth!
  useEffect(() => {
    // On login success, save flag. For environment without backend, check here.
    // For demo: always allow.
    setIsFounder(true);
  }, []);

  useEffect(() => {
    // Every visit to founder dashboard, increment and show count.
    incrementVisitCount();
    setVisitCount(getVisitCount());
  }, []);

  if (!isFounder) {
    // Should never happen for demo, but in real app: redirect to login.
    navigate("/login");
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-3xl font-bold mb-2">Founder Dashboard</h2>
      <p className="text-lg mb-6 text-center max-w-lg">
        Welcome, Founder! Here's your exclusive dashboard to monitor your website's impact and manage your solutions.
      </p>
      <div className="bg-white rounded-lg shadow-xl px-8 py-6 flex flex-col items-center max-w-xs w-full">
        <span className="text-blue-600 text-xl font-semibold tracking-wide mb-1">
          Website Visits
        </span>
        <span className="text-4xl font-extrabold mb-1 text-gray-800 animate-pulse">
          {visitCount}
        </span>
        <span className="text-sm text-gray-500">Total homepage visits</span>
      </div>
      {/* Add future metrics/options here */}
    </section>
  );
};

export default FounderDashboard;
