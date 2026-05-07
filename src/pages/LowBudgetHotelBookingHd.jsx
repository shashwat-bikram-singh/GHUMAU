import React from 'react';
import { motion } from 'framer-motion';

const LowBudgetHotelBookingHd = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-28 pb-12 px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8"
    >
      
{/* Left Column: Search Results */}
<div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col gap-8">
<header className="mb-4">
<h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-3 leading-tight tracking-tight">Tranquil Escapes in Nepal</h1>
<p className="text-lg font-body text-on-surface-variant max-w-2xl">Discover serene, budget-friendly homestays and monastic guest houses nestled in the Himalayas.</p>
</header>
{/* Filters Bar (Glassy) */}
<div className="bg-surface-container-low rounded-full py-3 px-6 flex items-center justify-between overflow-x-auto gap-4 hide-scrollbar">
<div className="flex gap-4 min-w-max">
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-primary font-label text-sm border border-outline-variant/15 hover:bg-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_today</span> Dates
                     </button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-primary font-label text-sm border border-outline-variant/15 hover:bg-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">group</span> Guests
                     </button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-primary font-label text-sm border border-outline-variant/15 hover:bg-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">tune</span> Filters
                     </button>
</div>
<span className="text-sm font-label text-on-surface-variant whitespace-nowrap hidden sm:block">12 Places to stay</span>
</div>
{/* Stays List */}
<div className="flex flex-col gap-10 mt-4">
{/* Stay Card 1 */}
<div className="flex flex-col md:flex-row gap-6 group">
<div className="w-full md:w-2/5 aspect-[4/3] img-zoom-container relative bg-surface-container-low shrink-0">
<img alt="Monastic Guest house" className="w-full h-full object-cover img-zoom" data-alt="peaceful monastic guest house courtyard in nepal with traditional architecture, prayer flags, surrounded by misty mountains at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObA-Z0BzXExRpsxWKAJIm0gwmd_MRguETM3ZXZq8Ogu8o4R-wfKTgFzSIQ9Tgd4wLvNg7WeZWVFuZwSe0KZf9P5ShVPqhHB09Js4gUVU13ssEptolpT14BwY175zr0l_sqAlBbH2RBH7BqlZleSMkP7u4P-8DJwZoK2t-f0PxGotqXxMlTysENCCSmIwMIbmXlrf6zed5_cguHHjCrf5nveuh7_3dcUIhShKU2_qBWgFOk2E2Bb7p8x-jcLfgwCTJcrRtLlGcoCJd"/>
<button className="absolute top-4 right-4 p-2 bg-surface/70 backdrop-blur-md rounded-full text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
</button>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-between py-2">
<div>
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Kavrepalanchok</span>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px] fill-current" data-weight="fill">star</span>
<span className="font-bold text-sm">4.9</span>
</div>
</div>
<h3 className="text-2xl font-headline font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">Namobuddha Monastic Guest House</h3>
<p className="text-on-surface-variant font-body mb-4 line-clamp-2">Experience absolute tranquility staying alongside monks. Wake up to the sound of chanting and panoramic views of the Himalayas.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">wifi</span> Free WiFi</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">restaurant</span> Veg Meals</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">self_improvement</span> Meditation</span>
</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant/15">
<div>
<span className="text-2xl font-headline font-bold text-on-surface">$20</span>
<span className="text-sm font-label text-on-surface-variant"> / night</span>
</div>
<button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label font-semibold hover:opacity-90 transition-opacity">
                                View Details
                            </button>
</div>
</div>
</div>
{/* Stay Card 2 */}
<div className="flex flex-col md:flex-row gap-6 group">
<div className="w-full md:w-2/5 aspect-[4/3] img-zoom-container relative bg-surface-container-low shrink-0">
<img alt="Antu Homestay" className="w-full h-full object-cover img-zoom" data-alt="cozy wooden traditional nepali homestay in a lush tea garden setting with morning mist rolling over the green hills" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOXZRYrpDNKtCNpVB3OprqToDv971P9KLasdsUOffBFbsubEdw5YmT40Kdzlwh4deROuWva7w78oAp5lTBFmmVXZWNrnbGhw2Vswko5JSHivyZ-2dUl-K_esp-IAxz0PoKdvoNF9T2rERpNA8_tNU-K17nq-XT85JKNuusGeUySB54UYnv7GtFz1STFHqyvJPpkNZ0t7iO76_Aa4r-nKZhFrtmvh8C6VeyjK_V281ZWzsNhTaUuFn4evgmHUwTsbMAsue3ViJuKYo6"/>
<button className="absolute top-4 right-4 p-2 bg-surface/70 backdrop-blur-md rounded-full text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
</button>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-between py-2">
<div>
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Ilam</span>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px] fill-current" data-weight="fill">star</span>
<span className="font-bold text-sm">4.8</span>
</div>
</div>
<h3 className="text-2xl font-headline font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">Antu Community Homestays</h3>
<p className="text-on-surface-variant font-body mb-4 line-clamp-2">Immerse yourself in local culture amidst sprawling tea gardens. Perfect for catching the spectacular sunrise over Kanchenjunga.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_cafe</span> Tea Garden</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">groups</span> Local Guide</span>
</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant/15">
<div>
<span className="text-2xl font-headline font-bold text-on-surface">$15</span>
<span className="text-sm font-label text-on-surface-variant"> / night</span>
</div>
<button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label font-semibold hover:opacity-90 transition-opacity">
                                View Details
                            </button>
</div>
</div>
</div>
{/* Stay Card 3 */}
<div className="flex flex-col md:flex-row gap-6 group">
<div className="w-full md:w-2/5 aspect-[4/3] img-zoom-container relative bg-surface-container-low shrink-0">
<img alt="Sparkling Turtle" className="w-full h-full object-cover img-zoom" data-alt="vibrant backpacker hostel courtyard in kathmandu nepal with colorful prayer flags, relaxed seating areas, and warm evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbq3953xEjN3gmyfExP5i9wkyDnyVK_UVp38HOnQ5azMI8pLb4_jkVCD-dPtbaFTog0yW5nD4TXoVC2JY8aNHEnUuk6VpOIW1UCa4-jfYxblT0-guYIjz4wCMFky8l5EbkiYLLiSokrxe9TEZw2jCCKslOnmhT9zHfjtnsl9GHJUcETbU2wFQ1AwoWUVZv7VD-hlJ1QR8sJrAAorzTJwQXVgdsIVllPS6vRi1uc0DYt2MSrXm0aroZmTMrIDXFwEc613HsBK7Srglv"/>
<button className="absolute top-4 right-4 p-2 bg-surface/70 backdrop-blur-md rounded-full text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
</button>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-between py-2">
<div>
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Swayambhu</span>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px] fill-current" data-weight="fill">star</span>
<span className="font-bold text-sm">4.6</span>
</div>
</div>
<h3 className="text-2xl font-headline font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">Sparkling Turtle Backpackers</h3>
<p className="text-on-surface-variant font-body mb-4 line-clamp-2">A vibrant, social hub just steps away from the Monkey Temple. Ideal for solo travelers looking to meet fellow adventurers.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_bar</span> Bar/Lounge</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">wifi</span> Fast WiFi</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md text-xs font-label text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">luggage</span> Storage</span>
</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant/15">
<div>
<span className="text-2xl font-headline font-bold text-on-surface">$12</span>
<span className="text-sm font-label text-on-surface-variant"> / night</span>
</div>
<button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label font-semibold hover:opacity-90 transition-opacity">
                                View Details
                            </button>
</div>
</div>
</div>
</div>
</div>
{/* Right Column: Interactive Map */}
<div className="hidden lg:block lg:w-2/5 xl:w-1/3 relative h-[calc(100vh-8rem)] sticky top-28 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-surface-container-low border border-outline-variant/15">
{/* Map Placeholder */}
<img alt="Map of Nepal" className="w-full h-full object-cover opacity-80" data-alt="top down view of a detailed topographical map of nepal featuring the himalayas with subtle digital interface elements overlaying it" data-location="Nepal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUeGDmyUl2RrbKb2v0bwybQu7uf6MMcLXamblmr-t6WcwgxD6Ov0hIxidJ4TKMMUfVOOmRah-GzEywQ8Y1T9Tz7-5VggVg4oL8IVM783a5cbnAICGvjj5dxpr5sV87s32m9pk05LIT0C67NS5j3A0lDrJA_-2olq_CUZ8IRi31nFIoeJ-tZCR7lnYNSVrr49nALhfkKC4TTgqMGN-Q4t0Utj4SY49Bfpwr8_hSZAH7zEbtad197DVb8kDhWgS83IHuadk-XteuYCx"/>
{/* Floating Map Controls */}
<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
<button className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="remove">remove</span>
</button>
</div>
{/* Map Pins (Static Representation) */}
<div className="absolute top-[40%] left-[60%] flex flex-col items-center group cursor-pointer">
<div className="bg-surface text-primary font-bold px-3 py-1 rounded-full shadow-lg text-sm mb-1 group-hover:bg-primary group-hover:text-on-primary transition-colors">$20</div>
<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,97,148,0.8)]"></div>
</div>
<div className="absolute top-[30%] left-[80%] flex flex-col items-center group cursor-pointer">
<div className="bg-surface text-primary font-bold px-3 py-1 rounded-full shadow-lg text-sm mb-1 group-hover:bg-primary group-hover:text-on-primary transition-colors">$15</div>
<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,97,148,0.8)]"></div>
</div>
<div className="absolute top-[60%] left-[40%] flex flex-col items-center group cursor-pointer">
<div className="bg-primary text-on-primary font-bold px-3 py-1 rounded-full shadow-lg text-sm mb-1 scale-110">$12</div>
<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,97,148,0.8)]"></div>
</div>
{/* Floating Toggle (Mobile only, hidden here but good practice) */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
<button className="px-6 py-3 bg-surface text-on-surface rounded-full shadow-xl font-label font-bold flex items-center gap-2">
<span className="material-symbols-outlined">list</span> Show List
                </button>
</div>
</div>

    </motion.div>
  );
};

export default LowBudgetHotelBookingHd;
