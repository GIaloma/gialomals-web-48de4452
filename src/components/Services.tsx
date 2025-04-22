
import React from "react";
import { Laptop, LayoutDashboard, Scroll } from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    title: "Web Design & Development",
    description: (
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Modern and conversion-optimized websites</li>
        <li>Responsive and visually appealing design</li>
        <li>SEO and fast-loading performance</li>
        {/* Removed: <li>Scalable and manageable websites</li> */}
      </ul>
    ),
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-green-600" />,
    title: "Process Automation",
    description: (
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Automate repetitive business tasks</li>
        <li>Integrate your favorite tools and platforms</li>
        <li>Boost efficiency and free up your time</li>
      </ul>
    ),
  },
  {
    icon: <Scroll className="w-8 h-8 text-yellow-600" />,
    title: "Digital Presence & Visibility",
    description: (
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Increase online presence and reach</li>
        <li>Strategic use of social media and content</li>
        <li>Improve customer engagement</li>
      </ul>
    ),
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover-scale transition"
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {s.title}
            </h3>
            <div className="text-gray-600 text-base text-left">
              {s.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
