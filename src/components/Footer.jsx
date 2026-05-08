import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Camera, Globe, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low text-on-surface-variant pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-primary">
                <Plane size={28} className="transform -rotate-45" strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-on-surface">
                Ghumuam
              </span>
            </Link>
            <p className="text-[0.9375rem] leading-relaxed max-w-xs">
              Discover the beauty of Nepal with Ghumuam. We offer premium travel planning, curated destinations, and seamless booking experiences.
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

          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/explore" className="hover:text-primary transition-colors">Explore</Link></li>
              <li><Link to="/planner" className="hover:text-primary transition-colors">Trip Planner</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Destinations</h3>
            <ul className="space-y-4">
              <li><Link to="/explore?cat=Mid" className="hover:text-primary transition-colors">Pokhara</Link></li>
              <li><Link to="/explore?cat=Low" className="hover:text-primary transition-colors">Kathmandu</Link></li>
              <li><Link to="/explore?cat=High" className="hover:text-primary transition-colors">Everest Base Camp</Link></li>
              <li><Link to="/explore?cat=Mid" className="hover:text-primary transition-colors">Chitwan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-on-surface font-display font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[0.9375rem]">Thamel, Kathmandu<br/>Bagmati, Nepal</span>
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
            <Link to="#" className="hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
