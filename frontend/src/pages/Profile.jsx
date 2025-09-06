import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Calendar, CheckCircle2, Phone } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "RAJ KUMAR MEHTA",
    email: "rm1848@gmail.com",
    bio: "Full-stack developer and tech enthusiast 🚀 | Building modern web apps with React, Next.js & Firebase.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    joined: "Jan 2023",
    dob: "1998-05-12",
    contact: "+91 9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [blogs] = useState([
    {
      id: 1,
      title: "Exploring AI in 2025",
      cover:
        "https://images.unsplash.com/photo-1677442135703-3f1df6b2a444?w=800",
      date: "Sep 5, 2025",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      title: "The Future of Web Development",
      cover:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      date: "Aug 29, 2025",
      likes: 95,
      comments: 8,
    },
    {
      id: 3,
      title: "Cloud Patterns That Scale",
      cover:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800",
      date: "Aug 15, 2025",
      likes: 140,
      comments: 22,
    },
    {
      id: 4,
      title: "Mastering Firebase for Full-stack Apps",
      cover:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      date: "Aug 1, 2025",
      likes: 75,
      comments: 5,
    },
    {
      id: 5,
      title: "UI/UX Trends That Dominate 2025",
      cover:
        "https://images.unsplash.com/photo-1581276879432-15a19d654956?w=800",
      date: "Jul 25, 2025",
      likes: 180,
      comments: 32,
    },
    {
      id: 6,
      title: "Building with Next.js and Firebase",
      cover:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
      date: "Jul 10, 2025",
      likes: 210,
      comments: 40,
    },
  ]);

  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);

  // Form Handlers
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setProfile({ ...profile, photo: localUrl });
    }
  };
  const handleSave = () => {
    console.log("Updated Profile:", profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 🔥 Unique Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Left Side - Profile Pic */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={profile.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-rose-500 shadow-md"
            />
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              Edit Profile
            </button>
          </div>

          {/* Right Side - Info + Stats */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              {profile.name}
              <CheckCircle2 className="w-6 h-6 text-blue-500" />
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 mt-1">{profile.bio}</p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {profile.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {profile.contact}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Joined {profile.joined}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xl font-bold text-zinc-900 dark:text-white">
                  24
                </p>
                <p className="text-zinc-500 dark:text-zinc-300">Posts</p>
              </div>
              <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xl font-bold text-zinc-900 dark:text-white">
                  5
                </p>
                <p className="text-zinc-500 dark:text-zinc-300">Drafts</p>
              </div>
              <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xl font-bold text-zinc-900 dark:text-white">
                  1,250
                </p>
                <p className="text-zinc-500 dark:text-zinc-300">Followers</p>
              </div>
              <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xl font-bold text-zinc-900 dark:text-white">
                  340
                </p>
                <p className="text-zinc-500 dark:text-zinc-300">Following</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Published Blogs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Published Blogs
            </h2>
            <button
              onClick={() => setShowAll(true)}
              className="text-rose-500 hover:underline font-medium"
            >
              Show All
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogs.slice(0, visibleCount).map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-zinc-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={blog.cover}
                  alt={blog.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {blog.date}
                  </p>
                  <div className="flex justify-between items-center mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <span>❤️ {blog.likes}</span>
                    <span>💬 {blog.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < blogs.length && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-5 py-2 bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 rounded-lg shadow text-zinc-700 dark:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </motion.div>

        {/* Show All Blogs Modal */}
        {showAll && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  All Published Blogs
                </h2>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-rose-500 hover:underline"
                >
                  Close
                </button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={blog.cover}
                      alt={blog.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-zinc-900 dark:text-white line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {blog.date}
                      </p>
                      <div className="flex justify-between items-center mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <span>❤️ {blog.likes}</span>
                        <span>💬 {blog.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                Edit Profile
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <img
                    src={profile.photo}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="text-sm text-gray-500 dark:text-gray-300"
                  />
                </div>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 dark:text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 dark:text-white"
                />
                <input
                  type="text"
                  name="contact"
                  value={profile.contact}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 dark:text-white"
                />
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 dark:text-white"
                />
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Write about yourself..."
                  rows="4"
                  className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 dark:text-white"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-zinc-600 text-black dark:text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
