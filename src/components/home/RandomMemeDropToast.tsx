'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, X, Flame, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GOAT_MEMES } from '@/data/memes';
import { MemeItem } from '@/types/meme';
import { soundFx } from '@/utils/soundEffects';

export const RandomMemeDropToast: React.FC = () => {
  const [activeMeme, setActiveMeme] = useState<MemeItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Drop a meme every 10 seconds
    const interval = setInterval(() => {
      const randIdx = Math.floor(Math.random() * GOAT_MEMES.length);
      const droppedMeme = GOAT_MEMES[randIdx];

      setActiveMeme(droppedMeme);
      setIsVisible(true);
      soundFx.pop();

      // Auto-hide after 5.5s so there's an active window then a brief pause before next 10s cycle
      setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!activeMeme || !isVisible) return null;

  const handleReact = () => {
    soundFx.airhorn();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { x: 0.85, y: 0.85 },
      colors: ['#10B981', '#F59E0B', '#EF4444'],
    });
    setIsVisible(false);
  };

  const scrollToMeme = () => {
    soundFx.pop();
    const elem = document.getElementById(activeMeme.id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.classList.add('ring-2', 'ring-dank-green');
      setTimeout(() => elem.classList.remove('ring-2', 'ring-dank-green'), 3000);
    }
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full bg-dark-900 border-2 border-dank-yellow/80 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
      {/* Top Banner Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-dark-800">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-dank-yellow">
          <span className="w-2 h-2 rounded-full bg-dank-yellow animate-ping" />
          <span>⚡ LIVE 10s MEME DROP!</span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Meme Body */}
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-dark-950 border border-dark-700">
          <Image
            src={activeMeme.thumbnailUrl || activeMeme.mediaUrl}
            alt={activeMeme.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-display font-bold text-sm text-white truncate">
            {activeMeme.flag} {activeMeme.title}
          </h4>
          <p className="text-xs text-slate-300 line-clamp-1 italic">
            "{activeMeme.punchline}"
          </p>
        </div>
      </div>

      {/* Action Row */}
      <div className="pt-3 mt-2 flex items-center justify-between gap-2 border-t border-dark-800/80">
        <button
          onClick={handleReact}
          className="flex-1 py-1.5 px-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-xs font-mono font-bold text-orange-400 flex items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <span>🔥</span>
          <span>Dank</span>
        </button>

        <button
          onClick={scrollToMeme}
          className="flex-1 py-1.5 px-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-slate-200 flex items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
