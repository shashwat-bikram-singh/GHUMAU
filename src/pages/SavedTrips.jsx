import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Edit, Trash2, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SavedTrips = () => {
  const savedTrips = [
    {
      id: 1,
      title: 'Annapurna Base Camp',
      duration: '14 Days',
      type: 'Trekking',
      budget: '$1,200 - $1,500',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Pokhara Lake Retreat',
      duration: '5 Days',
      type: 'Relaxation',
      budget: '$400 - $600',
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface tracking-tight leading-tight mb-6"
          >
            My Saved <br/> Adventures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-on-surface-variant leading-relaxed"
          >
            Your curated collection of serene escapes and high-altitude journeys, waiting for you.
          </motion.p>
        </header>

        {/* Trips Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {savedTrips.map((trip, index) => (
            <motion.article 
              key={trip.id}
              variants={itemVariants}
              className={`group bg-surface-container-lowest rounded-3xl overflow-hidden ambient-shadow ghost-border flex flex-col ${index === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Image Section */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-display font-semibold text-white mb-2">{trip.title}</h2>
                  <div className="flex items-center text-white/90 text-sm font-medium space-x-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} /> {trip.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> {trip.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-sm font-medium text-on-surface-variant">Estimated Budget</div>
                  <div className="text-lg font-display font-bold text-primary">{trip.budget}</div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-surface-container-high text-primary hover:bg-primary/10 transition-colors py-3.5 rounded-full font-semibold flex justify-center items-center gap-2">
                    <Edit size={18} /> Edit
                  </button>
                  <button className="w-14 h-14 flex justify-center items-center text-on-surface-variant hover:text-error hover:bg-error/10 rounded-full transition-colors border border-outline-variant/10">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Add New Trip Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/20 flex flex-col justify-center items-center p-10 text-center min-h-[450px] hover:bg-surface-container-high transition-all duration-300 cursor-pointer group lg:mt-24"
          >
            <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform ambient-shadow">
              <Plus size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-bold text-on-surface mb-3 tracking-tight">Plan a New Adventure</h3>
            <p className="text-on-surface-variant mb-10 max-w-[200px] mx-auto">Discover new trails or peaceful retreats in the Himalayas.</p>
            <Link to="/planner" className="btn-primary px-8 py-4 rounded-full font-bold flex items-center gap-2">
              Start Planning <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SavedTrips;
