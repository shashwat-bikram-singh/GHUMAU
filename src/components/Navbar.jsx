import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Explore', path: '/explore' },
  { name: 'Must Visit', path: '/places/must-visit' },
  { name: 'Trip Planner', path: '/planner' },
  {
    name: 'Stays',
    path: '/bookings',
    children: [
      { name: 'Book Your Stay', path: '/stays/book' },
      { name: 'Hotels in Kathmandu', path: '/stays/kathmandu' },
      { name: 'Budget Hotels', path: '/stays/budget' },
      { name: 'Mid-Range Map', path: '/stays/mid-range-map' },
    ],
  },
  {
    name: 'Activities',
    path: '/activities',
    children: [
      { name: 'All Activities', path: '/activities' },
      { name: 'By Category', path: '/activities/all-categories' },
      { name: 'Budget Activities', path: '/activities/budget' },
      { name: 'Mid-Range Activities', path: '/activities/mid-range' },
      { name: 'Filter by Price', path: '/activities/price-filter' },
    ],
  },
  {
    name: 'Dining',
    path: '/dining',
    children: [
      { name: 'Local Eats Guide', path: '/dining' },
      { name: 'Budget Dining', path: '/dining/nepal-budget' },
      { name: 'Mid-Range Guide', path: '/dining/mid-range-guide' },
    ],
  },
  { name: 'Community', path: '/community' },
  { name: 'Reviews', path: '/reviews' },
];

const DropdownMenu = ({ link, onClose }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.startsWith(link.path) || (link.children && link.children.some(c => location.pathname === c.path));

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-[0.9375rem] transition-colors ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
      >
        {link.name}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl p-2 min-w-[200px] shadow-xl ghost-border">
              {link.children.map(child => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => { setOpen(false); onClose && onClose(); }}
                  className={`block px-4 py-2.5 rounded-xl text-[0.9375rem] font-medium transition-colors ${location.pathname === child.path ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const pathname = location.pathname;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileExpanded(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 select-none">
            <div className="text-primary transition-transform duration-500 group-hover:rotate-6 shrink-0">
              <svg viewBox="0 0 100 100" className="w-9 h-9" fill="none" stroke="currentColor">
                <circle cx="50" cy="45" r="18" className="fill-secondary/10" />
                <path d="M50 15 L50 32 M50 58 L50 75 M20 45 L37 45 M63 45 L80 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                <path d="M15 80 L45 35 L60 58 L72 42 L90 80 Z" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 35 L52 80 M72 42 L78 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
              </svg>
            </div>
            <span className="text-2xl font-outfit font-extrabold tracking-tight bg-gradient-to-r from-primary via-[#007bb9] to-secondary bg-clip-text text-transparent">Ghumuam</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.name} link={link} />
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[0.9375rem] font-medium transition-colors ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-outline-variant/30">
            <Link to="/saved-trips" className="text-on-surface-variant hover:text-primary text-[0.9375rem] font-medium transition-colors">Saved</Link>
            <Link to="/login" className="btn-primary flex items-center gap-2 px-5 py-2.5 text-[0.9375rem] font-medium">
              <User size={16} strokeWidth={1.5} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="flex items-center lg:hidden text-on-surface p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface-container-lowest/97 backdrop-blur-xl shadow-xl border-t ghost-border max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between py-3 text-lg font-medium text-on-surface-variant"
                      >
                        {link.name}
                        <ChevronDown size={18} className={`transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 flex flex-col gap-1">
                              {link.children.map(child => (
                                <Link key={child.path} to={child.path} onClick={() => setIsOpen(false)}
                                  className="py-2 text-base text-on-surface-variant hover:text-primary transition-colors">
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={link.path} onClick={() => setIsOpen(false)}
                      className={`block py-3 text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/saved-trips" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-medium text-on-surface-variant hover:text-primary transition-colors">Saved Trips</Link>
              <Link to="/packing-list" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-medium text-on-surface-variant hover:text-primary transition-colors">Packing List</Link>
              <div className="pt-4 mt-2 border-t ghost-border">
                <Link to="/login" onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex justify-center items-center gap-2 px-6 py-3.5 text-lg font-medium">
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
