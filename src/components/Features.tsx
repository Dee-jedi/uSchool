// components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Search,
  Newspaper,
  Store,
  Trophy,
  Flame,
} from 'lucide-react';

const features = [
  {
    category: 'Learn',
    items: [
      {
        icon: BookOpen,
        title: 'Study Materials',
        description:
          'Access lecture notes and past questions from your university.',
      },
      {
        icon: Search,
        title: 'Smart Search',
        description:
          'Find exactly what you need with fast, intelligent search.',
      },
    ],
  },
  {
    category: 'Engage',
    items: [
      {
        icon: Newspaper,
        title: 'News Feed',
        description: 'Stay updated with campus news and academic updates.',
      },
      {
        icon: Store,
        title: 'Marketplace',
        description:
          'Discover student businesses and opportunities in one place.',
      },
    ],
  },
  {
    category: 'Achieve',
    items: [
      {
        icon: Trophy,
        title: 'Leaderboard',
        description: 'Climb the ranks and see how you compare with peers.',
      },
      {
        icon: Flame,
        title: 'Study Streaks',
        description: 'Stay motivated and track your daily learning progress.',
      },
    ],
  },
];

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

        {/* Features grouped by category */}
        <div className="grid gap-12 lg:gap-16">
          {features.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            >
              {/* Category Title with accent dot */}
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {group.category}
                </h3>
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              </div>

              {/* Features Grid */}
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
    </section>
  );
};

export default Features;
