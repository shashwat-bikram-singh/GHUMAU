import React from 'react';
import { motion } from 'framer-motion';

const BookYourStay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-28 pb-12 px-4 md:px-8 max-w-[1920px] mx-auto flex flex-col md:flex-row gap-8"
    >
      
{/* Left Panel: Search, Filters, List */}
<div className="w-full md:w-[60%] lg:w-[50%] flex flex-col gap-8">
{/* Search Header Bar */}
<div className="bg-surface-container-lowest rounded-xl p-4 ambient-shadow flex flex-col sm:flex-row gap-4 items-center sticky top-28 z-40">
<div className="flex-1 w-full relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">location_on</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-low focus:bg-surface-container-lowest focus:ring-0 focus:outline-none focus:border-outline-variant border border-transparent rounded-lg text-on-surface font-body" placeholder="Kathmandu, Nepal" type="text" value="Kathmandu, Nepal"/>
</div>
<div className="flex w-full sm:w-auto gap-4">
<div className="relative flex-1 sm:w-40">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">calendar_today</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-low focus:bg-surface-container-lowest focus:ring-0 focus:outline-none border border-transparent rounded-lg text-on-surface font-body text-sm" placeholder="Oct 15 - Oct 20" type="text" value="Oct 15 - Oct 20"/>
</div>
<div className="relative flex-1 sm:w-32">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">person</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-low focus:bg-surface-container-lowest focus:ring-0 focus:outline-none border border-transparent rounded-lg text-on-surface font-body text-sm" placeholder="2 Guests" type="text" value="2 Guests"/>
</div>
</div>
<button className="w-full sm:w-auto bg-primary text-on-primary p-3 rounded-xl hover:bg-primary-container transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">search</span>
</button>
</div>
<div className="flex justify-between items-end">
<div>
<h1 className="font-headline text-3xl font-bold text-on-surface">Stays in Kathmandu</h1>
<p className="font-body text-on-surface-variant mt-1">120+ serene locations found</p>
</div>
<button className="flex items-center gap-2 text-primary font-medium hover:bg-surface-container-low px-4 py-2 rounded-full transition-colors">
<span className="material-symbols-outlined text-[20px]">tune</span> Filters
                </button>
</div>
{/* Hotel List */}
<div className="flex flex-col gap-6">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow flex flex-col sm:flex-row group transition-transform hover:-translate-y-1 duration-300">
<div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
<img alt="Luxury hotel room with large windows overlooking a lush valley in Nepal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Luxury hotel room with large windows overlooking a lush green Himalayan valley with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi8i9XNK7cltbx6kpn9swFNw4AN_xvj9iFBV7aHr_UJHrdRTbEKpk8nu5JeZLXIMLsKoiCzRYw7KXoXD5UzqGsP0pbHBwdmwCTH827Aay997ShtrusZk9a_te8S3aBsaEXr57PX2LyYSVghw6-4NuNR6UPrlfhC9_V6F9WMy6x0bbC5-lwN2vo418aSPVCN_mHOSKMb4PXxOpVJxLlqv0-2TUv_QYGJuXlGCGO04lioMVo4zMq89FhfQ10FcOBzCrANibfTFYFqbEr"/>
<div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-surface transition-colors">
<span className="material-symbols-outlined text-primary">favorite_border</span>
</div>
</div>
<div className="p-6 sm:w-3/5 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="font-headline text-xl font-bold text-on-surface">The Himalayan Retreat</h2>
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-[16px] text-amber-500 fill-amber-500" >star</span>
<span className="font-label font-bold text-sm">4.9</span>
</div>
</div>
<p className="font-body text-on-surface-variant text-sm mb-4">Thamel, Kathmandu • 2km from center</p>
<div className="flex gap-3 mb-6">
<span className="material-symbols-outlined text-tertiary" title="Free Wifi">wifi</span>
<span className="material-symbols-outlined text-tertiary" title="Spa">spa</span>
<span className="material-symbols-outlined text-tertiary" title="Restaurant">restaurant</span>
<span className="material-symbols-outlined text-tertiary" title="Pool">pool</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant/15 pt-4">
<div>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-wider">Per night</p>
<p className="font-headline text-2xl font-bold text-primary">$120</p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all">Book Now</button>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow flex flex-col sm:flex-row group transition-transform hover:-translate-y-1 duration-300">
<div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
<img alt="Boutique heritage hotel courtyard in Kathmandu with traditional wood carving" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Traditional Newari architecture courtyard hotel in Kathmandu with intricate wood carvings and warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL4gSmZv1dJ0IMQLINnlDFdRynL3Mlc3S8pOxRtmyDg980-256Y5Ve5n2i3mClzf-iw9EWHminmhXEr-4ZX5DysX5LZTn-AJWMbNMZ9UAUlBsBXMfwAJHfTBYdeyeo1Kw7p6QijqT1L1VDf9Q66NgV-Qf0hWFfNoTElGGXYTK9GGfuCtA3ZeZGbm44gP_r5a_6bV47IFZie6ReGMm_1pgjyKE4Irclwp3F4iW1xJpl-j6yNab-pw3I1vS6SJxJyhIHt9L2DRqwwiqT"/>
<div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-surface transition-colors">
<span className="material-symbols-outlined text-primary">favorite_border</span>
</div>
</div>
<div className="p-6 sm:w-3/5 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="font-headline text-xl font-bold text-on-surface">Patan Heritage Lodge</h2>
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-[16px] text-amber-500 fill-amber-500" >star</span>
<span className="font-label font-bold text-sm">4.7</span>
</div>
</div>
<p className="font-body text-on-surface-variant text-sm mb-4">Patan, Lalitpur • Quiet Area</p>
<div className="flex gap-3 mb-6">
<span className="material-symbols-outlined text-tertiary" title="Free Wifi">wifi</span>
<span className="material-symbols-outlined text-tertiary" title="Breakfast Included">local_cafe</span>
<span className="material-symbols-outlined text-tertiary" title="Air Conditioning">ac_unit</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant/15 pt-4">
<div>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-wider">Per night</p>
<p className="font-headline text-2xl font-bold text-primary">$85</p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all">Book Now</button>
</div>
</div>
</div>
</div>
<button className="w-full py-4 text-primary font-medium hover:bg-surface-container-low rounded-xl transition-colors mt-4">Load More Retreats</button>
</div>
{/* Right Panel: Interactive Map */}
<div className="hidden md:block md:w-[40%] lg:w-[50%] h-[calc(100vh-140px)] sticky top-28 rounded-xl overflow-hidden ambient-shadow relative group">
<img alt="Map view of Kathmandu valley" className="w-full h-full object-cover" data-alt="Stylized top-down satellite map view of Kathmandu city with soft blue and green tones" data-location="Kathmandu" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCCxcDinBNrYt9KGP96H5spHWhlHe6y6PCwdlKVBbxxLgWHbEklWmi02fF7Z-5juD2HqAfvAdA93ftdy7Vj17zPokBrpRuAPNpolYAEb6dvEHysxONyhNxHrcq27oBn7HGcl9Wo1bAdhXsIZWt-3CGGATo4Cqv1jh3KNcL7_la31CEvFdsu_oDxvF8ol8nAMippK_3M8vvQ3yMeWT5YRrGlmm2slBqossszDvECNzreugK3WmFNB3T_uAqLyQ5DeP8JvRZNxzt3rst"/>
{/* Map Overlay UI */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/40 pointer-events-none"></div>
{/* Interactive Map Pins (Simulated) */}
<div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform cursor-pointer">
<div className="bg-surface-container-lowest text-primary font-bold px-3 py-1.5 rounded-full shadow-lg border border-outline-variant/20 text-sm">$120</div>
<div className="w-3 h-3 bg-surface-container-lowest rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-outline-variant/20"></div>
</div>
<div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform cursor-pointer">
<div className="bg-primary text-on-primary font-bold px-3 py-1.5 rounded-full shadow-lg text-sm">$85</div>
<div className="w-3 h-3 bg-primary rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
</div>
{/* Floating Map Controls */}
<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<button className="bg-surface-container-lowest p-3 rounded-full ambient-shadow text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="bg-surface-container-lowest p-3 rounded-full ambient-shadow text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
</div>

    </motion.div>
  );
};

export default BookYourStay;
