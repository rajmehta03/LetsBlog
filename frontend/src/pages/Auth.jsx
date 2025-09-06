import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Github, Mail, Chrome } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { toast } from 'react-toastify';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    login();
    toast.success(isLogin ? 'Logged in successfully!' : 'Account created successfully!');
    navigate('/');
  };

  const handleOAuth = (provider) => {
    // Simulate OAuth login
    toast.info(`${provider} login initiated (simulated)`);
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm"
        >
          <div className="flex justify-center mb-8">
            <div className="flex bg-zinc-100 dark:bg-zinc-700 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isLogin
                    ? 'bg-white dark:bg-zinc-600 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  !isLogin
                    ? 'bg-white dark:bg-zinc-600 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                  placeholder="Enter your name"
                  required={!isLogin}
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300 dark:border-zinc-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                onClick={() => handleOAuth('Google')}
                className="w-full inline-flex justify-center py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm bg-white dark:bg-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors"
              >
                <Chrome className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleOAuth('GitHub')}
                className="w-full inline-flex justify-center py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm bg-white dark:bg-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleOAuth('LinkedIn')}
                className="w-full inline-flex justify-center py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-lg shadow-sm bg-white dark:bg-zinc-700 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <p className="text-center mt-6 text-zinc-600 dark:text-zinc-300">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-rose-600 hover:text-rose-700 font-medium"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;