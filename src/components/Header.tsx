import React from 'react';
import {
  BookOpen,
  Menu,
  Download,
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

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 transition-all duration-300 hover:shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <BookOpen className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              uSchool
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors duration-300 text-sm font-medium"
              >
                <HomeIcon className="w-4 h-4 text-violet-500" />
                Home
              </Link>
            </motion.div>

            {/* Features */}
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('features')}
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors duration-300 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Features
            </motion.button>

            {/* Download */}
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('download')}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
            >
              <Download className="w-4 h-4 text-blue-500" />
              Download
            </motion.button>

            {/* Privacy */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/privacy"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
              >
                <Shield className="w-4 h-4 text-emerald-500" />
                Privacy
              </Link>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-violet-700 hover:to-indigo-800 shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            >
              Get Started
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
