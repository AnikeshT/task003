'use client';

import React, { useState, useMemo } from 'react';
import { Flame, Sparkles, Filter, Video, Image as ImageIcon, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { MemeItem, FilterCategory, MemeRegion } from '@/types/meme';
import { MemeCard } from './MemeCard';
import { soundFx } from '@/utils/soundEffects';

interface MemeFeedProps {
  memes: MemeItem[];
  searchQuery: string;
  onOpenStudioWithMeme: (meme: MemeItem) => void;
}

export const MemeFeed: React.FC<MemeFeedProps> = ({
  memes,
  searchQuery,
  onOpenStudioWithMeme,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [activeType, setActiveType] = useState<'all' | 'video' | 'image'>('all');
  const [sortBy, setSortBy] = useState<'reactions' | 'views' | 'year'>('reactions');

  const filterTabs = [
    { id: 'all', label: '🌍 All GOATs', icon: '✨' },
    { id: 'india', label: '🇮🇳 Desi Vault', icon: '🔥' },
    { id: 'europe', label: '🇪🇺 Euro Banter', icon: '👑' },
    { id: 'global', label: '🌐 Worldwide Viral', icon: '🚀' },
    { id: 'trending', label: '⚡ Trending Now', icon: '📈' },
  ];

  const filteredMemes = useMemo(() => {
    return memes
      .filter((meme) => {
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = meme.title.toLowerCase().includes(q);
          const matchesPunchline = meme.punchline.toLowerCase().includes(q);
          const matchesTags = meme.tags.some((t) => t.toLowerCase().includes(q));
          const matchesRegion = meme.regionLabel.toLowerCase().includes(q);
          if (!matchesTitle && !matchesPunchline && !matchesTags && !matchesRegion) {
            return false;
          }
        }

        // Category filter
        if (activeCategory === 'india' && meme.region !== 'india') return false;
        if (activeCategory === 'europe' && meme.region !== 'europe') return false;
        if (activeCategory === 'global' && meme.region !== 'global' && meme.region !== 'usa') return false;
        if (activeCategory === 'trending' && meme.views < 5000000) return false;

        // Type filter
        if (activeType === 'video' && meme.type !== 'video') return false;
        if (activeType === 'image' && meme.type !== 'image') return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'reactions') {
          const totalA = a.reactions.goat + a.reactions.based + a.reactions.dead;
          const totalB = b.reactions.goat + b.reactions.based + b.reactions.dead;
          return totalB - totalA;
        }
        if (sortBy === 'views') {
          return b.views - a.views;
        }
        if (sortBy === 'year') {
          return Number(b.originYear) - Number(a.originYear);
        }
        return 0;
      });
  }, [memes, searchQuery, activeCategory, activeType, sortBy]);

  return (
    <section id="meme-feed" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Category Pills & Controls Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-dark-800">
        {/* Regions / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.pop();
                setActiveCategory(tab.id as FilterCategory);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                activeCategory === tab.id
                  ? 'bg-dank-green text-dark-950 font-bold shadow-lg shadow-dank-green/20'
                  : 'bg-dark-900 border border-dark-800 text-slate-300 hover:text-white hover:border-dark-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Right Controls: Type filter & Sort */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
          {/* Format Toggle */}
          <div className="bg-dark-900 border border-dark-800 rounded-xl p-1 flex items-center gap-1">
            <button
              onClick={() => {
                soundFx.pop();
                setActiveType('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                activeType === 'all'
                  ? 'bg-dark-800 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                soundFx.pop();
                setActiveType('video');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                activeType === 'video'
                  ? 'bg-dark-800 text-dank-purple font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Video className="w-3 h-3" />
              <span>Clips</span>
            </button>
            <button
              onClick={() => {
                soundFx.pop();
                setActiveType('image');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                activeType === 'image'
                  ? 'bg-dark-800 text-dank-green font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Pics</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1 bg-dark-900 border border-dark-800 rounded-xl px-2.5 py-1 text-xs font-mono text-slate-300">
            <ArrowUpDown className="w-3 h-3 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="reactions" className="bg-dark-900 text-white">Most GOATed</option>
              <option value="views" className="bg-dark-900 text-white">Most Viewed</option>
              <option value="year" className="bg-dark-900 text-white">Historical Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Feed Status Summary */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
        <div>
          Showing <span className="text-dank-green font-bold">{filteredMemes.length}</span> legendary memes
          {searchQuery && (
            <span> matching "{searchQuery}"</span>
          )}
        </div>
        <div className="hidden sm:block">
          Click 🔥, 💀 or 🐐 to react • Press 🔊 for audio cues
        </div>
      </div>

      {/* Meme Grid */}
      {filteredMemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMemes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onOpenStudioWithMeme={onOpenStudioWithMeme}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-16 text-center space-y-4 bg-dark-900/40 rounded-3xl border border-dark-800">
          <div className="text-5xl">🗿</div>
          <h3 className="font-display text-xl font-bold text-white">
            No Mid Memes Found
          </h3>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            Try searching for "Babu Bhaiya", "Binod", "KEKW", "GigaChad", or reset your filters!
          </p>
        </div>
      )}
    </section>
  );
};
