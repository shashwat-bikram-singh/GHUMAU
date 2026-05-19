import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Wifi, Coffee, CheckCircle, Shield } from 'lucide-react';

const hotels = [
  { id: 1, name: 'Hotel Jampa', location: 'Thamel, Kathmandu', rating: 4.6, price: 20, amenities: ['Free WiFi', 'Breakfast', 'Hot Water'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'Spotlessly clean rooms with modern amenities and warm Nepali hospitality in a prime Thamel location.' },
  { id: 2, name: 'Busy Bee Café & Lodge', location: 'Lakeside, Pokhara', rating: 4.5, price: 18, amenities: ['Free WiFi', 'Café', 'Terrace'], image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg', desc: 'A beloved travellers\' lodge with a social café, vibrant notice boards, and easy lake access.' },
  { id: 3, name: 'Trek Stop Guesthouse', location: 'Sauraha, Chitwan', rating: 4.7, price: 25, amenities: ['Breakfast', 'Fan Rooms', 'Bicycle Hire'], image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg', desc: 'Excellent value lodge steps from the jungle, with helpful staff and reliable safari bookings.' },
  { id: 4, name: 'Old Town Inn', location: 'Bhaktapur', rating: 4.8, price: 22, amenities: ['Durbar View', 'Free WiFi', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg', desc: 'Heritage-styled lodge with wooden window frames and views directly onto Bhaktapur\'s Durbar Square.' },
  { id: 5, name: 'Lakeside Homestay', location: 'Lakeside, Pokhara', rating: 4.5, price: 14, amenities: ['Home Cooking', 'Free WiFi', 'Garden'], image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/New-pokhara-lodge.jpg', desc: 'A genuine Nepali family homestay offering home-cooked meals, warm conversation, and authentic cultural immersion.' },
  { id: 6, name: 'Namche Village Lodge', location: 'Namche Bazaar, Everest', rating: 4.9, price: 12, amenities: ['Mountain View', 'Dal Bhat', 'Hot Water'], image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Namche_Bazaar_Nepal.jpg', desc: 'A legendary mountain lodge in the Sherpa capital with sweeping views of Everest and Ama Dablam.' },
  { id: 7, name: 'Hotel Middle Path', location: 'Thamel, Kathmandu', rating: 4.5, price: 16, amenities: ['Free WiFi', 'Rooftop', 'Breakfast'], image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Thamel_at_night_-_Kathmandu%2C_Nepal_-_panoramio_%281%29.jpg', desc: 'A quiet, well-run guesthouse on a side street in Thamel — popular with trekkers preparing for the Himalayas.' },
  { id: 8, name: 'Ghorepani Tea House', location: 'Ghorepani, Annapurna', rating: 4.7, price: 10, amenities: ['Mountain View', 'Dal Bhat', 'Hot Shower'], image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghorepani.jpg', desc: 'Classic teahouse on the Annapurna trail with warm hospitality and unbeatable Poon Hill access.' },
];

const amenityIcons = { 'Free WiFi': Wifi, 'Breakfast': Coffee, 'Café': Coffee };

const LowBudgetHotelBookingHd = () => (
  <div className="min-h-screen pt-32 pb-20 bg-surface">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">HD Low Budget</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Low Budget Hotel Booking</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">Verified and reviewed budget stays — every property hand-checked for cleanliness, safety, and value.</p>
      </motion.div>

      {/* Trust Badge */}
      <div className="bg-surface-container-lowest rounded-[1.5rem] px-6 py-4 ghost-border ambient-shadow mb-12 flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant"><Shield size={16} className="text-secondary" /> Verified Properties</div>
        <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant"><CheckCircle size={16} className="text-secondary" /> Free Cancellation Available</div>
        <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant"><Star size={16} className="fill-secondary text-secondary" /> Minimum 4.3 Star Rating</div>
      </div>

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
                    {amenityIcons[am] ? React.createElement(amenityIcons[am], { size: 12, className: 'text-primary' }) : <CheckCircle size={12} className="text-primary" />} {am}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-end border-t ghost-border pt-4 mt-auto">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">From</p>
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

export default LowBudgetHotelBookingHd;
