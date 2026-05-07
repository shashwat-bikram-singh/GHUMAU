import React from 'react';
import { motion } from 'framer-motion';

const LowBudgetLocalEatsHd = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-28 pb-20 px-4 md:px-8 max-w-screen-2xl mx-auto"
    >
      
{/* Hero Section (Atmospheric Editorial) */}
<header className="relative rounded-xl overflow-hidden h-[614px] md:h-[716px] mb-20 ghost-border flex items-end p-8 md:p-16">
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjp5aWUvOUAD-AKGpVn2Bs2lO_Nl6UvZDyg3Ko33QNdwlHZ57etVtV-RMySLt6Dux9yQqobFIDP-sisdi5jF5fmyyciZSJB5Om7i7WCqNUzkOiEueXwTAPnLVbliwj_rbRrli-SBWandKyDtwddA_Otue0YsGhvH1pKVgUOwGwCWDIiaS8ejT4pwko_UB1AcPWhVIGsX4Y_FQ4XDRhaRZThwKfE5P4Y_I5OIZTSQn8DoDbn0kQkvb2qjNMxMsrilavLF_s_rw8-8HK')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/40 to-transparent"></div>
<div className="relative z-10 max-w-3xl">
<span className="font-label text-label-md tracking-wider text-primary uppercase mb-4 block">Low-Budget Guide</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.02em] text-on-surface mb-6 leading-tight">
                    Local Eats:<br/>Pokhara &amp; Chitwan
                </h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed">
                    Discover the soul of Nepalese cuisine without breaking the bank. From steaming momos to hearty Thakali thalis, navigate the authentic flavors of the Himalayas.
                </p>
</div>
</header>
{/* The List (Bento Grid Style) */}
<section className="mb-24">
<div className="flex justify-between items-end mb-12">
<h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background tracking-tight">Curated Spots (Ascending Budget)</h2>
<div className="font-label text-sm text-on-surface-variant flex items-center space-x-2">
<span className="material-symbols-outlined text-[18px]">sort</span>
<span>Cheapest First</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Card 1: Honacha (Patan) - Featured Large */}
<article className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden group relative flex flex-col ghost-border">
<div className="h-64 md:h-80 w-full overflow-hidden relative">
<img alt="Rustic plate of Newari snacks including bara and chhoila on a traditional brass plate, dark atmospheric lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Rustic plate of Newari snacks including bara and chhoila on a traditional brass plate, dark atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnE7uu4LR4bXFdvGdM82j0bJjIv-hyVX33uGE1IaoiIXeYjypJS4dIl2Z_vOJbyrhiDQG8YfsYH7bATBPO76HuMBHn1yaoVtffXAU5glXEDJ0nll4w4i_i9yTlDTsJbkRWnZlHRYGFvWRitzE5-4jNDTJmyDUJT35G2pjNye5aPYN-7NZPW0-9_tP0uv_u-JjdM6RHYEpkBdIlknTXIe3A1f81w6eBmKeZagvBAu-qcnDD1I3-9p3DCdX6u1grQ-FacFZ8OyE6PnR2"/>
<div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full font-label text-sm text-on-surface font-bold">
                            $ (Under 300 NPR)
                        </div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between">
<div>
<div className="flex items-center space-x-2 mb-3">
<span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span className="font-label text-sm text-primary uppercase tracking-wide">Patan (Kathmandu Valley)</span>
</div>
<h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Honacha</h3>
<p className="font-body text-lg text-on-surface-variant line-clamp-2">
                                A legendary, no-frills Newari joint hidden behind the Krishna Mandir. Famous for its fiercely spicy chhoila, hearty bara (lentil pancakes), and local aila (rice wine). Expect shared tables and unapologetic local flavor.
                            </p>
</div>
</div>
</article>
{/* Card 2: Pumpernickel Bakery */}
<article className="col-span-1 md:col-span-4 bg-surface-container-low rounded-xl overflow-hidden group relative flex flex-col ghost-border">
<div className="h-48 w-full overflow-hidden relative">
<img alt="Freshly baked breads and pastries on a wooden display in a rustic bakery, warm morning sunlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Freshly baked breads and pastries on a wooden display in a rustic bakery, warm morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4vL8YkPMfvffNfISOoHPiSL0Cd98NkedaQGIZYFtN8CdDBrXmif2xwl8n9tOIL466T7egcrpuhfncTp3_8tt_WBkQrtTFy4Uot8KLM5wzyXcJMynbuGku57I1q1YEqvZUFnU6hbjszYZirR_hFyK5iNcRvIjjUqjpjTeF1qeHQ04pYaQ085HuKD-h6WZz1RxWaBclhR2Sxqu-y9NnETwMwY_rql2GMmKeUC7AprVON2XmluxztVyH8U14XnyXs-u5ScWYoVeJZ4w3"/>
<div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full font-label text-sm text-on-surface font-bold">
                            $ (300-600 NPR)
                        </div>
</div>
<div className="p-6 flex-grow flex flex-col justify-between">
<div>
<div className="flex items-center space-x-2 mb-2">
<span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
<span className="font-label text-xs text-secondary uppercase tracking-wide">Pokhara (Lakeside)</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface mb-2">Pumpernickel Bakery</h3>
<p className="font-body text-base text-on-surface-variant">
                                A backpacker institution. Grab a strong local coffee, fresh yak cheese sandwiches, and enjoy the sunny garden courtyard before a trek.
                            </p>
</div>
</div>
</article>
{/* Card 3: Chitwan Thali House */}
<article className="col-span-1 md:col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden group relative flex flex-col md:flex-row ghost-border">
<div className="h-64 md:h-auto md:w-2/5 overflow-hidden relative order-last md:order-first">
<img alt="Elaborate traditional Nepalese Thakali Thali set served on a brass platter with rice, dal, curries, and pickles, vibrant colors" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Elaborate traditional Nepalese Thakali Thali set served on a brass platter with rice, dal, curries, and pickles, vibrant colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-XL2F0_S0PeQD2dZ_n5MTgMtsaYM0L_38tSssAsN1fnOG-A0rf6Kby-bVx_vX-RcQz4QdKH_InMwBdUcJfYnRYEdVUYEPkDse1gqqtCrsao2gAY1uMR3TzBveH-oTjVbWPVzVovhS9h4WD6_xDKXiwjGFcMDy5ljbdZNXiNrqUTOw1V5nK0Ow6L1d79Y34AYL91Moc-gZNndMI7yqmAEaNn4T4adUOsc_BeUGtQdy5uCJa8AneHgtX716JEPr2RuZfMxUQEYhRJ7"/>
<div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full font-label text-sm text-on-surface font-bold">
                            $ (400-700 NPR)
                        </div>
</div>
<div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center bg-surface-container-low">
<div className="flex items-center space-x-2 mb-4">
<span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span className="font-label text-sm text-primary uppercase tracking-wide">Sauraha, Chitwan</span>
</div>
<h3 className="font-headline text-3xl font-bold text-on-surface mb-4">Chitwan Thali House</h3>
<p className="font-body text-lg text-on-surface-variant mb-6">
                            The ultimate post-jungle-safari feast. This spot offers arguably the best traditional Thali outside of Kathmandu. Endless refills of aromatic rice, earthy black dal, and spicy fermented mustard greens (gundruk).
                        </p>
<button className="self-start px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label font-bold tracking-wide hover:shadow-lg transition-shadow">
                            View on Map
                        </button>
</div>
</article>
</div>
</section>
{/* Strategic Dining Tips (Tonal Layering) */}
<section className="bg-surface-container-low rounded-xl p-8 md:p-16 relative overflow-hidden ghost-border">
{/* Decorative blur element */}
<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">Strategic Dining</h2>
<p className="font-body text-lg text-on-surface-variant">
                        How to stretch your rupees further while eating better in Nepal.
                    </p>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
{/* Tip 1 */}
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
<span className="material-symbols-outlined text-primary text-3xl mb-4" data-weight="fill">local_dining</span>
<h4 className="font-headline text-xl font-bold text-on-surface mb-2">The "Dal Bhat Power" Rule</h4>
<p className="font-body text-base text-on-surface-variant">
                            Dal Bhat is rarely a single serving. Expect unlimited refills on rice, dal, and vegetable curries. It's the most economical way to fill up for the day.
                        </p>
</div>
{/* Tip 2 */}
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
<span className="material-symbols-outlined text-secondary text-3xl mb-4" data-weight="fill">schedule</span>
<h4 className="font-headline text-xl font-bold text-on-surface mb-2">Follow the Locals</h4>
<p className="font-body text-base text-on-surface-variant">
                            If a tiny, hole-in-the-wall spot is packed with locals around 11 AM or 6 PM, sit down immediately. High turnover means fresh food and local prices.
                        </p>
</div>
</div>
</div>
</section>

    </motion.div>
  );
};

export default LowBudgetLocalEatsHd;
