'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Dices, Palette, Volume2, Sparkles, Crown } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Floating Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-850 border border-dark-700 text-xs font-mono text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-dank-green animate-pulse" />
          <span className="text-dank-green font-semibold">100% REAL CERTIFIED MEMES</span>
          <span className="text-dark-600">•</span>
          <span>Zero Stock Photos Allowed</span>
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
          From <span className="text-dank-saffron font-semibold">Babu Bhaiya & Binod</span> to <span className="text-dank-yellow font-semibold">El Risitas (KEKW)</span>, from <span className="text-dank-blue font-semibold">GigaChad</span> to <span className="text-dank-purple font-semibold">Distracted Boyfriend</span>. The undisputed digital archive of internet comedy royalty.
        </p>

        {/* Featured GOAT Hall of Fame Spot (Using user-uploaded image) */}
        <div className="max-w-lg mx-auto p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-dark-900 to-dark-850 border-2 border-amber-500/50 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500 text-dark-950 font-mono font-bold text-xs uppercase flex items-center gap-1 shadow-md">
            <Crown className="w-3.5 h-3.5 fill-dark-950" />
            <span>Meme of the Century</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-xl bg-black">
              <Image
                src="/memes/user_goat_meme.jpg"
                alt="The Sovereign Smirk GOAT"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                👑 Hall of Fame Induction
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                The Sovereign Smirk (Aha Tamatar)
              </h3>
              <p className="text-xs text-slate-300 font-sans italic">
                "When your code has 47 errors but your swagger is undefeated."
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => soundFx.vineBoom()}
                  className="px-3 py-1 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-amber-300 flex items-center gap-1.5 border border-dark-700 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Play Boom</span>
                </button>
                <span className="text-xs font-mono text-slate-400">142K+ GOAT Votes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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
      </div>
    </div>
  );
};
