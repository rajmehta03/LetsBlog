import React, { useState } from 'react';
import { Filter, TrendingUp, Clock, Heart, MessageCircle, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterBar = ({ onFilterChange, activeFilter = 'latest' }) => {
  const [showCategories, setShowCategories] = useState(false);

  const filters = [
    { id: 'latest', label: 'Latest', icon: Clock },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'popular', label: 'Popular', icon: Heart },
    { id: 'discussed', label: 'Most Discussed', icon: MessageCircle },
  ];

  const categories = [
    'Technology', 'Design', 'Business', 'Health', 'Travel', 
    'Food', 'Lifestyle', 'Education', 'Science', 'Sports'
  ];

  return (
    <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Filter Buttons */}
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => onFilterChange(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
            >
              <Tag className="w-4 h-4" />
              <span>Categories</span>
              <Filter className="w-4 h-4" />
            </button>

            {showCategories && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 py-2 z-50"
              >
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Browse by Category
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onFilterChange('category', category);
                        setShowCategories(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;