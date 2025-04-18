
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

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
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Latest Insights</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Explore our latest articles, guides, and industry insights to stay informed about AI, automation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm bg-gialoma-lightgold/20 text-gialoma-darkgold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gialoma-black hover:text-gialoma-gold transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gialoma-darkgray mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gialoma-darkgray mb-4">
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <Button 
                    variant="ghost" 
                    className="p-0 text-gialoma-gold hover:text-gialoma-darkgold hover:bg-transparent flex items-center"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            onClick={() => window.location.href = "/blog"}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
