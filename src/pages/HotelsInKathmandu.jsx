import React from 'react';
import { motion } from 'framer-motion';

const HotelsInKathmandu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-32 pb-24"
    >
      
{/* Header Section (Atmospheric Editorial) */}
<header className="max-w-screen-2xl mx-auto px-8 mb-16 md:mb-24 relative">
<div className="max-w-3xl ml-0 md:ml-12 relative z-10">
<p className="font-label text-primary font-medium tracking-wider uppercase mb-4 text-sm md:text-base">Curated Stays</p>
<h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tighter mb-6">
                    Sanctuaries in <br/> <span className="gradient-text">Kathmandu</span>
</h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                    Discover premium retreats amidst the vibrant heart of Nepal. Handpicked for elegance, tranquility, and breathtaking views.
                </p>
</div>
</header>
{/* Filters / Sort (Subtle Layering) */}
<section className="max-w-screen-2xl mx-auto px-8 mb-12">
<div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-surface-container-low ml-0 md:ml-12 border border-outline-variant/15 w-fit">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-primary font-label text-sm shadow-[0_2px_10px_rgba(11,28,48,0.04)] hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-[20px]">tune</span>
                    Filters
                </button>
<div className="h-6 w-px bg-outline-variant/30 hidden sm:block"></div>
<div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
<button className="px-5 py-2 rounded-full bg-primary/10 text-primary font-label text-sm whitespace-nowrap">Luxury (5 Star)</button>
<button className="px-5 py-2 rounded-full bg-transparent border border-outline-variant/30 text-on-surface-variant font-label text-sm whitespace-nowrap hover:bg-surface-container-lowest transition-colors">Boutique</button>
<button className="px-5 py-2 rounded-full bg-transparent border border-outline-variant/30 text-on-surface-variant font-label text-sm whitespace-nowrap hover:bg-surface-container-lowest transition-colors">Heritage</button>
<button className="px-5 py-2 rounded-full bg-transparent border border-outline-variant/30 text-on-surface-variant font-label text-sm whitespace-nowrap hover:bg-surface-container-lowest transition-colors">Spa &amp; Wellness</button>
</div>
</div>
</section>
{/* Hotel Grid (Asymmetrical / Bento feel) */}
<section className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12 ml-0 md:ml-12">
{/* Card 1: Featured (Larger) */}
<article className="col-span-1 md:col-span-2 lg:col-span-2 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(11,28,48,0.03)] border border-outline-variant/15 hover:shadow-[0_12px_40px_rgba(11,28,48,0.08)] transition-all duration-500">
<div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
<img alt="Luxury heritage hotel courtyard in Kathmandu" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="expansive luxury hotel courtyard in kathmandu featuring traditional newari architecture warm evening lighting glowing lanterns and lush green gardens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpnWjC0G0U5jMxjNGnFxPsJUx7W6nJz50H9Kb9ca4BMKfseY3Tzcd-1JE52oqT3LQ79IHyWbSukAyaeRqIXxURzlDNp4zt9S7wf6T1sA0g3-jzIMe-Fw-8GeeCHs74WWP2xYjlCvosfUGCOR2Nf1hb8WqnlNO_vfY-qVOhrnIJVEaPMbOU1MBgWw03dw4tKmuOD-UVWxTOQ95o8SyWtsPwwKs95Rej6SHCdcsy3-TtBnSHFDcy0UfOylvjxlm0H4_sOCsA5ss--C7F"/>
{/* Gradient Overlay for text readability */}
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
{/* Top Badges */}
<div className="absolute top-6 left-6 flex gap-3">
<span className="bg-surface/80 backdrop-blur-md text-primary px-3 py-1.5 rounded-full font-label text-xs tracking-wide uppercase shadow-sm">Featured</span>
<span className="bg-surface/80 backdrop-blur-md text-on-surface flex items-center gap-1 px-3 py-1.5 rounded-full font-label text-xs shadow-sm">
<span className="material-symbols-outlined text-[14px] text-[#f59e0b]" data-weight="fill">star</span>
                                4.9 (124 Reviews)
                            </span>
</div>
</div>
<div className="p-8 md:p-10 relative bg-surface-container-lowest -mt-12 mx-6 mb-6 rounded-xl shadow-[0_8px_30px_rgba(11,28,48,0.05)] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10 border border-outline-variant/10">
<div className="flex-1">
<h2 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">The Dwarika's Hotel</h2>
<p className="font-label text-on-surface-variant text-sm flex items-center gap-1 mb-6">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                Battisputali, Kathmandu
                            </p>
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined font-light text-[22px]">wifi</span>
<span className="font-label text-[10px] uppercase tracking-wider">Free Wifi</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined font-light text-[22px]">spa</span>
<span className="font-label text-[10px] uppercase tracking-wider">Luxury Spa</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined font-light text-[22px]">pool</span>
<span className="font-label text-[10px] uppercase tracking-wider">Outdoor Pool</span>
</div>
</div>
</div>
<div className="text-left md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-end items-center md:items-end">
<div className="mb-0 md:mb-4">
<p className="font-label text-on-surface-variant text-sm">starting from</p>
<p className="font-headline text-3xl font-bold text-primary">$350<span className="text-lg text-on-surface-variant font-normal">/night</span></p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-label text-sm font-medium hover:scale-[1.02] transition-transform shadow-[0_4px_20px_rgba(0,97,148,0.3)] w-auto">
                                Book Now
                            </button>
</div>
</div>
</article>
{/* Card 2: Standard */}
<article className="col-span-1 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(11,28,48,0.03)] border border-outline-variant/15 hover:shadow-[0_12px_40px_rgba(11,28,48,0.08)] transition-all duration-500 flex flex-col">
<div className="relative h-[300px] w-full overflow-hidden">
<img alt="Modern luxury hotel pool in Kathmandu" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="serene rooftop infinity pool of a modern luxury hotel in kathmandu overlooking the city skyline under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4Sofv4vm1hpVIM-yrNnbohK9B4OrVZ46fLRquqUyR40cDu7O0eZblICb6OTfphJxMlh3A6eRtliGJb7Q0buNUJxNaXIKL_-JTXDF7DEZySrIoz07dkuBNmHpYJpeldvWgxfihcthG3UV67E9BUQl8XIc_lB0tPOofIE3UkMLKQH_5p8s0Y5lpgdx_K_HLv-xlI69iYJdx9JD-wiDVVyS2aufZDKUXIJTr9IxXv1kNEqHVVlV4A1APOLfpa1qzsLlzwqnm14Z53Kq"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md text-on-surface flex items-center gap-1 px-2.5 py-1 rounded-full font-label text-[11px] shadow-sm">
<span className="material-symbols-outlined text-[12px] text-[#f59e0b]" data-weight="fill">star</span>
                                4.7
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex-grow">
<h3 className="font-headline text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Baber Mahal Vilas</h3>
<p className="font-label text-on-surface-variant text-xs flex items-center gap-1 mb-5">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                Baber Mahal, Kathmandu
                            </p>
<div className="flex gap-4 mb-6">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Free Wifi">wifi</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Spa">spa</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Restaurant">restaurant</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant/15 pt-5 mt-auto">
<div>
<p className="font-headline text-xl font-bold text-primary">$180<span className="text-xs text-on-surface-variant font-normal">/night</span></p>
</div>
<button className="bg-surface-container-high text-primary px-5 py-2 rounded-full font-label text-sm font-medium hover:bg-surface-container-highest transition-colors">
                                Details
                            </button>
</div>
</div>
</article>
{/* Card 3: Standard */}
<article className="col-span-1 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(11,28,48,0.03)] border border-outline-variant/15 hover:shadow-[0_12px_40px_rgba(11,28,48,0.08)] transition-all duration-500 flex flex-col">
<div className="relative h-[300px] w-full overflow-hidden">
<img alt="Boutique hotel interior room" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="elegant minimalist boutique hotel room interior with soft natural light white linens wooden accents and a subtle mountain view through the window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlDvHrfFWEELsfe4y5aYhKCnRnf-1k1nl8nwktiotqQxqeZXsIO-_sBYmUw8P16L_yyr25WCuR6LebmqrwhAeyrSC-CypwYI9b6Yral5mpO9uJar_r837xmS9LQ9LClgR1N_q-cRESZxcXTFrVZPcS8LtyRzTOmkFW1WNHDyCwlL9MjuKVExltj4ftfgJZMukLD6gJXd4RPNyISOHYLZukqGOnMhINl1dmBQJSL6as0yuvrpw7IKr_DbqIh7ivMJoSYqbmIwoBaobb"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md text-on-surface flex items-center gap-1 px-2.5 py-1 rounded-full font-label text-[11px] shadow-sm">
<span className="material-symbols-outlined text-[12px] text-[#f59e0b]" data-weight="fill">star</span>
                                4.8
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex-grow">
<h3 className="font-headline text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Traditional Comfort</h3>
<p className="font-label text-on-surface-variant text-xs flex items-center gap-1 mb-5">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                Kamalpokhari, Kathmandu
                            </p>
<div className="flex gap-4 mb-6">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Free Wifi">wifi</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="City View">location_city</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Coffee Shop">local_cafe</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant/15 pt-5 mt-auto">
<div>
<p className="font-headline text-xl font-bold text-primary">$120<span className="text-xs text-on-surface-variant font-normal">/night</span></p>
</div>
<button className="bg-surface-container-high text-primary px-5 py-2 rounded-full font-label text-sm font-medium hover:bg-surface-container-highest transition-colors">
                                Details
                            </button>
</div>
</div>
</article>
{/* Card 4: Standard */}
<article className="col-span-1 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(11,28,48,0.03)] border border-outline-variant/15 hover:shadow-[0_12px_40px_rgba(11,28,48,0.08)] transition-all duration-500 flex flex-col">
<div className="relative h-[300px] w-full overflow-hidden">
<img alt="Luxury spa area" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="tranquil luxury hotel spa area with warm ambient lighting massage tables rolled white towels and smooth stones indicating wellness and relaxation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2RSgk-LFHiPh932QOWFamIt1DvboUAEBH6m_jv-nrrXXvxEvPMWSEeMZbhT2nqw0aPGKttjtsOJdUk1v2xnWL8qmBEKNpHQGKqj4gL9Mqy7NTWhPMWB0v2P7wC-ZtvaDI-MF4PjDFHLhPoBCuh7XSXA4gvwWM_ePpQXdTa8FlddCk3TbMq8f96yIBdfaSAwxaUO5QbUPB6UWyq8JsgOp0xLuTPqNEJdDFHZ4G3kpGBtAVuEO7GtPFOPpgLQhxKPGeDsOQTl123LzY"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-surface/80 backdrop-blur-md text-on-surface flex items-center gap-1 px-2.5 py-1 rounded-full font-label text-[11px] shadow-sm">
<span className="material-symbols-outlined text-[12px] text-[#f59e0b]" data-weight="fill">star</span>
                                4.6
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex-grow">
<h3 className="font-headline text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Kathmandu Marriott</h3>
<p className="font-label text-on-surface-variant text-xs flex items-center gap-1 mb-5">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                                Naxal, Kathmandu
                            </p>
<div className="flex gap-4 mb-6">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Free Wifi">wifi</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Fitness Center">fitness_center</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" title="Pool">pool</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant/15 pt-5 mt-auto">
<div>
<p className="font-headline text-xl font-bold text-primary">$210<span className="text-xs text-on-surface-variant font-normal">/night</span></p>
</div>
<button className="bg-surface-container-high text-primary px-5 py-2 rounded-full font-label text-sm font-medium hover:bg-surface-container-highest transition-colors">
                                Details
                            </button>
</div>
</div>
</article>
</div>
</section>

    </motion.div>
  );
};

export default HotelsInKathmandu;
