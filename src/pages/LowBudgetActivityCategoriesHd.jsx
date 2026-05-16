import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Clock, MapPin, Star, Filter } from 'lucide-react';

const activities = [
  { id: 1, title: 'Ghorepani Poon Hill Trek', cat: 'Trekking', rating: 4.8, price: '$95', duration: '4 Days', location: 'Annapurna', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg' },
  { id: 2, title: 'Pokhara Paragliding', cat: 'Adventure', rating: 4.9, price: '$85', duration: 'Half Day', location: 'Pokhara', image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg' },
  { id: 3, title: 'Namobuddha Hike & Monastery', cat: 'Cultural', rating: 4.7, price: '$40', duration: '1 Day', location: 'Kavrepalanchok', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghorepani.jpg' },
  { id: 4, title: 'Seti River Gorge Kayaking', cat: 'Water Sports', rating: 4.6, price: '$75', duration: '1 Day', location: 'Pokhara', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Basantapurpalace.JPG' },
  { id: 5, title: 'Langtang Valley Trek', cat: 'Trekking', rating: 4.8, price: '$90', duration: '7 Days', location: 'Langtang', image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Starry_night_in_Langtang_National_Park.jpg' },
  { id: 6, title: 'Zip-Line, Pokhara', cat: 'Adventure', rating: 4.9, price: '$60', duration: '2 hrs', location: 'Pokhara', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg' },
];

const LowBudgetActivityCategoriesHd = () => {
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Trekking', 'Adventure', 'Cultural', 'Water Sports'];
  const filtered = cat === 'All' ? activities : activities.filter(a => a.cat === cat);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">HD Quality Experiences</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Low Budget, High Adventure</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">Premium Nepal experiences curated for smart travellers — maximum memories, minimum spend.</p>
        </motion.div>

        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <Filter size={16} className="text-on-surface-variant" />
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${cat === c ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>{c}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((act, i) => (
            <motion.div key={act.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden">
                <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-on-surface">{act.cat}</div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1"><Star size={13} className="fill-secondary" />{act.rating}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{act.title}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-4"><MapPin size={14} className="text-primary" />{act.location}</p>
                <div className="flex items-center justify-between pt-4 border-t ghost-border mt-auto">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant"><Clock size={14} />{act.duration}</span>
                  <span className="font-display font-bold text-lg text-primary">{act.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowBudgetActivityCategoriesHd;
