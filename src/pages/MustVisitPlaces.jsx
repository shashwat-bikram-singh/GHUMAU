import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const places = [
  {
    id: 1,
    name: 'Pashupatinath Temple',
    location: 'Kathmandu',
    category: 'Religious',
    rating: 4.9,
    time: '2-3 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Pashupatinath_Temple-2020.jpg',
    description: 'One of the most sacred Hindu temples in the world, dedicated to Lord Shiva, sitting on the banks of the Bagmati River.',
  },
  {
    id: 2,
    name: 'Boudhanath Stupa',
    location: 'Kathmandu',
    category: 'UNESCO Heritage',
    rating: 4.9,
    time: '1-2 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg',
    description: 'One of the largest spherical stupas in Nepal and the holiest Tibetan Buddhist temple outside Tibet.',
  },
  {
    id: 3,
    name: 'Swayambhunath (Monkey Temple)',
    location: 'Kathmandu Valley',
    category: 'Religious',
    rating: 4.8,
    time: '2-3 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Swayambhunath_2018.jpg',
    description: 'An ancient religious complex atop a hill offering panoramic views of the Kathmandu Valley and its unique blend of Buddhist and Hindu iconography.',
  },
  {
    id: 4,
    name: 'Phewa Lake, Pokhara',
    location: 'Pokhara',
    category: 'Natural Wonder',
    rating: 4.8,
    time: 'Half Day',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
    description: 'The second largest lake in Nepal, famous for its reflections of Mt. Fishtail (Machhapuchhre) and the surrounding Annapurna range.',
  },
  {
    id: 5,
    name: 'Everest Base Camp',
    location: 'Solukhumbu District',
    category: 'Adventure',
    rating: 5.0,
    time: '12-14 Days Trek',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
    description: 'The ultimate bucket-list destination — a challenging high-altitude trek through Sherpa culture and dramatic Himalayan landscapes.',
  },
  {
    id: 6,
    name: 'Lumbini Sacred Garden',
    location: 'Rupandehi District',
    category: 'UNESCO Heritage',
    rating: 4.7,
    time: '4-5 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/BRP_Lumbini_Mayadevi_temple.jpg',
    description: 'The birthplace of Lord Siddhartha Gautama (Buddha), a UNESCO World Heritage site with ancient monasteries and the sacred Maya Devi Temple.',
  },
  {
    id: 7,
    name: 'Nagarkot Viewpoint',
    location: 'Bhaktapur District',
    category: 'Natural Wonder',
    rating: 4.8,
    time: 'Half Day',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/2015-03-18_Annapurna%2CNagarkot_DSCF2140.jpg',
    description: 'A hill station east of Kathmandu famous for panoramic Himalayan sunrises, including views of Annapurna and Everest on clear days.',
  },
  {
    id: 8,
    name: 'Patan Durbar Square',
    location: 'Lalitpur',
    category: 'UNESCO Heritage',
    rating: 4.8,
    time: '3-4 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Patan_durbar_square.jpg',
    description: 'One of the Kathmandu Valley\'s three royal squares, showcasing exquisite Newari architecture, the Krishna Mandir, and the Patan Museum.',
  },
  {
    id: 9,
    name: 'Chitwan National Park',
    location: 'Chitwan District',
    category: 'Natural Wonder',
    rating: 4.9,
    time: '2-3 Days',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
    description: 'Nepal\'s first national park and a UNESCO World Heritage Site, home to one-horned rhinos, Bengal tigers, elephants, and lush subtropical jungle.',
  },
  {
    id: 10,
    name: 'Janaki Mandir',
    location: 'Janakpur',
    category: 'Religious',
    rating: 4.7,
    time: '2-3 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Janaki_Temple_Janakpur-Janakpur030315_MG_36680059.jpg',
    description: 'A magnificent white marble temple dedicated to Goddess Sita, built in Mughal-Rajput style and central to the annual Vivah Panchami festival.',
  },
  {
    id: 11,
    name: 'Bhaktapur Durbar Square',
    location: 'Bhaktapur',
    category: 'UNESCO Heritage',
    rating: 4.8,
    time: '3-4 hrs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
    description: 'The best-preserved medieval city in the Kathmandu Valley, with the 55-Window Palace, Nyatapola Temple, and living Newari culture.',
  },
];

const categoryColors = {
  'Religious': 'text-amber-600 bg-amber-50',
  'UNESCO Heritage': 'text-blue-600 bg-blue-50',
  'Natural Wonder': 'text-green-600 bg-green-50',
  'Adventure': 'text-red-600 bg-red-50',
};

const MustVisitPlaces = () => {
  const [selected, setSelected] = useState('All');
  const categories = ['All', ...new Set(places.map(p => p.category))];
  const filtered = selected === 'All' ? places : places.filter(p => p.category === selected);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">
            Must-Visit Places in Nepal
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            From ancient temples and UNESCO World Heritage Sites to breathtaking natural wonders — these are the places you absolutely cannot miss.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selected === cat ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((place, i) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow group flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[place.category] || 'text-primary bg-primary/10'}`}>
                  {place.category}
                </div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-secondary flex items-center gap-1">
                  <Star size={14} className="fill-secondary" /> {place.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-on-surface mb-1">{place.name}</h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3">
                  <MapPin size={14} className="text-primary" /> {place.location}
                </p>
                <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed mb-4 flex-grow">{place.description}</p>
                <div className="flex items-center justify-between pt-4 border-t ghost-border">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant">
                    <Clock size={15} /> {place.time}
                  </span>
                  <Link to="/planner" className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-container transition-colors">
                    Plan Visit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MustVisitPlaces;
