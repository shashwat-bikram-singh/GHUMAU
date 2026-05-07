import React from 'react';
import { motion } from 'framer-motion';

const MidRangeStaysMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col md:flex-row min-h-screen pt-24 md:pt-28 pb-24 md:pb-0"
    >
      
{/* Left Column: Curated Stays */}
<section className="w-full md:w-[55%] lg:w-[45%] flex flex-col p-6 md:p-10 space-y-8 overflow-y-auto z-10 bg-surface">
<header className="mb-6">
<h1 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight mb-3">Curated Mid-Range Stays</h1>
<p className="text-lg font-body text-on-surface-variant max-w-md">Discover exceptional comfort nestled in Nepal's stunning landscapes, perfectly balanced for value and quality.</p>
</header>
{/* Filters */}
<div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
<button className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-label text-sm font-semibold whitespace-nowrap shadow-sm">All Stays</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-sm font-medium whitespace-nowrap outline-none outline-[0.5px] outline-outline-variant/30">Chitwan</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-sm font-medium whitespace-nowrap outline-none outline-[0.5px] outline-outline-variant/30">Annapurna Region</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-sm font-medium whitespace-nowrap outline-none outline-[0.5px] outline-outline-variant/30">Lumbini</button>
</div>
{/* Stay Cards */}
<div className="space-y-8">
{/* Card 1: Chitwan */}
<article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1 outline outline-[0.5px] outline-outline-variant/15 relative">
<div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
<img alt="Resort in Chitwan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="luxury boutique resort hidden within lush tropical greenery of chitwan national park warm evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1WzzkRkmfh3AhzISiqGkFcW409Bs9QtkmoGrRPxqH_3yoI_e349a2pXNEVULcVDclN_y2VOFAsTZ5b_lLbzO8_MM77AnMRc9LdbaJODbpMKxpx_mBL3WVkWF3SCjiB3ACX1-OO4nR44tL012cxBw5xrq_u2g3YByap2RBZCzAxukHvLyfCQh5FdKTXOPbZL6VtaU_AMi8g1QMySayIg01NuVUjFOwAFM1DHVUrVOnZPdCVZGm8V8eGh1F-gueUNymVVnUSoUW1NJb"/>
<div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1">
<span className="material-symbols-outlined text-secondary text-sm" >star</span>
<span className="font-label text-xs font-bold text-on-surface">4.5</span>
</div>
</div>
<div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-xl font-headline font-bold text-on-background leading-tight">Rhino Retreat Resort</h2>
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<p className="font-label text-sm text-on-surface-variant mb-4 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">location_on</span> Sauraha, Chitwan
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Jungle Safari</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Pool</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Spa</span>
</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-surface-variant/30">
<div>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-wider mb-1">Mid-Range</p>
<p className="font-headline text-2xl font-bold text-on-background">$85<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm hover:shadow-lg transition-shadow duration-300">Book Now</button>
</div>
</div>
</article>
{/* Card 2: Ghandruk */}
<article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1 outline outline-[0.5px] outline-outline-variant/15 relative">
<div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
<img alt="Tea House in Ghandruk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="premium stone teahouse in ghandruk village with clear view of annapurna snow peaks at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxZt2q0Ttpjn41vJBJ9TgThuSxYepN4VW0d13En4GUwpStbNpCwVeEHyb4cd1_JpAdgUFhXlfwJoGS3bIVSNdWWN9tJNH3WNwECDseAUqXs_vTl-8y2PkEUf9x4hWewtBrZ3EEf97vjxyJpbGf1CYlxZDSaV16X-DLizE9kDdqrMLQf5NIiH9LBN3tRMsyjTjV8yEqRUDANsrpwYU2iKtKG9TFKgxJsq6nO5K01v67cgZyLEQavsAjp8POx54RWbd3OD1YJFeKp5YF"/>
<div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1">
<span className="material-symbols-outlined text-secondary text-sm" >star</span>
<span className="font-label text-xs font-bold text-on-surface">4.8</span>
</div>
</div>
<div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-xl font-headline font-bold text-on-background leading-tight">Annapurna Heritage Lodge</h2>
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<p className="font-label text-sm text-on-surface-variant mb-4 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">location_on</span> Ghandruk Village
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Mountain View</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Hot Shower</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Wi-Fi</span>
</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-surface-variant/30">
<div>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-wider mb-1">Mid-Range</p>
<p className="font-headline text-2xl font-bold text-on-background">$45<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm hover:shadow-lg transition-shadow duration-300">Book Now</button>
</div>
</div>
</article>
{/* Card 3: Lumbini */}
<article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-1 outline outline-[0.5px] outline-outline-variant/15 relative">
<div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
<img alt="Hotel in Lumbini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="peaceful garden courtyard of a boutique hotel in lumbini softly lit by early morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhUNIpdp7yLIsdA-0artRuUqVdrz8cOY10dU6sazkme49CdUC8nL5dzVR-gckS0w-k4pSK5R3R8yZIgGhHKSgQZ7SWr3H84_LS498hOKtirmLKJE9EgJUqmK4LttpPQvwmNTPCtQNFRCuGCm4eo9hlAvnGTneVtMwsZK-QLHs2sDoVbmy0CbTfDzDCMVm5rSLHT692W1mi_dfthw2YSk4Lt1o-2wMGKoE9gosDMY4WDFzAFMTjcBEYYgI7eX6AmxyuCmrbGpJZlWl8"/>
<div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1">
<span className="material-symbols-outlined text-secondary text-sm" >star</span>
<span className="font-label text-xs font-bold text-on-surface">4.2</span>
</div>
</div>
<div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-xl font-headline font-bold text-on-background leading-tight">Bodhi Zen Hotel</h2>
<button className="text-tertiary hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<p className="font-label text-sm text-on-surface-variant mb-4 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">location_on</span> Lumbini Garden Area
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Meditation Garden</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">AC Rooms</span>
<span className="px-3 py-1 bg-surface-container-low text-primary text-xs font-label rounded-full border border-surface-variant/50">Veg Dining</span>
</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-surface-variant/30">
<div>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-wider mb-1">Mid-Range</p>
<p className="font-headline text-2xl font-bold text-on-background">$60<span className="text-sm font-normal text-on-surface-variant">/night</span></p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-label font-bold text-sm hover:shadow-lg transition-shadow duration-300">Book Now</button>
</div>
</div>
</article>
</div>
<div className="py-8 text-center">
<button className="bg-surface-container-high text-primary px-8 py-3 rounded-full font-label font-bold text-sm hover:bg-surface-variant transition-colors duration-300">Load More Stays</button>
</div>
</section>
{/* Right Column: Map */}
<section className="hidden md:block w-[45%] lg:w-[55%] fixed right-0 top-0 h-screen z-0 border-l border-outline-variant/20">
<div className="w-full h-full relative bg-surface-container-low">
{/* Fallback Map Image */}
<img alt="Map of Nepal" className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="stylized topographical map of nepal focusing on chitwan annapurna and lumbini regions in soft blue and green tones" data-location="Nepal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW7T6MjPNxJSs1Pq2XiUr5y-EpsiHWISRdmbPb5H1MBDJDWfDEUsVesCLPv3pd8GBVKkFy91p9_TELkVyOc_GnQP4KTvNR3PSNh57cFkExx6IOUzPvA9w8K-B_iRwvZEpb_FGr42TG2kJINI0dSjViprpaXdOgY94cOrsDWsQ2a01dGleNhopCjJVh1ms5muOftnWj7dRNxVN2aTi5azeQrKjxy3jenfQZAEf4hbyTsZDVPYdd3f3YU93jWOovyg4QHTZqNwUD_O_f"/>
{/* Map Overlay Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent pointer-events-none"></div>
{/* Custom Map Pins (Simulated) */}
<div className="absolute top-[45%] left-[60%] group cursor-pointer">
<div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,97,148,0.6)] border-2 border-surface group-hover:scale-125 transition-transform"></div>
<div className="absolute -top-12 -left-16 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none outline outline-[0.5px] outline-outline-variant/20">
<p className="font-headline text-sm font-bold text-on-background">Ghandruk</p>
<p className="font-label text-xs text-on-surface-variant">$45 - $75</p>
</div>
</div>
<div className="absolute top-[70%] left-[50%] group cursor-pointer">
<div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,97,148,0.6)] border-2 border-surface group-hover:scale-125 transition-transform"></div>
<div className="absolute -top-12 -left-16 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none outline outline-[0.5px] outline-outline-variant/20">
<p className="font-headline text-sm font-bold text-on-background">Chitwan</p>
<p className="font-label text-xs text-on-surface-variant">$80 - $120</p>
</div>
</div>
{/* Map Controls */}
<div className="absolute bottom-10 right-10 flex flex-col space-y-2">
<button className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-md text-on-surface-variant hover:text-primary transition-colors outline outline-[0.5px] outline-outline-variant/20">
<span className="material-symbols-outlined text-xl">add</span>
</button>
<button className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-md text-on-surface-variant hover:text-primary transition-colors outline outline-[0.5px] outline-outline-variant/20">
<span className="material-symbols-outlined text-xl">remove</span>
</button>
<button className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-md text-primary mt-4 outline outline-[0.5px] outline-outline-variant/20">
<span className="material-symbols-outlined text-xl" >my_location</span>
</button>
</div>
</div>
</section>

    </motion.div>
  );
};

export default MidRangeStaysMap;
