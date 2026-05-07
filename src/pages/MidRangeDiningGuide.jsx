import React from 'react';
import { motion } from 'framer-motion';

const MidRangeDiningGuide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-32 pb-32 md:pb-12"
    >
      
{/* Hero Section */}
<header className="relative w-full h-[614px] min-h-[400px] flex items-end pb-16 overflow-hidden">
<div className="absolute inset-0 bg-surface-container-low">
<img alt="Himalayan Dining" className="w-full h-full object-cover mix-blend-multiply opacity-80" data-alt="Elegant dining table set on a wooden terrace overlooking mist-covered Himalayan mountains at golden hour, soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuActNdcH_niM-1xl_A67oNcIg3UfNhisEI5RD5u446rwjbmwwR7rpTkiz45AGSM4kWhxH3vUk6ZgI6z7lVmUbk56_Zm2xNygXwwCITIw718hKxmeCfo-qararcXVWPWE1NjcF0QhL3S3S7MVPYoFtTmtMmHu-ijj4aM1qD4-tE-96thIKiZFWIqhLs8ZAbgTTvOSfldS_H8k5xcAR5uwct2OZm9TyLLeb_a47MS5R_XiZpvUhIUHxFZIzUwuU6ULTRTPR9xqiPn4wL1"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full md:px-12 lg:px-24">
<span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary bg-surface-container-highest rounded-full shadow-[0_4px_30px_rgba(0,97,148,0.1)]">
                    Culinary Guide
                </span>
<h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface max-w-4xl leading-[1.1] mb-6">
                    Refined Himalayan Flavors: Mid-Range Dining Guide
                </h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl font-medium leading-relaxed">
                    Discover exceptional local Thakali sets, organic farm-to-table experiences, and cultural dining across Nepal's most iconic destinations.
                </p>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16 space-y-32">
{/* Section: Ghandruk */}
<section className="relative">
<div className="flex items-center gap-4 mb-12">
<span className="material-symbols-outlined text-primary text-3xl" data-weight="fill" >location_on</span>
<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">Ghandruk</h2>
<div className="h-px flex-grow bg-gradient-to-r from-outline-variant/30 to-transparent ml-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
<div className="md:col-span-7 relative group rounded-[1.5rem] overflow-hidden shadow-[0_8px_40px_rgba(11,28,48,0.06)] bg-surface-container-lowest">
<img alt="Thakali Set in Ghandruk" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Beautifully plated traditional Nepalese Thakali set on a brass plate with various side dishes, set on a rustic wooden table with mountain views in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-amaj9gAMl0uYlCJx-ZZu4F8pKjehapar8erc_sl-3GRyPJtDVMX_91vFw5Xd9vfOcyGnKCQtWcLiMPJZCDlVkiMvz_7RkfdAVFrX_24QX4nw1XuobVJQq-X1hIBv-P-wold2K8t8PrqyPiWouO9T1_0rVS8YO8mT45lvSt7R0HpTUCqaXEcpYU_Ah7rpKFvq-EUvjTEtTT3hYKY8PSvZY-3_LAnAnt25lPZZTpVIRVh57CSGd6wV5iXKtLepVATCc3EoDmlhHZz"/>
<div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/15 rounded-[1.5rem]"></div>
</div>
<div className="md:col-span-5 flex flex-col justify-center space-y-6">
<div>
<div className="flex items-center gap-3 mb-3 text-secondary font-medium tracking-wide text-sm uppercase">
<span className="material-symbols-outlined text-lg" data-icon="restaurant_menu">restaurant_menu</span>
                                Local Thakali
                            </div>
<h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Annapurna Heritage Kitchen</h3>
<div className="flex items-center gap-2 text-on-surface-variant font-medium">
<span className="text-primary font-bold">$</span>
<span className="text-outline text-sm">• Mid-Range</span>
</div>
</div>
<p className="font-body text-lg text-on-surface-variant leading-relaxed">
                            Experience the authentic taste of the mountains. This family-run establishment sources its ingredients directly from local Ghandruk farms, offering a Thakali set that elevates traditional home cooking to a refined culinary art.
                        </p>
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
<h4 className="font-headline text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Signature Dish</h4>
<p className="font-body text-primary-container font-semibold text-lg">Himalayan Black Lentil Dal &amp; Jimbu Rice</p>
</div>
<button className="self-start mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-full font-body font-semibold text-base shadow-[0_8px_30px_rgba(0,97,148,0.2)] hover:shadow-[0_12px_40px_rgba(0,97,148,0.3)] transition-all hover:-translate-y-0.5">
                            Reserve a Table
                        </button>
</div>
</div>
</section>
{/* Section: Lumbini (Reversed Layout) */}
<section className="relative">
<div className="flex items-center gap-4 mb-12 flex-row-reverse text-right">
<span className="material-symbols-outlined text-primary text-3xl" data-weight="fill" >location_on</span>
<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">Lumbini</h2>
<div className="h-px flex-grow bg-gradient-to-l from-outline-variant/30 to-transparent mr-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
<div className="md:col-span-5 flex flex-col justify-center space-y-6 md:order-1 order-2">
<div>
<div className="flex items-center gap-3 mb-3 text-secondary font-medium tracking-wide text-sm uppercase">
<span className="material-symbols-outlined text-lg" data-icon="eco">eco</span>
                                Organic Farm-to-Table
                            </div>
<h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Sacred Garden Cafe</h3>
<div className="flex items-center gap-2 text-on-surface-variant font-medium">
<span className="text-primary font-bold">$</span>
<span className="text-outline text-sm">• Mid-Range</span>
</div>
</div>
<p className="font-body text-lg text-on-surface-variant leading-relaxed">
                            A peaceful culinary retreat surrounded by the serene atmosphere of Buddha's birthplace. Sacred Garden emphasizes organic, plant-based meals harvested from their own monastic gardens, offering clean, revitalizing flavors.
                        </p>
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
<h4 className="font-headline text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Signature Dish</h4>
<p className="font-body text-primary-container font-semibold text-lg">Monastery Garden Thali (Vegan)</p>
</div>
<button className="self-start mt-4 bg-surface-container-highest text-primary px-8 py-3.5 rounded-full font-body font-semibold text-base transition-all hover:bg-surface-variant hover:-translate-y-0.5">
                            View Menu
                        </button>
</div>
<div className="md:col-span-7 relative group rounded-[1.5rem] overflow-hidden shadow-[0_8px_40px_rgba(11,28,48,0.06)] bg-surface-container-lowest md:order-2 order-1">
<img alt="Organic Food in Lumbini" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Fresh, colorful organic vegan thali with assorted curries, fresh greens, and artisanal flatbreads served on a minimalist ceramic plate in a sunlit garden setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMhavp1Ao3jWi3RVa2PR742oGPRONOJP4A53gwcyWegKI7-0A6ix1UUTu_fyze1TKhE6y15l-RpMuLxcX7MqWXpP4aE__Mi0WtnYQ4EmDWoSzycYXYtcVcJEIllRDeFQ9j-jqJjJ_NW3JwLCpJJJA4EuO460XVH5gNbzDyNkkMlXQ2wvavA3R1oumvZ2YsVtfk98w3HCeMPBQQAVYky1vOAlhqQmXKcHzjFZKjo5elFKpI27faxG-FPBmrFhUiEfrxtD6bGEAPgst"/>
<div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/15 rounded-[1.5rem]"></div>
</div>
</div>
</section>
{/* Section: Bento Grid for Chitwan &amp; Langtang */}
<section className="relative">
<div className="flex items-center gap-4 mb-12">
<span className="material-symbols-outlined text-primary text-3xl" data-weight="fill" >explore</span>
<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background">More Experiences</h2>
<div className="h-px flex-grow bg-gradient-to-r from-outline-variant/30 to-transparent ml-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Chitwan Card */}
<div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(11,28,48,0.04)] ring-1 ring-inset ring-outline-variant/15 flex flex-col group">
<div className="relative h-64 overflow-hidden">
<img alt="Tharu Cultural Dinner in Chitwan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Traditional Tharu dancers performing around a warm fire pit at night, with guests seated at dining tables in the background under soft warm string lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkQTeBBp9VKnNU-nnzQuM-NkoXvL8czaqAn8zRo0fYZkvKgOBwd63JvsYkzXjicE5eBmxoJtP5WzP_KxamcgDbEr4zEale0GqsyNfS8Zswq8PblA8weqKxzWd49souHbyK7TPqFw2OX50v_HVv8J3ATLlqRJJnd2vjnpJelhCXkKL9cqRXExGKm_CNzuw_6lGpb_Ro-if8ZwS1zA2MCZSOoygagFCxijfofHJH6CAkGqN_iz4ahZh_LOLj7ke_zGfn-3uJUxudShS1"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="theater_comedy">theater_comedy</span>
<span className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">Chitwan</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Riverside Tharu Lodge</h3>
<div className="flex items-center gap-2 text-on-surface-variant font-medium mb-4">
<span className="text-primary font-bold">$</span>
<span className="text-outline text-sm">• Cultural Dining</span>
</div>
<p className="font-body text-base text-on-surface-variant mb-6 flex-grow">
                                Dine under the stars by the Rapti River while enjoying traditional Tharu cultural performances and authentic jungle-spiced barbecue.
                            </p>
<div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
<div>
<span className="block text-xs font-bold text-outline uppercase tracking-wider mb-0.5">Signature</span>
<span className="font-body text-sm font-semibold text-on-surface">Smoked River Fish Tikka</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Langtang Card */}
<div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(11,28,48,0.04)] ring-1 ring-inset ring-outline-variant/15 flex flex-col group">
<div className="relative h-64 overflow-hidden">
<img alt="Alpine Dining in Langtang" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cozy interior of a high-altitude stone teahouse in Langtang with a steaming bowl of soup on a rustic wooden table, looking out a window at snow-capped peaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8blmGdQhVa1BjJN8c_QeSI8vQaFVCEaWsIq56Nc-Pe062Bxx4gJIX29A3TUyZDfk1viPV0zN7H91582qoQUpaRLny2Q8e5-Fpe-vG9XH6nkYuBy4cdFI4eX0F5ubpEPRliehG7fsyWieW56-AdVUoeddVa4zNQZDbazWrMRWQ3XQGfBtN1BQWGc_mWCmznhvq6vNzMh1HjiwpUFvxBsBx20-KtEGKtly6R8NIb-SibNmdmNPdVujThaUHFtkSgAtc6GPAJ9UAMqwz"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="landscape">landscape</span>
<span className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">Langtang</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Kyanjin Alpine Kitchen</h3>
<div className="flex items-center gap-2 text-on-surface-variant font-medium mb-4">
<span className="text-primary font-bold">$</span>
<span className="text-outline text-sm">• High-Altitude Comfort</span>
</div>
<p className="font-body text-base text-on-surface-variant mb-6 flex-grow">
                                Elevated comfort food designed to warm the soul after a long trek. Featuring locally produced yak cheese and hearty, flavor-rich mountain stews.
                            </p>
<div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
<div>
<span className="block text-xs font-bold text-outline uppercase tracking-wider mb-0.5">Signature</span>
<span className="font-body text-sm font-semibold text-on-surface">Yak Cheese Fondue &amp; Garlic Bread</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

    </motion.div>
  );
};

export default MidRangeDiningGuide;
