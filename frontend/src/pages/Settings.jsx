import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Settings as SettingsIcon, Moon, Bell, Eye, Trash2 } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  const handleAccountUpdate = (e) => {
    e.preventDefault();
    alert("Account settings saved ✅");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deleted ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-2">
            <SettingsIcon className="w-7 h-7 text-rose-600" />
            Settings
          </h1>

          <div className="space-y-8">
            {/* Account Settings */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Account Settings
              </h2>
              <form onSubmit={handleAccountUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Your username"
                    className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-600 dark:text-zinc-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Privacy
              </h2>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-rose-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Private Account
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={() => setIsPrivate(!isPrivate)}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Notifications
              </h2>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-rose-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Email Notifications
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotif}
                  onChange={() => setEmailNotif(!emailNotif)}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Theme Settings */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Appearance
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-rose-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Dark Mode
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-red-300 dark:border-red-600">
              <h2 className="text-xl font-bold text-red-600 mb-4">
                Danger Zone
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Deleting your account will remove all your posts, followers, and
                activity permanently.
              </p>
              <button
                onClick={handleDeleteAccount}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <Trash2 className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;
