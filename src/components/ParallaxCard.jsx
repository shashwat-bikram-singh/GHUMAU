import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/**
 * ParallaxCard – 3D tilt hover effect using Framer Motion.
 * Wrap any card content to give it a mouse-tracking parallax tilt.
 *
 * Props:
 *  children    – card content
 *  className   – extra classes on the outer wrapper
 *  intensity   – tilt intensity in degrees (default 12)
 *  scale       – scale on hover (default 1.03)
 */
const ParallaxCard = ({
  children,
  className = '',
  intensity = 12,
  scale = 1.03,
}) => {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springConfig);
  const glareX  = useTransform(rawX, [-0.5, 0.5], ['0%', '100%']);
  const glareY  = useTransform(rawY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative ${className}`}
    >
      {/* Inner content – slightly lifted in 3D space */}
      <div style={{ transform: 'translateZ(0px)' }} className="h-full">
        {children}
      </div>

      {/* Subtle glare highlight that follows the mouse */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.12) 0%, transparent 65%)`
          ),
        }}
      />
    </motion.div>
  );
};

export default ParallaxCard;
