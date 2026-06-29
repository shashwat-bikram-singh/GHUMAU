import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Filter, Compass, TreePine, Mountain, Tent, Clock, MapPin } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import ParallaxCard from '../components/ParallaxCard';

const activitiesHeroSlides = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Paragliding_in_Pokhara.jpg',
    title: 'Pokhara Paragliding',
    subtitle: 'Fly over Phewa Lake & the Annapurnas',
    location: 'Sarangkot, Pokhara',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Annapurna_Base_Camp_2019.jpg',
    title: 'Annapurna Base Camp Trek',
    subtitle: '10 days through the Himalayas',
    location: 'Annapurna Region',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Rafting_in_Trishuli_River%2C_Nepal-3087.jpg',
    title: 'Trisuli River Rafting',
    subtitle: 'White water thrills through gorges',
    location: 'Trisuli River, Bagmati Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
    title: 'Chitwan Jungle Safari',
    subtitle: 'Spot rhinos, tigers & elephants',
    location: 'Chitwan National Park',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Annapurna_South,_Himchuli,_Machapuchare_Himal-3794.jpg',
    title: 'Poon Hill Sunrise Trek',
    subtitle: 'Golden sunrise over the Annapurnas',
    location: 'Ghorepani, Annapurna',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Basantapurpalace.JPG',
    title: 'Kathmandu Heritage Walk',
    subtitle: 'Ancient durbar squares & temples',
    location: 'Kathmandu Valley',
  },
];

const Activities = () => {
  const [priceFilter, setPriceFilter] = useState('All');
  
  const activities = [
    {
      id: 1,
      title: 'Annapurna Base Camp Trek',
      category: 'Trekking',
      priceLevel: 'Mid-Range',
      price: '$450',
      duration: '10 Days',
      location: 'Annapurna Region',
      icon: Mountain,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Annapurna_Base_Camp_2019.jpg',
      desc: 'A classic trek through rhododendron forests to the heart of the Annapurna Sanctuary at 4,130 m.',
    },
    {
      id: 2,
      title: 'Chitwan Jungle Safari',
      category: 'Wildlife',
      priceLevel: 'Budget',
      price: '$120',
      duration: '3 Days',
      location: 'Chitwan National Park',
      icon: TreePine,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
      desc: 'Jeep & elephant safaris through UNESCO-listed jungle to spot one-horned rhinos and tigers.',
    },
    {
      id: 3,
      title: 'Pokhara Paragliding',
      category: 'Adventure',
      priceLevel: 'Mid-Range',
      price: '$85',
      duration: 'Half Day',
      location: 'Sarangkot, Pokhara',
      icon: Compass,
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Paragliding_in_Pokhara.jpg',
      desc: 'Tandem paraglide from Sarangkot Hill with stunning views of Phewa Lake and the Himalayas.',
    },
    {
      id: 4,
      title: 'Kathmandu Heritage Walk',
      category: 'Cultural',
      priceLevel: 'Budget',
      price: '$25',
      duration: '1 Day',
      location: 'Kathmandu Valley',
      icon: Tent,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Basantapurpalace.JPG',
      desc: 'Guided walk through Durbar Square, Freak Street, and hidden temple courtyards of old Kathmandu.',
    },
    {
      id: 5,
      title: 'Trisuli River Rafting',
      category: 'Adventure',
      priceLevel: 'Budget',
      price: '$55',
      duration: '1 Day',
      location: 'Trisuli River',
      icon: Compass,
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Rafting_in_Trishuli_River%2C_Nepal-3087.jpg',
      desc: 'Grade 3–4 white-water rafting through dramatic gorges on Nepal\'s most popular rafting river.',
    },
    {
      id: 6,
      title: 'Poon Hill Sunrise Trek',
      category: 'Trekking',
      priceLevel: 'Budget',
      price: '$90',
      duration: '4 Days',
      location: 'Ghorepani, Annapurna',
      icon: Mountain,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Annapurna_South,_Himchuli,_Machapuchare_Himal-3794.jpg',
      desc: 'A short but spectacular trek offering 360° sunrise views of Annapurna, Dhaulagiri & Machhapuchhre.',
    },
    {
      id: 7,
      title: 'Everest Scenic Flight',
      category: 'Adventure',
      priceLevel: 'Mid-Range',
      price: '$220',
      duration: '1 Hour',
      location: 'Kathmandu Airport',
      icon: Compass,
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
      desc: 'A mountain-hopping flight past eight of the world\'s 14 highest peaks — including Everest up close.',
    },
    {
      id: 8,
      title: 'Bhaktapur Heritage Tour',
      category: 'Cultural',
      priceLevel: 'Budget',
      price: '$30',
      duration: '1 Day',
      location: 'Bhaktapur',
      icon: Tent,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
      desc: 'Explore 55-Window Palace, Nyatapola Temple, pottery squares, and traditional curd shops.',
    },
  ];

  const filteredActivities = priceFilter === 'All' 
    ? activities 
    : activities.filter(a => a.priceLevel === priceFilter);

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Animated Hero Banner ─────────────────────────────────────────── */}
      <AnimatedHero
        slides={activitiesHeroSlides}
        className="pt-32 pb-16"
        interval={4000}
        compact
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block text-primary-container font-semibold text-sm uppercase tracking-widest mb-3">
              Adventure Awaits
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight leading-[1.1]">
              Experiences &amp; Activities
            </h1>
            <p className="text-lg text-white/72 leading-relaxed">
              Filter through our curated list of activities from budget to mid-range adventures.
            </p>
          </motion.div>
        </div>
      </AnimatedHero>

      <div className="container mx-auto px-6 md:px-12 mt-10 pb-20">
        {/* Price Filter */}
        <div className="mb-10">
          <div className="tab-bar">
            {['All', 'Budget', 'Mid-Range'].map((level) => (
              <button
                key={level}
                onClick={() => setPriceFilter(level)}
                className={`tab-pill${priceFilter === level ? ' active' : ''}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredActivities.map((activity, i) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <ParallaxCard intensity={9} className="h-full">
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow ghost-border group flex flex-col h-full">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-9 h-9 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                      <activity.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-white/90 uppercase tracking-wider">
                      {activity.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-lg text-on-surface mb-1.5 leading-tight">{activity.title}</h3>
                    <p className="text-on-surface-variant text-xs flex items-center gap-1 mb-3">
                      <MapPin size={12} className="text-primary shrink-0" /> {activity.location}
                    </p>
                    <p className="text-on-surface-variant text-xs leading-relaxed mb-4 flex-grow">{activity.desc}</p>
                    <div className="mt-auto pt-4 border-t ghost-border flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                        <Clock size={15} /> {activity.duration}
                      </div>
                      <div className="font-display font-bold text-lg text-primary">{activity.price}</div>
                    </div>
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
