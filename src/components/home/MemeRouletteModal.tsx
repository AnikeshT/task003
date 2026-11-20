'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Dices, Sparkles, Volume2, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MemeItem } from '@/types/meme';
import { GOAT_MEMES } from '@/data/memes';
import { soundFx } from '@/utils/soundEffects';

interface MemeRouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStudioWithMeme: (meme: MemeItem) => void;
}

export const MemeRouletteModal: React.FC<MemeRouletteModalProps> = ({
  isOpen,
  onClose,
  onOpenStudioWithMeme,
}) => {
  const [currentMeme, setCurrentMeme] = useState<MemeItem>(GOAT_MEMES[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const fortunes = [
    'Your code will deploy with 0 errors today.',
    'You are entering your GigaChad era.',
    'Someone will ask you to explain a 25-day money doubling scheme.',
    'Maximum emotional damage incoming from your next pull request.',
    'Binod is watching over your servers with pride.',
    'You are certified 100% Based and Goat-pilled.',
  ];

  const [fortune, setFortune] = useState(fortunes[0]);

  const spinWheel = () => {
    setIsSpinning(true);
    soundFx.pop();

    let count = 0;
    const interval = setInterval(() => {
      const randIdx = Math.floor(Math.random() * GOAT_MEMES.length);
      setCurrentMeme(GOAT_MEMES[randIdx]);
      count++;

      if (count > 12) {
        clearInterval(interval);
        const finalIdx = Math.floor(Math.random() * GOAT_MEMES.length);
        const selected = GOAT_MEMES[finalIdx];
        setCurrentMeme(selected);
        setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
        setIsSpinning(false);

        // Boom & Confetti
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
        });

        if (selected.audioEffect === 'vine-boom') soundFx.vineBoom();
        else if (selected.audioEffect === 'airhorn') soundFx.airhorn();
        else if (selected.audioEffect === 'phonk') soundFx.phonk();
        else if (selected.audioEffect === 'emotional-damage') soundFx.emotionalDamage();
        else soundFx.bruh();
      }
    }, 90);
  };

  useEffect(() => {
    if (isOpen) {
      spinWheel();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-dark-900 border border-dark-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-center">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-dark-800">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-spin-slow">🎲</span>
            <div className="text-left">
              <h3 className="font-display font-bold text-lg text-white">
                Dopamine Roulette
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Spun from the global hall of fame
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.pop();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Meme Display */}
        <div className="space-y-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-950 border border-dark-700 shadow-2xl">
            <Image
              src={currentMeme.thumbnailUrl || currentMeme.mediaUrl}
              alt={currentMeme.title}
              fill
              className={`object-cover transition-all ${
                isSpinning ? 'blur-sm scale-105' : 'blur-0 scale-100'
              }`}
            />
            <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-dark-950/80 backdrop-blur-md text-xs font-mono text-white">
              {currentMeme.vibeLabel}
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-white">
              {currentMeme.title}
            </h4>
            <p className="text-sm text-slate-300 italic">
              "{currentMeme.punchline}"
            </p>
          </div>

          {/* Fortune Verdict */}
          <div className="p-3.5 bg-dark-950 rounded-2xl border border-dark-800 text-xs font-mono text-dank-yellow">
            ✨ Fortune: {fortune}
          </div>
        </div>

        {/* Spin Again & Remix Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-dank-green to-emerald-500 text-dark-950 font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
          >
            <Dices className="w-4 h-4" />
            <span>{isSpinning ? 'Spinning...' : 'Spin Again 🎲'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenStudioWithMeme(currentMeme);
            }}
            className="py-3 px-4 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-mono text-slate-300 hover:text-white"
          >
            Remix Meme
          </button>
        </div>
      </div>
    </div>
  );
};
