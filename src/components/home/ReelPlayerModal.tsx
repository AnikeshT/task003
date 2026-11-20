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
  const videoMemes = GOAT_MEMES.filter((m) => m.type === 'video');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-dark-900/80 text-white hover:bg-dark-800"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Reel container */}
      <div className="relative max-w-sm w-full h-[88vh] max-h-[750px] bg-dark-950 rounded-3xl overflow-hidden border border-dark-800 shadow-2xl flex flex-col justify-between">
        {/* Main Video */}
        <div className="absolute inset-0 z-0 cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            key={currentMeme.id}
            src={currentMeme.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/60 pointer-events-none" />

          {/* Pause Icon Indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center text-white">
                <Play className="w-8 h-8 ml-1 text-dank-green" />
              </div>
            </div>
          )}
        </div>

        {/* Top Header */}
        <div className="relative z-10 p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">{currentMeme.flag}</span>
            <span className="text-xs font-mono bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
              {currentMeme.regionLabel}
            </span>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-dank-green" />}
          </button>
        </div>

        {/* Right Action Bar */}
        <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-dark-900/80 hover:bg-dark-800 active:scale-95 transition-all"
            title="Previous Meme (Arrow Up)"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              soundFx.airhorn();
            }}
            className="p-3 rounded-full bg-dark-900/80 hover:bg-dark-800 text-dank-green active:scale-95 transition-all"
          >
            <Flame className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-dark-900/80 hover:bg-dark-800 active:scale-95 transition-all"
            title="Next Meme (Arrow Down)"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 p-6 space-y-2 text-white">
          <h3 className="font-display font-bold text-lg leading-tight">
            {currentMeme.title}
          </h3>
          <p className="text-xs text-slate-300 font-sans leading-snug">
            "{currentMeme.punchline}"
          </p>
          <div className="text-[10px] font-mono text-slate-400">
            {currentIndex + 1} of {videoMemes.length} • Press ↓ / ↑ to browse
          </div>
        </div>
      </div>
    </div>
  );
};
