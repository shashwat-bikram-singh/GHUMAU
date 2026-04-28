import React from 'react';
import { motion } from 'framer-motion';
import { Map, Calendar, Leaf, Book, ShieldAlert, Mail } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest rounded-[2rem] p-10 md:p-14 mb-8 ghost-border ambient-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-[2rem] bg-surface-container-low overflow-hidden mb-6">
               <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" alt="Elena Rostova" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-display font-bold text-on-surface mb-3 tracking-tight">Elena Rostova</h1>
            <p className="text-on-surface-variant text-lg max-w-md">Finding stillness in high altitudes. Photography, tea, and long trails.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* My Journeys */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-lowest rounded-[2rem] p-10 ghost-border ambient-shadow flex flex-col"
          >
             <h2 className="text-2xl font-display font-bold text-on-surface mb-8 flex items-center gap-3">
               <Map className="text-primary" /> My Journeys
             </h2>
             
             <div className="space-y-8">
               <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-[-2rem] before:w-[2px] before:bg-surface-container-high last:before:hidden">
                 <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border-4 border-surface-container-lowest z-10">
                   <div className="w-2 h-2 rounded-full bg-primary"></div>
                 </div>
                 <h3 className="text-lg font-bold text-on-surface mb-1">Annapurna Circuit</h3>
                 <p className="text-on-surface-variant flex items-center gap-2 text-sm font-medium">
                   <Calendar size={14} /> Oct 12 - Oct 28
                 </p>
               </div>
               
               <div className="relative pl-8">
                 <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center border-4 border-surface-container-lowest z-10">
                   <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                 </div>
                 <h3 className="text-lg font-bold text-on-surface mb-1">Zermatt Retreat</h3>
                 <p className="text-on-surface-variant flex items-center gap-2 text-sm font-medium">
                   <Calendar size={14} /> Jun 05 - Jun 14
                 </p>
               </div>
             </div>
          </motion.div>

          {/* Account Settings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 hover:bg-surface-container-lowest transition-colors cursor-pointer group flex items-center justify-between ghost-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Leaf size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Sustainability</h3>
                  <p className="text-sm text-on-surface-variant">Carbon offset and green travel</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-[1.5rem] p-6 hover:bg-surface-container-lowest transition-colors cursor-pointer group flex items-center justify-between ghost-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Book size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Guidebook</h3>
                  <p className="text-sm text-on-surface-variant">Saved articles and tips</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-[1.5rem] p-6 hover:bg-surface-container-lowest transition-colors cursor-pointer group flex items-center justify-between ghost-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ShieldAlert size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Mountain Safety</h3>
                  <p className="text-sm text-on-surface-variant">Emergency contacts & health</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-[1.5rem] p-6 hover:bg-surface-container-lowest transition-colors cursor-pointer group flex items-center justify-between ghost-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Contact</h3>
                  <p className="text-sm text-on-surface-variant">Support & feedback</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
