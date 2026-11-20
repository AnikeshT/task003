'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Volume2, Palette, Dices, ArrowUpRight } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenRoulette: () => void;
  onOpenStudio: () => void;
  onOpenSoundboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenRoulette,
  onOpenStudio,
  onOpenSoundboard,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0d12]/90 backdrop-blur-xl border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Wordmark (Editorial luxury) */}
        <Link
          href="/"
          onClick={() => soundFx.pop()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-xl shadow-md group-hover:border-amber-400/60 transition-colors">
            <span>🐐</span>
          </div>
          <div>
            <div className="font-serif text-2xl font-light tracking-[0.18em] text-stone-100 uppercase group-hover:text-amber-300 transition-colors">
              MEME<span className="font-semibold text-amber-400">VAULT</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-stone-500 uppercase -mt-1">
              Haute Internet Culture • 003
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-stone-400">
          <a href="#vault-feed" className="hover:text-amber-300 transition-colors">The Vault</a>
          <a href="#rhythms" className="hover:text-amber-300 transition-colors">Curated Rail</a>
          <a href="#standard" className="hover:text-amber-300 transition-colors">The Standard</a>
        </nav>

        {/* Global Live Search Bar */}
        <div className="flex-1 max-w-xs hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search lore, punchlines..."
              className="w-full bg-stone-900/80 border border-stone-800 rounded-full pl-10 pr-4 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              soundFx.airhorn();
              onOpenSoundboard();
            }}
            className="p-2.5 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-400/80 text-stone-300 hover:text-amber-300 transition-all active:scale-95 shadow-sm"
            title="Open Soundboard"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.pop();
              onOpenStudio();
            }}
            className="p-2.5 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-400/80 text-stone-300 hover:text-amber-300 transition-all active:scale-95 shadow-sm"
            title="Meme Studio"
          >
            <Palette className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.vineBoom();
              onOpenRoulette();
            }}
            className="px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono text-xs uppercase tracking-widest font-bold shadow-lg shadow-amber-400/20 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Dices className="w-3.5 h-3.5" />
            <span>Roulette</span>
          </button>
        </div>
      </div>
    </header>
  );
};
