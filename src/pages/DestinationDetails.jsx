import React from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle, Navigation } from 'lucide-react';
import { destinations } from '../data/mockData';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-surface">
        <h2 className="text-3xl font-display font-bold text-on-surface mb-4">Destination Not Found</h2>
        <Link to="/explore" className="text-primary hover:underline">Back to Explore</Link>
      </div>
    );
  }

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
        
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 md:px-12 pb-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container-lowest/95 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] ambient-shadow max-w-5xl mx-auto -mb-24 relative z-10"
            >
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-on-surface mb-4">About this destination</h3>
                    <p className="text-on-surface-variant leading-relaxed text-[1.0625rem]">
                      {destination.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-surface-container-low rounded-[1.5rem] p-8 border ghost-border">
                  <h3 className="font-display font-bold text-on-surface mb-6 flex items-center gap-3 text-xl">
                    <Navigation size={22} className="text-primary" strokeWidth={1.5} /> Top Activities
                  </h3>
                  <ul className="space-y-4">
                    {destination.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-3 text-on-surface-variant text-[0.9375rem]">
                        <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
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
      <div className="h-48"></div>
    </div>
  );
};

export default DestinationDetails;
