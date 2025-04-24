
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, User, Calendar, Share2, ThumbsUp, MessageSquare, Facebook, Twitter, Linkedin, Search, X, ArrowLeft } from 'lucide-react';

// Sample blog post
const blogPostData = {
  title: "Leveraging AI for Small Business Growth",
  content: `
    <p>In today's rapidly evolving business landscape, artificial intelligence (AI) is no longer just for tech giants and multinational corporations. Small businesses are increasingly finding accessible, affordable ways to leverage AI technologies to drive growth, improve efficiency, and enhance customer experiences.</p>
    
    <h2>Democratization of AI Technology</h2>
    <p>The democratization of AI has made sophisticated tools available to businesses of all sizes. Cloud-based AI services, affordable SaaS solutions, and no-code platforms have eliminated many of the barriers that once made AI implementation prohibitively expensive for smaller organizations.</p>
    
    <p>Small businesses can now implement AI solutions without significant upfront investments in hardware, software, or specialized talent. This accessibility has created a level playing field where companies can compete based on how creatively and effectively they apply AI rather than how much they can spend on it.</p>
    
    <h2>Key AI Applications for Small Businesses</h2>
    
    <h3>1. Customer Service and Engagement</h3>
    <p>AI-powered chatbots and virtual assistants provide 24/7 customer service without the need for round-the-clock staffing. These tools can handle routine inquiries, appointment scheduling, and even basic troubleshooting, freeing up human agents to focus on more complex issues that require empathy and nuance.</p>
    
    <h3>2. Marketing and Personalization</h3>
    <p>AI excels at analyzing customer data to identify patterns and preferences. Small businesses can use these insights to create highly targeted marketing campaigns and personalized experiences that rival those of larger competitors.</p>
    
    <p>From email marketing tools that optimize send times and subject lines to recommendation engines that suggest relevant products, AI helps small businesses deliver the right message to the right person at the right time.</p>
    
    <h3>3. Process Automation</h3>
    <p>Administrative tasks like data entry, appointment scheduling, and invoice processing can consume valuable time that could be better spent on strategic initiatives. AI-powered automation tools can handle these repetitive tasks with greater speed and accuracy than manual methods.</p>
    
    <p>By automating routine processes, small business owners and employees can focus on high-value activities that drive growth and innovation.</p>
    
    <h2>Real-World Success Stories</h2>
    
    <p>A local retail boutique implemented an AI-powered inventory management system that analyzed sales patterns, seasonal trends, and even weather forecasts to optimize purchasing decisions. The result was a 30% reduction in unsold inventory and a 25% increase in profit margins.</p>
    
    <p>A small accounting firm deployed AI tools to automate data extraction from receipts and invoices, reducing processing time by 80% and virtually eliminating data entry errors. This allowed them to serve more clients without increasing staff.</p>
    
    <h2>Getting Started with AI: A Practical Approach</h2>
    
    <p>For small businesses looking to leverage AI, we recommend starting with these steps:</p>
    
    <ol>
      <li><strong>Identify specific pain points</strong> in your business that AI might address</li>
      <li><strong>Start small</strong> with a single, well-defined project</li>
      <li><strong>Choose user-friendly tools</strong> designed for non-technical users</li>
      <li><strong>Measure results</strong> and calculate ROI</li>
      <li><strong>Scale successful initiatives</strong> to other areas of your business</li>
    </ol>
    
    <p>The key is to approach AI adoption as an ongoing journey rather than a one-time project. By starting small, measuring results, and building on successes, small businesses can harness the power of AI to compete effectively in today's technology-driven marketplace.</p>
  `,
  author: "Paloma Firgaira",
  authorImage: "/placeholder.svg",
  authorRole: "Co-Founder & CEO",
  publishDate: "April 12, 2025",
  readTime: "5 min read",
  category: "AI & Automation",
  tags: ["AI", "Small Business", "Productivity"],
  featuredImage: "/placeholder.svg",
};

// Sample blog posts for sidebar
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
  }
];

// All categories from posts
const categories = [...new Set(blogPosts.map(post => post.category))];

// All tags from posts
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

// Mock data for comments
const initialComments = [
  {
    id: 1,
    name: "Maria Rodriguez",
    email: "maria@example.com",
    content: "This is exactly what I needed to read! I've been hesitant to incorporate AI into my small business due to perceived costs, but this article has given me some practical starting points.",
    date: "April 13, 2025",
    likes: 5,
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    content: "I implemented an AI chatbot for my e-commerce site last month and it's already handling 60% of customer inquiries. Definitely worth the investment!",
    date: "April 14, 2025",
    likes: 3,
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name || !newComment.email || !newComment.content) {
      alert("Please fill in all fields");
      return;
    }
    
    const comment = {
      id: comments.length + 1,
      ...newComment,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      likes: 0,
    };
    
    setComments([...comments, comment]);
    setNewComment({ name: "", email: "", content: "" });
  };

  const handleLikeComment = (id: number) => {
    if (likedComments.includes(id)) return;
    
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
    
    setLikedComments([...likedComments, id]);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search implementation could be added here
  };
  
  const handleCloseArticle = () => {
    navigate('/blog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img 
                alt="Gialoma Life Solutions Logo" 
                src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
                className="h-12 w-auto mr-3 object-contain" 
              />
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-gialoma-black py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-gialoma-lightgold/20 text-gialoma-lightgold px-4 py-1 rounded-full mb-4">
              {blogPostData.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {blogPostData.title}
            </h1>
            <div className="flex items-center justify-center text-gray-300 text-sm mb-6">
              <User size={16} className="mr-1" />
              <span className="mr-4">{blogPostData.author}</span>
              <Calendar size={16} className="mr-1" />
              <span className="mr-4">{blogPostData.publishDate}</span>
              <Clock size={16} className="mr-1" />
              <span>{blogPostData.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4 order-2 md:order-1">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <button 
                onClick={handleCloseArticle}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                aria-label="Close article"
              >
                <X size={20} />
              </button>
              
              <img 
                src={blogPostData.featuredImage}
                alt={blogPostData.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-6 md:p-10">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPostData.content }}
                />
                
                <div className="flex flex-wrap items-center justify-between mt-10 pt-6 border-t border-gray-200">
                  <div className="mb-4 md:mb-0">
                    <div className="text-sm text-gialoma-darkgray mb-2">Tags:</div>
                    <div className="flex flex-wrap gap-2">
                      {blogPostData.tags.map((tag, index) => (
                        <a 
                          key={index} 
                          href={`/blog?tag=${tag.toLowerCase().replace(' ', '-')}`}
                          className="bg-gray-100 text-gialoma-darkgray px-3 py-1 rounded-full text-sm hover:bg-gialoma-gold hover:text-white transition-colors"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="flex items-center"
                      onClick={() => setShowShareOptions(!showShareOptions)}
                    >
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                    
                    {showShareOptions && (
                      <div className="absolute right-0 bottom-12 bg-white rounded-lg shadow-md p-3 flex space-x-2">
                        <Button variant="ghost" size="icon" className="text-blue-600">
                          <Facebook size={18} />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-sky-500">
                          <Twitter size={18} />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-700">
                          <Linkedin size={18} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src={blogPostData.authorImage}
                  alt={blogPostData.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gialoma-black">{blogPostData.author}</h3>
                  <p className="text-gialoma-darkgray">{blogPostData.authorRole}</p>
                </div>
              </div>
              <p className="text-gialoma-darkgray">
                Paloma is a seasoned expert in AI and automation with over 20 years of experience helping businesses implement strategic technology solutions. Her focus is on making advanced technology accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
              <h2 className="text-2xl font-bold mb-6 text-gialoma-black flex items-center">
                <MessageSquare className="mr-2" size={24} />
                Comments ({comments.length})
              </h2>
              
              {comments.length > 0 ? (
                <div className="space-y-6 mb-10">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gialoma-black">{comment.name}</h4>
                        <span className="text-sm text-gialoma-darkgray">{comment.date}</span>
                      </div>
                      <p className="text-gialoma-darkgray mb-3">{comment.content}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gialoma-darkgray hover:text-gialoma-gold flex items-center"
                        onClick={() => handleLikeComment(comment.id)}
                        disabled={likedComments.includes(comment.id)}
                      >
                        <ThumbsUp size={14} className={`mr-1 ${likedComments.includes(comment.id) ? 'text-gialoma-gold' : ''}`} />
                        {comment.likes} {comment.likes === 1 ? 'Like' : 'Likes'}
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gialoma-darkgray mb-6">Be the first to comment on this article!</p>
              )}
              
              <h3 className="text-xl font-semibold mb-4 text-gialoma-black">Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Name*
                    </label>
                    <Input 
                      id="name"
                      value={newComment.name}
                      onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Email* (will not be published)
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      value={newComment.email}
                      onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                    Comment*
                  </label>
                  <Textarea 
                    id="comment"
                    rows={5}
                    value={newComment.content}
                    onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
                >
                  Post Comment
                </Button>
              </form>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4 order-1 md:order-2">
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
                    <a 
                      href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}
                      className="text-gialoma-darkgray hover:text-gialoma-gold transition-colors w-full py-1"
                    >
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gialoma-black">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <a
                    key={index}
                    href={`/blog?tag=${tag.toLowerCase().replace(' ', '-')}`}
                    className="bg-gray-100 hover:bg-gialoma-gold hover:text-white text-gialoma-darkgray px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gialoma-black">Recent Posts</h2>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-start">
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 mr-3">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm hover:text-gialoma-gold transition-colors">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h3>
                      <p className="text-xs text-gialoma-darkgray mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center"
                onClick={handleCloseArticle}
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
