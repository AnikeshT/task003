'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { soundFx } from '@/utils/soundEffects';

export const DancingCatLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [catSpeech, setCatSpeech] = useState<string | null>(null);

  useEffect(() => {
    // Initial page load screen for 900ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const handleCatClick = () => {
    soundFx.pop();
    const quotes = [
      'VIBING AT 200 BPM! 🐾',
      'Binod approved this jam! 🔥',
      'Average meme enjoyer right here 🐐',
      'Drop the bass! 💥',
      'Emotional damage averted! 🩴',
    ];
    setCatSpeech(quotes[Math.floor(Math.random() * quotes.length)]);
    setTimeout(() => setCatSpeech(null), 3000);
  };

  return (
    <>
      {/* 1. Initial Page Load Screen with Dancing Cat */}
      <div
        className={`fixed inset-0 z-50 bg-dark-950 flex flex-col items-center justify-center p-4 transition-all duration-500 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center space-y-6">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-3xl overflow-hidden border-2 border-dank-green shadow-2xl shadow-dank-green/30 bg-black">
            <Image
              src="/memes/dancing_cat.gif"
              alt="Dancing Cat Loader"
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide">
              CAT JAMMING INTENSELY...
            </h2>
            <p className="font-mono text-xs text-dank-green animate-pulse tracking-widest uppercase">
              Loading The Undisputed GOAT Meme Vault
            </p>
          </div>
        </div>
      </div>

      {/* 2. Persistent Floating Dancing Cat Mascot (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-30 flex items-end gap-3 select-none">
        {catSpeech && (
          <div className="p-3 bg-dark-900 border border-dank-green text-xs font-mono font-bold text-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 max-w-[200px]">
            {catSpeech}
          </div>
        )}

        <button
          onClick={handleCatClick}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-dank-green/80 bg-dark-950 shadow-2xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
          title="Click the Vibing Cat!"
        >
          <Image
            src="/memes/dancing_cat.gif"
            alt="Dancing Cat Mascot"
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dank-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </>
  );
};
