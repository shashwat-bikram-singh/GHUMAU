import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Camera, Globe, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-500 text-white p-1 rounded-lg">
                <Plane size={20} className="transform -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Ghumuam
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover the beauty of Nepal with Ghumuam. We offer premium travel planning, curated destinations, and seamless booking experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors hover:text-white">
                <Camera size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors hover:text-white">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors hover:text-white">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/explore" className="hover:text-primary-400 transition-colors">Explore</Link></li>
              <li><Link to="/planner" className="hover:text-primary-400 transition-colors">Trip Planner</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Destinations</h3>
            <ul className="space-y-3">
              <li><Link to="/explore?cat=Mid" className="hover:text-primary-400 transition-colors">Pokhara</Link></li>
              <li><Link to="/explore?cat=Low" className="hover:text-primary-400 transition-colors">Kathmandu</Link></li>
              <li><Link to="/explore?cat=High" className="hover:text-primary-400 transition-colors">Everest Base Camp</Link></li>
              <li><Link to="/explore?cat=Mid" className="hover:text-primary-400 transition-colors">Chitwan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm">Thamel, Kathmandu<br/>Bagmati, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span className="text-sm">+977 1-4250000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span className="text-sm">hello@ghumuam.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ghumuam Travel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
