
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, User, Tag, ArrowLeft, ArrowRight, Search, X } from 'lucide-react';

// Sample blog posts
const blogPosts = [
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
    title: "Security Best Practices for Remote Teams",
    excerpt: "Essential security measures every remote team should implement to protect sensitive data and maintain compliance.",
    coverImage: "/placeholder.svg",
    date: "March 20, 2025",
    author: "Gianro Compagno",
    category: "Security",
    tags: ["Cybersecurity", "Remote Work", "Data Protection"],
    readTime: "7 min read",
    slug: "security-best-practices-remote-teams"
  },
  {
    id: 5,
    title: "How to Choose the Right Automation Tools",
    excerpt: "A comprehensive guide to evaluating and selecting automation tools that align with your business needs and objectives.",
    coverImage: "/placeholder.svg",
    date: "March 15, 2025",
    author: "Paloma Firgaira",
    category: "Automation",
    tags: ["Tools", "Software Selection", "Business Strategy"],
    readTime: "9 min read",
    slug: "choosing-right-automation-tools"
  },
  {
    id: 6,
    title: "Building a Data-Driven Culture in Your Organization",
    excerpt: "Steps to foster a culture where decisions are informed by data rather than intuition alone. Learn how to build data literacy across teams.",
    coverImage: "/placeholder.svg",
    date: "March 5, 2025",
    author: "Gianro Compagno",
    category: "Analytics",
    tags: ["Data Culture", "Business Intelligence", "Decision Making"],
    readTime: "10 min read",
    slug: "building-data-driven-culture"
  }
];

// All categories from posts
const categories = [...new Set(blogPosts.map(post => post.category))];

// All tags from posts
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const BlogIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts based on search term, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setCurrentPage(1);
  };

  const handleReadArticle = (slug: string) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
              <a href="/" className="flex items-center">
                <img 
                  alt="Gialoma Life Solutions Logo" 
                  src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
                  className="h-16 md:h-24 w-auto mr-3 object-contain" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gialoma-black py-24 mt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Blog</h1>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Insights, guides, and news about AI, automation, and digital transformation.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gialoma-black">Search</h2>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                  <Button 
                    type="submit" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0"
                  >
                    <Search size={18} />
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gialoma-black">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start px-2 ${
                        selectedCategory === category 
                          ? 'text-gialoma-gold font-medium' 
                          : 'text-gialoma-darkgray'
                      }`}
                      onClick={() => {
                        setSelectedCategory(selectedCategory === category ? '' : category);
                        setCurrentPage(1);
                      }}
                    >
                      {category}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gialoma-black">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`rounded-full ${
                      selectedTag === tag 
                        ? 'bg-gialoma-gold text-white border-gialoma-gold' 
                        : 'text-gialoma-darkgray'
                    }`}
                    onClick={() => {
                      setSelectedTag(selectedTag === tag ? '' : tag);
                      setCurrentPage(1);
                    }}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            
            {(searchTerm || selectedCategory || selectedTag) && (
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {/* Filter summary */}
            {(searchTerm || selectedCategory || selectedTag) && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="font-medium mb-2">Filtered by:</h2>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <div className="bg-white px-3 py-1 rounded-full text-sm border flex items-center">
                      Search: "{searchTerm}"
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-1 h-5 w-5"
                        onClick={() => setSearchTerm('')}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  )}
                  
                  {selectedCategory && (
                    <div className="bg-white px-3 py-1 rounded-full text-sm border flex items-center">
                      Category: {selectedCategory}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-1 h-5 w-5"
                        onClick={() => setSelectedCategory('')}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  )}
                  
                  {selectedTag && (
                    <div className="bg-white px-3 py-1 rounded-full text-sm border flex items-center">
                      Tag: {selectedTag}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-1 h-5 w-5"
                        onClick={() => setSelectedTag('')}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Blog posts grid */}
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
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
                        <button onClick={() => handleReadArticle(post.slug)} className="text-left hover:text-gialoma-gold transition-colors">
                          {post.title}
                        </button>
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
                      
                      <button onClick={() => handleReadArticle(post.slug)}>
                        <Button 
                          variant="outline" 
                          className="w-full border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white"
                        >
                          Read Article
                        </Button>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-lg text-gialoma-darkgray mb-4">
                  No articles found matching your criteria.
                </p>
                <Button onClick={clearFilters}>View All Articles</Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ArrowLeft size={16} />
                  </Button>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className={currentPage === page ? "bg-gialoma-gold text-white" : ""}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gialoma-black">Subscribe to Our Newsletter</h2>
          <p className="text-gialoma-darkgray max-w-2xl mx-auto mb-8">
            Stay up-to-date with our latest articles, insights, and company news.
          </p>
          <form className="max-w-md mx-auto flex">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;
