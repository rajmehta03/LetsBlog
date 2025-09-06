import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Bell, Heart, MessageCircle, User } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'like', message: 'Sarah liked your post', time: '2 hours ago', icon: Heart },
    { id: 2, type: 'comment', message: 'John commented on your post', time: '4 hours ago', icon: MessageCircle },
    { id: 3, type: 'follow', message: 'Alex started following you', time: '1 day ago', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Notifications</h1>
          
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div key={notification.id} className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm flex items-center space-x-4">
                  <Icon className="w-6 h-6 text-rose-600" />
                  <div className="flex-1">
                    <p className="text-zinc-900 dark:text-white">{notification.message}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{notification.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notifications;