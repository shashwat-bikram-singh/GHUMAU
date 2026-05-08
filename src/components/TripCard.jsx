import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const TripCard = ({ trip }) => {
  const isUpcoming = trip.status === 'Upcoming';

  return (
    <div className="card-borderless flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/3 h-56 md:h-auto overflow-hidden relative group">
        <img 
          src={trip.image} 
          alt={trip.destination} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${isUpcoming ? 'bg-secondary/90 text-white' : 'bg-primary/90 text-white'}`}>
          {trip.status}
        </div>
      </div>
      
      <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center bg-surface-container-lowest">
        <h3 className="text-2xl font-display font-bold text-on-surface mb-4">
          {trip.destination}
        </h3>
        
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-on-surface-variant text-[0.9375rem]">
            <Calendar size={18} className="text-primary" strokeWidth={1.5} />
            <span>{trip.date}</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant text-[0.9375rem]">
            <Clock size={18} className="text-primary" strokeWidth={1.5} />
            <span>4 Days, 3 Nights</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <button className="btn-primary px-6 py-2.5 text-[0.9375rem]">
            View Itinerary
          </button>
          <button className="btn-secondary px-6 py-2.5 text-[0.9375rem]">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
