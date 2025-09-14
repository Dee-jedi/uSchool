// components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../constants/features';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            All-in-One Academic Companion
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From resources to community, everything you need to stay ahead in
            your studies.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 bg-white p-6 rounded-2xl shadow-sm snap-start"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-emerald-50 rounded-xl">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <span>Swipe to explore</span>
              <span className="animate-pulse">→</span>
            </p>
          </div>
        </div>

        {/* Desktop: Original grouped layout */}
        <div className="hidden md:block">
          <div className="grid gap-12 lg:gap-16">
            {[
              { category: 'Learn', items: features.slice(0, 2) },
              { category: 'Engage', items: features.slice(2, 4) },
              { category: 'Achieve', items: features.slice(4, 6) },
            ].map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              >
                <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                  <h3 className="text-xl font-semibold text-emerald-700">
                    {group.category}
                  </h3>
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {group.items.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 p-3 bg-emerald-50 rounded-xl">
                        <item.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
