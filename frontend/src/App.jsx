import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Notifications from "./pages/Notifications.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Auth from "./pages/Auth.jsx";
import Search from "./pages/Search.jsx";
import Explore from "./pages/Explore.jsx";
import Trending from "./pages/Trending.jsx";
import Categories from "./pages/Categories.jsx";
import Authors from "./pages/Authors.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Cookies from "./pages/Cookies.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from './components/AuthContext.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Theme appearance="inherit" radius="large" scaling="100%">
        <Router>
          <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/search" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              newestOnTop
              closeOnClick
              pauseOnHover
              theme="colored"
            />
          </main>
        </Router>
      </Theme>
    </AuthProvider>
  );
}