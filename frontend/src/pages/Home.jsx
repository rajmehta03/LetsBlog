import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import FilterBar from '../components/FilterBar';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('latest');
  const navigate = useNavigate();

  // Mock blog data
  const mockBlogs = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      preview: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks that are revolutionizing how we build applications.",
      content: "Web development is evolving at an unprecedented pace...",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
      },
      category: "Technology",
      tags: ["webdev", "javascript", "react", "ai"],
      publishedAt: "2025-01-15T10:00:00Z",
      likes: 124,
      comments: 18,
      views: 1250
    },
    {
      id: 2,
      title: "Mastering the Art of Minimalist Design",
      preview: "Discover how minimalist design principles can transform your creative work and create more impactful user experiences.",
      content: "Minimalism in design is more than just a trend...",
      coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      },
      category: "Design",
      tags: ["design", "minimalism", "ux", "ui"],
      publishedAt: "2025-01-14T15:30:00Z",
      likes: 89,
      comments: 12,
      views: 890
    },
    {
      id: 3,
      title: "Building Sustainable Business Practices in the Digital Age",
      preview: "Learn how modern businesses are adapting sustainable practices while maintaining growth and profitability in an increasingly digital world.",
      content: "Sustainability is no longer optional for businesses...",
      coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop",
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
      },
      category: "Business",
      tags: ["sustainability", "business", "digital", "growth"],
      publishedAt: "2025-01-13T09:15:00Z",
      likes: 156,
      comments: 24,
      views: 2100
    },
    {
      id: 4,
      title: "The Psychology of Color in Digital Interfaces",
      preview: "Understanding how color choices impact user behavior and emotional responses in digital products and interfaces.",
      content: "Color psychology plays a crucial role in design...",
      coverImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=300&fit=crop",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
      },
      category: "Design",
      tags: ["psychology", "color", "ui", "design"],
      publishedAt: "2025-01-12T14:20:00Z",
      likes: 203,
      comments: 31,
      views: 1800
    },
    {
      id: 5,
      title: "Remote Work Revolution: Tools and Strategies for Success",
      preview: "A comprehensive guide to thriving in remote work environments with the right tools, mindset, and strategies.",
      content: "Remote work has transformed from a perk to a necessity...",
      coverImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop",
      author: {
        name: "Lisa Park",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face"
      },
      category: "Lifestyle",
      tags: ["remote", "productivity", "work", "tools"],
      publishedAt: "2025-01-11T11:45:00Z",
      likes: 178,
      comments: 42,
      views: 2350
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals for Beginners",
      preview: "Start your journey into machine learning with this beginner-friendly guide covering essential concepts and practical applications.",
      content: "Machine learning might seem intimidating at first...",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
      author: {
        name: "Michael Zhang",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
      },
      category: "Technology",
      tags: ["ml", "ai", "programming", "beginners"],
      publishedAt: "2025-01-10T16:00:00Z",
      likes: 267,
      comments: 38,
      views: 3200
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchBlogs = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      setBlogs(mockBlogs);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleFilterChange = (filter, category = null) => {
    setActiveFilter(filter);
    setLoading(true);
    
    // Simulate filtering
    setTimeout(() => {
      let filteredBlogs = [...mockBlogs];
      
      switch (filter) {
        case 'trending':
          filteredBlogs.sort((a, b) => (b.views || 0) - (a.views || 0));
          break;
        case 'popular':
          filteredBlogs.sort((a, b) => (b.likes || 0) - (a.likes || 0));
          break;
        case 'discussed':
          filteredBlogs.sort((a, b) => (b.comments || 0) - (a.comments || 0));
          break;
        case 'category':
          filteredBlogs = filteredBlogs.filter(blog => blog.category === category);
          break;
        default: // latest
          filteredBlogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      }
      
      setBlogs(filteredBlogs);
      setLoading(false);
    }, 500);
  };

  const handleStartReading = () => {
    // Scroll to the blog feed section
    const blogFeed = document.getElementById('blog-feed');
    if (blogFeed) {
      blogFeed.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartWriting = () => {
    navigate('/create');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-fuchsia-50 dark:from-zinc-900 dark:to-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Discover Amazing
              <span className="bg-gradient-to-r from-rose-600 to-fuchsia-400 bg-clip-text text-transparent"> Stories</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join our community of writers and readers. Share your thoughts, discover new perspectives, and connect with like-minded individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartReading}
                className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
              >
                Start Reading
              </button>
              <button 
                onClick={handleStartWriting}
                className="border border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Start Writing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <FilterBar onFilterChange={handleFilterChange} activeFilter={activeFilter} />

      {/* Blog Feed */}
      <main id="blog-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-rose-600" />
            <span className="ml-2 text-zinc-600 dark:text-zinc-400">Loading amazing stories...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        )}

        {!loading && blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              No blogs found for the selected filter.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;