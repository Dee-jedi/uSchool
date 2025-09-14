import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, BookOpen, FileText, CheckCircle, Star } from 'lucide-react';
import appPhoto from '../assets/exh4.jpg';
import googleBadge from '../assets/googleBadge.png';
import appStoreBadge from '../assets/appStoreBadge.svg';

import CountUp from './CountUp';

const Hero: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-10 lg:py-28"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-8">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200 to-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-600 to-green-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full blur-3xl opacity-40"></div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 text-green-700 px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="text-sm font-medium">
                The Ultimate Academic Resource
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 bg-clip-text text-transparent">
                If you can't find it here,
              </span>
              <br />
              <span className="text-gray-900">
                you can't find it{' '}
                <span className="relative ml-2">
                  elsewhere
                  {/* NEW: Accent underline */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-full opacity-60"></div>
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your comprehensive academic companion. Access every lecture
              material, past question, and study resource from your university —
              all in one place.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: BookOpen,
                  text: 'Lecture Notes',
                  color: 'text-emerald-600',
                },
                {
                  icon: FileText,
                  text: 'Past Questions',
                  color: 'text-green-700',
                },
                {
                  icon: Search,
                  text: 'Easy Search',
                  color: 'text-emerald-700',
                },
                {
                  icon: CheckCircle,
                  text: 'Verified Content',
                  color: 'text-green-800',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Google Play */}
              <motion.a
                whileHover={{ scale: 0.95, y: -2 }} // reduced on hover
                whileTap={{ scale: 0.9 }}
                href="https://play.google.com/store/apps/details?id=com.duolingo"
                className="block"
              >
                <img
                  src={googleBadge}
                  alt="Get it on Google Play"
                  className="h-14 w-auto object-contain"
                />
              </motion.a>

              {/* App Store */}
              <motion.a
                whileHover={{ scale: 0.95, y: -2 }} // reduced on hover
                whileTap={{ scale: 0.9 }}
                href="https://apps.apple.com/app/id570060128"
                className="block"
              >
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-14 w-auto object-contain"
                />
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
              {[
                {
                  number: 10000,
                  label: 'Study Materials',
                  color: 'text-emerald-600',
                  suffix: '+',
                },
                {
                  number: 100,
                  label: 'Coverage',
                  color: 'text-green-700',
                  suffix: '%',
                },
                {
                  number: 24,
                  label: 'Access',
                  color: 'text-emerald-800',
                  suffix: '/7',
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-3xl blur-2xl"></div>
              <img
                src={appPhoto}
                alt="uSchool App Preview"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-lg border-2 border-white/80
             aspect-[9/16] object-contain sm:aspect-[9/16] md:aspect-[9/16]"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl z-20 border border-gray-200"
            >
              <FileText className="w-6 h-6 text-green-700" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl z-20 border border-gray-200"
            >
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-lg p-2 rounded-xl shadow-xl z-20 border border-gray-200 mr-4"
            >
              <Star className="w-4 h-4 fill-orange-400 text-orange-400 " />
            </motion.div>

            {/* Decorative gradient orbs around the image */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
