import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, LogOut, Heart, Map, CreditCard } from 'lucide-react';
import TripCard from '../components/TripCard';
import { savedTrips } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-28 shadow-sm">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-center">
                <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/40 rounded-full mx-auto flex items-center justify-center mb-4 text-primary-600">
                  <User size={40} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">john.doe@example.com</p>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <button className="flex items-center gap-3 px-4 py-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl font-medium transition-colors w-full text-left">
                  <Map size={18} /> My Trips
                </button>
                <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors w-full text-left">
                  <Heart size={18} /> Saved Destinations
                </button>
                <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors w-full text-left">
                  <CreditCard size={18} /> Payments
                </button>
                <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors w-full text-left">
                  <Settings size={18} /> Settings
                </button>
                <button className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 rounded-xl font-medium transition-colors mt-4 w-full text-left">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Trips</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your upcoming and past adventures.</p>
            </div>

            <div className="flex flex-col gap-6">
              {savedTrips.map((trip, i) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TripCard trip={trip} />
                </motion.div>
              ))}
            </div>
            
            {savedTrips.length === 0 && (
              <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-10 text-center shadow-sm">
                <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Map size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No trips planned yet</h3>
                <p className="text-gray-500 mb-6">Start planning your next adventure in Nepal.</p>
                <a href="/planner" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium inline-block">Plan a Trip</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
