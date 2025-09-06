import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { BarChart3, Users, FileText, TrendingUp, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const recentActivities = [
    {
      id: 1,
      type: "post",
      title: "Getting Started with React",
      time: "2 hours ago",
      icon: <FileText className="w-5 h-5 text-rose-600" />,
    },
    {
      id: 2,
      type: "comment",
      title: "You commented on 'Next.js Tips & Tricks'",
      time: "5 hours ago",
      icon: <MessageSquare className="w-5 h-5 text-rose-600" />,
    },
    {
      id: 3,
      type: "followers",
      title: "You gained 20 new followers",
      time: "1 day ago",
      icon: <Users className="w-5 h-5 text-rose-600" />,
    },
    {
      id: 4,
      type: "views",
      title: "Your post 'Understanding Firebase' got 500+ views",
      time: "3 days ago",
      icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
    },
  ];

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
            Dashboard
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-rose-600" />
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Total Posts
                  </p>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    24
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-rose-600" />
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Followers
                  </p>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    1,250
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <TrendingUp className="w-8 h-8 text-rose-600" />
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Views
                  </p>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    15,430
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <BarChart3 className="w-8 h-8 text-rose-600" />
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Engagement
                  </p>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    89%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
                >
                  <div className="p-2 bg-rose-100 dark:bg-rose-900 rounded-full">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium">
                      {activity.title}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
