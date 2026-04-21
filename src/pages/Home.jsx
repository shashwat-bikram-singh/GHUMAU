import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Shield, Smile } from 'lucide-react';
import PlannerForm from '../components/PlannerForm';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/mockData';

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2674&auto=format&fit=crop" 
            alt="Nepal Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-gray-50 dark:to-dark-900"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Discover the Magic of <span className="text-primary-400">Nepal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              From the highest peaks on Earth to dense jungles and ancient temples. Plan your next unforgettable journey with Ghumuam.
            </motion.p>
          </div>

          <PlannerForm />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 shadow-sm pb-1">
                Top Destinations
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore handpicked locations that offer the best experiences in Nepal.
              </p>
            </div>
            <Link 
              to="/explore" 
              className="hidden md:flex items-center gap-2 text-primary-600 dark:text-primary-500 font-semibold hover:text-primary-700 transition-colors"
            >
              View all <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link 
              to="/explore" 
              className="px-6 py-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold rounded-xl flex items-center gap-2"
            >
              View all Destinations <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-dark-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Travel With Ghumuam
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: Mountain, title: 'Local Expertise', desc: 'Curated itineraries crafted by local guides who know Nepal best.' },
                { icon: Shield, title: 'Trusted Bookings', desc: 'Secure payment and verified hotel partners across the country.' },
                { icon: Smile, title: '24/7 Support', desc: 'We are always here to help you during your journey through the Himalayas.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 text-primary-600 mx-auto rounded-2xl flex items-center justify-center mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
