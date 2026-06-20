import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mountain,
  Shield,
  Smile,
  Compass,
  Utensils,
  BedDouble,
  Sparkles,
  MapPin,
  Heart,
  Star,
} from 'lucide-react';
import PlannerForm from '../components/PlannerForm';
import DestinationCard from '../components/DestinationCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedHero from '../components/AnimatedHero';
import ParallaxCard from '../components/ParallaxCard';
import { destinations } from '../data/mockData';

// ── Hero slides – real places of Nepal ──────────────────────────────────────
const heroSlides = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Panoramic_view_of_the_Great_Himalayan_Range_from_Dhulikhel%2C_Nepal_in_2025.jpg',
    title: 'The Great Himalayas',
    subtitle: 'Witness the roof of the world',
    location: 'Dhulikhel, Bagmati Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
    title: 'Phewa Lake',
    subtitle: 'Mirror of the Annapurnas',
    location: 'Pokhara, Gandaki Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg',
    title: 'Boudhanath Stupa',
    subtitle: 'Spiritual heart of Kathmandu',
    location: 'Kathmandu Valley',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
    title: 'Everest Region',
    subtitle: 'The ultimate high-altitude adventure',
    location: 'Solukhumbu, Koshi Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Pashupatinath_Temple-2020.jpg',
    title: 'Pashupatinath Temple',
    subtitle: 'Sacred shrine on the Bagmati',
    location: 'Kathmandu, Bagmati Province',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Annapurna_Massif_Aerial_View.jpg',
    title: 'Annapurna Massif',
    subtitle: 'Trekker\'s paradise in the clouds',
    location: 'Gandaki Province',
  },
];

const quickLinks = [
  { icon: Compass,   label: 'Explore',      path: '/explore',   color: 'bg-primary/10 text-primary' },
  { icon: Sparkles,  label: 'Trip Planner', path: '/planner',   color: 'bg-secondary/20 text-secondary' },
  { icon: BedDouble, label: 'Book Stays',   path: '/bookings',  color: 'bg-tertiary/10 text-tertiary' },
  { icon: Utensils,  label: 'Local Eats',   path: '/dining',    color: 'bg-primary/10 text-primary' },
];

const mustVisitPreview = [
  {
    name: 'Pashupatinath Temple',
    location: 'Kathmandu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Pashupatinath_Temple-2020.jpg',
  },
  {
    name: 'Phewa Lake',
    location: 'Pokhara',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
  },
  {
    name: 'Everest Base Camp',
    location: 'Solukhumbu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
  },
  {
    name: 'Chitwan National Park',
    location: 'Chitwan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
  },
  {
    name: 'Nagarkot Viewpoint',
    location: 'Bhaktapur District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/2015-03-18_Annapurna%2CNagarkot_DSCF2140.jpg',
  },
];

const stats = [
  { value: '50+',  label: 'Destinations' },
  { value: '200+', label: 'Activities' },
  { value: '1.2k', label: 'Happy Travelers' },
  { value: '4.9',  label: 'Avg. Rating' },
];

const communityPreview = [
  {
    author: 'Sarah J.',
    location: 'Annapurna Base Camp',
    excerpt: 'The sunrise over Machapuchare was absolutely breathtaking...',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    author: 'David C.',
    location: 'Chitwan National Park',
    excerpt: 'Spotted a one-horned rhino during our morning jungle safari!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
];

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Cinematic Hero ─────────────────────────────────────────────────── */}
      <AnimatedHero
        slides={heroSlides}
        className="pt-40 pb-36 lg:pt-56 lg:pb-48"
        interval={5500}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16 text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary-container font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Alpine Sanctuary Travel
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Discover the Magic of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-[#cce5ff]">
                Nepal
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-surface-container-low max-w-2xl leading-relaxed mb-8"
            >
              From the highest peaks on Earth to dense jungles and ancient temples. Plan your next unforgettable journey
              with Ghumuam.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mb-32 relative z-20"
          >
            <PlannerForm />
          </motion.div>
        </div>
      </AnimatedHero>

      {/* ── Quick links ────────────────────────────────────────────────────── */}
      <section className="pt-48 pb-12 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickLinks.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={item.path}
                  className="group flex flex-col items-center gap-4 p-6 md:p-8 bg-surface-container-lowest rounded-[1.5rem] ambient-shadow ghost-border hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="font-display font-semibold text-on-surface text-[0.9375rem]">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-on-surface-variant text-[0.9375rem] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured destinations ──────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <motion.div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <SectionHeading
              title="Top Destinations"
              subtitle="Explore handpicked locations that offer the best experiences in Nepal."
            />
            <Link
              to="/explore"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-container transition-colors text-lg shrink-0"
            >
              View all <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ParallaxCard intensity={8}>
                  <DestinationCard destination={dest} />
                </ParallaxCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link
              to="/explore"
              className="btn-secondary px-8 py-3.5 text-[0.9375rem] font-medium inline-flex items-center gap-2"
            >
              View all Destinations <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Must visit preview ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading
            title="Must-Visit Places"
            subtitle="Iconic temples, lakes, and trails every traveler should experience."
            linkTo="/places/must-visit"
            linkLabel="See all places"
          />
          {/* 5 cards: 1 col → 2 col → 3 col, last row centred on md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mustVisitPreview.map((place, i) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={mustVisitPreview.length === 5 && i === 3 ? 'sm:col-start-1 lg:col-start-auto' : ''}
              >
                <ParallaxCard intensity={10} className="h-full">
                  <Link
                    to="/places/must-visit"
                    className="group block bg-surface-container-lowest rounded-[1.5rem] overflow-hidden ambient-shadow ghost-border h-full"
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-on-surface mb-2">{place.name}</h3>
                      <p className="text-on-surface-variant text-sm flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" /> {place.location}
                      </p>
                    </div>
                  </Link>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading title="Why Travel With Ghumuam" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: Mountain,
                title: 'Local Expertise',
                desc: 'Curated itineraries crafted by local guides who know Nepal best.',
              },
              {
                icon: Shield,
                title: 'Trusted Bookings',
                desc: 'Secure payment and verified hotel partners across the country.',
              },
              {
                icon: Smile,
                title: '24/7 Support',
                desc: 'We are always here to help you during your journey through the Himalayas.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-surface-container-lowest p-8 rounded-[1.5rem] ambient-shadow flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-surface-container-low text-primary rounded-2xl flex items-center justify-center mb-8">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-on-surface mb-4">{item.title}</h3>
                <p className="text-on-surface-variant text-[0.9375rem] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community preview ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading
            title="Traveler Stories"
            subtitle="Real experiences from explorers who have walked Nepal's trails."
            linkTo="/community"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {communityPreview.map((story, i) => (
              <motion.div
                key={story.author}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest rounded-[1.5rem] p-8 ambient-shadow ghost-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={story.avatar} alt={story.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-display font-bold text-on-surface">{story.author}</p>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1">
                      <MapPin size={12} className="text-primary" /> {story.location}
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-[0.9375rem] italic">&ldquo;{story.excerpt}&rdquo;</p>
                <motion.div className="flex items-center gap-4 mt-4 text-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-red-400" /> 200+
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-secondary fill-secondary" /> 5.0
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-mountain-gradient p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Annapurna_Massif_Aerial_View.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                Ready for your Himalayan adventure?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Let our AI trip planner craft a personalized itinerary in seconds.
              </p>
              <Link
                to="/planner"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-lg text-[0.9375rem]"
              >
                <Sparkles size={20} /> Start Planning
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
