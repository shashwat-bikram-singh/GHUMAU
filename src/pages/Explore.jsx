import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/mockData';

const Explore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get('cat') || 'All';
  const destFilter = searchParams.get('dest') || '';
  const [searchQuery, setSearchQuery] = useState('');

  const setFilter = (cat) => {
    const params = new URLSearchParams(location.search);
    params.set('cat', cat);
    navigate(`/explore?${params.toString()}`, { replace: true });
  };

  const setDestFilter = (dest) => {
    const params = new URLSearchParams(location.search);
    if (dest) {
      params.set('dest', dest);
    } else {
      params.delete('dest');
    }
    navigate(`/explore?${params.toString()}`, { replace: true });
  };

  const filteredDestinations = destinations.filter(d => {
    // 1. Budget Category Filter
    const matchesCat = filter === 'All' || d.category === filter;

    // 2. Destination Parameter Filter (from Trip Planner form)
    let matchesDestParam = true;
    if (destFilter && destFilter !== 'any') {
      const df = destFilter.toLowerCase().trim();
      const name = d.name.toLowerCase();
      const desc = d.description.toLowerCase();
      
      if (df === 'kathmandu' || df === 'ktm') {
        matchesDestParam = name.includes('kathmandu') || desc.includes('kathmandu');
      } else if (df === 'pokhara' || df === 'pkr') {
        matchesDestParam = name.includes('pokhara') || desc.includes('pokhara');
      } else if (df === 'chitwan' || df === 'cht') {
        matchesDestParam = name.includes('chitwan') || desc.includes('chitwan');
      } else if (df === 'everest') {
        matchesDestParam = name.includes('everest') || desc.includes('everest');
      } else {
        matchesDestParam = name.includes(df) || desc.includes(df);
      }
    }

    // 3. Text Search Input Filter
    let matchesSearchQuery = true;
    if (searchQuery.trim()) {
      const sq = searchQuery.toLowerCase().trim();
      const name = d.name.toLowerCase();
      const desc = d.description.toLowerCase();
      
      if (sq === 'ktm' || sq === 'kathmandu') {
        matchesSearchQuery = name.includes('kathmandu') || desc.includes('kathmandu');
      } else if (sq === 'pkr' || sq === 'pokhara') {
        matchesSearchQuery = name.includes('pokhara') || desc.includes('pokhara');
      } else if (sq === 'cht' || sq === 'chitwan') {
        matchesSearchQuery = name.includes('chitwan') || desc.includes('chitwan');
      } else if (sq === 'everest') {
        matchesSearchQuery = name.includes('everest') || desc.includes('everest');
      } else {
        matchesSearchQuery = name.includes(sq) || desc.includes(sq);
      }
    }

    return matchesCat && matchesDestParam && matchesSearchQuery;
  });

  return (
    <div className="min-h-screen pt-40 pb-28 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
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

        {/* Search Bar */}
        <div className="mb-8 max-w-xl bg-surface-container-lowest p-2 rounded-2xl ambient-shadow ghost-border flex items-center">
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-2.5">
            <Search size={20} className="text-primary mr-3 shrink-0" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search destination (e.g. Kathmandu, Pokhara, KTM...)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]"
            />
          </div>
        </div>

        {/* Active Destination Filter Indicator */}
        {destFilter && destFilter !== 'any' && (
          <div className="mb-8 inline-flex items-center gap-2.5 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold">
            <span>Filtering by planner location: <strong className="capitalize">{destFilter}</strong></span>
            <button 
              onClick={() => {
                setDestFilter('');
                const newParams = new URLSearchParams(location.search);
                newParams.delete('dest');
                navigate(`/explore?${newParams.toString()}`, { replace: true });
              }}
              className="hover:text-primary-container text-xs font-bold underline ml-1 cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}

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
            <h3 className="text-2xl font-display font-bold text-on-surface">No destinations found for your filters.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
