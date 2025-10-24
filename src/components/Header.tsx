import React from 'react';
import {
  BookOpen,
  Menu,
  Shield,
  Sparkles,
  Home as HomeIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const scrollToSection = useScrollToSection();
  const GOOGLE_PLAY_URL =
    'https://play.google.com/store/apps/details?id=com.duolingo';
  const APP_STORE_URL = 'https://apps.apple.com/app/id570060128';

  const handleDownload = () => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      window.open(GOOGLE_PLAY_URL, '_blank');
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      window.open(APP_STORE_URL, '_blank');
    } else {
      // Fallback: send to a landing page or Google Play by default
      window.open(GOOGLE_PLAY_URL, '_blank');
    }
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 transition-all duration-300 hover:shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <BookOpen className="w-8 h-8 text-emerald-600 relative z-10 group-hover:text-green-700 transition-colors duration-300" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 bg-clip-text text-transparent">
              uSchool
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group text-sm font-medium"
              >
                <HomeIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-emerald-500" />
                Home
              </Link>
            </motion.div>

            {/* Features */}
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('features')}
              className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors duration-300 group text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-600" />
              Features
            </motion.button>

            {/* Privacy */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/privacy"
                className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors duration-300 group text-sm font-medium"
              >
                <Shield className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-600" />
                Privacy
              </Link>
            </motion.div>

            {/* Account */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/account"
                className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors duration-300 group text-sm font-medium"
              >
                <Shield className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-600" />
                Account
              </Link>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-emerald-700 hover:to-green-800 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              Download
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
