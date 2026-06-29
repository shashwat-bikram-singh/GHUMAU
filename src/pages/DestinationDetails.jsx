import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, CheckCircle, Navigation, Compass, BedDouble, Utensils, Building, Sparkles } from 'lucide-react';
import { destinations } from '../data/mockData';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-surface">
        <h2 className="text-3xl font-display font-bold text-on-surface mb-4">Destination Not Found</h2>
        <Link to="/explore" className="text-primary hover:underline">Back to Explore</Link>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview & Activities' },
    { id: 'mustVisit', label: 'Must-Visit Spots' },
    { id: 'stays', label: 'Where to Stay' },
    { id: 'dining', label: 'Dining & Local Eats' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-surface">
      {/* Dynamic Header Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest/95 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] ambient-shadow max-w-5xl mx-auto relative z-10"
        >
          {/* Main Title & Budget Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b ghost-border pb-8 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {destination.category} Budget
                </span>
                <div className="flex items-center gap-1 text-secondary font-semibold">
                  <Star size={18} className="fill-secondary" />
                  <span>{destination.rating}</span>
                  <span className="text-on-surface-variant font-normal text-sm ml-1">({destination.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-4 tracking-tight">
                {destination.name}
              </h1>
              <div className="flex items-center gap-3 text-on-surface-variant font-medium text-lg">
                <MapPin size={20} className="text-primary" strokeWidth={1.5} />
                <span>Nepal</span>
              </div>
            </div>
            
            <div className="text-left md:text-right w-full md:w-auto">
              <p className="text-sm text-on-surface-variant mb-1 font-medium">Starting from</p>
              <p className="text-4xl font-display font-bold text-on-surface">{destination.pricePerDay}<span className="text-base font-normal text-on-surface-variant">/day</span></p>
              <Link 
                to="/planner"
                className="mt-6 w-full md:w-auto inline-block btn-primary px-10 py-3.5 text-[0.9375rem] text-center"
              >
                Start Planning
              </Link>
            </div>
          </div>

          {/* Unified Tab Bar Switcher */}
          <div className="mb-10">
            <div className="tab-bar flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-pill${activeTab === tab.id ? ' active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-2xl font-display font-bold text-on-surface">About this destination</h3>
                    <p className="text-on-surface-variant leading-relaxed text-[1.0625rem]">
                      {destination.description}
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low rounded-[1.5rem] p-8 border ghost-border">
                    <h3 className="font-display font-bold text-on-surface mb-6 flex items-center gap-3 text-xl">
                      <Navigation size={22} className="text-primary" strokeWidth={1.5} /> Top Activities
                    </h3>
                    <ul className="space-y-4">
                      {destination.activities.map((act, i) => (
                        <li key={i} className="flex items-center justify-between gap-3 text-on-surface-variant text-[0.9375rem]">
                          <div className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-primary shrink-0" strokeWidth={1.5} />
                            <span>{act}</span>
                          </div>
                          <button className="text-xs font-bold text-primary hover:text-on-primary hover:bg-primary px-3.5 py-1.5 bg-primary/10 rounded-full transition-all">
                            Book
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'mustVisit' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-6 flex items-center gap-3">
                    <Sparkles size={24} className="text-primary" /> Must-Visit Spots
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.mustVisit && destination.mustVisit.map((spot, i) => (
                      <div key={i} className="bg-surface-container-low rounded-[1.5rem] border ghost-border flex flex-col overflow-hidden">
                        <div className="h-44 overflow-hidden relative">
                          <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <h4 className="font-display font-bold text-lg text-on-surface mb-2">{spot.name}</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{spot.desc}</p>
                          </div>
                          <button className="btn-secondary px-5 py-2.5 text-xs font-semibold w-full mt-auto flex items-center justify-center gap-1.5">
                            <Compass size={14} /> Plan Visit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'stays' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-6 flex items-center gap-3">
                    <Building size={24} className="text-primary" /> Recommended Stays
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destination.stays && destination.stays.map((stay, i) => (
                      <div key={i} className="bg-surface-container-low rounded-[1.5rem] border ghost-border flex flex-col overflow-hidden">
                        <div className="h-40 overflow-hidden relative">
                          <img src={stay.image} alt={stay.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow justify-between">
                          <div>
                            <span className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest block mb-1">{stay.type}</span>
                            <h4 className="font-display font-bold text-[1.0625rem] text-on-surface mb-4 min-h-[3rem] line-clamp-2">{stay.name}</h4>
                          </div>
                          <div>
                            <div className="pt-3 border-t ghost-border flex justify-between items-center mb-4">
                              <span className="text-xs text-on-surface-variant">Est. Price</span>
                              <span className="font-display font-bold text-base text-on-surface">{stay.price}</span>
                            </div>
                            <button className="btn-primary px-4 py-2.5 text-xs font-semibold w-full flex items-center justify-center gap-1.5">
                              <BedDouble size={14} /> Book Stay
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'dining' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-6 flex items-center gap-3">
                    <Utensils size={24} className="text-primary" /> Dining & Local Eats
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destination.dining && destination.dining.map((eat, i) => (
                      <div key={i} className="bg-surface-container-low rounded-[1.5rem] border ghost-border flex flex-col overflow-hidden">
                        <div className="h-40 overflow-hidden relative">
                          <img src={eat.image} alt={eat.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow justify-between">
                          <div>
                            <span className="text-[0.6875rem] font-bold text-secondary uppercase tracking-widest block mb-1">{eat.type}</span>
                            <h4 className="font-display font-bold text-[1.0625rem] text-on-surface mb-2 line-clamp-1">{eat.name}</h4>
                            <p className="text-xs font-semibold text-on-surface-variant leading-relaxed line-clamp-2 mt-2 min-h-[2.25rem]">
                              <span className="text-[0.6875rem] text-primary uppercase tracking-wider block font-bold">Specialty</span>
                              {eat.specialty}
                            </p>
                          </div>
                          <button className="btn-secondary px-4 py-2.5 text-xs font-semibold w-full mt-4 flex items-center justify-center gap-1.5 hover:bg-primary hover:text-white transition-all">
                            <Utensils size={14} /> Reserve Table
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </div>
    </div>
  );
};

export default DestinationDetails;
