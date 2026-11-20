'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowUpDown, Video, Image as ImageIcon } from 'lucide-react';
import { MemeItem, MemeVibe } from '@/types/meme';
import { MemeCard } from './MemeCard';
import { soundFx } from '@/utils/soundEffects';

interface MemeFeedProps {
  memes: MemeItem[];
  searchQuery: string;
  activeVibeFilter?: string;
  onOpenStudioWithMeme: (meme: MemeItem) => void;
}

export const MemeFeed: React.FC<MemeFeedProps> = ({
  memes,
  searchQuery,
  activeVibeFilter = 'all',
  onOpenStudioWithMeme,
}) => {
  const [selectedVibe, setSelectedVibe] = useState<string>(activeVibeFilter);
  const [activeFormat, setActiveFormat] = useState<'all' | 'video' | 'image'>('all');
  const [sortBy, setSortBy] = useState<'reactions' | 'views' | 'year'>('reactions');

  // Sync if external filter updates
  React.useEffect(() => {
    if (activeVibeFilter && activeVibeFilter !== 'all') {
      setSelectedVibe(activeVibeFilter);
    }
  }, [activeVibeFilter]);

  const vibeChips = [
    { id: 'all', label: '✦ All Vault (16)', icon: '✨' },
    { id: 'cinema', label: 'Pure Cinema', icon: '🎬' },
    { id: 'legend', label: 'All-Time Legends', icon: '👑' },
    { id: 'relatable', label: 'Grounded Relatable', icon: '🗿' },
    { id: 'chaos', label: 'Unfiltered Chaos', icon: '🔥' },
    { id: 'brainrot', label: 'Universal Brainrot', icon: '⚡' },
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
          const matchesVibe = meme.vibeLabel.toLowerCase().includes(q);
          if (!matchesTitle && !matchesPunchline && !matchesTags && !matchesVibe) {
            return false;
          }
        }

        // Vibe filter
        if (selectedVibe !== 'all' && meme.vibe !== selectedVibe) {
          return false;
        }

        // Format filter
        if (activeFormat === 'video' && !meme.iframeUrl) return false;
        if (activeFormat === 'image' && meme.iframeUrl) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'reactions') {
          const totalA = a.reactions.goat + a.reactions.based + a.reactions.dead;
          const totalB = b.reactions.goat + b.reactions.based + b.reactions.dead;
          return totalB - totalA;
        }
        if (sortBy === 'year') {
          return Number(b.originYear) - Number(a.originYear);
        }
        return 0;
      });
  }, [memes, searchQuery, selectedVibe, activeFormat, sortBy]);

  return (
    <section id="vault-feed" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Feed Controls Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
        {/* Vibe Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {vibeChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => {
                soundFx.pop();
                setSelectedVibe(chip.id);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                selectedVibe === chip.id
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20'
                  : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
              }`}
            >
              <span>{chip.icon}</span>
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Right Filter & Sort Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Format Toggle */}
          <div className="bg-stone-900 border border-stone-800 rounded-full p-1 flex items-center gap-1">
            <button
              onClick={() => {
                soundFx.pop();
                setActiveFormat('all');
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                activeFormat === 'all'
                  ? 'bg-stone-800 text-white font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                soundFx.pop();
                setActiveFormat('video');
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1 transition-colors ${
                activeFormat === 'video'
                  ? 'bg-stone-800 text-amber-300 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Video className="w-3 h-3" />
              <span>Clips</span>
            </button>
            <button
              onClick={() => {
                soundFx.pop();
                setActiveFormat('image');
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1 transition-colors ${
                activeFormat === 'image'
                  ? 'bg-stone-800 text-amber-300 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Pics</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 bg-stone-900 border border-stone-800 rounded-full px-3 py-1.5 text-xs font-mono text-stone-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-stone-300 focus:outline-none cursor-pointer"
            >
              <option value="reactions" className="bg-stone-900 text-white">Most GOATed</option>
              <option value="year" className="bg-stone-900 text-white">Historical Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Feed Status Summary */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500">
        <div>
          Archive: <span className="text-amber-400 font-bold">{filteredMemes.length}</span> curated artifacts
          {searchQuery && <span> matching "{searchQuery}"</span>}
        </div>
        <div className="hidden sm:block">
          Click ▶ to open video iframes with sound • Zero downloads required
        </div>
      </div>

      {/* Grid of Verified Meme Cards */}
      {filteredMemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onOpenStudioWithMeme={onOpenStudioWithMeme}
            />
          ))}
        </div>
      ) : (
        <div className="p-16 text-center space-y-4 bg-stone-900/30 rounded-3xl border border-stone-800">
          <div className="text-4xl">🗿</div>
          <h3 className="font-serif text-2xl text-stone-200">
            No Artifacts Found
          </h3>
          <p className="text-stone-400 text-sm max-w-sm mx-auto font-light">
            Try resetting your search query or switching categories.
          </p>
        </div>
      )}
    </section>
  );
};
