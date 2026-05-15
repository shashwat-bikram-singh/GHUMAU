import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Utensils, DollarSign } from 'lucide-react';

const restaurants = [
  { id: 1, name: 'Thamel Momo Corner', location: 'Thamel, Kathmandu', type: 'Street Food', price: '$2–5', rating: 4.8, image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop', desc: 'Legendary street-side stall serving piping hot buff and chicken momos — a Kathmandu institution.' },
  { id: 2, name: 'OR2K Restaurant', location: 'Thamel, Kathmandu', type: 'Vegetarian', price: '$4–8', rating: 4.6, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', desc: 'A beloved Middle Eastern-Nepali fusion spot popular with backpackers for its hummus, falafels, and dal bhat.' },
  { id: 3, name: 'Pokhara Thakali Kitchen', location: 'Lakeside, Pokhara', type: 'Nepali', price: '$3–6', rating: 4.9, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', desc: 'Authentic Thakali set meals (dal bhat) in generous portions — the preferred meal of Nepal\'s mountain trekkers.' },
  { id: 4, name: 'Chitwan Jungle Café', location: 'Sauraha, Chitwan', type: 'Café', price: '$3–7', rating: 4.5, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', desc: 'A relaxed open-air café in the jungle town of Sauraha, perfect for breakfast and sunset drinks.' },
  { id: 5, name: 'Newari Kitchen, Patan', location: 'Patan Durbar Square', type: 'Traditional', price: '$4–8', rating: 4.7, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', desc: 'Authentic Newari cuisine served in a traditional setting overlooking Patan\'s UNESCO World Heritage square.' },
  { id: 6, name: 'Lumbini Pilgrim Dhaba', location: 'Lumbini', type: 'Nepali', price: '$2–4', rating: 4.4, image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?q=80&w=800&auto=format&fit=crop', desc: 'A simple, wholesome dhaba near the sacred Lumbini Gardens, serving hearty vegetarian meals and chai.' },
];

const typeColors = { 'Street Food': 'bg-orange-50 text-orange-700', 'Vegetarian': 'bg-green-50 text-green-700', 'Nepali': 'bg-red-50 text-red-700', 'Café': 'bg-amber-50 text-amber-700', 'Traditional': 'bg-purple-50 text-purple-700' };

const LocalEatsBudgetDiningInNepal = () => {
  const [type, setType] = useState('All');
  const types = ['All', 'Street Food', 'Nepali', 'Vegetarian', 'Café', 'Traditional'];
  const filtered = type === 'All' ? restaurants : restaurants.filter(r => r.type === type);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Budget Dining</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Budget Dining in Nepal</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">Eat like a local and spend like a local. The best budget restaurants and street food spots across Nepal.</p>
        </motion.div>

        {/* Highlight: Dal Bhat Power */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 md:p-8 ghost-border ambient-shadow mb-10 flex items-center gap-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <Utensils size={28} className="text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-on-surface mb-1">Dal Bhat Power — 24 Hour!</h3>
            <p className="text-on-surface-variant text-[0.9375rem]">Nepal's national dish of lentil soup, rice, curried vegetables, and pickles costs just $2–4 and comes with unlimited refills. The ultimate budget meal and a favourite of trekkers and locals alike.</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {types.map(t => (
            <button key={t} onClick={() => setType(t)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${type === t ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>{t}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${typeColors[r.type] || 'bg-primary/10 text-primary'}`}>{r.type}</div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                  <Star size={13} className="fill-secondary" /> {r.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{r.name}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={13} className="text-primary" />{r.location}</p>
                <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{r.desc}</p>
                <div className="flex items-center gap-2 pt-4 border-t ghost-border mt-auto">
                  <DollarSign size={15} className="text-secondary" />
                  <span className="text-sm font-bold text-on-surface">Avg. {r.price} per person</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalEatsBudgetDiningInNepal;
