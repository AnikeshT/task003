'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Volume2, Sparkles, Dices, Palette, ArrowDown, Crown } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface EditorialHeroProps {
  onSearch: (query: string) => void;
  onOpenRoulette: () => void;
  onOpenStudio: () => void;
  onOpenSoundboard: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onSearch,
  onOpenRoulette,
  onOpenStudio,
  onOpenSoundboard,
}) => {
  const [eraChoice, setEraChoice] = useState('all');
  const [vibeChoice, setVibeChoice] = useState('all');
  const [formatChoice, setFormatChoice] = useState('all');

  const handleFilterSubmit = () => {
    soundFx.pop();
    const query = vibeChoice !== 'all' ? vibeChoice : eraChoice !== 'all' ? eraChoice : '';
    onSearch(query);
    const elem = document.getElementById('vault-feed');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-20 border-b border-stone-800 bg-[#0c0d12] overflow-hidden">
      {/* Background Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-[#0c0d12] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Eyebrow strip */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-widest uppercase text-stone-200">
              HAUTE DIGITAL ARCHAEOLOGY
            </span>
            <span className="text-stone-600">•</span>
            <span>Est. 2000–2026</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>Quality: 100% Organic Lore</span>
            <span className="text-stone-600">•</span>
            <span className="text-amber-400">Zero Corporate Mid</span>
          </div>
        </div>

        {/* Master Serif Headline (Directly Inspired by Sarab) */}
        <div className="max-w-4xl space-y-6">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-stone-100 font-normal tracking-tight leading-[1.04]">
            The Internet, <br />
            <span className="italic font-light text-amber-400">slowly unhinged.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-stone-400 font-light max-w-2xl leading-relaxed">
            Late-night group chats, timeless cultural lore and certified dopamine, chosen and curated by people who grew up online.
          </p>
        </div>

        {/* The Sarab-Style Triple Filter Search Bar */}
        <div className="p-3 sm:p-4 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl backdrop-blur-md max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            {/* Era */}
            <div className="px-4 py-2 rounded-2xl bg-stone-950/60 border border-stone-800 text-left">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Era
              </div>
              <select
                value={eraChoice}
                onChange={(e) => setEraChoice(e.target.value)}
                className="bg-transparent text-sm text-stone-200 font-medium focus:outline-none w-full cursor-pointer"
              >
                <option value="all" className="bg-stone-900">All Decades (2000–2026)</option>
                <option value="golden-era" className="bg-stone-900">Golden Era (2000–2018)</option>
                <option value="modern-chaos" className="bg-stone-900">Modern Chaos (2019+)</option>
              </select>
            </div>

            {/* Vibe */}
            <div className="px-4 py-2 rounded-2xl bg-stone-950/60 border border-stone-800 text-left">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Vibe / Rhythm
              </div>
              <select
                value={vibeChoice}
                onChange={(e) => setVibeChoice(e.target.value)}
                className="bg-transparent text-sm text-stone-200 font-medium focus:outline-none w-full cursor-pointer"
              >
                <option value="all" className="bg-stone-900">Any Mood</option>
                <option value="cinema" className="bg-stone-900">Pure Cinema</option>
                <option value="legend" className="bg-stone-900">All-Time Legends</option>
                <option value="relatable" className="bg-stone-900">Grounded Relatable</option>
                <option value="chaos" className="bg-stone-900">Unfiltered Chaos</option>
              </select>
            </div>

            {/* Format */}
            <div className="px-4 py-2 rounded-2xl bg-stone-950/60 border border-stone-800 text-left">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Format
              </div>
              <select
                value={formatChoice}
                onChange={(e) => setFormatChoice(e.target.value)}
                className="bg-transparent text-sm text-stone-200 font-medium focus:outline-none w-full cursor-pointer"
              >
                <option value="all" className="bg-stone-900">Clips & Images</option>
                <option value="video" className="bg-stone-900">Video Iframes</option>
                <option value="gif" className="bg-stone-900">Motion GIFs</option>
                <option value="image" className="bg-stone-900">High-Res Images</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleFilterSubmit}
              className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Explore Vault</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Featured Two-Column Artifacts: Hrithik Roshan Dancing + Sovereign Smirk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Card 1: Hrithik Roshan Kinetic Wave Dance */}
          <div className="p-6 rounded-3xl bg-stone-900/50 border border-stone-800 flex items-center gap-5 hover:border-amber-400/40 transition-colors">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-black shrink-0 border border-stone-700">
              <Image
                src="/memes/hrithik_dance.gif"
                alt="Hrithik Roshan Kinetic Dance"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
                ✦ Kinetic Motion Masterpiece
              </div>
              <h3 className="font-serif text-xl text-stone-100 font-normal">
                Ek Pal Ka Jeena (The Wave)
              </h3>
              <p className="text-xs text-stone-400 font-light line-clamp-2">
                "Me walking into the technical interview after watching a 5-minute crash course on YouTube."
              </p>
              <div className="pt-1 flex items-center gap-3">
                <button
                  onClick={() => soundFx.airhorn()}
                  className="text-[11px] font-mono text-amber-300 hover:text-white flex items-center gap-1"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Play Airhorn</span>
                </button>
                <span className="text-[10px] font-mono text-stone-500">24.2M Views</span>
              </div>
            </div>
          </div>

          {/* Card 2: The Sovereign Smirk (User Uploaded Meme) */}
          <div className="p-6 rounded-3xl bg-stone-900/50 border border-amber-500/40 flex items-center gap-5 shadow-xl hover:border-amber-400 transition-colors">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-black shrink-0 border border-amber-500/50">
              <Image
                src="/memes/user_goat_meme.jpg"
                alt="The Sovereign Smirk"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                <Crown className="w-3 h-3 fill-amber-400" />
                <span>Supreme Aura Induction</span>
              </div>
              <h3 className="font-serif text-xl text-stone-100 font-normal">
                The Sovereign Smirk (Aha Tamatar)
              </h3>
              <p className="text-xs text-stone-400 font-light line-clamp-2">
                "When your code has 47 critical errors but your confidence is over 9000."
              </p>
              <div className="pt-1 flex items-center gap-3">
                <button
                  onClick={() => soundFx.vineBoom()}
                  className="text-[11px] font-mono text-amber-300 hover:text-white flex items-center gap-1"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Play Boom</span>
                </button>
                <span className="text-[10px] font-mono text-stone-500">18.9M Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Provenance Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <span>★</span>
            <span className="text-stone-300 font-medium">4.9 rating from 11,800 meme connoisseurs</span>
          </div>

          <div className="flex items-center gap-1 text-stone-400">
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
