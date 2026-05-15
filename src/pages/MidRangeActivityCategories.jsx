import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  { id: 1, title: 'Annapurna Circuit Trek', cat: 'Trekking', rating: 4.9, priceRange: '$350–$500', duration: '14 Days', location: 'Annapurna Region', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop', desc: 'One of the world\'s greatest treks, circling the Annapurna massif through diverse landscapes.' },
  { id: 2, title: 'Pokhara Paragliding', cat: 'Adventure', rating: 4.9, priceRange: '$80–$100', duration: 'Half Day', location: 'Sarangkot, Pokhara', image: 'https://images.unsplash.com/photo-1520113412536-69d67566cb4b?q=80&w=800&auto=format&fit=crop', desc: 'Soar over Phewa Lake with spectacular views of the Annapurna and Dhaulagiri ranges.' },
  { id: 3, title: 'Yoga & Meditation Retreat', cat: 'Wellness', rating: 4.8, priceRange: '$120–$200', duration: '3–5 Days', location: 'Kathmandu / Pokhara', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', desc: 'Reconnect with yourself through guided yoga, pranayama, and meditation in peaceful Himalayan surroundings.' },
  { id: 4, title: 'Cultural Heritage Tour', cat: 'Cultural', rating: 4.7, priceRange: '$120–$180', duration: '3 Days', location: 'Kathmandu Valley', image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop', desc: 'A curated tour of all seven UNESCO World Heritage monuments in the Kathmandu Valley.' },
  { id: 5, title: 'Chitwan Wildlife Experience', cat: 'Wildlife', rating: 4.8, priceRange: '$150–$250', duration: '3 Days', location: 'Chitwan', image: 'https://images.unsplash.com/photo-1581008697198-5c464817a02c?q=80&w=800&auto=format&fit=crop', desc: 'Comprehensive wildlife package including jeep safari, canoe ride, elephant bathing, and cultural dances.' },
  { id: 6, title: 'Upper Mustang Jeep Safari', cat: 'Adventure', rating: 4.9, priceRange: '$400–$600', duration: '7 Days', location: 'Mustang', image: 'https://images.unsplash.com/photo-1533421295325-a131ae979262?q=80&w=800&auto=format&fit=crop', desc: 'Explore the ancient Tibetan-influenced kingdom of Mustang by 4WD jeep across dramatic desert landscapes.' },
];

const catColors = { Trekking: 'bg-blue-50 text-blue-700', Adventure: 'bg-red-50 text-red-700', Wellness: 'bg-purple-50 text-purple-700', Cultural: 'bg-amber-50 text-amber-700', Wildlife: 'bg-green-50 text-green-700' };

const MidRangeActivityCategories = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Mid-Range</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Mid-Range Activity Categories</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">The sweet spot between comfort and adventure — curated experiences for the discerning traveller on a sensible budget.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((act, i) => (
          <motion.div key={act.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${catColors[act.cat] || 'bg-primary/10 text-primary'}`}>{act.cat}</div>
              <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1"><Star size={13} className="fill-secondary" />{act.rating}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-xl text-on-surface mb-1">{act.title}</h3>
              <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={13} className="text-primary" />{act.location}</p>
              <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{act.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t ghost-border mt-auto">
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5"><Clock size={12} className="inline mr-1" />{act.duration}</p>
                  <p className="font-display font-bold text-lg text-primary">{act.priceRange}</p>
                </div>
                <Link to="/bookings" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-container transition-colors">Book <ArrowRight size={15} /></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default MidRangeActivityCategories;
