import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Download,
  Search,
  BookOpen,
  FileText,
  CheckCircle,
  Star,
} from 'lucide-react';
import appPhoto from '../assets/exh4.jpg';
import CountUp from './CountUp';

const Hero: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: BookOpen,
      text: 'Lecture Notes',
      gradient: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: FileText,
      text: 'Past Questions',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Search,
      text: 'Easy Search',
      gradient: 'from-violet-400 to-violet-600',
    },
    {
      icon: CheckCircle,
      text: 'Verified Content',
      gradient: 'from-indigo-400 to-indigo-600',
    },
  ];

  const stats = [
    {
      number: 10000,
      label: 'Study Materials',
      gradient: 'from-violet-500 to-indigo-600',
      suffix: '+',
    },
    {
      number: 100,
      label: 'Coverage',
      gradient: 'from-blue-500 to-indigo-600',
      suffix: '%',
    },
    {
      number: 24,
      label: 'Access',
      gradient: 'from-indigo-500 to-purple-600',
      suffix: '/7',
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100 py-16 lg:py-28"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-200 to-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200 text-violet-700 px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <Star className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600 fill-current" />
              <span className="text-sm font-medium">
                The Ultimate Academic Resource
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                If you can't find it here,
              </span>
              <br />
              <span className="text-gray-900">you can't find it elsewhere</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your comprehensive academic companion. Access every lecture
              material, past question, and study resource from your university -
              all in one place.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon
                    className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:from-violet-700 hover:to-purple-800 transition-all duration-300 shadow-xl hover:shadow-violet-500/25"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on</div>
                  <div className="font-bold">App Store</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
                  >
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      start={isInView}
                    />
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200/30 to-blue-200/30 rounded-3xl blur-2xl"></div>
              <img
                src={appPhoto}
                alt="uSchool App Preview"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-lg border-2 border-white/80"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl z-20 border border-gray-200"
            >
              <FileText className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl z-20 border border-gray-200"
            >
              <BookOpen className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-lg p-2 rounded-xl shadow-xl z-20 border border-gray-200"
            >
              <Star className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 fill-current" />
            </motion.div>

            {/* Decorative gradient orbs */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
