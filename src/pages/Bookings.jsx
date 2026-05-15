import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Filter, CheckCircle, Wifi, Coffee, Car } from 'lucide-react';

const hotels = [
  {
    id: 1,
    name: 'Dwarika\'s Hotel',
    location: 'Battisputali, Kathmandu',
    rating: 4.9,
    price: 180,
    category: 'Luxury',
    amenities: ['Free WiFi', 'Breakfast', 'Pool'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Fish Tail Lodge',
    location: 'Lakeside, Pokhara',
    rating: 4.8,
    price: 120,
    category: 'Mid-Range',
    amenities: ['Free WiFi', 'Lake View', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Yak & Yeti Hotel',
    location: 'Durbar Marg, Kathmandu',
    rating: 4.7,
    price: 150,
    category: 'Luxury',
    amenities: ['Spa', 'Gym', 'Free WiFi'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Temple Tree Resort',
    location: 'Lakeside, Pokhara',
    rating: 4.6,
    price: 85,
    category: 'Mid-Range',
    amenities: ['Pool', 'Free WiFi', 'Garden'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Chitwan Jungle Lodge',
    location: 'Chitwan National Park',
    rating: 4.8,
    price: 95,
    category: 'Mid-Range',
    amenities: ['Safari', 'Breakfast', 'River View'],
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Hotel Mulberry',
    location: 'Thamel, Kathmandu',
    rating: 4.5,
    price: 55,
    category: 'Budget',
    amenities: ['Free WiFi', 'Rooftop', 'Breakfast'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop',
  },
];

const amenityIcons = {
  'Free WiFi': Wifi,
  'Breakfast': Coffee,
  'Parking': Car,
};

const Bookings = () => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filtered = hotels.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === 'All' || h.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Book Your Stay</h1>
            <p className="text-on-surface-variant text-lg">Find the perfect accommodation for your Himalayan adventure.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl ambient-shadow ghost-border mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <MapPin size={20} className="text-primary mr-3 shrink-0" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search by hotel or location..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]"
            />
          </div>
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <Calendar size={20} className="text-primary mr-3 shrink-0" strokeWidth={1.5} />
            <input type="text" placeholder="Check-in — Check-out" className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]" />
          </div>
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-3">
            <Users size={20} className="text-primary mr-3 shrink-0" strokeWidth={1.5} />
            <input type="text" placeholder="Guests & Rooms" className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]" />
          </div>
          <button className="btn-primary px-8 py-3 font-medium text-[0.9375rem]">Search</button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <Filter size={18} className="text-on-surface-variant" />
          {['All', 'Budget', 'Mid-Range', 'Luxury'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                categoryFilter === cat ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((hotel, i) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                <div className="h-52 relative overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {hotel.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                    <Star size={14} className="fill-secondary" /> {hotel.rating}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl text-on-surface mb-1">{hotel.name}</h3>
                  <p className="text-on-surface-variant text-[0.9375rem] flex items-center gap-1 mb-4">
                    <MapPin size={14} /> {hotel.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map(am => (
                      <span key={am} className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-lg text-xs flex items-center gap-1.5">
                        {amenityIcons[am] ? React.createElement(amenityIcons[am], { size: 12, className: 'text-primary' }) : <CheckCircle size={12} className="text-primary" />}
                        {am}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end border-t ghost-border pt-4 mt-auto">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">Per night from</p>
                      <p className="font-display font-bold text-2xl text-on-surface">${hotel.price}<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                    </div>
                    <button className="btn-primary px-5 py-2.5 text-sm font-medium">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-surface-container-low rounded-[2rem]">
            <h3 className="text-2xl font-display font-bold text-on-surface mb-2">No hotels found</h3>
            <p className="text-on-surface-variant">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
