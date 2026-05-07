import React from 'react';
import { motion } from 'framer-motion';

const BudgetActivityCategories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-28 pb-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      
{/* Header Section */}
<section className="mb-12 mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h1 className="text-display-lg font-headline text-on-surface mb-4">Budget Travel</h1>
<p className="text-body-lg text-on-surface-variant max-w-xl">
                    Discover the breathtaking beauty of Nepal without breaking the bank. From serene monasteries to historic hilltop towns, experience authentic culture and stunning landscapes on a budget.
                </p>
</div>
</section>
{/* Filters Section (Minimalist &amp; Asymmetric) */}
<section className="mb-16 bg-surface-container-low rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ghost-border">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">filter_list</span>
<span className="text-label-md text-on-surface-variant uppercase tracking-wider">Refine Journey</span>
</div>
<div className="flex flex-wrap gap-4 w-full">
{/* Activity Filter (Pre-selected) */}
<div className="flex flex-col gap-2">
<label className="text-label-md text-on-surface-variant">Activity Focus</label>
<div className="relative">
<select className="appearance-none bg-surface-container-lowest text-primary font-medium px-6 py-3 pr-12 rounded-full ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm">
<option selected="" value="budget">Budget Travel</option>
<option value="trekking">Trekking</option>
<option value="culture">Cultural Immersion</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
</div>
</div>
{/* Price Range Filter (Pre-selected) */}
<div className="flex flex-col gap-2">
<label className="text-label-md text-on-surface-variant">Price Range</label>
<div className="relative">
<select className="appearance-none bg-surface-container-lowest text-primary font-medium px-6 py-3 pr-12 rounded-full ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm">
<option selected="" value="budget">$ (Budget)</option>
<option value="moderate">$ (Moderate)</option>
<option value="luxury">$$ (Luxury)</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
</div>
</div>
</div>
</section>
{/* Destinations Bento Grid */}
<section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
{/* Destination 1: Dhulikhel/Namobuddha (Large Feature) */}
<article className="md:col-span-8 rounded-xl overflow-hidden relative group bg-surface-container-lowest ghost-border soft-lift flex flex-col justify-end">
<img alt="Thrangu Tashi Yangtse Monastery" className="absolute inset-0 w-full h-full object-cover ken-burns z-0" data-alt="wide shot of colorful Thrangu Tashi Yangtse Monastery in Namobuddha hills with prayer flags and hazy sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt0R6BZ_GlwiRDoSHH5CKJAfY3qxEOyC-EAe2A3Hx3GAcy-r258_A-uWpNLwq5VaK28M5sKeFIrtPymqHhm8h4GYzS0KNNgvdMffgXNvZr6dVDzZ6KlUfMVppXiWiCvCKfhRxarQIXmbkBcJAHTmoKjzzAeTXQYCzIOW1TUexRyZxW-l-lyPX60G-gZyn3bk4ho6SJjYx7xefSiJ1B_eN4FGHcmJadSm0GFifhKsaSvybbSHhVaFq5W6ibJ1DcHmSb2ehZCZtLgU6f"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent z-10"></div>
<div className="relative z-20 p-8 md:p-10 w-full md:w-3/4">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-secondary-container text-sm">location_on</span>
<span className="text-label-md text-surface-bright uppercase tracking-widest">Dhulikhel &amp; Namobuddha</span>
</div>
<h2 className="text-headline-lg font-headline text-on-primary mb-3">Spiritual Serenity on a Shoestring</h2>
<p className="text-surface-bright text-body-lg mb-6 line-clamp-2">
                        Escape the valley's hustle to these peaceful hilltop towns offering spectacular Himalayan panoramas and deep spiritual roots, perfectly suited for budget-conscious travelers.
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 bg-surface/10 backdrop-blur-md px-4 py-2 rounded-full border border-surface/20">
<span className="material-symbols-outlined text-secondary-container">star</span>
<span className="text-surface font-medium text-sm">Must Visit: Thrangu Tashi Yangtse Monastery</span>
</div>
<button className="bg-primary/90 hover:bg-primary text-on-primary rounded-full p-3 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</article>
{/* Destination 2: Tansen (Tall Card) */}
<article className="md:col-span-4 rounded-xl overflow-hidden relative group bg-surface-container-lowest ghost-border soft-lift flex flex-col justify-end">
<img alt="Rani Mahal Tansen" className="absolute inset-0 w-full h-full object-cover ken-burns z-0" data-alt="historic Rani Mahal palace building on the banks of Kali Gandaki river in Nepal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_El5jiQaUuY9xZueF5LLnT2fiRz7JxsKHFfL8SwflN2AlBF9UFDPd7yokVPJ_6JKLW2UwULKAyxIIcECclwrKr8a7Nx_BREI20itAWcrl-TgLKbBBOWRCx98pt-uCwegYeDiBN6uLpdDOzduNuO9lS4l9fNFIPC5eRQIMYJVtZNuznv-zt8RR1Apkh2Q8dlwkL4Avzvaw9R1jyIad2s7sHClQ1yTVFkvU19OLM-_APUb0EIsbROXz7aGPwKaOAvVmxDPtHIKw0fq"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent z-10"></div>
<div className="relative z-20 p-6">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary-container text-sm">location_on</span>
<span className="text-label-md text-surface-bright uppercase tracking-widest">Tansen, Palpa</span>
</div>
<h3 className="text-2xl font-headline text-on-primary font-bold mb-2">Hill Station Heritage</h3>
<p className="text-surface-bright text-sm mb-4 line-clamp-3">
                        A historic hilltop town known for its unique Newari architecture, Dhaka fabric, and affordable guesthouses. Wander steep, narrow alleys untouched by mass tourism.
                    </p>
<div className="bg-surface/10 backdrop-blur-md px-3 py-2 rounded-lg border border-surface/20 inline-block">
<p className="text-surface text-xs font-medium"><span className="text-secondary-container font-bold">Must Visit:</span> Rani Mahal (Taj Mahal of Nepal)</p>
</div>
</div>
</article>
{/* Destination 3: Ilam (Square Card) */}
<article className="md:col-span-6 rounded-xl overflow-hidden relative group bg-surface-container-low ghost-border soft-lift flex">
<div className="w-1/2 relative overflow-hidden rounded-l-xl">
<img alt="Ilam Tea Gardens" className="absolute inset-0 w-full h-full object-cover ken-burns" data-alt="lush green rolling hills of tea gardens in Ilam Nepal with soft misty morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0CKErzwjQzNt6myCsbyrSPemcRvysEtiJU7iYu7vP9n8pgmJXjBJtrEUD49aOncY-aES6WLzN8VTFpDjD46X-EtILSlMEo7qp44hKIR3WFD00VcYuLtNe5GW0c0jg5qCJ9wlTwQAVSDlzQgBH0f8hN39hfZN7-yOY_XMHGdXTa8S5qnbeg-nbAk0SCaJQ3fawYXXjgkZ5tHcY3DQVlD77QdSs8JRPKu_2BSHG5CZ3S9BCPGOoXUE6gAhPjNgfnqK9NFsSpsPwaKih"/>
</div>
<div className="w-1/2 p-6 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-label-md text-primary font-bold uppercase tracking-widest">Ilam</span>
</div>
<h3 className="text-xl font-headline text-on-surface font-bold mb-3">Verdant Tea Estates</h3>
<p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                        Eastern Nepal's gem offers cheap homestays amidst rolling hills of tea gardens. Experience local hospitality and stunning sunrises at Kanyam and Antu Danda.
                    </p>
<div className="mt-auto flex items-center justify-between">
<span className="text-xs font-medium text-secondary bg-secondary-container px-2 py-1 rounded">Budget Homestays</span>
<button className="text-primary hover:text-primary-container transition-colors">
<span className="material-symbols-outlined">east</span>
</button>
</div>
</div>
</article>
{/* Destination 4: Kathmandu (Square Card) */}
<article className="md:col-span-6 rounded-xl overflow-hidden relative group bg-surface-container-low ghost-border soft-lift flex">
<div className="w-1/2 p-6 flex flex-col justify-center order-2">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-label-md text-primary font-bold uppercase tracking-widest">Kathmandu</span>
</div>
<h3 className="text-xl font-headline text-on-surface font-bold mb-3">Capital on a Dime</h3>
<p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                        The vibrant capital is incredibly budget-friendly if you know where to look. Explore ancient stupas, bustling local markets, and affordable eateries away from the tourist hubs.
                    </p>
<div className="mt-auto flex items-center justify-between">
<span className="text-xs font-medium text-secondary bg-secondary-container px-2 py-1 rounded">Street Food &amp; Hostels</span>
<button className="text-primary hover:text-primary-container transition-colors">
<span className="material-symbols-outlined">east</span>
</button>
</div>
</div>
<div className="w-1/2 relative overflow-hidden rounded-r-xl order-1">
<img alt="Kathmandu Street" className="absolute inset-0 w-full h-full object-cover ken-burns" data-alt="narrow bustling street in Kathmandu with traditional brick architecture and colorful prayer flags" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWkPg-2UAy99mzfYr5JNy24c0TfDy-Q15FNNVzZA-5O4B_WnQEgaW121xTLyn9v3eYnNE_pYthfQScmfFP-8OWNXSvkVr_F76QtRyF-CAVbL6_RcVePh4v203RdGZEpfV3PGUbrJYltwGlwtf9rWXfpMVWztBMIZbPpGv9XMb8RbOY0qMAIvGVq93rYP_ZX0Jai8mzTQz8E5cKOCtG-3jIBvc4tl8B0p2d07l6by82l5ZDmB2WoXmkJ4Kpxjoo4BReWa48Oobje-0k"/>
</div>
</article>
</section>

    </motion.div>
  );
};

export default BudgetActivityCategories;
