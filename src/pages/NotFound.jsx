import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-900">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-9xl font-black text-primary-500 mb-4 opacity-50">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">You've strayed off the trail!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back to safety.
        </p>
        <Link 
          to="/"
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
