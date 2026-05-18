import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By using Ghumuam, you agree to these terms. If you do not agree, please discontinue use of the platform.',
  },
  {
    title: 'Travel Services',
    body: 'Ghumuam provides travel planning tools and connects you with partner accommodations and activities. Final bookings are subject to partner terms and availability.',
  },
  {
    title: 'User Responsibilities',
    body: 'You are responsible for accurate account information, valid travel documents, and compliance with local laws and regulations in Nepal.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Ghumuam is not liable for delays, cancellations, or incidents arising from third-party providers, weather, or force majeure events during your travels.',
  },
];

const Terms = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="min-h-screen pt-40 pb-24 bg-surface"
  >
    <motion.div className="container mx-auto px-6 md:px-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8"
      >
        <FileText size={32} strokeWidth={1.5} />
      </motion.div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Terms of Service</h1>
      <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
        Last updated May 2026. Please read these terms carefully before using Ghumuam.
      </p>
      <motion.div className="space-y-10">
        {sections.map((s, i) => (
          <motion.section
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            className="bg-surface-container-lowest rounded-[1.5rem] p-8 ambient-shadow ghost-border"
          >
            <h2 className="text-xl font-display font-bold text-on-surface mb-3">{s.title}</h2>
            <p className="text-on-surface-variant leading-relaxed text-[0.9375rem]">{s.body}</p>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Terms;
