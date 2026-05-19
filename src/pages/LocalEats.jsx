import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Utensils, Coffee } from 'lucide-react';

const LocalEats = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'Street Food', 'Traditional', 'Cafes', 'Fine Dining'];

  const restaurants = [
    {
      id: 1,
      name: 'Thamel Momo Hut',
      type: 'Street Food',
      rating: 4.8,
      location: 'Thamel, Kathmandu',
      price: '$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg'
    },
    {
      id: 2,
      name: 'Bhojan Griha',
      type: 'Traditional',
      rating: 4.9,
      location: 'Dilli Bazar, Kathmandu',
      price: '$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg'
    },
    {
      id: 3,
      name: 'Himalayan Java Coffee',
      type: 'Cafes',
      rating: 4.7,
      location: 'Lakeside, Pokhara',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Coffee_Himalayan_Java_Nepal.jpg'
    },
    {
      id: 4,
      name: 'Rosemary Kitchen',
      type: 'Fine Dining',
      rating: 4.8,
      location: 'Thamel, Kathmandu',
      price: '$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg'
    },
    {
      id: 5,
      name: 'OR2K Restaurant',
      type: 'Traditional',
      rating: 4.6,
      location: 'Thamel, Kathmandu',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Lebanese_style_hummus.jpg'
    },
    {
      id: 6,
      name: 'Fire & Ice Pizzeria',
      type: 'Fine Dining',
      rating: 4.7,
      location: 'Thamel, Kathmandu',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg'
    },
    {
      id: 7,
      name: 'Krishnarpan Restaurant',
      type: 'Traditional',
      rating: 4.9,
      location: 'Battisputali, Kathmandu',
      price: '$$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg'
    },
    {
      id: 8,
      name: 'Moondance Restaurant',
      type: 'Cafes',
      rating: 4.6,
      location: 'Lakeside, Pokhara',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg'
    }
  ];

  const filteredRestaurants = activeTab === 'All' ? restaurants : restaurants.filter(r => r.type === activeTab);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Local Eats Guide</h1>
          <p className="text-on-surface-variant text-lg">Discover the best culinary experiences in Nepal, from street momos to fine dining.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRestaurants.map((restaurant, i) => (
            <motion.div 
              key={restaurant.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow ghost-border group"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-on-surface flex items-center gap-1">
                  <Star size={12} className="fill-secondary text-secondary" /> {restaurant.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-lg text-on-surface">{restaurant.name}</h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mt-1">{restaurant.price}</span>
                </div>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-4">
                  <MapPin size={14} /> {restaurant.location}
                </p>
                <div className="flex gap-2">
                  <span className="bg-surface-container-low text-on-surface-variant px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
                    {restaurant.type === 'Cafes' ? <Coffee size={12} /> : <Utensils size={12} />}
                    {restaurant.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalEats;
