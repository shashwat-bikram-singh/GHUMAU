import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users, CheckCircle, Wifi, Coffee } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Hotel Gangjong', location: 'Thamel, Kathmandu', rating: 4.7, price: 35, amenities: ['Free WiFi', 'Breakfast', 'Rooftop'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'A cozy hotel in the heart of Thamel with a stunning rooftop terrace.' },
  { id: 2, name: 'Lake Side Lodge', location: 'Lakeside, Pokhara', rating: 4.6, price: 28, amenities: ['Lake View', 'Free WiFi', 'Garden'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg', desc: 'A peaceful lakeside lodge with beautiful views of Phewa Lake and the Annapurnas.' },
  { id: 3, name: 'Barahi Jungle Lodge', location: 'Chitwan', rating: 4.8, price: 45, amenities: ['Safari', 'Breakfast', 'River View'], image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg', desc: 'Eco lodge right on the edge of Chitwan National Park, ideal for safari enthusiasts.' },
  { id: 4, name: 'Hotel Holy Himalaya', location: 'Thamel, Kathmandu', rating: 4.5, price: 30, amenities: ['Free WiFi', 'Breakfast', 'City View'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'Well-located, clean and comfortable hotel with friendly staff and great access to sights.' },
  { id: 5, name: 'Shambala Guest House', location: 'Boudhha, Kathmandu', rating: 4.6, price: 22, amenities: ['Free WiFi', 'Courtyard', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg', desc: 'Tranquil guest house near the great Boudhanath Stupa with a serene courtyard garden.' },
  { id: 6, name: 'Sarangkot Mountain Lodge', location: 'Sarangkot, Pokhara', rating: 4.9, price: 55, amenities: ['Mountain View', 'Breakfast', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Annapurna_South,_Himchuli,_Machapuchare_Himal-3794.jpg', desc: 'Wake up to panoramic Himalayan sunrise views from this elevated mountain lodge.' },
  { id: 7, name: 'Fish Tail Lodge', location: 'Lakeside, Pokhara', rating: 4.8, price: 120, amenities: ['Lake View', 'Restaurant', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/World_Famous_%27Fish_Tail_Lodge%27_hotel_in_Pokhara..jpg', desc: 'Iconic lakeside resort on a peninsula in Phewa Lake, accessible by boat with stunning Machhapuchhre views.' },
  { id: 8, name: 'Hotel Shanker', location: 'Lazimpat, Kathmandu', rating: 4.6, price: 90, amenities: ['Heritage', 'Pool', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Shanker.jpg', desc: 'A 19th-century Rana palace converted into a heritage hotel with a beautiful swimming pool in Lazimpat.' },
];

const amenityIcons = { 'Free WiFi': Wifi, 'Breakfast': Coffee };

const BookYourStay = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Book Your Stay in Nepal</h1>
          <p className="text-lg text-on-surface-variant">Find and reserve your perfect accommodation — from budget guesthouses to eco lodges.</p>
        </motion.div>

        {/* Quick Booking Form */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 md:p-8 ghost-border ambient-shadow mb-12">
          <h2 className="font-display font-bold text-xl text-on-surface mb-6">Quick Search</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Destination</label>
              <div className="bg-surface-container-low rounded-xl flex items-center px-4 py-3 gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <select className="bg-transparent text-on-surface text-[0.9375rem] outline-none w-full">
                  <option>Anywhere in Nepal</option>
                  <option>Kathmandu</option>
                  <option>Pokhara</option>
                  <option>Chitwan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Check-in</label>
              <div className="bg-surface-container-low rounded-xl flex items-center px-4 py-3 gap-3">
                <Calendar size={18} className="text-primary shrink-0" />
                <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} className="bg-transparent text-on-surface text-[0.9375rem] outline-none w-full" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Check-out</label>
              <div className="bg-surface-container-low rounded-xl flex items-center px-4 py-3 gap-3">
                <Calendar size={18} className="text-primary shrink-0" />
                <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} className="bg-transparent text-on-surface text-[0.9375rem] outline-none w-full" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">Guests</label>
              <div className="bg-surface-container-low rounded-xl flex items-center px-4 py-3 gap-3">
                <Users size={18} className="text-primary shrink-0" />
                <input type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} className="bg-transparent text-on-surface text-[0.9375rem] outline-none w-full" />
              </div>
            </div>
          </div>
          <button className="btn-primary mt-6 px-10 py-3.5 font-bold text-[0.9375rem]">Search Available Hotels</button>
        </div>

        {/* Hotel Listings */}
        <h2 className="font-display font-bold text-2xl text-on-surface mb-8">Available Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <motion.div key={hotel.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
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
                  {hotel.amenities.map(am => (
                    <span key={am} className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-lg text-xs flex items-center gap-1.5">
                      {amenityIcons[am] ? React.createElement(amenityIcons[am], { size: 12, className: 'text-primary' }) : <CheckCircle size={12} className="text-primary" />}
                      {am}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end border-t ghost-border pt-4 mt-auto">
                  <div>
                    <p className="text-xs text-on-surface-variant mb-1">Per night from</p>
                    <p className="font-display font-bold text-2xl text-on-surface">${hotel.price}<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                  </div>
                  <button className="btn-primary px-5 py-2.5 text-sm font-medium">Reserve</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookYourStay;
