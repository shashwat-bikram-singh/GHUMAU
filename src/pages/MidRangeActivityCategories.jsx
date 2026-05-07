import React from 'react';
import { motion } from 'framer-motion';

const MidRangeActivityCategories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-20"
    >
      
{/* Hero Header */}
<header className="mb-16">
<h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tight mb-4">Mid-Range Adventures in Nepal</h1>
<div className="flex items-center gap-2 text-surface-tint font-body text-lg">
<span className="material-symbols-outlined">payments</span>
<span>$ (Mid-Range, NPR 11K-25K)</span>
</div>
</header>
{/* Staggered Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-24">
{/* Card 1: Ghandruk &amp; Ghorepani Poon Hill */}
<article className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="order-2 md:order-1 pr-0 md:pr-12">
<span className="text-secondary font-label text-sm uppercase tracking-widest font-semibold mb-2 block">Annapurna Region</span>
<h2 className="text-3xl font-headline font-semibold text-on-surface mb-4">Ghandruk &amp; Ghorepani Poon Hill</h2>
<p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">Experience the rich Gurung culture in Ghandruk and witness the spectacular sunrise over the Himalayas from Poon Hill. A perfect blend of cultural immersion and accessible trekking.</p>
<div className="mb-8">
<h3 className="font-headline text-lg font-medium text-on-surface mb-3">Must Visit</h3>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Gurung Heritage Museum
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Poon Hill Viewpoint (3,210m)
                            </li>
</ul>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full px-8 py-3 font-label font-medium hover:opacity-90 transition-opacity">Explore Details</button>
</div>
<div className="order-1 md:order-2 relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Ghandruk village" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" data-alt="Traditional stone houses of Ghandruk village in Nepal with snow-capped Annapurna mountains in the background under clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8Xp71yHsrcSmk2yHBlVEqoNhZJu-iH-AhDL1-j2k15eYuz6Ub07e2StHBby_h_poxQWGzg1srQzo6mno4qY3MMHUKRz6FAb1OVLHdxx5ryoFY97uOjtfACEsKbbZSRx4APKCFpqKt5xOtf_QXzZktEp87GgDm1E-RuZ5UuzqU_HPTsbQjSasYlha8p2CwjCyoR3jeVZQ4uguWh5O1MATMomDsYq84HNhibsP78tcewtvV9LAKH60xJu-MyO_5xHKB8W9oHJVdFow"/>
</div>
</article>
{/* Card 2: Lumbini (Offset Left) */}
<article className="md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Lumbini Maya Devi Temple" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" data-alt="Serene view of Maya Devi Temple in Lumbini Nepal surrounded by sacred pond and prayer flags" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2D9kuXPiXaLCOzzO7rHSbfglTBwIFa9zde2ygci2zWCaJijNKxj4IfGnou0VMeDTSOrzIcYDPGNmskSbpN1Bh0NvEvn1TCfT7bKNAUhA4PxTF9j--l8r0wBp3fZUjMjbr_E5CJXOTck_smakBMh6X2tOE_Z24550fZfYR1eX2ITfJT0gBnopyGI3th7pJpskvoR26A0TF13bQ3gOsW2HDLwnaCM677nsx_JyncEJv2ewwtEckHLJHad5Q3dN7aOeZNK25UHEAW5PU"/>
</div>
<div className="pl-0 md:pl-12">
<span className="text-secondary font-label text-sm uppercase tracking-widest font-semibold mb-2 block">Terai Plains</span>
<h2 className="text-3xl font-headline font-semibold text-on-surface mb-4">Lumbini</h2>
<p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">Discover peace at the birthplace of Lord Buddha. Wander through the sacred gardens, reflect by the eternal flame, and explore diverse monasteries built by nations across the globe.</p>
<div className="mb-8">
<h3 className="font-headline text-lg font-medium text-on-surface mb-3">Must Visit</h3>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Maya Devi Temple
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Monastic Zone
                            </li>
</ul>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full px-8 py-3 font-label font-medium hover:opacity-90 transition-opacity">Explore Details</button>
</div>
</article>
{/* Card 3: Langtang Valley &amp; Annapurna Base Camp (Offset Right) */}
<article className="md:col-span-10 md:col-start-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="order-2 md:order-1 pr-0 md:pr-12">
<span className="text-secondary font-label text-sm uppercase tracking-widest font-semibold mb-2 block">High Altitude</span>
<h2 className="text-3xl font-headline font-semibold text-on-surface mb-4">Langtang Valley &amp; Annapurna Base Camp</h2>
<p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">Challenge yourself with dramatic glacier views and towering peaks. Traverse alpine forests, cross roaring rivers, and reach the heart of the Himalayas in these iconic trekking routes.</p>
<div className="mb-8">
<h3 className="font-headline text-lg font-medium text-on-surface mb-3">Must Visit</h3>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Kyanjin Gompa
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Annapurna Sanctuary
                            </li>
</ul>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full px-8 py-3 font-label font-medium hover:opacity-90 transition-opacity">Explore Details</button>
</div>
<div className="order-1 md:order-2 relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Langtang Valley trek" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" data-alt="Majestic view of Langtang valley trekking trail with snow covered Himalayan mountains and clear sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf5f3FA26qxFfT1uo4Q4WfIKiScm8tNqoVBV57pB867hzUhF2wSwUYC2KNyHKEKpaYRrmMabngeOkW63ghVo1NPzl-Tka3xdJ3X3ydAUMFPgOyt7lhE6Gu8ogCQvFbCpOaTV-JP_bkA001nV5JN2536D9yVHh3dxZM-m24g00Q5Sk3U0AaF0A2mbSjelqi8J65DO2eUkL3V8p5nletcsAgNdvFEAuI-CDJ9OR0L9Pfj7Qcmh8UtDl68hjWccMp8HimPR-cpMYia5i7"/>
</div>
</article>
{/* Card 4: Rara Lake */}
<article className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Rara Lake" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" data-alt="Pristine blue waters of Rara Lake in Nepal surrounded by green pine forests and hills reflecting in water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiD09J3s-KqZJJlWig2dsvfnNoAleic6Dkb8T-bOfPXuQpuslcLWIn-WMKj5pwCf9xgGPPjtmTu9Rbv1A00Ap8Y0AbgGndAC4WRnjpSuu45ZtMXa4KWMIgVXnhji-1OBVxpsrXYoCmmIHPABdohcG1rINDFaCH0ivqnNto74Gvlh73mADsG4Plrew3oVaBh_UYRtQ5w-G39tXsQRuftHHH9OU1ccDYTbE4KXt34gvBwEEtJTVHrrNX5OFcdHLycD1q6KT-NFktvoBN"/>
</div>
<div className="pl-0 md:pl-12">
<span className="text-secondary font-label text-sm uppercase tracking-widest font-semibold mb-2 block">Wild West</span>
<h2 className="text-3xl font-headline font-semibold text-on-surface mb-4">Rara Lake</h2>
<p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">Journey to Nepal's largest and most pristine lake, hidden within Rara National Park. Experience untouched wilderness, crystal clear waters, and true tranquility far from the crowds.</p>
<div className="mb-8">
<h3 className="font-headline text-lg font-medium text-on-surface mb-3">Must Visit</h3>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Murma Top Viewpoint
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Rara National Park Wildlife
                            </li>
</ul>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full px-8 py-3 font-label font-medium hover:opacity-90 transition-opacity">Explore Details</button>
</div>
</article>
</div>

    </motion.div>
  );
};

export default MidRangeActivityCategories;
