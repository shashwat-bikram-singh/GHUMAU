import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Wifi, Coffee, CheckCircle, Building } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Dwarika\'s Hotel', area: 'Battisputali', stars: 5, rating: 4.9, price: 180, amenities: ['Heritage Rooms', 'Pool', 'Spa', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kathmandu-Hotel-06-Kantipur_Temple_House-Gartenfront-2014-gje.jpg', desc: 'A UNESCO-award-winning hotel celebrating Nepal\'s artistic heritage with exquisite medieval architecture.' },
  { id: 2, name: 'Yak & Yeti Hotel', area: 'Durbar Marg', stars: 5, rating: 4.8, price: 155, amenities: ['Casino', 'Spa', 'Garden', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lights_on_Lal_Darbar.jpg', desc: 'A landmark hotel housed in a restored palace with lush gardens in the prestigious Durbar Marg area.' },
  { id: 3, name: 'Hotel Shanker', area: 'Lazimpat', stars: 4, rating: 4.6, price: 90, amenities: ['Heritage', 'Pool', 'Breakfast', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Shanker.jpg', desc: 'A magnificent 19th-century Rana palace offering heritage luxury with a beautiful outdoor swimming pool.' },
  { id: 4, name: 'Hyatt Regency Kathmandu', area: 'Boudha', stars: 5, rating: 4.7, price: 195, amenities: ['Pool', 'Gym', 'Spa', 'Multiple Restaurants'], image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/The_Manaslu_Hotel.jpg', desc: 'International luxury with Himalayan charm, featuring spectacular mountain views and world-class facilities.' },
  { id: 5, name: 'Hotel Tibet', area: 'Lazimpat', stars: 4, rating: 4.5, price: 80, amenities: ['Tibetan Cuisine', 'Garden', 'Free WiFi', 'Bar'], image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Swayambhunath_2018.jpg', desc: 'A cultural boutique hotel inspired by Tibetan art with a beautiful garden and authentic cuisine.' },
  { id: 6, name: 'Kathmandu Guest House', area: 'Thamel', stars: 3, rating: 4.4, price: 45, amenities: ['Historic', 'Garden', 'Free WiFi', 'Restaurant'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'Kathmandu\'s most famous hotel, a legendary travellers\' institution in the heart of Thamel since 1967.' },
  { id: 7, name: 'Kantipur Temple House', area: 'Thamel', stars: 4, rating: 4.7, price: 95, amenities: ['Heritage Courtyard', 'Garden', 'Free WiFi', 'Organic Dining'], image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Kathmandu-Hotel-04-Kantipur_Temple_House-Innenhof-2014-gje.jpg', desc: 'An eco-conscious heritage hotel with traditional Newari courtyards and a peaceful garden oasis in Thamel.' },
  { id: 8, name: 'Hotel Manaslu', area: 'Lazimpat', stars: 4, rating: 4.5, price: 75, amenities: ['Heritage', 'Restaurant', 'Free WiFi', 'Garden'], image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/The_Manaslu_Hotel.jpg', desc: 'A traditional Nepalese hospitality hotel in a restored Malla-era palace, steps from Lazimpat\'s embassies and shops.' },
];

const amenityIcons = { 'Free WiFi': Wifi, 'Breakfast': Coffee };

const HotelsInKathmandu = () => {
  const [starFilter, setStarFilter] = useState(0);
  const filtered = starFilter === 0 ? hotels : hotels.filter(h => h.stars === starFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building size={28} className="text-primary" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface tracking-tight">Hotels in Kathmandu</h1>
          </div>
          <p className="text-lg text-on-surface-variant leading-relaxed">From budget guesthouses to five-star heritage palaces — Kathmandu has accommodation for every traveller.</p>
        </motion.div>

        {/* Star Filter */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <span className="text-sm font-semibold text-on-surface-variant">Filter by stars:</span>
          {[0, 3, 4, 5].map(s => (
            <button key={s} onClick={() => setStarFilter(s)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${starFilter === s ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>
              {s === 0 ? 'All' : <>{s} <Star size={13} className={starFilter === s ? 'fill-white text-white' : 'fill-secondary text-secondary'} /></>}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((hotel, i) => (
            <motion.div key={hotel.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-52 relative overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  {Array.from({ length: hotel.stars }).map((_, i) => <Star key={i} size={12} className="fill-secondary text-secondary" />)}
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                  <Star size={13} className="fill-secondary" /> {hotel.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{hotel.name}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3"><MapPin size={13} className="text-primary" />{hotel.area}, Kathmandu</p>
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
                  <button className="btn-primary px-5 py-2.5 text-sm font-medium">Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsInKathmandu;
