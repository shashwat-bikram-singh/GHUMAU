import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { User, Settings, LogOut, Heart, Map, CreditCard } from 'lucide-react';
import TripCard from '../components/TripCard';
import { Link } from 'react-router-dom';
import { savedTrips } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-40 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-surface-container-lowest rounded-[1.5rem] ghost-border overflow-hidden sticky top-32 ambient-shadow">
              <div className="p-8 border-b ghost-border text-center">
                <div className="w-24 h-24 bg-surface-container-low rounded-[1.5rem] mx-auto flex items-center justify-center mb-6 text-primary">
                  <User size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-display font-bold text-on-surface mb-1">John Doe</h2>
                <p className="text-on-surface-variant text-[0.9375rem]">john.doe@example.com</p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <button className="flex items-center gap-4 px-5 py-3.5 bg-primary/10 text-primary rounded-xl font-medium transition-colors w-full text-left text-[0.9375rem]">
                  <Map size={20} strokeWidth={1.5} /> My Trips
                </button>
                <button className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface-container-low text-on-surface-variant rounded-xl font-medium transition-colors w-full text-left text-[0.9375rem]">
                  <Heart size={20} strokeWidth={1.5} /> Saved Destinations
                </button>
                <button className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface-container-low text-on-surface-variant rounded-xl font-medium transition-colors w-full text-left text-[0.9375rem]">
                  <CreditCard size={20} strokeWidth={1.5} /> Payments
                </button>
                <Link to="/profile" className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface-container-low text-on-surface-variant rounded-xl font-medium transition-colors w-full text-left text-[0.9375rem]">
                  <Settings size={20} strokeWidth={1.5} /> Settings
                </Link>
                <button className="flex items-center gap-4 px-5 py-3.5 hover:bg-red-50 text-red-600 rounded-xl font-medium transition-colors mt-4 w-full text-left text-[0.9375rem]">
                  <LogOut size={20} strokeWidth={1.5} /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">My Trips</h1>
              <p className="text-on-surface-variant text-lg">Manage your upcoming and past adventures.</p>
            </div>

            <div className="flex flex-col gap-8">
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
              <div className="bg-surface-container-lowest rounded-[1.5rem] ghost-border p-12 text-center ambient-shadow">
                <div className="mx-auto w-20 h-20 bg-surface-container-low rounded-[1.5rem] flex items-center justify-center mb-6">
                  <Map size={32} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold text-on-surface mb-3">No trips planned yet</h3>
                <p className="text-on-surface-variant mb-8 text-[0.9375rem]">Start planning your next adventure in Nepal.</p>
                <a href="/planner" className="btn-primary px-8 py-3.5 inline-block text-[0.9375rem]">Plan a Trip</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
