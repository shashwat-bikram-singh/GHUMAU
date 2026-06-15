import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Calendar, Wallet, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlannerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    budget: 'Mid'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/explore?cat=${formData.budget}&dest=${formData.destination}`);
  };

  const inputClasses = "w-full bg-surface-container-low text-on-surface rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 transition-all duration-300 appearance-none font-medium text-[0.9375rem]";
  const labelClasses = "block text-sm font-sans font-semibold text-on-surface-variant mb-2 tracking-wide uppercase text-xs";

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-container-lowest/95 backdrop-blur-xl p-8 md:p-10 rounded-[1.5rem] max-w-4xl mx-auto w-full relative z-10 ambient-shadow"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Destination */}
        <div className="relative">
          <label className={labelClasses}>Where to?</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin size={20} className="text-primary" strokeWidth={1.5} />
            </div>
            <select 
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={inputClasses}
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
          <label className={labelClasses}>When?</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar size={20} className="text-primary" strokeWidth={1.5} />
            </div>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Budget */}
        <div className="relative">
          <label className={labelClasses}>Budget</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Wallet size={20} className="text-primary" strokeWidth={1.5} />
            </div>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={inputClasses}
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
            className="btn-primary w-full py-3.5 px-4 font-bold flex items-center justify-center gap-2 text-[0.9375rem]"
          >
            <Sparkles size={20} strokeWidth={1.5} />
            <span>Plan Trip</span>
          </button>
        </div>

      </div>
    </motion.form>
  );
};

export default PlannerForm;
