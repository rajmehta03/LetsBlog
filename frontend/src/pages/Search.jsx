import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock search results
    const mockResults = [
      {
        id: 1,
        title: "Search Result 1",
        preview: "This is a search result.",
        author: { name: "Author", avatar: "" },
        category: "Tech",
        tags: ["tag"],
        publishedAt: "2025-01-01",
        likes: 10,
        comments: 5,
        views: 100
      }
    ];
    setTimeout(() => {
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Search Results for "{query}"
          </h1>
          
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;