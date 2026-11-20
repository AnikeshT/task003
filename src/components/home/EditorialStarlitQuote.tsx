'use client';

import React from 'react';
import { Sparkles, Dices, Volume2 } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface EditorialStarlitQuoteProps {
  onOpenRoulette: () => void;
  onOpenSoundboard: () => void;
}

export const EditorialStarlitQuote: React.FC<EditorialStarlitQuoteProps> = ({
  onOpenRoulette,
  onOpenSoundboard,
}) => {
  return (
    <section className="py-28 bg-[#07080b] border-b border-stone-800 text-center relative overflow-hidden">
      {/* Background Starry Dust Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400">
          The 3:00 AM Digital Reality
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-100 font-normal tracking-tight leading-tight">
          Out past 3:00 AM the serious talk goes quiet, <br />
          <span className="italic font-light text-amber-300">
            and the memes do the rest.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-stone-400 font-light max-w-xl mx-auto leading-relaxed">
          From unscripted courtroom outbursts to cats rejecting green vegetables, these are the moments that held humanity together through the digital age.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              soundFx.vineBoom();
              onOpenRoulette();
            }}
            className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono text-xs uppercase tracking-widest font-bold shadow-xl flex items-center gap-2 group active:scale-95 transition-all"
          >
            <Dices className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Spin Dopamine Roulette</span>
          </button>

          <button
            onClick={() => {
              soundFx.airhorn();
              onOpenSoundboard();
            }}
            className="px-8 py-4 rounded-full border border-stone-700 hover:border-amber-400/80 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-all active:scale-95 flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span>Meme Soundboard</span>
          </button>
        </div>
      </div>
    </section>
  );
};
