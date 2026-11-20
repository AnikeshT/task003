'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronUp, ChevronDown, Flame, Volume2, VolumeX, Play, Pause, Share2 } from 'lucide-react';
import { MemeItem } from '@/types/meme';
import { GOAT_MEMES } from '@/data/memes';
import { soundFx } from '@/utils/soundEffects';

interface ReelPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelPlayerModal: React.FC<ReelPlayerModalProps> = ({ isOpen, onClose }) => {
  const videoMemes = GOAT_MEMES.filter((m) => m.iframeUrl || m.type === 'gif');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMeme = videoMemes[currentIndex] || videoMemes[0];

  const handleNext = () => {
    soundFx.pop();
    setCurrentIndex((prev) => (prev + 1) % videoMemes.length);
  };

  const handlePrev = () => {
    soundFx.pop();
    setCurrentIndex((prev) => (prev - 1 + videoMemes.length) % videoMemes.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowUp') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-stone-900 text-white hover:bg-stone-800"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Reel container */}
      <div className="relative max-w-sm w-full h-[88vh] max-h-[750px] bg-stone-950 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col justify-between">
        {/* Main Video Iframe or Media */}
        <div className="absolute inset-0 z-0">
          {currentMeme.iframeUrl ? (
            <iframe
              src={currentMeme.iframeUrl}
              title={currentMeme.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <img
              src={currentMeme.mediaUrl}
              alt={currentMeme.title}
              className="w-full h-full object-contain"
            />
          )}

          {/* Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40 pointer-events-none" />
        </div>

        {/* Top Header */}
        <div className="relative z-10 p-5 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-black/60 px-3 py-1 rounded-full border border-white/10 text-amber-300">
              {currentMeme.vibeLabel}
            </span>
          </div>
        </div>

        {/* Right Action Bar */}
        <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 active:scale-95 transition-all"
            title="Previous (Arrow Up)"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              soundFx.airhorn();
            }}
            className="p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-amber-400 active:scale-95 transition-all"
          >
            <Flame className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 active:scale-95 transition-all"
            title="Next (Arrow Down)"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 p-6 space-y-2 text-white bg-black/60 backdrop-blur-sm pointer-events-none">
          <h3 className="font-serif font-normal text-xl leading-tight">
            {currentMeme.title}
          </h3>
          <p className="text-xs text-stone-300 font-sans leading-snug">
            "{currentMeme.punchline}"
          </p>
          <div className="text-[10px] font-mono text-stone-400">
            {currentIndex + 1} of {videoMemes.length} • Press ↓ / ↑ to browse
          </div>
        </div>
      </div>
    </div>
  );
};
