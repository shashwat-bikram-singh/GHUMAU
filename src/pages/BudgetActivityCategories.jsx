import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  { id: 1, title: 'Chitwan Canoe Ride', duration: '2 hrs', location: 'Chitwan', price: '$8', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Namche_Bazaar_Nepal.jpg', desc: 'Glide silently through the Rapti River in a traditional dugout canoe and spot crocodiles and birds.' },
  { id: 2, title: 'Kathmandu Heritage Walk', duration: '1 Day', location: 'Kathmandu', price: '$25', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Patan_durbar_square.jpg', desc: 'Walk through Durbar Squares, Boudhanath and Pashupatinath on a fully guided cultural walking tour.' },
  { id: 3, title: 'Trisuli River Rafting', duration: '1 Day', location: 'Trisuli', price: '$55', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg', desc: 'Navigate exciting Grade III-IV rapids on the beautiful Trisuli River, just 2 hours from Kathmandu.' },
  { id: 4, title: 'Poon Hill Sunrise Trek', duration: '4 Days', location: 'Ghorepani', price: '$90', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pokhara_Valley.jpg', desc: 'A classic short trek to the iconic Poon Hill viewpoint for unforgettable Himalayan sunrise views.' },
  { id: 5, title: 'Jungle Safari (Jeep)', duration: 'Half Day', location: 'Chitwan', price: '$45', image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'A thrilling jeep safari through the dense jungle in search of rhinos, elephants, deer and leopards.' },
  { id: 6, title: 'Bhaktapur Day Tour', duration: '1 Day', location: 'Bhaktapur', price: '$30', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Annapurna_Massif_Aerial_View.jpg', desc: 'Explore the remarkably preserved medieval city of Bhaktapur with its stunning Durbar Square and Peacock Windows.' },
];

const perks = ['Budget-friendly prices', 'Local expert guides', 'Flexible group sizes', 'No hidden fees'];

const BudgetActivityCategories = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-6">
        <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Budget Friendly</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Budget Activity Categories</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">Amazing Nepal experiences without breaking the bank. All activities under $100.</p>
      </motion.div>

      {/* Perks Bar */}
      <div className="bg-surface-container-lowest rounded-[1.5rem] px-6 py-4 ghost-border ambient-shadow mb-12 flex flex-wrap gap-4">
        {perks.map(p => (
          <span key={p} className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
            <CheckCircle size={16} className="text-secondary" /> {p}
          </span>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((act, i) => (
          <motion.div key={act.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">{act.price}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-xl text-on-surface mb-1">{act.title}</h3>
              <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={14} className="text-primary" />{act.location}</p>
              <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{act.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t ghost-border mt-auto">
                <span className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant"><Clock size={14} />{act.duration}</span>
                <Link to="/bookings" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-container transition-colors">Book <ArrowRight size={15} /></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default BudgetActivityCategories;
