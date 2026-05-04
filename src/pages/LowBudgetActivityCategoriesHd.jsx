import React from 'react';
import { motion } from 'framer-motion';

const LowBudgetActivityCategoriesHd = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6 tracking-tight">
            Low Budget Activity Categories Hd
          </h1>
          <p className="text-lg text-on-surface-variant mb-12">
            This page represents the Low Budget Activity Categories Hd section. Content will be loaded dynamically.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-[1.5rem] ambient-shadow ghost-border flex flex-col"
            >
              <div className="h-48 bg-surface-container-low rounded-xl mb-6"></div>
              <h3 className="text-xl font-display font-bold text-on-surface mb-3">Example Item {item}</h3>
              <p className="text-on-surface-variant text-[0.9375rem]">Detailed description mimicking the Alpine Sanctuary editorial aesthetic.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowBudgetActivityCategoriesHd;
