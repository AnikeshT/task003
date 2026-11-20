'use client';

import React from 'react';
import { Flame, Dices, Palette, Volume2, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface HeroMemeBannerProps {
  onOpenRoulette: () => void;
  onOpenStudio: () => void;
  onOpenSoundboard: () => void;
}

export const HeroMemeBanner: React.FC<HeroMemeBannerProps> = ({
  onOpenRoulette,
  onOpenStudio,
  onOpenSoundboard,
}) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 border-b border-dark-800 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-dank-green/15 via-dank-purple/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Top Floating Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-850 border border-dark-700 text-xs font-mono text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-dank-green animate-pulse" />
          <span className="text-dank-green font-semibold">100% GOATED ARCHIVE</span>
          <span className="text-dark-600">•</span>
          <span>Zero Mid Allowed</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          THE UNIVERSAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dank-green via-dank-yellow to-dank-purple">
            GOAT MEME VAULT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          From <span className="text-dank-saffron font-medium">Babu Bhaiya & Binod</span> to <span className="text-dank-yellow font-medium">El Risitas (KEKW)</span>, from <span className="text-dank-blue font-medium">GigaChad</span> to <span className="text-dank-purple font-medium">Pedro Raccoon</span>. The definitive global collection of legendary Indian, European, and worldwide internet culture.
        </p>

        {/* Fast Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              soundFx.vineBoom();
              onOpenRoulette();
            }}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-dank-green to-emerald-500 text-dark-950 font-display font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-xl shadow-dank-green/25 flex items-center gap-2 group active:scale-95 transition-all"
          >
            <Dices className="w-5 h-5 transition-transform group-hover:rotate-45" />
            <span>Spicy Meme Roulette</span>
          </button>

          <button
            onClick={() => {
              soundFx.pop();
              onOpenStudio();
            }}
            className="px-6 py-3.5 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-white font-display font-bold text-sm tracking-wide flex items-center gap-2 active:scale-95 transition-all"
          >
            <Palette className="w-5 h-5 text-dank-purple" />
            <span>Meme Generator Studio</span>
          </button>

          <button
            onClick={() => {
              soundFx.airhorn();
              onOpenSoundboard();
            }}
            className="px-5 py-3.5 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-white font-display font-bold text-sm tracking-wide flex items-center gap-2 active:scale-95 transition-all"
          >
            <Volume2 className="w-5 h-5 text-dank-yellow" />
            <span>Soundboard</span>
          </button>
        </div>

        {/* Live Metrics Row */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-dark-800/80">
          <div className="p-3 bg-dark-900/60 rounded-xl border border-dark-800">
            <div className="font-display text-2xl font-bold text-white">14.8M+</div>
            <div className="text-xs font-mono text-slate-400">Total Views</div>
          </div>
          <div className="p-3 bg-dark-900/60 rounded-xl border border-dark-800">
            <div className="font-display text-2xl font-bold text-dank-green">1.2M+</div>
            <div className="text-xs font-mono text-slate-400">Reactions Recorded</div>
          </div>
          <div className="p-3 bg-dark-900/60 rounded-xl border border-dark-800">
            <div className="font-display text-2xl font-bold text-dank-saffron">🇮🇳 🇪🇺 🌍</div>
            <div className="text-xs font-mono text-slate-400">Global Regions</div>
          </div>
          <div className="p-3 bg-dark-900/60 rounded-xl border border-dark-800">
            <div className="font-display text-2xl font-bold text-dank-yellow">100%</div>
            <div className="text-xs font-mono text-slate-400">Pure Culture & Dopamine</div>
          </div>
        </div>
      </div>
    </div>
  );
};
