import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionHeading = ({ title, subtitle, linkTo, linkLabel, centered = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
    className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
  >
    <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-on-surface-variant text-lg leading-relaxed">{subtitle}</p>
    )}
    {linkTo && (
      <Link
        to={linkTo}
        className={`inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:text-primary-container transition-colors text-lg ${centered ? '' : 'md:hidden'}`}
      >
        {linkLabel || 'View all'} <ArrowRight size={20} strokeWidth={2} />
      </Link>
    )}
  </motion.div>
);

export default SectionHeading;
