
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => (
  <main>
    <Hero />
    <Services />
    <Solutions />
    <About />

    {/* Latest Insights / Blog section */}
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-white" id="insights">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
          Latest Insights
        </h2>
        {/* Changed: Make all cards horizontally scrollable, not limited to 3 */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ minWidth: 320 }}>
            {/* Blog cards: render all blog posts (simulate with 6 cards) */}
            {[...Array(6).keys()].map((i) => (
              <div
                key={i}
                className="min-w-[320px] w-[320px] bg-white rounded-xl shadow-md p-5 flex flex-col animate-fade-in transition hover:scale-105"
              >
                <img
                  src={`/lovable-uploads/237f2b3a-fc46-4b28-b6c9-52aa72036706.png`}
                  className="w-full h-32 object-contain rounded mb-2"
                  alt="blog visual"
                />
                <h3 className="text-lg font-semibold mb-1">Insight #{i + 1}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  An actionable tip for business, tech, or optimization.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm mt-auto font-semibold"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    <Team />
    <CTA />
    <Contact />
    <Footer />
  </main>
);

export default IndexPage;
