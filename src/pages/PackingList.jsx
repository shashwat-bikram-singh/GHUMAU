import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckSquare, Square, Plus, Trash2 } from 'lucide-react';

const PackingList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Trekking Boots', packed: false },
    { id: 2, text: 'Thermal Layers', packed: true },
    { id: 3, text: 'First Aid Kit', packed: false },
    { id: 4, text: 'Power Bank', packed: false },
    { id: 5, text: 'Water Purifier Tablets', packed: true },
  ]);
  const [newItem, setNewItem] = useState('');

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), text: newItem, packed: false }]);
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const packedCount = items.filter(item => item.packed).length;
  const progress = items.length > 0 ? (packedCount / items.length) * 100 : 0;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 tracking-tight">Packing List Generator</h1>
            <p className="text-on-surface-variant text-lg">Keep track of your essentials for the trip to Nepal.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container-lowest rounded-[2rem] p-8 ambient-shadow ghost-border"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-on-surface-variant mb-2">
                <span>Packing Progress</span>
                <span>{packedCount} of {items.length} packed</span>
              </div>
              <div className="w-full bg-surface-container-low rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-primary h-full"
                ></motion.div>
              </div>
            </div>

            {/* Add Item Form */}
            <form onSubmit={addItem} className="flex gap-4 mb-8">
              <input 
                type="text" 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item..." 
                className="flex-1 bg-surface-container-low focus:bg-surface-container-highest text-on-surface placeholder-on-surface-variant/50 rounded-xl py-3.5 px-4 border-2 border-transparent focus:border-primary/20 focus:outline-none transition-all duration-300 text-[0.9375rem]"
              />
              <button type="submit" className="btn-primary px-6 py-3.5 flex items-center gap-2 text-[0.9375rem]">
                <Plus size={20} strokeWidth={2} /> <span className="hidden sm:inline">Add</span>
              </button>
            </form>

            {/* List */}
            <div className="space-y-3">
              {items.map(item => (
                <div 
                  key={item.id} 
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${item.packed ? 'bg-surface-container-low border-transparent' : 'bg-surface-container-lowest ghost-border'}`}
                >
                  <button onClick={() => toggleItem(item.id)} className="flex items-center gap-3 flex-1 text-left">
                    {item.packed ? <CheckSquare size={20} className="text-primary" /> : <Square size={20} className="text-on-surface-variant" />}
                    <span className={`text-[0.9375rem] font-medium transition-all ${item.packed ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                      {item.text}
                    </span>
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="text-red-400 hover:text-red-600 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              
              {items.length === 0 && (
                 <div className="text-center py-10 text-on-surface-variant">
                    Your packing list is empty. Add some items to get started!
                 </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PackingList;
