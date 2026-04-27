import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Filter, CheckCircle } from 'lucide-react';

const Bookings = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Book Your Stay</h1>
            <p className="text-on-surface-variant text-lg">Find the perfect accommodation for your Himalayan adventure.</p>
          </div>
          <button className="btn-secondary px-6 py-3 flex items-center gap-2 text-[0.9375rem] font-medium self-start md:self-auto">
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl ambient-shadow ghost-border mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <MapPin size={20} className="text-primary mr-3" strokeWidth={1.5} />
            <input type="text" placeholder="Where do you want to stay?" className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]" />
          </div>
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <Calendar size={20} className="text-primary mr-3" strokeWidth={1.5} />
            <input type="text" placeholder="Check-in - Check-out" className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]" />
          </div>
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <Users size={20} className="text-primary mr-3" strokeWidth={1.5} />
            <input type="text" placeholder="Guests & Rooms" className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]" />
          </div>
          <button className="btn-primary px-8 py-3 font-medium text-[0.9375rem]">Search</button>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Mock Hotel Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-48 bg-surface-container-high relative">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?q=80&w=600&auto=format&fit=crop`} alt="Hotel" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  Top Rated
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-xl text-on-surface">Mountain View Resort</h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-secondary">
                    <Star size={16} className="fill-secondary" /> 4.8
                  </div>
                </div>
                <p className="text-on-surface-variant text-[0.9375rem] flex items-center gap-1 mb-4">
                  <MapPin size={14} /> Pokhara, Nepal
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-lg text-xs flex items-center gap-1"><CheckCircle size={12} className="text-primary"/> Free Wifi</span>
                  <span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-lg text-xs flex items-center gap-1"><CheckCircle size={12} className="text-primary"/> Breakfast</span>
                </div>
                <div className="flex justify-between items-end border-t ghost-border pt-4">
                  <div>
                    <p className="text-xs text-on-surface-variant mb-1">Starting from</p>
                    <p className="font-display font-bold text-2xl text-on-surface">$45<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                  </div>
                  <button className="btn-primary px-5 py-2.5 text-sm">Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
