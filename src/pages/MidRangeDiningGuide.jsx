import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, Utensils, Wine, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'Bhojan Griha', location: 'Dilli Bazar, Kathmandu', cuisine: 'Traditional Newari', priceRange: '$$$', rating: 4.9, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', desc: 'An exquisite Newari dining experience in a heritage courtyard mansion — featuring live classical music and 22-course set meals.' },
  { id: 2, name: 'Himalayan Java', location: 'Multiple Locations', cuisine: 'Café & Bakery', priceRange: '$$', rating: 4.7, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', desc: 'Nepal\'s premium coffee brand, offering specialty Himalayan arabica brews, pastries, and reliable WiFi across Kathmandu and Pokhara.' },
  { id: 3, name: 'Rosemary Kitchen', location: 'Thamel, Kathmandu', cuisine: 'Continental', priceRange: '$$$', rating: 4.8, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', desc: 'A charming garden restaurant beloved for its wood-fired pizzas, fresh pastas, and extensive international wine list.' },
  { id: 4, name: 'Moondance Restaurant', location: 'Lakeside, Pokhara', cuisine: 'International', priceRange: '$$', rating: 4.6, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', desc: 'A stylish lakeside restaurant with stunning Annapurna views, known for its creative Asian-Western fusion menu and cocktails.' },
  { id: 5, name: 'Fulbari Resort Restaurant', location: 'Pokhara', cuisine: 'Fine Dining', priceRange: '$$$$', rating: 4.9, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', desc: 'The finest dining in Pokhara, combining French culinary techniques with fresh Nepali ingredients and breathtaking mountain views.' },
  { id: 6, name: 'Fire & Ice Pizzeria', location: 'Thamel, Kathmandu', cuisine: 'Italian', priceRange: '$$', rating: 4.7, image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?q=80&w=800&auto=format&fit=crop', desc: 'A Kathmandu legend — thin-crust, wood-fired pizzas made by an Italian owner using imported mozzarella and fresh local toppings.' },
];

const priceColors = { '$': 'text-green-700 bg-green-50', '$$': 'text-blue-700 bg-blue-50', '$$$': 'text-purple-700 bg-purple-50', '$$$$': 'text-amber-700 bg-amber-50' };
const cuisineIcons = { 'Café & Bakery': Coffee, 'International': Utensils, 'Fine Dining': Wine };

const MidRangeDiningGuide = () => {
  const [cuisine, setCuisine] = useState('All');
  const cuisines = ['All', 'Traditional Newari', 'Continental', 'International', 'Café & Bakery', 'Italian', 'Fine Dining'];
  const filtered = cuisine === 'All' ? restaurants : restaurants.filter(r => r.cuisine === cuisine);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Dining Guide</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Mid-Range Dining Guide</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">From atmospheric Newari courtyards to lakeside fusion restaurants — Nepal's mid-range dining scene is surprisingly world-class.</p>
        </motion.div>

        {/* Price Legend */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] px-6 py-4 ghost-border mb-10 flex flex-wrap gap-6 items-center">
          <span className="text-sm font-semibold text-on-surface-variant">Price Guide:</span>
          {['$', '$$', '$$$', '$$$$'].map(p => (
            <span key={p} className={`text-sm font-bold px-3 py-1 rounded-full ${priceColors[p]}`}>{p} = {p === '$' ? 'Under $5' : p === '$$' ? '$5–15' : p === '$$$' ? '$15–30' : '$30+'}</span>
          ))}
        </div>

        {/* Cuisine Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cuisines.map(c => (
            <button key={c} onClick={() => setCuisine(c)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${cuisine === c ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>{c}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${priceColors[r.priceRange] || 'bg-primary/10 text-primary'}`}>{r.priceRange}</div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                  <Star size={13} className="fill-secondary" /> {r.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  {React.createElement(cuisineIcons[r.cuisine] || Utensils, { size: 14, className: 'text-primary' })}
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{r.cuisine}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{r.name}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={13} className="text-primary" />{r.location}</p>
                <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{r.desc}</p>
                <div className="pt-4 border-t ghost-border mt-auto">
                  <Link to="/dining" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-container transition-colors">
                    View Full Dining Guide <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidRangeDiningGuide;
