import React from 'react';
import { motion } from 'framer-motion';

const LocalEatsBudgetDiningInNepal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-32 pb-24 md:pt-40 max-w-7xl mx-auto px-6 lg:px-8"
    >
      
{/* Hero Intro */}
<section className="mb-24 lg:flex gap-16 items-center">
<div className="lg:w-1/2 mb-12 lg:mb-0">
<span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">Culinary Guide</span>
<h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                    Taste the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Himalayas</span>
</h1>
<p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                    Navigating Nepal’s food scene requires understanding the 'dual-pricing reality'. While tourist hubs offer inflated menus, authentic and budget-friendly meals lie hidden in plain sight. Embrace the 'Tea Shop' strategy: look for modest, locally-filled eateries where Dal Bhat is plentiful and momos are handmade.
                </p>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-full font-headline font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2">
                    Explore Destinations <span className="material-symbols-outlined text-sm">arrow_downward</span>
</button>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute inset-0 bg-primary/10 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
<img alt="Dal Bhat" className="w-full h-[500px] object-cover rounded-xl shadow-sm border border-outline-variant/15" data-alt="Traditional Nepalese Dal Bhat thali meal served on a brass platter with rice, lentil soup, and vegetable curries, top-down view, warm inviting light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFx7POd-iXDi_te-mVhDW9cL8XfVLUtoyIykvvveFvhRGUuYZkrL6RBK36sW55lEW5grk8a1oxMQURg10eb82gjkrCRMq62LIoTNDnnsfjB17j1h9o8BI0_3oeD9qcKWJqRpgQS6RLJbPpiTCs5PRkYMQ3nIIyHLAWtEO-d9P_pk7-zRvuJ2KD3uZ3e-QZGfkww-mkNJEh3nPCnpMKP2-CikKnUHcHKfYMcyAg8xlBrIAfogqRePLKblznnGgSUKpJPwESTQaHjyw"/>
</div>
</section>
{/* Destination Cards Bento */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Kathmandu */}
<article className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 shadow-[0_4px_30px_rgba(11,28,48,0.03)] hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 rounded-lg mb-6 overflow-hidden">
<img alt="Momos in Kathmandu" className="w-full h-full object-cover" data-alt="Steaming plate of Nepalese momos dumplings with spicy red dipping sauce on a rustic table, close up food photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiTropIZjeiqJU1zYkTY_UvGTDMWde2mb4AX7_lS1j08Ar7oFA-SMGS-pxbs7W_KtwIcUo3_ci40cMrazbqnBzYQ1EZeXZ_IkD6bbi9PZ-AXG4d4Y0rrx8_f2lvjaEqqTvTfmYu1N6aXDrceHzbh9bQF3rudh_NfnXnWA2hr2dDnP5iX1x6VmUnTXuf27ZCxGd8QRZWJPpFIElxsUEYPmxBN6kCfPk82zm_3sKg953IxV0nxEen2vjxEoAfVOsKSZFuTzn9EYYpRyH"/>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Kathmandu</h3>
<div className="space-y-4">
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Honacha</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Patan • Street food</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Western Tandoori</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Thamel • Cheap Naan</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Yangling Tibetan</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Thamel • Momo/Thukpa</p>
</div>
</div>
</article>
{/* Dhulikhel */}
<article className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 shadow-[0_4px_30px_rgba(11,28,48,0.03)] hover:-translate-y-1 transition-transform duration-300 lg:translate-y-8">
<div className="h-48 rounded-lg mb-6 overflow-hidden">
<img alt="Food in Dhulikhel" className="w-full h-full object-cover" data-alt="Rustic setting of a Nepalese village feast with various curries and rice, natural sunlight filtering through" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5rHx3m6-ukKn-0-f1BaCInzTBg5aGM33nky1F6AJiTzp63DpjqUB44Z6I_AiY2ckMruoeaua9x7uDfY0ZF02_0LPA2grONBsdzfyDBizmhwBTWvEXjyx0QtpY9aKPVn1-s7x_kfbwlbMnlCAjlKlCKnjPouoR7OBI1au9LWl813IuuRkXcUKE51opX-63Bm-BjUqAkRjsvj8VwYnePgkq_Ix58Lzvfcb78kAXU5pSa4JvYsJLy472SPNCkOwYHOLkBr78G5hitABh"/>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Dhulikhel</h3>
<div className="space-y-4">
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Gajabko Chautari</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Set lunches</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Pancha Kanya Bhojanalaya</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Unlimited Thakali</p>
</div>
</div>
</article>
{/* Ilam */}
<article className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 shadow-[0_4px_30px_rgba(11,28,48,0.03)] hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 rounded-lg mb-6 overflow-hidden">
<img alt="Ilam Tea Gardens" className="w-full h-full object-cover" data-alt="Lush green tea gardens of Ilam Nepal rolling hills with mist in the background, soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq1_VCh3-U-tGBuAMfpsGqgPyiDhfa6sWYN6QOhbPi1iKPHEtGIiOPqg5P73TelnCCC6910_XYwiMIVfSyFiWORuvIc3KFNzsoDtP3TcFiQu_3LP7kSy1g6W0DDwcYXzvkOwCEEzs3S053ZvlW-8VQzum4o__B-ms73irM4Fs0MtUyJeIz2ExL8KqagCDEX5ZhUt1R2QFcpcNx7g4w0z3NSdYarWHwRs9FTzRBXYZqYcYW8t34sBtniHu4OmmXURx6gs985SQcRlGF"/>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Ilam</h3>
<div className="space-y-4">
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Kanyam Highway Stalls</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Momo / Chatpate</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface">Antu Danda Homestays</h4>
<span className="text-secondary font-bold">$</span>
</div>
<p className="text-sm text-on-surface-variant">Organic fixed-price dinner</p>
</div>
</div>
</article>
</div>

    </motion.div>
  );
};

export default LocalEatsBudgetDiningInNepal;
