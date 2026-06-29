import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

const Community = () => {
  const stories = [
    {
      id: 1,
      author: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      location: 'Annapurna Base Camp',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Annapurna_Base_Camp_2019.jpg',
      content: 'Just completed the ABC trek! The sunrise view over Machapuchare was absolutely breathtaking. Highly recommend going in October for the clear skies.',
      likes: 245,
      comments: 18
    },
    {
      id: 2,
      author: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      location: 'Chitwan National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
      content: 'Spotted a one-horned rhino during our morning jungle safari! The wildlife here is incredible. Make sure to book the canoe ride as well.',
      likes: 189,
      comments: 12
    },
    {
      id: 3,
      author: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      location: 'Bhaktapur Durbar Square',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
      content: 'Lost in the ancient alleys of Bhaktapur. The woodwork and architecture are mesmerizing. Don\'t forget to try the local Juju Dhau (King Curd)!',
      likes: 312,
      comments: 24
    }
  ];

  return (
    <div className="min-h-screen page-top bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Community Stories</h1>
          <p className="text-on-surface-variant text-lg">Get inspired by real travel experiences from fellow explorers in Nepal.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {stories.map((story, i) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-8 ambient-shadow ghost-border"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={story.avatar} alt={story.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-display font-bold text-on-surface">{story.author}</h3>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5"><MapPin size={12}/> {story.location}</p>
                  </div>
                </div>
                <button className="btn-secondary px-4 py-2 text-xs font-semibold">Follow</button>
              </div>

              <p className="text-on-surface-variant text-[1.0625rem] leading-relaxed mb-6">
                {story.content}
              </p>

              <div className="rounded-[1.5rem] overflow-hidden mb-6 h-80 bg-surface-container-low">
                <img src={story.image} alt="Story" className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-6 border-t ghost-border pt-4">
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <Heart size={20} strokeWidth={1.5} /> <span className="text-sm font-medium">{story.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <MessageCircle size={20} strokeWidth={1.5} /> <span className="text-sm font-medium">{story.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors ml-auto">
                  <Share2 size={20} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
