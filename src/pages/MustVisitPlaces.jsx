import React from 'react';
import { motion } from 'framer-motion';

const MustVisitPlaces = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-grow pt-32 pb-24"
    >
      
<div className="max-w-7xl mx-auto px-8">
{/* Hero Section */}
<div className="mb-20">
<h1 className="text-display-lg text-primary font-headline mb-4">Annapurna Region</h1>
<p className="text-body-lg text-on-surface-variant max-w-2xl">Discover the majestic peaks, ancient villages, and serene trails that make this region a sanctuary for the soul. Curated experiences for the mindful traveler.</p>
</div>
{/* Bento Grid Layout for Attractions */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Featured Highlight (Full Width) */}
<div className="md:col-span-12 rounded-xl overflow-hidden bg-surface-container-lowest ghost-border relative group hover-zoom">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
<img alt="Ghandruk Village" className="w-full h-[600px] object-cover" data-alt="panoramic view of traditional stone houses in Ghandruk village with towering snow-capped Annapurna peaks in the background under a clear blue sky" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ghandruk_HDR6.jpg/3840px-Ghandruk_HDR6.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-12 z-20 flex justify-between items-end">
<div>
<div className="flex items-center space-x-2 text-on-primary mb-3">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-label-md">Best time: Oct - Nov</span>
</div>
<h2 className="text-display-md text-on-primary font-headline mb-4">Ghandruk Village</h2>
<p className="text-body-lg text-on-primary/90 max-w-2xl">A living museum of Gurung culture. Wander through labyrinthine stone paths, enjoy sweeping views of Machapuchare, and experience genuine Himalayan hospitality in traditional teahouses.</p>
</div>
<button aria-label="Save to Trip" className="bg-surface/20 backdrop-blur-md p-4 rounded-full text-on-primary hover:bg-surface/40 transition-colors">
<span className="material-symbols-outlined" data-weight="fill">favorite_border</span>
</button>
</div>
</div>
{/* Secondary Highlight (Half Width) */}
<div className="md:col-span-6 rounded-xl overflow-hidden bg-surface-container-lowest ghost-border relative group hover-zoom">
<img alt="Poon Hill" className="w-full h-[450px] object-cover" data-alt="spectacular golden hour sunrise illuminating the massive Dhaulagiri mountain range viewed from Poon Hill viewpoint with silhouettes of trekkers" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Poon_hill_sunrise.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-inverse-surface/90 to-transparent">
<div className="flex justify-between items-start">
<div>
<h3 className="text-headline-lg text-on-primary font-headline mb-2">Poon Hill Sunrise</h3>
<p className="text-label-md text-on-primary/80 mb-4 flex items-center"><span className="material-symbols-outlined text-sm mr-1">schedule</span> Pre-dawn hike required</p>
<p className="text-body-lg text-on-primary/90 line-clamp-2">Witness the Himalayas catch the first light of day. A panoramic spectacle of Dhaulagiri and Annapurna ranges bathed in golden hues.</p>
</div>
<button aria-label="Save to Trip" className="text-on-primary hover:scale-110 transition-transform ml-4">
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
</div>
</div>
{/* Tertiary Highlight (Half Width) */}
<div className="md:col-span-6 rounded-xl overflow-hidden bg-surface-container-lowest ghost-border relative group hover-zoom">
<img alt="Annapurna Base Camp" className="w-full h-[450px] object-cover" data-alt="close up view of the sheer ice walls and rocky faces of the Annapurna sanctuary surrounded by high altitude clouds" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Annapurna_Massif-IMG_5221-Pano.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-inverse-surface/90 to-transparent">
<div className="flex justify-between items-start">
<div>
<h3 className="text-headline-lg text-on-primary font-headline mb-2">The Sanctuary</h3>
<p className="text-label-md text-on-primary/80 mb-4 flex items-center"><span className="material-symbols-outlined text-sm mr-1">landscape</span> Altitude: 4130m</p>
<p className="text-body-lg text-on-primary/90 line-clamp-2">Stand in the heart of a glacial basin surrounded by a ring of towering 7000m+ peaks. An intensely humbling and awe-inspiring environment.</p>
</div>
<button aria-label="Save to Trip" className="text-on-primary hover:scale-110 transition-transform ml-4">
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
</div>
</div>
{/* Smaller Highlights List */}
<div className="md:col-span-12 mt-12">
<h3 className="text-headline-lg text-primary font-headline mb-8">Hidden Gems</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Card 1 */}
<div className="bg-surface-container-low rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 rounded-lg overflow-hidden mb-6 relative group hover-zoom">
<img alt="Jhinu Danda Hot Springs" className="w-full h-full object-cover" data-alt="natural stone hot spring pools beside a rushing glacial river surrounded by dense green forest foliage" src="https://source.unsplash.com/1600x900/?Jhinu%20Danda%20hot%20spring%20Nepal"/>
<button className="absolute top-4 right-4 text-on-primary bg-inverse-surface/30 p-2 rounded-full hover:bg-inverse-surface/50 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-sm">favorite_border</span>
</button>
</div>
<h4 className="text-xl font-headline font-bold text-on-surface mb-2">Jhinu Hot Springs</h4>
<p className="text-body-lg text-on-surface-variant mb-4 text-sm">Soothe weary muscles in natural geothermal pools set alongside the Modi Khola river.</p>
<span className="text-label-md text-secondary font-medium">Best after a trek</span>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-6 ghost-border hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 rounded-lg overflow-hidden mb-6 relative group hover-zoom">
<img alt="Mardi Himal Ridge" className="w-full h-full object-cover" data-alt="narrow trekking trail along a high altitude ridge line with dramatic drop offs and the pointed peak of Machapuchare ahead" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Poh092-Treking_na_Mardi_Himal.jpg/3840px-Poh092-Treking_na_Mardi_Himal.jpg"/>
<button className="absolute top-4 right-4 text-on-primary bg-inverse-surface/30 p-2 rounded-full hover:bg-inverse-surface/50 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-sm">favorite_border</span>
</button>
</div>
<h4 className="text-xl font-headline font-bold text-on-surface mb-2">Mardi Ridge</h4>
<p className="text-body-lg text-on-surface-variant mb-4 text-sm">A quieter, dramatic trail offering unparalleled, close-up views of the iconic Machapuchare peak.</p>
<span className="text-label-md text-secondary font-medium">For avoiding crowds</span>
</div>
{/* Card 3 */}
<div className="bg-surface-container-low rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 rounded-lg overflow-hidden mb-6 relative group hover-zoom">
<img alt="Chhomrong Village" className="w-full h-full object-cover" data-alt="terraced agricultural fields stepping down a steep mountainside with small scattered stone dwellings in the Himalayas" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Chhomrong_Village_View.jpg"/>
<button className="absolute top-4 right-4 text-on-primary bg-inverse-surface/30 p-2 rounded-full hover:bg-inverse-surface/50 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-sm">favorite_border</span>
</button>
</div>
<h4 className="text-xl font-headline font-bold text-on-surface mb-2">Chhomrong Terraces</h4>
<p className="text-body-lg text-on-surface-variant mb-4 text-sm">The gateway to the Sanctuary. Famous for its steep stone steps and sweeping agricultural terraces.</p>
<span className="text-label-md text-secondary font-medium">Cultural immersion</span>
</div>
</div>
</div>
</div>
</div>

    </motion.div>
  );
};

export default MustVisitPlaces;
