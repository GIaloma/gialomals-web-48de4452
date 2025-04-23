
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredPosts = [
  {
    id: 1,
    title: "Leveraging AI for Small Business Growth",
    excerpt: "Discover how small businesses can implement AI solutions without breaking the bank. We explore practical applications that deliver real ROI.",
    coverImage: "/placeholder.svg",
    date: "April 12, 2025",
    author: "Paloma Firgaira",
    category: "AI & Automation",
    tags: ["AI", "Small Business", "Productivity"],
    readTime: "5 min read",
    slug: "leveraging-ai-small-business"
  },
  {
    id: 2,
    title: "The Future of Digital Transformation in 2025",
    excerpt: "Explore the latest trends in digital transformation and how they're reshaping industries. Learn what successful organizations are doing differently.",
    coverImage: "/placeholder.svg",
    date: "April 5, 2025",
    author: "Gianro Compagno",
    category: "Digital Transformation",
    tags: ["Digital Strategy", "Innovation", "Technology Trends"],
    readTime: "8 min read",
    slug: "future-digital-transformation-2025"
  },
  {
    id: 3,
    title: "5 Ways to Optimize Your Team's Productivity",
    excerpt: "Practical strategies to enhance team efficiency and output without burnout. These proven methods can transform how your team collaborates.",
    coverImage: "/placeholder.svg",
    date: "March 28, 2025",
    author: "Paloma Firgaira",
    category: "Productivity",
    tags: ["Team Management", "Efficiency", "Workplace"],
    readTime: "6 min read",
    slug: "optimize-team-productivity"
  },
  {
    id: 4,
    title: "Cybersecurity Essentials for Modern Businesses",
    excerpt: "Protect your business with these fundamental cybersecurity practices. Even small businesses can implement these cost-effective measures.",
    coverImage: "/placeholder.svg",
    date: "March 21, 2025",
    author: "Gianro Compagno",
    category: "Security",
    tags: ["Cybersecurity", "Data Protection", "Risk Management"],
    readTime: "7 min read",
    slug: "cybersecurity-essentials"
  },
  {
    id: 5,
    title: "How to Build a Data-Driven Decision Culture",
    excerpt: "Transform your organization by embracing data-driven decision making. Learn the frameworks that make information accessible to everyone.",
    coverImage: "/placeholder.svg",
    date: "March 14, 2025",
    author: "Paloma Firgaira",
    category: "Business Intelligence",
    tags: ["Data Analytics", "Business Strategy", "Decision Making"],
    readTime: "9 min read",
    slug: "data-driven-decision-culture"
  }
];

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current && isAutoScrolling) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollLeft >= maxScroll) {
          // Reset to beginning when reaching the end
          scrollRef.current.scrollLeft = 0;
        } else {
          // Increment scroll position (increased by 15%)
          scrollRef.current.scrollLeft += 1.15;
        }
      }
    }, 50);
  };
  
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);
  
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };

  return (
    <section id="blog" className="section-padding bg-white overflow-hidden mt-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Latest Insights</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Explore our latest articles, guides, and industry insights to stay informed about AI, automation, and digital transformation.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-w-[330px] flex flex-col">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    <span className="text-sm bg-gialoma-lightgold/20 text-gialoma-darkgold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gialoma-black hover:text-gialoma-gold transition-colors h-16">
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  </h3>
                  <p className="text-gialoma-darkgray mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gialoma-darkgray mb-4">
                    <User size={14} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      className="p-0 text-gialoma-gold hover:text-gialoma-darkgold hover:bg-transparent flex items-center"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            >
              View All Articles
            </Button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default Blog;
