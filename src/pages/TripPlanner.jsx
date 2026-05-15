import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PlannerForm from '../components/PlannerForm';

const TripPlanner = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight"
          >
            Create Your Itinerary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant"
          >
            Tell us where you want to go, when, and what your budget is. We&apos;ll handle the rest.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PlannerForm />

          <div className="mt-16 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 ambient-shadow ghost-border">
            <h3 className="text-2xl font-display font-bold text-center text-on-surface mb-10">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: '1', title: 'Share Preferences', desc: 'Select your desired destination, travel dates, and budget range.' },
                { step: '2', title: 'Get Custom Plan', desc: 'Our system generates an optimized itinerary tailored just for you.' },
                { step: '3', title: 'Book & Go', desc: 'Finalize bookings directly and start your Himalayan adventure.' },
              ].map((item) => (
                <div key={item.step} className="text-center px-4">
                  <div className="w-14 h-14 bg-primary/10 text-primary font-display font-bold text-xl rounded-[1rem] flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-3 text-on-surface">{item.title}</h4>
                  <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TripPlanner;
