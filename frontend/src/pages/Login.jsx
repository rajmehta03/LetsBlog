import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Login</h1>
          
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Login
            </button>
          </form>
          
          <p className="text-center mt-6 text-zinc-600 dark:text-zinc-300">
            Don't have an account? <Link to="/signup" className="text-rose-600 hover:text-rose-700">Sign up</Link>
          </p>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;