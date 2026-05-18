import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide when creating an account, planning trips, or contacting support — including name, email, and travel preferences. Usage data helps us improve recommendations.',
  },
  {
    title: 'How We Use Your Data',
    body: 'Your data powers trip planning, booking confirmations, and personalized destination suggestions. We never sell personal information to third parties.',
  },
  {
    title: 'Cookies & Analytics',
    body: 'Essential cookies keep you signed in and remember preferences. Optional analytics help us understand which features travelers use most.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access, correction, or deletion of your personal data at any time by contacting hello@ghumuam.com.',
  },
];

const Privacy = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="min-h-screen pt-40 pb-24 bg-surface"
  >
    <div className="container mx-auto px-6 md:px-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8"
      >
        <Shield size={32} strokeWidth={1.5} />
      </motion.div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Privacy Policy</h1>
      <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
        Last updated May 2026. Ghumuam is committed to protecting your privacy as you explore Nepal.
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
    </div>
  </motion.div>
);

export default Privacy;
