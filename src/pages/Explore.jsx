import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/mockData';

const Explore = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('cat') || 'All';

  const [filter, setFilter] = useState(initialCategory);
  
  useEffect(() => {
    setFilter(initialCategory);
  }, [initialCategory]);

  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === filter);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Explore Nepal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Find the perfect destination that fits your budget and adventure style.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          {['All', 'Low', 'Mid', 'High'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat === 'All' ? 'All Budgets' : `${cat} Budget`}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map(dest => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={dest.id}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">No destinations found for this budget.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
