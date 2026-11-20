'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Dices, Palette, Volume2, Sparkles, Search, Video, Award } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenRoulette: () => void;
  onOpenStudio: () => void;
  onOpenSoundboard: () => void;
  onOpenReels: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenRoulette,
  onOpenStudio,
  onOpenSoundboard,
  onOpenReels,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-dark-950/85 backdrop-blur-xl border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => soundFx.pop()}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-dank-green to-dank-purple flex items-center justify-center shadow-lg shadow-dank-green/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🐐</span>
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
                <span>GOAT</span>
                <span className="text-dank-green">MEMES</span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-dank-purple/20 text-dank-purple border border-dank-purple/30">
                  Global
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 hidden sm:block">
                🇮🇳 Desi • 🇪🇺 Euro • 🌍 Worldwide Vault
              </div>
            </div>
          </Link>
        </div>

        {/* Global Live Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Babu Bhaiya, KEKW, GigaChad, Binod..."
              className="w-full bg-dark-900 border border-dark-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-dank-green focus:ring-1 focus:ring-dank-green transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Soundboard Button */}
          <button
            onClick={() => {
              soundFx.airhorn();
              onOpenSoundboard();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-medium text-slate-200 hover:text-dank-yellow transition-all active:scale-95"
            title="Open Meme Soundboard"
          >
            <Volume2 className="w-4 h-4 text-dank-yellow" />
            <span className="hidden sm:inline">Soundboard</span>
          </button>

          {/* Reel Mode */}
          <button
            onClick={() => {
              soundFx.phonk();
              onOpenReels();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-medium text-slate-200 hover:text-dank-purple transition-all active:scale-95"
            title="Watch Fullscreen Clips"
          >
            <Video className="w-4 h-4 text-dank-purple" />
            <span className="hidden sm:inline">Clips</span>
          </button>

          {/* Meme Generator Studio */}
          <button
            onClick={() => {
              soundFx.pop();
              onOpenStudio();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-medium text-slate-200 hover:text-dank-green transition-all active:scale-95"
            title="Open Meme Generator Studio"
          >
            <Palette className="w-4 h-4 text-dank-green" />
            <span className="hidden sm:inline">Studio</span>
          </button>

          {/* Roulette Button (Spicy Random) */}
          <button
            onClick={() => {
              soundFx.vineBoom();
              onOpenRoulette();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-dank-green to-emerald-500 text-dark-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-dank-green/20 transition-all active:scale-95"
          >
            <Dices className="w-4 h-4 animate-spin-slow" />
            <span>Roulette</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search memes, countries, characters..."
            className="w-full bg-dark-900 border border-dark-700 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-dank-green"
          />
        </div>
      </div>
    </header>
  );
};
