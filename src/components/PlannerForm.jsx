import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Wallet, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlannerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    travelers: '2',
    budget: 'Mid'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate navigation to a generated itinerary or filtered explore page
    navigate(`/explore?cat=${formData.budget}`);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 md:p-8 rounded-3xl max-w-4xl mx-auto w-full relative z-10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Destination */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Where to?</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={20} className="text-gray-400" />
            </div>
            <select 
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full bg-white/60 dark:bg-dark-900/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
            >
              <option value="" disabled>Select Destination</option>
              <option value="any">Anywhere in Nepal</option>
              <option value="kathmandu">Kathmandu Valley</option>
              <option value="pokhara">Pokhara</option>
              <option value="chitwan">Chitwan</option>
              <option value="everest">Everest Region</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">When?</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={20} className="text-gray-400" />
            </div>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-white/60 dark:bg-dark-900/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Budget</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Wallet size={20} className="text-gray-400" />
            </div>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-white/60 dark:bg-dark-900/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
            >
              <option value="Low">Low (Backpacker)</option>
              <option value="Mid">Mid (Comfort)</option>
              <option value="High">High (Luxury)</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button 
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-xl py-3 px-4 font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary-500/30"
          >
            <Sparkles size={20} />
            <span>Plan Trip</span>
          </button>
        </div>

      </div>
    </motion.form>
  );
};

export default PlannerForm;
