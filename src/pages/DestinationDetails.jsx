import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle, Navigation, Wallet } from 'lucide-react';
import { destinations } from '../data/mockData';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Destination Not Found</h2>
        <Link to="/explore" className="text-primary-600 hover:underline">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      {/* Dynamic Header Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-dark-900 to-transparent"></div>
        
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-4 md:px-6 pb-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl max-w-4xl mx-auto border border-white/20 dark:border-gray-700/50 -mb-20"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {destination.category} Budget
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                      <Star size={16} className="fill-yellow-500" />
                      <span>{destination.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 font-normal text-sm">({destination.reviews} reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {destination.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
                    <MapPin size={18} className="text-primary-500" />
                    <span>Nepal</span>
                  </div>
                </div>
                
                <div className="text-left md:text-right w-full md:w-auto">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{destination.pricePerDay}<span className="text-base font-normal text-gray-500 dark:text-gray-400">/day</span></p>
                  <Link 
                    to="/planner"
                    className="mt-4 w-full md:w-auto inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-center"
                  >
                    Start Planning
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">About this destination</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {destination.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-dark-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Navigation size={18} className="text-primary-500" /> Top Activities
                  </h3>
                  <ul className="space-y-3">
                    {destination.activities.map((act, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle size={16} className="text-primary-500 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
};

export default DestinationDetails;
