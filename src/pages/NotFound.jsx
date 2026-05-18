import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mountain, Home, Compass } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen pt-40 pb-24 flex flex-col items-center justify-center bg-surface relative overflow-hidden">
    <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="text-center relative z-10 px-6"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="w-20 h-20 bg-primary/10 text-primary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8"
      >
        <Mountain size={40} strokeWidth={1.5} />
      </motion.div>

      <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Error 404</p>
      <h1 className="text-5xl md:text-7xl font-display font-bold text-on-surface mb-4 tracking-tight">
        Off the trail
      </h1>
      <p className="text-on-surface-variant text-lg mb-10 max-w-md mx-auto leading-relaxed">
        The page you are looking for does not exist or has been moved. Let us guide you back to familiar ground.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary px-8 py-3.5 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-medium">
          <Home size={18} strokeWidth={2} /> Return Home
        </Link>
        <Link
          to="/explore"
          className="btn-secondary px-8 py-3.5 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-medium"
        >
          <Compass size={18} strokeWidth={2} /> Explore Nepal
        </Link>
      </div>
    </motion.div>
  </div>
);

export default NotFound;
