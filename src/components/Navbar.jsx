import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, User } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Trip Planner', path: '/planner' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Activities', path: '/activities' },
    { name: 'Community', path: '/community' },
    { name: 'Dining', path: '/dining' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary group-hover:text-primary-container transition-colors">
              <Plane size={28} className="transform -rotate-45" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-on-surface">
              Ghumuam
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[0.9375rem] transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary font-semibold' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/login" className="btn-primary flex items-center gap-2 px-6 py-2.5 text-[0.9375rem] font-medium">
              <User size={18} strokeWidth={1.5} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-on-surface p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-lg border-t ghost-border"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t ghost-border">
                <Link 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex justify-center items-center gap-2 px-6 py-3.5 text-lg font-medium"
                >
                  <User size={20} strokeWidth={1.5} />
                  <span>Login to Dashboard</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
