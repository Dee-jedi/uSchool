import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 to-emerald-50/30 border-t border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Mobile-First Layout */}
        <div className="space-y-6">
          {/* Branding - Always visible, better mobile spacing */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-800 bg-clip-text text-transparent">
              uSchool
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto sm:max-w-none">
              Learning made simple, accessible, and professional.
            </p>
          </div>

          {/* Contact - Prominent on mobile */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-emerald-100/50">
              <div className="p-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm">
                <MdEmail className="w-4 h-4 text-white" />
              </div>
              <a
                href="mailto:support@uschool.com"
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                support@uschool.com
              </a>
            </div>
          </div>

          {/* Social Icons - Centered with accent */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-emerald-100/30">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-emerald-50 hover:scale-110 transition-all duration-200 shadow-sm border border-gray-100/50"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 text-gray-700 hover:text-emerald-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-emerald-50 hover:scale-110 transition-all duration-200 shadow-sm border border-gray-100/50"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-gray-700 hover:text-emerald-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-emerald-50 hover:scale-110 transition-all duration-200 shadow-sm border border-gray-100/50"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-gray-700 hover:text-emerald-600" />
              </a>
            </div>
          </div>

          {/* Legal Links - Stacked on mobile, inline on desktop */}
          <div className="flex items-center gap-3 flex-row justify-center sm:gap-8">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium px-4 py-2 rounded-full hover:bg-emerald-50/50"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium px-4 py-2 rounded-full hover:bg-emerald-50/50"
            >
              Terms of Service
            </Link>
          </div>

          {/* Decorative divider with accent */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-emerald-200/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 rounded-full opacity-60"></div>
              </span>
            </div>
          </div>

          {/* Copyright - Clean and minimal */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()}{' '}
              <span className="font-medium text-emerald-600">uSchool</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
