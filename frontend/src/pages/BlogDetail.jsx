import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, MessageCircle, Eye, Bookmark, Share2, Calendar, User, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  // Mock blog data
  const mockBlog = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    content: `
      <p>Web development is evolving at an unprecedented pace, and 2025 promises to be a year of significant transformation. As we stand at the intersection of artificial intelligence, advanced frameworks, and changing user expectations, developers must stay ahead of the curve to remain competitive.</p>
      
      <h2>The Rise of AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development—it's becoming an integral part of how we build, test, and deploy applications. From AI-assisted code completion to automated testing and deployment pipelines, machine learning is revolutionizing every aspect of the development lifecycle.</p>
      
      <p>Tools like GitHub Copilot and ChatGPT have already shown us glimpses of what's possible when AI meets coding. In 2025, we can expect even more sophisticated AI tools that can understand context, suggest architectural improvements, and even help with debugging complex issues.</p>
      
      <h2>The Evolution of JavaScript Frameworks</h2>
      <p>React, Vue, and Angular continue to dominate the frontend landscape, but new players are emerging with fresh approaches to building user interfaces. Frameworks like Svelte and SolidJS are gaining traction for their performance benefits and developer experience improvements.</p>
      
      <p>The key trend we're seeing is a move towards more efficient, lightweight solutions that don't compromise on functionality. Developers are increasingly conscious of bundle sizes and runtime performance, leading to innovations in how frameworks handle reactivity and state management.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (WASM) is finally reaching maturity, enabling developers to run high-performance applications directly in the browser. This technology opens up possibilities for bringing desktop-class applications to the web, from video editing tools to complex data visualization platforms.</p>
      
      <p>As browser support continues to improve and tooling becomes more accessible, we expect to see WebAssembly adoption accelerate significantly in 2025.</p>
      
      <h2>The Serverless Revolution</h2>
      <p>Serverless architecture is transforming how we think about backend development. With platforms like Vercel, Netlify, and AWS Lambda leading the charge, developers can focus on writing code rather than managing infrastructure.</p>
      
      <p>Edge computing is taking this a step further, bringing computation closer to users for improved performance and reduced latency. This shift is particularly important for global applications that need to provide consistent experiences across different geographical regions.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning new technologies, developers can position themselves for success in this rapidly evolving field.</p>
      
      <p>What trends are you most excited about? Share your thoughts in the comments below!</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      bio: "Full-stack developer and tech writer with 8+ years of experience building scalable web applications.",
      followers: 1250,
      following: 340
    },
    category: "Technology",
    tags: ["webdev", "javascript", "react", "ai", "trends"],
    publishedAt: "2025-01-15T10:00:00Z",
    likes: 124,
    dislikes: 8,
    comments: 18,
    views: 1250,
    readTime: 8
  };

  const mockComments = [
    {
      id: 1,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
      },
      content: "Great insights! I'm particularly excited about the WebAssembly developments. It's going to change how we think about web performance.",
      publishedAt: "2025-01-15T12:30:00Z",
      likes: 12
    },
    {
      id: 2,
      author: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
      },
      content: "The AI-powered development section really resonates with me. I've been using GitHub Copilot for a few months now and it's incredible how much it speeds up development.",
      publishedAt: "2025-01-15T14:15:00Z",
      likes: 8
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchBlog = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBlog(mockBlog);
      setComments(mockComments);
      setLikesCount(mockBlog.likes);
      setDislikesCount(mockBlog.dislikes);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const handleLike = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setDislikesCount(prev => prev - 1);
    }
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    toast.success(isLiked ? 'Like removed' : 'Post liked!');
  };

  const handleDislike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(prev => prev - 1);
    }
    setIsDisliked(!isDisliked);
    setDislikesCount(prev => isDisliked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks!');
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? 'Unfollowed author' : 'Following author!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: {
          name: "You",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
        },
        content: newComment,
        publishedAt: new Date().toISOString(),
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
      toast.success('Comment added!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto px-4">
            <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
            <div className="h-64 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Blog not found</h1>
            <Link to="/" className="text-rose-600 hover:text-rose-700">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to feed</span>
        </Link>

        <article className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm overflow-hidden">
          {/* Cover Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            {/* Category & Read Time */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-medium px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                {blog.readTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center space-x-4">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {blog.author.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={blog.publishedAt}>
                        {formatDistanceToNow(new Date(blog.publishedAt), { addSuffix: true })}
                      </time>
                    </div>
                    <span>•</span>
                    <span>{blog.author.followers} followers</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFollow}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isFollowing
                    ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300'
                    : 'bg-rose-600 text-white hover:bg-rose-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Engagement Bar */}
            <div className="flex items-center justify-between py-6 border-t border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center space-x-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 transition-colors ${
                    isLiked ? 'text-rose-600' : 'text-zinc-500 dark:text-zinc-400 hover:text-rose-600'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likesCount}</span>
                </button>

                <button
                  onClick={handleDislike}
                  className={`flex items-center space-x-2 transition-colors ${
                    isDisliked ? 'text-red-600' : 'text-zinc-500 dark:text-zinc-400 hover:text-red-600'
                  }`}
                >
                  <ThumbsDown className={`w-5 h-5 ${isDisliked ? 'fill-current' : ''}`} />
                  <span>{dislikesCount}</span>
                </button>

                <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400">
                  <MessageCircle className="w-5 h-5" />
                  <span>{comments.length}</span>
                </div>

                <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400">
                  <Eye className="w-5 h-5" />
                  <span>{blog.views}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked
                      ? 'text-rose-600 bg-rose-50 dark:bg-rose-900/30'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-rose-600 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-rose-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Comments ({comments.length})
              </h3>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full p-4 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-zinc-700 dark:text-white resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex space-x-4"
                  >
                    <img
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-zinc-900 dark:text-white">
                            {comment.author.name}
                          </span>
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            {formatDistanceToNow(new Date(comment.publishedAt), { addSuffix: true })}
                          </span>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300">
                          {comment.content}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2">
                        <button className="flex items-center space-x-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-rose-600 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;