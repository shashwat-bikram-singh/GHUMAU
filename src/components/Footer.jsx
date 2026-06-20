import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low text-on-surface-variant pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group select-none">
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
            <p className="text-[0.9375rem] leading-relaxed max-w-xs">
              Discover the beauty of Nepal with Ghumuam. Premium travel planning, curated destinations, and seamless booking experiences for every budget.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors text-primary">
                <Camera size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors text-primary">
                <Globe size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors text-primary">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors text-[0.9375rem]">Home</Link></li>
              <li><Link to="/explore" className="hover:text-primary transition-colors text-[0.9375rem]">Destinations</Link></li>
              <li><Link to="/places/must-visit" className="hover:text-primary transition-colors text-[0.9375rem]">Must-Visit Places</Link></li>
              <li><Link to="/activities" className="hover:text-primary transition-colors text-[0.9375rem]">Activities</Link></li>
              <li><Link to="/dining" className="hover:text-primary transition-colors text-[0.9375rem]">Local Eats</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors text-[0.9375rem]">Community</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors text-[0.9375rem]">Reviews</Link></li>
            </ul>
          </div>

          {/* Plan Column */}
          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Plan & Book</h3>
            <ul className="space-y-3">
              <li><Link to="/planner" className="hover:text-primary transition-colors text-[0.9375rem]">Trip Planner</Link></li>
              <li><Link to="/bookings" className="hover:text-primary transition-colors text-[0.9375rem]">Book a Stay</Link></li>
              <li><Link to="/stays/kathmandu" className="hover:text-primary transition-colors text-[0.9375rem]">Hotels in Kathmandu</Link></li>
              <li><Link to="/stays/budget" className="hover:text-primary transition-colors text-[0.9375rem]">Budget Hotels</Link></li>
              <li><Link to="/packing-list" className="hover:text-primary transition-colors text-[0.9375rem]">Packing List</Link></li>
              <li><Link to="/saved-trips" className="hover:text-primary transition-colors text-[0.9375rem]">Saved Trips</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors text-[0.9375rem]">Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[0.9375rem]">Thamel, Kathmandu<br />Bagmati, Nepal</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-[0.9375rem]">+977 1-4250000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-[0.9375rem]">hello@ghumuam.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t ghost-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Ghumuam Travel. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link to="/register" className="hover:text-primary">Create Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
