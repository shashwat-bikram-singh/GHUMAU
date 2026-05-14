import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mountain, Compass, TreePine, Camera, Heart, Waves, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Mountain,
    title: 'Trekking & Hiking',
    count: 24,
    color: 'bg-blue-50 text-blue-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Annapurna_Massif_Aerial_View.jpg',
    link: '/activities/budget',
    desc: 'From gentle hill walks to the legendary Everest Base Camp trek.'
  },
  {
    icon: Compass,
    title: 'Adventure Sports',
    count: 12,
    color: 'bg-red-50 text-red-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Pokhara_Valley.jpg',
    link: '/activities/mid-range',
    desc: 'Paragliding, bungee jumping, white-water rafting and more.'
  },
  {
    icon: TreePine,
    title: 'Wildlife & Jungle',
    count: 8,
    color: 'bg-green-50 text-green-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg',
    link: '/activities/budget',
    desc: 'Jungle safaris, rhino spotting, and bird watching in Chitwan & Bardia.'
  },
  {
    icon: Camera,
    title: 'Cultural Tours',
    count: 18,
    color: 'bg-amber-50 text-amber-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
    link: '/activities/budget',
    desc: 'Ancient temples, UNESCO World Heritage Sites, and local village life.'
  },
  {
    icon: Heart,
    title: 'Wellness & Yoga',
    count: 9,
    color: 'bg-purple-50 text-purple-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/BRP_Lumbini_Mayadevi_temple.jpg',
    link: '/activities/mid-range',
    desc: 'Retreat centers, meditation courses, and Ayurvedic treatments.'
  },
  {
    icon: Waves,
    title: 'Water Activities',
    count: 7,
    color: 'bg-cyan-50 text-cyan-600',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
    link: '/activities/mid-range',
    desc: 'Boating on Phewa Lake, kayaking, and world-class river rafting.'
  },
];

const ActivityCategories = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">All Activity Categories</h1>
        <p className="text-lg text-on-surface-variant">Browse Nepal's diverse range of experiences — from high-altitude treks to cultural deep dives.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="h-52 relative overflow-hidden">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${cat.color}`}>
                {cat.count} Activities
              </div>
            </div>
            <div className="p-6">
              <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface mb-2">{cat.title}</h3>
              <p className="text-on-surface-variant text-[0.9375rem] mb-4 leading-relaxed">{cat.desc}</p>
              <Link to={cat.link} className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container transition-colors">
                Explore Activities <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ActivityCategories;
