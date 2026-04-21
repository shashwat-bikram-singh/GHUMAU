import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TripCard = ({ trip }) => {
  const isUpcoming = trip.status === 'Upcoming';

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row relative"
    >
      <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden relative">
        <img 
          src={trip.image} 
          alt={trip.destination} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${isUpcoming ? 'bg-green-500/90 text-white' : 'bg-blue-500/90 text-white'}`}>
          {trip.status}
        </div>
      </div>
      
      <div className="p-6 md:w-2/3 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {trip.destination}
        </h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <Calendar size={16} className="text-primary-500" />
            <span>{trip.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <Clock size={16} className="text-primary-500" />
            <span>4 Days, 3 Nights</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-auto">
          <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">
            View Itinerary
          </button>
          <button className="border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg font-medium transition-colors text-sm">
            Edit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard;
