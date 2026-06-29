import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHero from '../components/AnimatedHero';
import ParallaxCard from '../components/ParallaxCard';

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
  {
    id: 12,
    name: 'Bandipur Bazaar',
    location: 'Bandipur',
    category: 'Natural Wonder',
    rating: 4.8,
    time: '1-2 Days',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_houses_in_Bandipur.jpg',
    description: 'A beautifully preserved, car-free hilltop Newari town featuring 18th-century architecture, cafes, and sweeping views of the central Himalayas.',
  },
];

// Hero slides – pull top-rated places for the banner
const heroSlides = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg',
    title: 'Boudhanath Stupa',
    subtitle: 'UNESCO World Heritage, Kathmandu',
    location: 'Kathmandu Valley',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
    title: 'Phewa Lake',
    subtitle: 'Mirror of the Annapurnas',
    location: 'Pokhara, Gandaki Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
    title: 'Everest Region',
    subtitle: 'Roof of the World Trek',
    location: 'Solukhumbu District',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
    title: 'Chitwan National Park',
    subtitle: 'Jungle safari & wildlife',
    location: 'Chitwan, Bagmati Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
    title: 'Bhaktapur Durbar Square',
    subtitle: 'Medieval Newari Architecture',
    location: 'Bhaktapur',
  },
];

const categoryColors = {
  'Religious':       'text-amber-400  bg-amber-400/15  border border-amber-400/30',
  'UNESCO Heritage': 'text-blue-400   bg-blue-400/15   border border-blue-400/30',
  'Natural Wonder':  'text-emerald-400 bg-emerald-400/15 border border-emerald-400/30',
  'Adventure':       'text-red-400    bg-red-400/15    border border-red-400/30',
};

const MustVisitPlaces = () => {
  const [selected, setSelected] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', ...new Set(places.map(p => p.category))];
  
  const filtered = places.filter(p => {
    const matchesCat = selected === 'All' || p.category === selected;
    
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const sq = searchQuery.toLowerCase().trim();
      const isKtm = sq === 'ktm' || sq === 'kathmandu';
      const isPkr = sq === 'pkr' || sq === 'pokhara';
      const isCht = sq === 'cht' || sq === 'chitwan';
      const isBkt = sq === 'bkt' || sq === 'bhaktapur';
      const isJkp = sq === 'jkp' || sq === 'janakpur';
      const isBdp = sq === 'bdp' || sq === 'bandipur';
      
      const loc  = p.location.toLowerCase();
      const name = p.name.toLowerCase();
      const desc = p.description.toLowerCase();
      
      if (isKtm && (loc.includes('kathmandu') || loc.includes('lalitpur') || loc.includes('bhaktapur'))) {
        matchesSearch = true;
      } else if (isPkr && loc.includes('pokhara')) {
        matchesSearch = true;
      } else if (isCht && loc.includes('chitwan')) {
        matchesSearch = true;
      } else if (isBkt && loc.includes('bhaktapur')) {
        matchesSearch = true;
      } else if (isJkp && loc.includes('janakpur')) {
        matchesSearch = true;
      } else if (isBdp && loc.includes('bandipur')) {
        matchesSearch = true;
      } else {
        matchesSearch = name.includes(sq) || loc.includes(sq) || desc.includes(sq);
      }
    }
    
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Animated Hero Banner ─────────────────────────────────────────── */}
      <AnimatedHero
        slides={heroSlides}
        className="pt-32 pb-20"
        interval={4800}
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-block text-primary-container font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Explore Nepal
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight leading-[1.1]">
              Must-Visit Places in Nepal
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
              From ancient temples and UNESCO World Heritage Sites to breathtaking natural wonders — these are the places you absolutely cannot miss.
            </p>
          </motion.div>
        </div>
      </AnimatedHero>

      {/* ── Search + Filter ──────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 mt-12">
        {/* Search Bar */}
        <div className="mb-8 max-w-xl bg-surface-container-lowest p-2 rounded-2xl ambient-shadow ghost-border flex items-center">
          <div className="flex-1 bg-surface-container-low rounded-xl flex items-center px-4 py-2.5">
            <Search size={20} className="text-primary mr-3 shrink-0" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search places (e.g. Kathmandu, Pokhara, EBC...)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-on-surface placeholder-on-surface-variant/70 text-[0.9375rem]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="tab-bar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`tab-pill${selected === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Places Grid ───────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {filtered.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <ParallaxCard intensity={9} className="h-full">
                  <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ghost-border ambient-shadow flex flex-col h-full">
                    {/* Image */}
                    <div className="h-56 relative overflow-hidden group">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Category badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${categoryColors[place.category] || 'text-primary bg-primary/10'}`}>
                        {place.category}
                      </div>

                      {/* Rating badge */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-amber-300 flex items-center gap-1">
                        <Star size={13} className="fill-amber-300" /> {place.rating}
                      </div>

                      {/* Live pulse on perfect-rated */}
                      {place.rating === 5.0 && (
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-bold text-white">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                          Top Rated
                        </div>
                      )}
                    </div>

                    {/* Info */}
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
                  </div>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-surface-container-low rounded-[2rem] mb-20">
            <h3 className="text-2xl font-display font-bold text-on-surface mb-2">No places found</h3>
            <p className="text-on-surface-variant">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MustVisitPlaces;
