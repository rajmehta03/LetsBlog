import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Terms of Service</h1>
          <p className="text-zinc-600 dark:text-zinc-300">Our terms of service details.</p>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;