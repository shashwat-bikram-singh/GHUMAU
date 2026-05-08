import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Michael B.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      date: 'October 12, 2023',
      destination: 'Annapurna Circuit',
      title: 'A Life-Changing Experience',
      content: 'The guides from Ghumuam were exceptional. They knew every part of the trail and made sure we were acclimatized properly. The tea houses selected were clean and the food was surprisingly good for that altitude.',
      helpful: 45
    },
    {
      id: 2,
      author: 'Jessica L.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      rating: 4,
      date: 'September 28, 2023',
      destination: 'Kathmandu Cultural Tour',
      title: 'Great historical insights',
      content: 'Our guide was incredibly knowledgeable about the history of the Durbar Squares. The only downside was the heavy traffic between sites, but that is Kathmandu! The included lunch at a traditional Newari place was a highlight.',
      helpful: 12
    },
    {
      id: 3,
      author: 'Robert T.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 5,
      date: 'November 05, 2023',
      destination: 'Chitwan Safari',
      title: 'Saw 3 Rhinos!',
      content: 'Unbelievable wildlife experience. The lodge was right on the riverbank and we saw crocodiles during breakfast. The elephant bathing and the jeep safari were well organized.',
      helpful: 89
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Traveler Reviews</h1>
            <p className="text-on-surface-variant text-lg">Read what others have to say about their Ghumuam experiences.</p>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] ambient-shadow ghost-border mb-12 flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-on-surface mb-2">4.8</div>
              <div className="flex justify-center gap-1 text-secondary mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-secondary" />)}
              </div>
              <p className="text-sm text-on-surface-variant">Based on 1,245 reviews</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-outline-variant/30"></div>
            <div className="space-y-3 w-full max-w-sm">
              {[
                { label: '5 Stars', pct: '85%' },
                { label: '4 Stars', pct: '10%' },
                { label: '3 Stars', pct: '4%' },
                { label: '2 Stars', pct: '1%' },
                { label: '1 Star', pct: '0%' }
              ].map(row => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-on-surface-variant w-12">{row.label}</span>
                  <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: row.pct }}></div>
                  </div>
                  <span className="text-xs font-medium text-on-surface-variant w-8">{row.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 ghost-border ambient-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-display font-bold text-on-surface">{review.author}</h3>
                      <div className="text-xs text-on-surface-variant flex items-center gap-2 mt-1">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {review.date}</span>
                        <span>•</span>
                        <span className="font-medium text-primary">{review.destination}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={16} className={star <= review.rating ? "fill-secondary text-secondary" : "fill-transparent text-outline-variant"} />
                    ))}
                  </div>
                </div>

                <h4 className="font-bold text-lg text-on-surface mb-2">{review.title}</h4>
                <p className="text-on-surface-variant leading-relaxed mb-6 text-[0.9375rem]">{review.content}</p>

                <div className="flex items-center gap-2 border-t ghost-border pt-4">
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors">
                    <ThumbsUp size={14} strokeWidth={2} /> Helpful ({review.helpful})
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
