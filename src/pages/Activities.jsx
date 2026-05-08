import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Filter, Compass, TreePine, Mountain, Tent, Clock, MapPin } from 'lucide-react';

const Activities = () => {
  const [priceFilter, setPriceFilter] = useState('All');
  
  const activities = [
    {
      id: 1,
      title: 'Annapurna Base Camp Trek',
      category: 'Trekking',
      priceLevel: 'Mid-Range',
      price: '$450',
      duration: '10 Days',
      location: 'Annapurna Region',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Chitwan Jungle Safari',
      category: 'Wildlife',
      priceLevel: 'Budget',
      price: '$120',
      duration: '3 Days',
      location: 'Chitwan National Park',
      icon: TreePine,
      image: 'https://images.unsplash.com/photo-1581008697198-5c464817a02c?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Pokhara Paragliding',
      category: 'Adventure',
      priceLevel: 'Mid-Range',
      price: '$85',
      duration: 'Half Day',
      location: 'Sarangkot, Pokhara',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1520113412536-69d67566cb4b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Kathmandu Heritage Walk',
      category: 'Cultural',
      priceLevel: 'Budget',
      price: '$25',
      duration: '1 Day',
      location: 'Kathmandu Valley',
      icon: Tent,
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const filteredActivities = priceFilter === 'All' 
    ? activities 
    : activities.filter(a => a.priceLevel === priceFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Experiences & Activities</h1>
            <p className="text-on-surface-variant text-lg">Filter through our curated list of activities from budget to mid-range adventures.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-full">
            {['All', 'Budget', 'Mid-Range'].map((level) => (
              <button
                key={level}
                onClick={() => setPriceFilter(level)}
                className={`px-5 py-2 rounded-full text-[0.9375rem] font-semibold transition-all duration-300 ${
                  priceFilter === level 
                    ? 'bg-surface-container-lowest text-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredActivities.map((activity, i) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow ghost-border group flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary">
                  <activity.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-on-surface uppercase tracking-wider">
                  {activity.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-2 leading-tight">{activity.title}</h3>
                <p className="text-on-surface-variant text-[0.9375rem] flex items-center gap-1 mb-6">
                  <MapPin size={14} /> {activity.location}
                </p>
                <div className="mt-auto pt-4 border-t ghost-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                    <Clock size={16} /> {activity.duration}
                  </div>
                  <div className="font-display font-bold text-lg text-primary">{activity.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
