import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-600 to-fuchsia-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LB</span>
              </div>
              <span className="text-xl font-bold text-zinc-800 dark:text-white">
                LetsBlog
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
              A modern blogging platform where writers share their stories, insights, and expertise with a global community of readers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@letsblog.com"
                className="text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/explore"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/trending"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Authors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              © {currentYear} LetsBlog. All rights reserved.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 md:mt-0 flex items-center">
              <a
                
                target="_blank"
                rel="nofollow"
                className="ml-1 text-rose-600 hover:text-rose-700 transition-colors"
              >
               
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;