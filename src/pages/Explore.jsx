import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilter(initialCategory);
  }, [initialCategory]);

  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === filter);

  return (
    <div className="min-h-screen pt-40 pb-28 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-on-surface mb-6 tracking-tight"
          >
            Explore Nepal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            Find the perfect destination that fits your budget and adventure style.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {['All', 'Low', 'Mid', 'High'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-[1.5rem] font-medium transition-all text-[0.9375rem] ${
                filter === cat 
                  ? 'btn-primary' 
                  : 'bg-surface-container-lowest text-on-surface-variant ghost-border hover:bg-surface-container-low'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredDestinations.map(dest => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={dest.id}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-32 text-center bg-surface-container-low rounded-[2rem]">
            <h3 className="text-2xl font-display font-bold text-on-surface">No destinations found for this budget.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
