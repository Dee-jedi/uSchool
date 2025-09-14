import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Shield, Sparkles, BookOpen, Home } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const MotionLink = motion.create(Link);

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const scrollToSection = useScrollToSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden
          />

          {/* Navigation Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-emerald-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                  uSchool
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={onClose}
              >
                <X className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6 space-y-6">
              {/* Home */}
              <MotionLink
                to="/"
                onClick={onClose}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300 group"
              >
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
                  <Home className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">Home</span>
              </MotionLink>

              {/* Features */}
              <motion.button
                onClick={() => {
                  scrollToSection('features');
                  onClose();
                }}
                whileHover={{ x: 8 }}
                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 group text-left"
              >
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 text-green-700" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Features
                </span>
              </motion.button>

              {/* Privacy */}
              <MotionLink
                to="/privacy"
                onClick={onClose}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 group"
              >
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                  <Shield className="w-5 h-5 text-green-700" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Privacy Policy
                </span>
              </MotionLink>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
