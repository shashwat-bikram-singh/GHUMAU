import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card-borderless flex flex-col h-full group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star size={14} className="text-secondary fill-secondary" />
          <span className="text-sm font-semibold text-on-surface">{destination.rating}</span>
        </div>
        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          {destination.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-surface-container-lowest">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-display font-bold text-on-surface line-clamp-1">{destination.name}</h3>
        </div>
        
        <div className="flex items-center gap-2 text-on-surface-variant mb-4 text-[0.9375rem] font-medium">
          <MapPin size={16} className="text-primary" strokeWidth={2} />
          <span>Nepal</span>
        </div>
        
        <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed line-clamp-2 mb-6 flex-grow">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4">
          <div>
            <span className="text-sm text-on-surface-variant">From </span>
            <span className="text-lg font-display font-bold text-on-surface">{destination.pricePerDay}</span>
            <span className="text-sm text-on-surface-variant">/day</span>
          </div>
          
          <Link 
            to={`/destination/${destination.id}`}
            className="btn-secondary px-6 py-2.5 text-[0.9375rem] font-medium"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
