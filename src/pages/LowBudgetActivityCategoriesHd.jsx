import React from 'react';
import { motion } from 'framer-motion';

const LowBudgetActivityCategoriesHd = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-32 pb-24 px-4 md:px-8 max-w-screen-2xl mx-auto"
    >
      
{/* Hero Section */}
<header className="mb-24 relative max-w-4xl">
<span className="text-primary font-label text-sm uppercase tracking-widest font-semibold mb-4 block">Budget Exploration</span>
<h1 className="text-5xl md:text-7xl font-bold text-on-surface mb-6 leading-tight">
                Discover <span className="gradient-text">Nepal</span> on a budget.
            </h1>
<p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Experience the raw beauty of the Himalayas, ancient stupas, and lush tea gardens without breaking the bank. Curated experiences between NPR 4800-8000.
            </p>
</header>
{/* Destinations Bento Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-32">
{/* Dhulikhel (Large Card) */}
<section className="lg:col-span-8 bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group relative">
<div className="h-[400px] w-full overflow-hidden">
<img alt="Dhulikhel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="panoramic view of dhulikhel village at sunrise with misty mountains in background and traditional nepalese architecture in foreground" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZ9WU1tncurzZvPiQYczlrLglKCovV94D0qmg5w68ARNNzUg_XrkGuiWF9buRnz9rFX0jYuUm28vomsuu0xueFcN80nkDwVkAr1_x63yDPanLksMjVg-_djm11XWs2vUO7wdUAPAWdg5yBT4Vfzhdh2P2qrksR9W-zDvD1suQjdcxcDTLrXIwU1nHpQJ2BfIITnPHrvMb-5c18ej0urOIAr2jTipvidUlQLBbAFyw0l2W67Rz4F0NqlDegoKGudzGBpHmuY2Z_knZ"/>
</div>
<div className="p-8 lg:p-12 relative z-10 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest to-transparent -mt-32 pt-24">
<div className="flex justify-between items-end mb-4">
<h2 className="text-3xl font-bold text-on-surface">Dhulikhel</h2>
<span className="text-on-surface-variant font-label text-sm bg-surface-container py-1 px-3 rounded-full">NPR 4800 - 6000</span>
</div>
<p className="text-on-surface-variant font-body text-lg mb-8 max-w-2xl">
                        A quick escape from the Kathmandu valley, offering panoramic views of the high Himalayas and ancient Newari heritage.
                    </p>
<div className="bg-surface-container-low rounded-xl p-6">
<h3 className="text-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">stars</span>
                            Must Visit: Namobuddha Stupa
                        </h3>
<div className="flex gap-4 items-start">
<img alt="Namobuddha Stupa" className="w-24 h-24 rounded-lg object-cover shadow-sm" data-alt="close up of colorful prayer flags fluttering around ancient namobuddha stupa with clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8NYshheTeZH3Ja-eFsAPcxliOpmPPOx82QZR9HH6R_sfroSmLlkdLZjIhX3DqenEnbiQXpy0xsNdFKul0b2f47BE4PwoVXzwnVw4PmLUvB_wagjljNUJc2RlZ42wej1wMKMXci4HWQ_z009wFqNpzni7CfhPTIBHtG51-usDbhrYeHEjr2jNGlJwNoXG0OYLMgFIGQDwbuwX1WVBjssuYu3UH6L2pATganZtMMqfEyVqVnUUz2RI_bnBpczadn1GuraKA7-3pKcwP"/>
<p className="text-on-surface-variant text-sm font-body">
                                One of the most important Buddhist pilgrimage sites in Nepal. The serene environment and intricate architecture make it a profound spiritual experience.
                            </p>
</div>
</div>
</div>
</section>
{/* Ilam (Tall Card) */}
<section className="lg:col-span-4 bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group flex flex-col">
<div className="h-[250px] w-full overflow-hidden">
<img alt="Ilam" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="lush green terraced tea gardens in ilam nepal rolling hills under soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfjp2Jqnjk-Doi_7GE5O0-lIw0hTEcyGZZinz3byrKnmqTTYaUAF7XoUTvrMY5x8se4cvc2f6CPphhd2SA4ri7Eh6eiNAf3wjQ5fNrTwht5cEA8ExFgl-DVH29ZwgkgitFl_tFJ-kWzDMjec5Tcsf13g4Azg1oKmLf3ahA9kaw_v-M2w5H7KburxGvfuLsIuRNXJjuBi-ZZLjzGouZ5FR21BxsUYMAK7HvGbcG5SzKgIo8HKpHP5U7us0n7HUHaa2l3v3NcfPbKlYa"/>
</div>
<div className="p-8 flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl font-bold text-on-surface">Ilam</h2>
</div>
<span className="text-on-surface-variant font-label text-sm bg-surface-container py-1 px-3 rounded-full inline-block mb-4">NPR 5500 - 7500</span>
<p className="text-on-surface-variant font-body mb-6">
                            Nepal's tea capital. Rolling hills carpeted with emerald tea bushes, misty mornings, and a tranquil atmosphere.
                        </p>
</div>
<div className="bg-surface-container-low rounded-xl p-4 mt-auto">
<h3 className="text-base font-semibold text-on-surface mb-2">Kanyam Tea Gardens</h3>
<div className="flex gap-3 items-center">
<img alt="Kanyam" className="w-16 h-16 rounded-md object-cover" data-alt="close up of fresh green tea leaves ready for harvest in ilam with soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6WHlJGeUOOTb5kefgTzY7OAiOswtRIsxbZ1OnLONFEXNmIN1LDCsR79VlFyWFwtzmTPlyx0drzJ_vs5Is85PBZeqM3etRx4xWJITfD68n5XKxEsQmRVaOU7sbABmUIzYXXyJG2C-qAhQwuxWyraOY5wpBOQO70a0wrYsz6wxoZvC4mctDnKCyFXm05ftNhkg0Z2qnxtEnkBIGVe9zDbwf3aWUCrkyDjoKnceqkIec9VABVN5IRGaxBIZszRZbWc90fMpm2pZZLqg"/>
<span className="text-sm text-on-surface-variant">Iconic landscapes perfect for photography and tea tasting.</span>
</div>
</div>
</div>
</section>
{/* Tansen (Medium Card) */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group">
<div className="h-[200px] w-full overflow-hidden">
<img alt="Tansen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="historic narrow cobblestone streets of tansen palpa with traditional wooden carved windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZy1CF19cp3o-qWxqeo_EhuKflfMukhg6uwHZwYgDHGXy961Bdqb3qJpucdUDMDZqW4wdc_8l3pWj3SFFOCVm-gLco9OMKJJ3QSGZTwK27QTnJaQ9x7fHyEJY9KzobD4Wbl-R2trs2_jP6YzNX3KlHa1yHMX3_75YKmsU1-jDsA02EalB74a8z5xLjTaI2LCLvohMHqhfLOmG-F92uDhA4NwWMtDvc8mh_0O2ut5D7vUfy2SWGcsHekOSwRAWvzWkkCYThHlMwwku9"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-2xl font-bold text-on-surface">Tansen, Palpa</h2>
<span className="text-on-surface-variant font-label text-sm bg-surface-container py-1 px-3 rounded-full">NPR 5000 - 7000</span>
</div>
<p className="text-on-surface-variant font-body mb-6">
                        A historic hill town known for its Dhaka fabric, narrow alleys, and pleasant climate. A step back in time.
                    </p>
<div className="border border-outline-variant/15 rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div>
<h3 className="text-base font-semibold text-on-surface">Rani Mahal</h3>
<span className="text-sm text-on-surface-variant">The "Taj Mahal of Nepal"</span>
</div>
<span className="material-symbols-outlined text-primary">arrow_forward</span>
</div>
</div>
</section>
{/* Nagarkot (Medium Card) */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded-[1.5rem] overflow-hidden group">
<div className="h-[200px] w-full overflow-hidden">
<img alt="Nagarkot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="dramatic sunrise over the himalayas viewed from nagarkot with sea of clouds in valleys" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAREhcR1mYBQNnTfXNCN_FZ6qog3SzkqoPslKS2LiGvDE22N5wJAOOY8oIilVfN6q_Nr--spkb_pUEbwwCGcBb1BMVFtpbZlQ3O9PnS18pPS1B_pkfrse0MXbS9SSh-6puzEvlBqpntUi2dSkSPUkLtXzN9hy_0-gZchvkSMvUZilOwUzPzd3QuCZF7zCf_WOuEpRCJ7rnwNPBXAfDTpob2u20AseFiQu6wTUrNQOQ9iGYmkQzldhXNX49H7kC5IsT8NiOlxhzqvGUy"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-2xl font-bold text-on-surface">Nagarkot</h2>
<span className="text-on-surface-variant font-label text-sm bg-surface-container py-1 px-3 rounded-full">NPR 6000 - 8000</span>
</div>
<p className="text-on-surface-variant font-body mb-6">
                        Renowned for its sunrise views of the Himalayas including Mount Everest on a clear day. Perfect for short hikes.
                    </p>
<div className="border border-outline-variant/15 rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div>
<h3 className="text-base font-semibold text-on-surface">Nagarkot View Tower</h3>
<span className="text-sm text-on-surface-variant">Best spot for 360° panoramic views</span>
</div>
<span className="material-symbols-outlined text-primary">arrow_forward</span>
</div>
</div>
</section>
</div>

    </motion.div>
  );
};

export default LowBudgetActivityCategoriesHd;
