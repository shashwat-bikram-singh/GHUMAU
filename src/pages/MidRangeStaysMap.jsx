import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star, Wifi, Coffee, CheckCircle, Map } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Temple Tree Resort & Spa', location: 'Lakeside, Pokhara', lat: 28.2096, lng: 83.9587, rating: 4.7, price: 85, amenities: ['Pool', 'Spa', 'Free WiFi', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/New-pokhara-lodge.jpg', desc: 'Elegant resort surrounded by tropical gardens with a beautiful outdoor pool and spa facilities.' },
  { id: 2, name: 'Begnas Lake Resort', location: 'Begnas, Pokhara', lat: 28.1800, lng: 84.0600, rating: 4.8, price: 95, amenities: ['Lake View', 'Kayaking', 'Restaurant', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg', desc: 'A tranquil resort on the shores of the pristine Begnas Lake, far from the tourist crowds.' },
  { id: 3, name: 'Hotel Shanker', location: 'Lazimpat, Kathmandu', lat: 27.7177, lng: 85.3193, rating: 4.6, price: 90, amenities: ['Heritage Building', 'Pool', 'Free WiFi', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Shanker.jpg', desc: 'A stunning Rana-era palace converted into a heritage hotel with modern comforts in central Kathmandu.' },
  { id: 4, name: 'Pavilions Himalayas', location: 'Pokhara Valley', lat: 28.2200, lng: 83.9800, rating: 4.9, price: 120, amenities: ['Mountain View', 'Pool', 'Farm-to-Table', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Annapurna_Massif_Aerial_View.jpg', desc: 'Award-winning eco-resort offering breathtaking Himalayan views, organic farm dining, and sustainable luxury.' },
  { id: 5, name: 'Green Park Hotel', location: 'Thamel, Kathmandu', lat: 27.7150, lng: 85.3100, rating: 4.5, price: 75, amenities: ['Free WiFi', 'Restaurant', 'Gym', 'Bar'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'A modern mid-range hotel in the heart of Thamel with a rooftop restaurant and well-equipped gym.' },
  { id: 6, name: 'Barahi Jungle Lodge', location: 'Chitwan', lat: 27.5740, lng: 84.4978, rating: 4.8, price: 110, amenities: ['Safari', 'Breakfast', 'River View', 'Pool'], image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg', desc: 'Luxurious jungle lodge on the banks of the Rapti River — the ultimate Chitwan safari experience.' },
];

const amenityIcons = { 'Free WiFi': Wifi, 'Breakfast': Coffee, 'Farm-to-Table': Coffee };

const MidRangeStaysMap = () => {
  const [selected, setSelected] = useState(null);
  const [locFilter, setLocFilter] = useState('All');
  const locations = ['All', 'Kathmandu', 'Pokhara', 'Chitwan'];
  const filtered = locFilter === 'All' ? hotels : hotels.filter(h => h.location.includes(locFilter));

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <div className="inline-block bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Mid-Range</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Mid-Range Stays Map</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">Browse hand-picked mid-range hotels across Nepal. Perfect comfort at a sensible price point.</p>
        </motion.div>

        {/* Map Placeholder */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] ghost-border ambient-shadow mb-10 overflow-hidden">
          <div className="h-72 bg-gradient-to-br from-primary/10 via-surface-container-low to-secondary/10 flex items-center justify-center relative">
            <div className="text-center">
              <Map size={48} className="text-primary mx-auto mb-4" strokeWidth={1} />
              <p className="font-display font-bold text-on-surface text-xl mb-2">Interactive Map View</p>
              <p className="text-on-surface-variant text-sm">Select a hotel below to see its location</p>
            </div>
            {/* Interactive map pins */}
            {[
              { label: 'KTM', city: 'Kathmandu', top: '45%', left: '48%' },
              { label: 'PKR', city: 'Pokhara', top: '35%', left: '25%' },
              { label: 'CHT', city: 'Chitwan', top: '60%', left: '35%' }
            ].map(pin => {
              const selectedHotel = selected ? hotels.find(h => h.id === selected) : null;
              const isSelectedCity = selectedHotel && selectedHotel.location.includes(pin.city);
              const isActive = locFilter === pin.city || (locFilter === 'All' && isSelectedCity);
              
              return (
                <div key={pin.label} style={{ top: pin.top, left: pin.left }} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocFilter(locFilter === pin.city ? 'All' : pin.city);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-115 transition-all duration-300 ${
                      isActive 
                        ? 'bg-secondary ring-4 ring-secondary/30 scale-110' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    <MapPin size={18} className="text-white" />
                  </button>
                  <div className="bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[0.6875rem] font-bold text-on-surface mt-1 text-center shadow-sm border border-surface-container-low select-none">
                    {pin.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="tab-bar flex-wrap">
            {locations.map(l => (
              <button key={l} onClick={() => setLocFilter(l)} className={`tab-pill${locFilter === l ? ' active' : ''}`}>{l}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((hotel, i) => (
            <motion.div key={hotel.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(hotel.id === selected ? null : hotel.id)}
              className={`bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ${selected === hotel.id ? 'ring-2 ring-primary' : ''}`}>
              <div className="h-52 relative overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                  <Star size={13} className="fill-secondary" /> {hotel.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{hotel.name}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={13} className="text-primary" />{hotel.location}</p>
                <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{hotel.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {hotel.amenities.slice(0, 3).map(am => (
                    <span key={am} className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-lg text-xs flex items-center gap-1.5">
                      {amenityIcons[am] ? React.createElement(amenityIcons[am], { size: 12, className: 'text-primary' }) : <CheckCircle size={12} className="text-primary" />} {am}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end border-t ghost-border pt-4 mt-auto">
                  <div>
                    <p className="text-xs text-on-surface-variant mb-1">From</p>
                    <p className="font-display font-bold text-2xl text-on-surface">${hotel.price}<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                  </div>
                  <Link to="/stays/book" className="btn-primary px-5 py-2.5 text-sm font-medium" onClick={e => e.stopPropagation()}>Book Now</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidRangeStaysMap;
