import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Shield, Smile } from 'lucide-react';
import PlannerForm from '../components/PlannerForm';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/mockData';

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 lg:pt-56 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2674&auto=format&fit=crop" 
            alt="Nepal Mountains" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c30]/80 via-[#0b1c30]/40 to-surface"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mb-16 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Discover the Magic of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-[#cce5ff]">Nepal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-surface-container-low max-w-2xl leading-relaxed mb-8"
            >
              From the highest peaks on Earth to dense jungles and ancient temples. Plan your next unforgettable journey with Ghumuam.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mb-32 relative z-20"
          >
            <PlannerForm />
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="pt-48 pb-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">
                Top Destinations
              </h2>
              <p className="text-on-surface-variant text-lg">
                Explore handpicked locations that offer the best experiences in Nepal.
              </p>
            </div>
            <Link 
              to="/explore" 
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-container transition-colors text-lg"
            >
              View all <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:hidden flex justify-start">
            <Link 
              to="/explore" 
              className="btn-secondary px-8 py-3.5 text-[0.9375rem] font-medium flex items-center gap-2"
            >
              View all Destinations <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6 tracking-tight">
                Why Travel With Ghumuam
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { icon: Mountain, title: 'Local Expertise', desc: 'Curated itineraries crafted by local guides who know Nepal best.' },
                { icon: Shield, title: 'Trusted Bookings', desc: 'Secure payment and verified hotel partners across the country.' },
                { icon: Smile, title: '24/7 Support', desc: 'We are always here to help you during your journey through the Himalayas.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-surface-container-lowest p-8 rounded-[1.5rem] ambient-shadow flex flex-col items-start"
                >
                  <div className="w-14 h-14 bg-surface-container-low text-primary rounded-2xl flex items-center justify-center mb-8">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-on-surface mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
