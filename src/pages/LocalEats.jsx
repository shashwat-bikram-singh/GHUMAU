import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Utensils, Coffee } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import ParallaxCard from '../components/ParallaxCard';

const localEatsHeroSlides = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg',
    title: 'Steaming Momos',
    subtitle: 'Nepal\'s beloved dumpling',
    location: 'Thamel, Kathmandu',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg',
    title: 'Dal Bhat Tarkari',
    subtitle: 'The national meal of Nepal',
    location: 'Across Nepal',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/King_Curd_or_Jujudhau_making_at_Bhaktapur_Nepal.jpg',
    title: 'Juju Dhau',
    subtitle: 'King of curds – Bhaktapur',
    location: 'Pottery Square, Bhaktapur',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Coffee_Himalayan_Java_Nepal.jpg',
    title: 'Himalayan Java Coffee',
    subtitle: 'Best café culture in Nepal',
    location: 'Lakeside, Pokhara',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg',
    title: 'Traditional Thali',
    subtitle: 'Authentic Nepali fine dining',
    location: 'Dilli Bazar, Kathmandu',
  },
];

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
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg',
      desc: 'Famous for its juicy buff momos, Thamel\'s most iconic street stall.',
    },
    {
      id: 2,
      name: 'Bhojan Griha',
      type: 'Traditional',
      rating: 4.9,
      location: 'Dilli Bazar, Kathmandu',
      price: '$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg',
      desc: 'A 150-year-old Rana-era mansion serving authentic Newari cuisine.',
    },
    {
      id: 3,
      name: 'Himalayan Java Coffee',
      type: 'Cafes',
      rating: 4.7,
      location: 'Lakeside, Pokhara',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Coffee_Himalayan_Java_Nepal.jpg',
      desc: 'Nepal\'s premier specialty coffee chain with lake-view seating.',
    },
    {
      id: 4,
      name: 'Rosemary Kitchen',
      type: 'Fine Dining',
      rating: 4.8,
      location: 'Thamel, Kathmandu',
      price: '$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg',
      desc: 'European-Nepali fusion in a rooftop garden setting in Thamel.',
    },
    {
      id: 5,
      name: 'OR2K Restaurant',
      type: 'Traditional',
      rating: 4.6,
      location: 'Thamel, Kathmandu',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Lebanese_style_hummus.jpg',
      desc: 'Chill Middle-Eastern and Nepali fusion favourite with rooftop cushion seating.',
    },
    {
      id: 6,
      name: 'Fire & Ice Pizzeria',
      type: 'Fine Dining',
      rating: 4.7,
      location: 'Thamel, Kathmandu',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg',
      desc: 'Kathmandu\'s most popular wood-fired pizza spot, a Thamel institution since 1994.',
    },
    {
      id: 7,
      name: 'Krishnarpan Restaurant',
      type: 'Traditional',
      rating: 4.9,
      location: 'Battisputali, Kathmandu',
      price: '$$$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg',
      desc: 'Award-winning multi-course Newari tasting menu inside Dwarika\'s Heritage Hotel.',
    },
    {
      id: 8,
      name: 'Moondance Restaurant',
      type: 'Cafes',
      rating: 4.6,
      location: 'Lakeside, Pokhara',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
      desc: 'Sunset views over Phewa Lake with fresh pasta and cocktails.',
    },
    {
      id: 9,
      name: 'Juju Dhau Curd Shop & Cafe',
      type: 'Street Food',
      rating: 4.8,
      location: 'Pottery Square, Bhaktapur',
      price: '$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/King_Curd_or_Jujudhau_making_at_Bhaktapur_Nepal.jpg',
      desc: 'Try the "King of Curds" straight from its birthplace in Bhaktapur.',
    },
    {
      id: 10,
      name: 'Mithila Sweets & Thali',
      type: 'Traditional',
      rating: 4.7,
      location: 'Janakpurdham',
      price: '$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg',
      desc: 'Authentic Madheshi cuisine and local sweets in the heart of Janakpur.',
    },
    {
      id: 11,
      name: 'Bandipur Organic Cafe',
      type: 'Cafes',
      rating: 4.7,
      location: 'Bandipur Bazaar',
      price: '$$',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Coffee_Himalayan_Java_Nepal.jpg',
      desc: 'Farm-to-table organic café with sweeping Himalayan mountain views.',
    },
  ];

  const filteredRestaurants = activeTab === 'All' ? restaurants : restaurants.filter(r => r.type === activeTab);

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Animated Hero Banner ─────────────────────────────────────────── */}
      <AnimatedHero
        slides={localEatsHeroSlides}
        className="pt-32 pb-16"
        interval={4500}
        compact
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block text-primary-container font-semibold text-sm uppercase tracking-widest mb-3">
              Culinary Nepal
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight leading-[1.1]">
              Local Eats Guide
            </h1>
            <p className="text-lg text-white/72 leading-relaxed">
              Discover the best culinary experiences in Nepal, from street momos to fine dining.
            </p>
          </motion.div>
        </div>
      </AnimatedHero>

      <div className="container mx-auto px-6 md:px-12 mt-10 pb-20">
        {/* Category Filters */}
        <div className="mb-10">
          <div className="tab-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`tab-pill${activeTab === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRestaurants.map((restaurant, i) => (
            <motion.div 
              key={restaurant.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
            >
              <ParallaxCard intensity={9} className="h-full">
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow ghost-border group h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1">
                      <Star size={12} className="fill-amber-300" /> {restaurant.rating}
                    </div>
                    <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white/90 text-xs font-bold px-2.5 py-1 rounded-full">
                      {restaurant.price}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-display font-bold text-lg text-on-surface leading-tight">{restaurant.name}</h3>
                    </div>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3">
                      <MapPin size={13} className="text-primary shrink-0" /> {restaurant.location}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4 flex-grow">{restaurant.desc}</p>
                    <div className="flex gap-2 mt-auto">
                      <span className="bg-surface-container-low text-on-surface-variant px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
                        {restaurant.type === 'Cafes' ? <Coffee size={12} /> : <Utensils size={12} />}
                        {restaurant.type}
                      </span>
                    </div>
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalEats;
