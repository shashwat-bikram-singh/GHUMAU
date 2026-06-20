import React, { useState, useEffect, useRef, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

/**
 * AnimatedHero – Cinematic full-screen background slideshow with:
 *  • Ken Burns zoom+pan effect on each slide image
 *  • Smooth crossfade transitions between slides
 *  • Floating particle overlay for depth
 *  • Slide indicator dots + progress bar
 *  • Thumbnail strip preview
 *  • Manual prev/next controls
 *
 * Props:
 *  slides      – array of { image, title, subtitle, location }
 *  children    – overlay content (text, form, etc.)
 *  autoPlay    – boolean (default true)
 *  interval    – ms between slides (default 5500)
 *  className   – extra classes for the wrapper
 *  compact     – if true, hides thumbnail strip & location label (good for sub-page banners)
 */

const kenBurnsClasses = [
  'ken-burns-1',
  'ken-burns-2',
  'ken-burns-3',
  'ken-burns-4',
  'ken-burns-5',
  'ken-burns-6',
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size:     Math.random() * 5 + 2,
  left:     Math.random() * 100,
  delay:    Math.random() * 12,
  duration: Math.random() * 10 + 12,
  opacity:  Math.random() * 0.35 + 0.1,
}));

const AnimatedHero = ({
  slides = [],
  children,
  autoPlay = true,
  interval = 5500,
  className = '',
  compact = false,
}) => {
  const [current, setCurrent]     = useState(0);
  const [prev, setPrev]           = useState(null);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setPrev(current);
    setCurrent(index);
    setProgressKey(k => k + 1);
  }, [current]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev_ = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  // Auto-play — reset when `next` changes (i.e. slide changed)
  useEffect(() => {
    if (!autoPlay || slides.length < 2) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, next, slides.length]);

  if (!slides.length) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Background slides stack ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev   = i === prev;
          return (
            <div
              key={i}
              className={`absolute inset-0 overflow-hidden transition-opacity ${
                isActive
                  ? 'opacity-100 z-10 duration-[1400ms]'
                  : isPrev
                  ? 'opacity-0   z-[5]  duration-[1400ms]'
                  : 'opacity-0   z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover will-change-transform ${kenBurnsClasses[i % kenBurnsClasses.length]}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Dark gradient overlay — more opacity at bottom so content stays readable */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#060f1a]/70 via-[#060f1a]/25 to-[#060f1a]/80" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#060f1a]/35 to-transparent" />

        {/* ── Floating dust particles ──────────────────────────────────── */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="particle z-20"
            style={{
              width:             p.size,
              height:            p.size,
              left:              `${p.left}%`,
              bottom:            '-10px',
              opacity:           p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay:    `${p.delay}s`,
              background:        'rgba(180, 215, 255, 0.65)',
            }}
          />
        ))}
      </div>

      {/* ── Foreground content ────────────────────────────────────────────── */}
      <div className="relative z-30">
        {children}
      </div>

      {/* ── Slide title + location (bottom-left) ─────────────────────────── */}
      {!compact && (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 left-6 md:left-14 z-30"
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <MapPin size={12} className="text-primary-container" />
              {slides[current]?.location}
            </p>
            <p className="text-white font-display font-bold text-lg md:text-xl leading-tight drop-shadow-lg">
              {slides[current]?.title}
            </p>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Slide indicator dots ─────────────────────────────────────────── */}
      <div className={`absolute z-30 flex items-center gap-3 left-1/2 -translate-x-1/2 ${compact ? 'bottom-5' : 'bottom-7'}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-7 h-2 bg-white'
                  : 'w-2 h-2 bg-white/35 hover:bg-white/65'
              }`}
            />
            {i === current && (
              <span
                key={progressKey}
                className="absolute left-0 top-0 h-2 rounded-full bg-primary hero-progress-bar overflow-hidden"
                style={{ animationDuration: `${interval}ms` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Prev / Next arrows ───────────────────────────────────────────── */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev_}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 hover:scale-110 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 hover:scale-110 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* ── Thumbnail strip (desktop only, home page only) ──────────────── */}
      {!compact && slides.length > 1 && (
        <div className="absolute bottom-7 right-4 md:right-14 z-30 hidden md:flex gap-2 items-center">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative w-14 h-9 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                i === current
                  ? 'border-white scale-110 shadow-lg shadow-black/40'
                  : 'border-white/20 opacity-50 hover:opacity-85 hover:scale-105'
              }`}
              aria-label={slide.title}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedHero;
