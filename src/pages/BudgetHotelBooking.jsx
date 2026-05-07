import React from 'react';
import { motion } from 'framer-motion';

const BudgetHotelBooking = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-24 pb-32 md:pb-12 flex flex-col md:flex-row"
    >
      
{/* Left Content: List of Stays */}
<div className="w-full md:w-1/2 lg:w-5/12 h-full overflow-y-auto px-6 py-6 custom-scrollbar bg-surface z-10 relative shadow-[10px_0_30px_rgb(0,0,0,0.02)]">
<div className="mb-8 pl-2">
<h1 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-2">Budget Stays</h1>
<p className="font-body text-lg text-on-surface-variant max-w-md">Authentic experiences without breaking the bank. Discover peaceful homestays and backpacker havens.</p>
</div>
{/* Filters */}
<div className="flex gap-3 mb-8 overflow-x-auto pb-2 pl-2 hide-scrollbar">
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label text-sm font-semibold shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-outline-variant/15 whitespace-nowrap">Any dates</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label text-sm font-semibold shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-outline-variant/15 whitespace-nowrap">Guests</button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label text-sm font-semibold shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-outline-variant/15 whitespace-nowrap flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">tune</span> Filters</button>
</div>
<div className="flex flex-col gap-8 pb-12">
{/* Property 1 */}
<article className="group rounded-xl bg-surface-container-lowest p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden flex flex-col sm:flex-row gap-5 mx-2">
<div className="relative w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
<img alt="Namobuddha Monastic Guest House exterior with prayer flags" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="simple serene monastic guest house exterior in nepal with colorful prayer flags stringing across the frame against a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpcHM51l8KIs4fa0xa99SLavhhfIhUYNzJBQ9HHR1k2RgChsROiUUB78BRLEWqfwXx7i3sZ6va4HFzvqGNOobRQsj_Iq58AoVBqXAjfTCtv8c1DCjZnoFvwpz4nOyb3x1l7X279aMX3ZoLqWSkrTpiUoDluuXdEAJY9_b5Sz2kkCZQVT99pvr3ZMxm3PcduBjFu-9Up-8uXOaF3ajstHbgTA13DDyagSYI7IN98q7rxoXtpyTOTuv0l7LRrvkApYITzeHTfR-2UF25"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="favorite">favorite</span>
</button>
</div>
<div className="flex flex-col justify-between flex-grow py-1">
<div>
<div className="flex justify-between items-start mb-1">
<span className="font-label text-xs font-semibold text-secondary uppercase tracking-wider">Monastery Stay</span>
<div className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
<span className="font-label text-sm font-semibold">4.8</span>
</div>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-1">Namobuddha Monastic Guest House</h3>
<p className="font-body text-sm text-on-surface-variant mb-2">Kavrepalanchok, Nepal</p>
<p className="font-body text-sm text-on-surface-variant line-clamp-2">Experience serene monastic life. Simple, clean rooms with vegetarian meals included. Wake up to chanting.</p>
</div>
<div className="flex justify-between items-end mt-4">
<div>
<span className="font-headline text-2xl font-bold text-on-surface">$25</span>
<span className="font-body text-sm text-on-surface-variant">/night</span>
</div>
</div>
</div>
</article>
{/* Property 2 */}
<article className="group rounded-xl bg-surface-container-lowest p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden flex flex-col sm:flex-row gap-5 mx-2">
<div className="relative w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
<img alt="Antu Community Homestays sunrise view over tea gardens" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="rustic wooden homestay overlooking rolling green tea estates in nepal bathed in warm golden morning sunlight misty valleys in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJL0h9ZrFELtFdS2fuMHWO_XaRdvG3fbz088e2rug0WSmEeo-gVHT9ZfsgRePfsxZFtimADqb7ebqHFatYHoWjU1AgwsYTT5HDzd8_6OWvextgx9eKFgrFkOOt1PuyAWcbDjp3fiNbP3Lk-YVFBqQhFQmh1PbK2oOOO01eDkpbPwI4mmCNMxpx6mBkARfeBkahtoY5WtBR7FOwHtpEwFe45u-k2qV1fQZgJpA6IQsNjgyAAFatwgaryx_4aSOIMQDlQNGI48tM6dh1"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="favorite">favorite</span>
</button>
</div>
<div className="flex flex-col justify-between flex-grow py-1">
<div>
<div className="flex justify-between items-start mb-1">
<span className="font-label text-xs font-semibold text-secondary uppercase tracking-wider">Homestay</span>
<div className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
<span className="font-label text-sm font-semibold">4.9</span>
</div>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-1">Antu Community Homestays</h3>
<p className="font-body text-sm text-on-surface-variant mb-2">Ilam, Nepal</p>
<p className="font-body text-sm text-on-surface-variant line-clamp-2">Stay with local families amidst lush tea gardens. Incredible sunrise views over Mount Kanchenjunga.</p>
</div>
<div className="flex justify-between items-end mt-4">
<div>
<span className="font-headline text-2xl font-bold text-on-surface">$15</span>
<span className="font-body text-sm text-on-surface-variant">/night</span>
</div>
</div>
</div>
</article>
{/* Property 3 */}
<article className="group rounded-xl bg-surface-container-lowest p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden flex flex-col sm:flex-row gap-5 mx-2">
<div className="relative w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
<img alt="Sparkling Turtle Backpackers hostel common area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="cozy colorful backpacker hostel common area in kathmandu with floor cushions low tables and travel photos on the walls warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XUllh3nOT3By7S0fPR1cwvYrLffOtT_E2jYikRW7c5P3rlJ7aCPArBn30WNU3xqRyEpdQhgN7upW_FF8iO7QguE5HasFUg27q_q20XjRPKW7YHyPGdMfXAPq55gz7kppn8RYaXzU6URbjyaM_eBwzYzwGmpVfhOsBdQE5mlj6d7Oz-rdQREpEeUChwPAflqjCwJsC9MXJhT_7IyMuZwoH8B692yy_Bdl1CeWKDXwkiBKvFDWUHoq6vkVJPNHzEJaFY9aKoO_Y9_n"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="favorite">favorite</span>
</button>
</div>
<div className="flex flex-col justify-between flex-grow py-1">
<div>
<div className="flex justify-between items-start mb-1">
<span className="font-label text-xs font-semibold text-secondary uppercase tracking-wider">Hostel</span>
<div className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
<span className="font-label text-sm font-semibold">4.6</span>
</div>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-1">Sparkling Turtle Backpackers</h3>
<p className="font-body text-sm text-on-surface-variant mb-2">Kathmandu, Nepal</p>
<p className="font-body text-sm text-on-surface-variant line-clamp-2">Vibrant atmosphere near Swoyambhunath Stupa. Great communal spaces, rooftop cafe, and organized treks.</p>
</div>
<div className="flex justify-between items-end mt-4">
<div>
<span className="font-headline text-2xl font-bold text-on-surface">$12</span>
<span className="font-body text-sm text-on-surface-variant">/night</span>
</div>
</div>
</div>
</article>
{/* Property 4 */}
<article className="group rounded-xl bg-surface-container-lowest p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden flex flex-col sm:flex-row gap-5 mx-2">
<div className="relative w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
<img alt="Srinagar Hotel Budget Annex exterior view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="simple budget hotel exterior in palpa nepal traditional architecture elements against a clear sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSLOw5uCaoNoRnwyL25dwykRjBq83UdNXbKso9icLKBJrGpTtSicuqtykVOzztDRRAW-g77mCfkx9KOfB2PhC1XeiguS-sO9Cs3ifipSt5oTuLXuHg3doXemqmCe1F_CuVq_X691_BV4uWBnvzjg8A7bKyHs_L6pU4Mj3qt5LrAQn50HLHs4gz487KVaBWVLguOgKLwL_BoPXbwUJkSHJOPixMkUTAVTXqpqkjGIR5GuEQV9UruVPqJtnw4mUZOJlufyUv3f7rp1A4"/>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="favorite">favorite</span>
</button>
</div>
<div className="flex flex-col justify-between flex-grow py-1">
<div>
<div className="flex justify-between items-start mb-1">
<span className="font-label text-xs font-semibold text-secondary uppercase tracking-wider">Budget Hotel</span>
<div className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[14px]" data-weight="fill">star</span>
<span className="font-label text-sm font-semibold">4.4</span>
</div>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-1">Srinagar Hotel Budget Annex</h3>
<p className="font-body text-sm text-on-surface-variant mb-2">Tansen, Palpa</p>
<p className="font-body text-sm text-on-surface-variant line-clamp-2">Clean, basic accommodations offering stunning panoramic views of the Himalayas and the Madi Valley.</p>
</div>
<div className="flex justify-between items-end mt-4">
<div>
<span className="font-headline text-2xl font-bold text-on-surface">$30</span>
<span className="font-body text-sm text-on-surface-variant">/night</span>
</div>
</div>
</div>
</article>
</div>
</div>
{/* Right Content: Map */}
<div className="hidden md:block w-1/2 lg:w-7/12 h-full relative bg-surface-container-high rounded-l-3xl overflow-hidden z-0">
<img alt="Map of Nepal highlighting budget stay locations" className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-location="Nepal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfR_QBAxdQ1DCA_7c89GCsZ__3nUtLP1zY-aj3CACvnYOU8uOc3HkJvXdqzflOC8w2aR_F78Q_VNXyY0FZlzRC5exMmKXDRhpVmfT_qDzllQ74GX4j2SY7yYGjp3THZ8iOllV5f81t5QmD-kqIPpCHwUK1LlNG4kJ34P0xKMzCjexRgjJt0yNlvJazDeWifdFA_gtjcD9cYI_2FhoKuXn09GXCEoedNFy2FiHRVKJ21Hzeq-HUajTvfZ_qxdaiAY9k2dnJYY0wWt70"/>
{/* Map Markers */}
{/* Marker 1: Namobuddha */}
<div className="absolute top-[45%] left-[60%] group cursor-pointer -translate-x-1/2 -translate-y-1/2">
<div className="bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-label text-sm font-bold text-on-surface border border-outline-variant/15 transition-transform group-hover:scale-110 relative z-10">$25</div>
<div className="w-3 h-3 bg-surface-container-lowest rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-outline-variant/15 z-0"></div>
</div>
{/* Marker 2: Antu Community */}
<div className="absolute top-[60%] left-[85%] group cursor-pointer -translate-x-1/2 -translate-y-1/2">
<div className="bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-label text-sm font-bold text-on-surface border border-outline-variant/15 transition-transform group-hover:scale-110 relative z-10">$15</div>
<div className="w-3 h-3 bg-surface-container-lowest rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-outline-variant/15 z-0"></div>
</div>
{/* Marker 3: Sparkling Turtle */}
<div className="absolute top-[42%] left-[55%] group cursor-pointer -translate-x-1/2 -translate-y-1/2">
<div className="bg-primary text-on-primary px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,97,148,0.3)] font-label text-sm font-bold transition-transform group-hover:scale-110 relative z-10">$12</div>
<div className="w-3 h-3 bg-primary rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 z-0"></div>
</div>
{/* Marker 4: Srinagar Hotel */}
<div className="absolute top-[55%] left-[35%] group cursor-pointer -translate-x-1/2 -translate-y-1/2">
<div className="bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-label text-sm font-bold text-on-surface border border-outline-variant/15 transition-transform group-hover:scale-110 relative z-10">$30</div>
<div className="w-3 h-3 bg-surface-container-lowest rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-outline-variant/15 z-0"></div>
</div>
{/* Map Controls */}
<div className="absolute bottom-8 right-8 flex flex-col gap-2">
<button className="w-12 h-12 bg-surface-container-lowest rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex items-center justify-center text-on-surface hover:bg-surface transition-colors border border-outline-variant/15">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
<button className="w-12 h-12 bg-surface-container-lowest rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex items-center justify-center text-on-surface hover:bg-surface transition-colors border border-outline-variant/15">
<span className="material-symbols-outlined" data-icon="remove">remove</span>
</button>
</div>
</div>

    </motion.div>
  );
};

export default BudgetHotelBooking;
