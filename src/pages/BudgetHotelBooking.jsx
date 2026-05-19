import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle, Wifi } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Kathmandu Guest House', location: 'Thamel, Kathmandu', rating: 4.5, price: 18, tag: 'Most Popular', amenities: ['Free WiFi', 'Garden', 'Restaurant'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'One of Kathmandu\'s most iconic budget hotels with a charming garden in the heart of Thamel.' },
  { id: 2, name: 'Pokhara Peace Home', location: 'Lakeside, Pokhara', rating: 4.4, price: 15, tag: 'Best Value', amenities: ['Lake View', 'Free WiFi', 'Terrace'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg', desc: 'A cozy homestay-style accommodation just steps from the Lakeside promenade.' },
  { id: 3, name: 'Jungle Base Camp', location: 'Sauraha, Chitwan', rating: 4.6, price: 22, tag: 'Eco Friendly', amenities: ['Safari', 'Breakfast', 'Fan Rooms'], image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg', desc: 'Basic but charming eco-friendly lodge right at the gates of Chitwan National Park.' },
  { id: 4, name: 'Tibet Peace Guest House', location: 'Boudhha, Kathmandu', rating: 4.3, price: 12, tag: 'Budget Pick', amenities: ['Free WiFi', 'Rooftop', 'Quiet'], image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg', desc: 'Peaceful and affordable rooms near Boudhanath Stupa, perfect for culture seekers.' },
  { id: 5, name: 'Sadhana Guest House', location: 'Thamel, Kathmandu', rating: 4.4, price: 20, tag: '', amenities: ['Free WiFi', 'Hot Shower', 'Common Room'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'Clean and friendly budget guesthouse, well-positioned for exploring Kathmandu\'s main attractions.' },
  { id: 6, name: 'Ghorepani Tea House', location: 'Ghorepani, Annapurna', rating: 4.7, price: 10, tag: 'Trekkers Choice', amenities: ['Mountain View', 'Dal Bhat', 'Hot Shower'], image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghorepani.jpg', desc: 'Classic Himalayan tea house on the Annapurna trail, serving hot dal bhat and offering incredible views.' },
  { id: 7, name: 'Hotel Middle Path', location: 'Thamel, Kathmandu', rating: 4.5, price: 16, tag: '', amenities: ['Free WiFi', 'Rooftop', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'A peaceful guesthouse on a quiet Thamel lane, ideal for trekkers organizing permits and gear.' },
  { id: 8, name: 'New Pokhara Lodge', location: 'Lakeside, Pokhara', rating: 4.6, price: 22, tag: 'Lake View', amenities: ['Garden', 'Mountain View', 'Free WiFi'], image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/New-pokhara-lodge.jpg', desc: 'A well-kept lakeside lodge with garden seating and panoramic views of the Annapurna range.' },
];

const BudgetHotelBooking = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Budget Stays</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Budget Hotel Booking</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">Quality, affordable accommodations across Nepal — all starting under $25 per night.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, i) => (
          <motion.div key={hotel.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="h-52 relative overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {hotel.tag && <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">{hotel.tag}</div>}
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
                    {am === 'Free WiFi' ? <Wifi size={12} className="text-primary" /> : <CheckCircle size={12} className="text-primary" />} {am}
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

export default BudgetHotelBooking;
