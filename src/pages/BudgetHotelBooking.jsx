import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle, Wifi } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Kathmandu Guest House', location: 'Thamel, Kathmandu', rating: 4.5, price: 18, tag: 'Most Popular', amenities: ['Free WiFi', 'Garden', 'Restaurant'], image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop', desc: 'One of Kathmandu\'s most iconic budget hotels with a charming garden in the heart of Thamel.' },
  { id: 2, name: 'Pokhara Peace Home', location: 'Lakeside, Pokhara', rating: 4.4, price: 15, tag: 'Best Value', amenities: ['Lake View', 'Free WiFi', 'Terrace'], image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop', desc: 'A cozy homestay-style accommodation just steps from the Lakeside promenade.' },
  { id: 3, name: 'Jungle Base Camp', location: 'Sauraha, Chitwan', rating: 4.6, price: 22, tag: 'Eco Friendly', amenities: ['Safari', 'Breakfast', 'Fan Rooms'], image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop', desc: 'Basic but charming eco-friendly lodge right at the gates of Chitwan National Park.' },
  { id: 4, name: 'Tibet Peace Guest House', location: 'Boudhha, Kathmandu', rating: 4.3, price: 12, tag: 'Budget Pick', amenities: ['Free WiFi', 'Rooftop', 'Quiet'], image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop', desc: 'Peaceful and affordable rooms near Boudhanath Stupa, perfect for culture seekers.' },
  { id: 5, name: 'Sadhana Guest House', location: 'Thamel, Kathmandu', rating: 4.4, price: 20, tag: '', amenities: ['Free WiFi', 'Hot Shower', 'Common Room'], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop', desc: 'Clean and friendly budget guesthouse, well-positioned for exploring Kathmandu\'s main attractions.' },
  { id: 6, name: 'Ghorepani Tea House', location: 'Ghorepani, Annapurna', rating: 4.7, price: 10, tag: 'Trekkers Choice', amenities: ['Mountain View', 'Dal Bhat', 'Hot Shower'], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', desc: 'Classic Himalayan tea house on the Annapurna trail, serving hot dal bhat and offering incredible views.' },
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
