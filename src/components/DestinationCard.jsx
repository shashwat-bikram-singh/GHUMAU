import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-dark-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden group">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{destination.rating}</span>
        </div>
        <div className="absolute top-4 left-4 bg-primary-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          {destination.category} Budget
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{destination.name}</h3>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">
          <MapPin size={16} className="text-primary-500" />
          <span>Nepal</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-6 flex-grow">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">From </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">{destination.pricePerDay}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">/day</span>
          </div>
          
          <Link 
            to={`/destination/${destination.id}`}
            className="bg-primary-50 hover:bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:hover:bg-primary-800/60 dark:text-primary-300 px-5 py-2.5 rounded-xl font-semibold transition-colors duration-200 text-sm"
          >
            Explore
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
