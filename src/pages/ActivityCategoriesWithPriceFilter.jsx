import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mountain, Compass, TreePine, Camera, Clock, MapPin, DollarSign } from 'lucide-react';

const allActivities = [
  { id: 1, title: 'Annapurna Base Camp Trek', category: 'Trekking', price: 450, priceLabel: '$450', duration: '10 Days', location: 'Annapurna Region', icon: Mountain, image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop', level: 'Mid-Range' },
  { id: 2, title: 'Pokhara Paragliding', category: 'Adventure', price: 85, priceLabel: '$85', duration: 'Half Day', location: 'Sarangkot, Pokhara', icon: Compass, image: 'https://images.unsplash.com/photo-1520113412536-69d67566cb4b?q=80&w=600&auto=format&fit=crop', level: 'Mid-Range' },
  { id: 3, title: 'Chitwan Jungle Safari', category: 'Wildlife', price: 120, priceLabel: '$120', duration: '3 Days', location: 'Chitwan National Park', icon: TreePine, image: 'https://images.unsplash.com/photo-1581008697198-5c464817a02c?q=80&w=600&auto=format&fit=crop', level: 'Budget' },
  { id: 4, title: 'Kathmandu Heritage Walk', category: 'Cultural', price: 25, priceLabel: '$25', duration: '1 Day', location: 'Kathmandu Valley', icon: Camera, image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=600&auto=format&fit=crop', level: 'Budget' },
  { id: 5, title: 'Bhaktapur Pottery Tour', category: 'Cultural', price: 30, priceLabel: '$30', duration: '1 Day', location: 'Bhaktapur', icon: Camera, image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=600&auto=format&fit=crop', level: 'Budget' },
  { id: 6, title: 'White Water Rafting', category: 'Adventure', price: 65, priceLabel: '$65', duration: '1 Day', location: 'Trisuli River', icon: Compass, image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop', level: 'Budget' },
  { id: 7, title: 'EBC Helicopter Tour', category: 'Adventure', price: 1200, priceLabel: '$1,200', duration: 'Full Day', location: 'Everest Region', icon: Compass, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', level: 'Luxury' },
  { id: 8, title: 'Langtang Valley Trek', category: 'Trekking', price: 300, priceLabel: '$300', duration: '7 Days', location: 'Langtang Region', icon: Mountain, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop', level: 'Mid-Range' },
];

const ActivityCategoriesWithPriceFilter = () => {
  const [maxPrice, setMaxPrice] = useState(1500);
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Trekking', 'Adventure', 'Wildlife', 'Cultural'];
  const filtered = allActivities.filter(a => a.price <= maxPrice && (category === 'All' || a.category === category));

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Activities with Price Filter</h1>
          <p className="text-lg text-on-surface-variant">Use the price slider and category filters to find activities that fit your budget.</p>
        </motion.div>

        {/* Filters Panel */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 md:p-8 ghost-border ambient-shadow mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-on-surface-variant mb-3 uppercase tracking-wider">Max Price: <span className="text-primary">${maxPrice}</span></label>
              <input type="range" min="20" max="1500" step="10" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full cursor-pointer" />
              <div className="flex justify-between text-xs text-on-surface-variant mt-2">
                <span>$20</span><span>$1,500</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface-variant mb-3 uppercase tracking-wider">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${category === cat ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-on-surface-variant mb-8 font-medium">{filtered.length} activities found</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((act, i) => (
            <motion.div key={act.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden ghost-border ambient-shadow group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="h-44 relative overflow-hidden">
                <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary flex items-center gap-1">
                  <DollarSign size={12} />{act.priceLabel.replace('$', '')}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{act.category}</div>
                <h3 className="font-display font-bold text-lg text-on-surface mb-2 leading-tight">{act.title}</h3>
                <p className="text-on-surface-variant text-sm flex items-center gap-1 mb-4"><MapPin size={13} />{act.location}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t ghost-border">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant"><Clock size={13} />{act.duration}</span>
                  <span className="font-display font-bold text-base text-primary">{act.priceLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center bg-surface-container-low rounded-[2rem]">
            <h3 className="text-2xl font-display font-bold text-on-surface mb-2">No activities in this range</h3>
            <p className="text-on-surface-variant">Try increasing your budget or changing the category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCategoriesWithPriceFilter;
