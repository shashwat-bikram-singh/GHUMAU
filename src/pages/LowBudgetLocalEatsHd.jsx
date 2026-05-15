import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, DollarSign, Utensils } from 'lucide-react';

const restaurants = [
  { id: 1, name: 'Roadside Momo Stall', location: 'Thamel, Kathmandu', type: 'Street Food', price: '$1–3', rating: 4.7, image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop', desc: 'Authentic street momos — steamed or fried dumplings stuffed with vegetables or meat, best eaten with achar.' },
  { id: 2, name: 'Lakeside Food Street', location: 'Lakeside, Pokhara', type: 'Street Food', price: '$2–5', rating: 4.6, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', desc: 'An entire street of cheap, delicious food stalls by Phewa Lake — try the sekuwa and chatamari.' },
  { id: 3, name: 'Chitwan Thakali House', location: 'Sauraha, Chitwan', type: 'Nepali', price: '$2–4', rating: 4.8, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', desc: 'An authentic Thakali kitchen serving unlimited dal bhat at rock-bottom prices beloved by trekkers.' },
  { id: 4, name: 'Bodhi Café', location: 'Boudhha, Kathmandu', type: 'Café', price: '$2–5', rating: 4.5, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', desc: 'A peaceful café near Boudhanath Stupa, popular for its strong Nepali milk tea, homemade cakes, and serene vibe.' },
  { id: 5, name: 'Bhaktapur Juju Dhau', location: 'Bhaktapur', type: 'Traditional', price: '$1–2', rating: 4.9, image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?q=80&w=800&auto=format&fit=crop', desc: 'Try Bhaktapur\'s famous "King Curd" (Juju Dhau) — a rich, creamy yoghurt served in clay pots. A must-try.' },
  { id: 6, name: 'Trekkers Kitchen', location: 'Namche Bazaar, Everest', type: 'Nepali', price: '$5–9', rating: 4.8, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', desc: 'Fuel up for the trail with hearty dal bhat, egg noodle soup, and Sherpa stew at this beloved teahouse.' },
];

const typeColors = { 'Street Food': 'bg-orange-50 text-orange-700', 'Nepali': 'bg-red-50 text-red-700', 'Café': 'bg-amber-50 text-amber-700', 'Traditional': 'bg-purple-50 text-purple-700' };

const LowBudgetLocalEatsHd = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">HD Low Budget Eats</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Low Budget Local Eats</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">The tastiest Nepal food experiences cost almost nothing. These are the locals' favourites — no tourist mark-up, just great food.</p>
      </motion.div>

      {/* Tips Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { tip: '💡 Dal bhat is always available and always filling — unlimited refills guaranteed.' },
          { tip: '🍵 Nepali milk tea (chiya) is the best 30-cent purchase you\'ll ever make.' },
          { tip: '🥟 Momos from roadside stalls are safe, delicious, and cost under $2.' },
        ].map((t, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-[1rem] p-4 ghost-border text-on-surface-variant text-sm leading-relaxed">
            {t.tip}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((r, i) => (
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

export default LowBudgetLocalEatsHd;
