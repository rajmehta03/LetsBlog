import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Eye, Bookmark, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const BlogCard = ({ blog }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(blog.likes || 0);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const publishedDate = new Date(blog.publishedAt || Date.now());

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-700"
    >
      <Link to={`/blog/${blog.id}`} className="block">
        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={blog.coverImage || `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop`}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Category Badge */}
          {blog.category && (
            <div className="absolute top-3 left-3">
              <span className="bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
          )}

          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-zinc-800/90 rounded-full hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            aria-label="Bookmark post"
          >
            <Bookmark 
              className={`w-4 h-4 ${isBookmarked ? 'fill-rose-600 text-rose-600' : 'text-zinc-600 dark:text-zinc-400'}`} 
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Author Info */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={blog.author?.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face`}
              alt={blog.author?.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                {blog.author?.name || 'Anonymous'}
              </p>
              <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Calendar className="w-3 h-3" />
                <time dateTime={publishedDate.toISOString()}>
                  {formatDistanceToNow(publishedDate, { addSuffix: true })}
                </time>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
            {blog.title}
          </h2>

          {/* Preview */}
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {blog.preview || blog.content?.substring(0, 150) + '...'}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  +{blog.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className="flex items-center space-x-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label={isLiked ? 'Unlike post' : 'Like post'}
              >
                <Heart 
                  className={`w-4 h-4 ${isLiked ? 'fill-rose-600 text-rose-600' : ''}`} 
                />
                <span>{likesCount}</span>
              </button>

              <div className="flex items-center space-x-1 text-sm text-zinc-500 dark:text-zinc-400">
                <MessageCircle className="w-4 h-4" />
                <span>{blog.comments || 0}</span>
              </div>

              <div className="flex items-center space-x-1 text-sm text-zinc-500 dark:text-zinc-400">
                <Eye className="w-4 h-4" />
                <span>{blog.views || 0}</span>
              </div>
            </div>

            <span className="text-sm text-rose-600 dark:text-rose-400 font-medium hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;