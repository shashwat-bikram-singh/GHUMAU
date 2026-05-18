import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
};

export const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    className="w-full"
  >
    {children}
  </motion.div>
);

export const withPageTransition = (Component) => {
  const Wrapped = (props) => (
    <PageTransition>
      <Component {...props} />
    </PageTransition>
  );
  Wrapped.displayName = `Page(${Component.displayName || Component.name || 'Screen'})`;
  return Wrapped;
};

export default PageTransition;
