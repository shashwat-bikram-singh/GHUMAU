import React from 'react';
import { motion } from 'framer-motion';
import PlannerForm from '../components/PlannerForm';

const TripPlanner = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Create Your <span className="text-gradient">Itinerary</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Tell us where you want to go, when, and what your budget is. We'll handle the rest.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Decorative background blob */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-teal-500 rounded-[2rem] blur-2xl opacity-20 dark:opacity-30"></div>
          
          <div className="bg-white dark:bg-dark-800 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative border border-gray-100 dark:border-gray-700/50">
            <PlannerForm />
            
            <div className="mt-16 border-t border-gray-100 dark:border-gray-700/50 pt-10">
               <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">How it works</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center px-4">
                     <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-primary-600 font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                     <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Share Preferences</h4>
                     <p className="text-gray-500 dark:text-gray-400 text-sm">Select dates, locations, and budget.</p>
                  </div>
                  <div className="text-center px-4">
                     <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-primary-600 font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                     <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Get Custom Plan</h4>
                     <p className="text-gray-500 dark:text-gray-400 text-sm">Our system generates an optimized route.</p>
                  </div>
                  <div className="text-center px-4">
                     <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-primary-600 font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                     <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Book & Go</h4>
                     <p className="text-gray-500 dark:text-gray-400 text-sm">Finalize bookings directly to start traveling.</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TripPlanner;
