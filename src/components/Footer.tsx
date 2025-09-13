import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Branding */}
        <div className="text-center hidden sm:flex">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-800 bg-clip-text text-transparent">
            uSchool
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Learning made simple, accessible, and professional.
          </p>
        </div>

        {/* Links + Social + Contact */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="hover:text-emerald-600 text-gray-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-emerald-600 text-gray-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-gray-600" />
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-emerald-100">
              <MdEmail className="w-4 h-4 text-emerald-600" />
            </div>
            <a
              href="mailto:support@uschool.com"
              className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
            >
              support@uschool.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} uSchool. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
