'use client';

import React from 'react';
import { X, Volume2, Sparkles, Disc } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface MemeSoundboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemeSoundboard: React.FC<MemeSoundboardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const soundPacks = [
    {
      id: 'vine-boom',
      name: 'Vine Boom 💥',
      desc: 'Sub-bass impact drop',
      color: 'from-red-600 to-orange-600',
      action: () => soundFx.vineBoom(),
    },
    {
      id: 'emotional-damage',
      name: 'Emotional Damage 🩴',
      desc: 'Steven He slap hit',
      color: 'from-amber-600 to-yellow-600',
      action: () => soundFx.emotionalDamage(),
    },
    {
      id: 'bruh',
      name: 'Bruh Moment 🗿',
      desc: 'The universal deadpan response',
      color: 'from-emerald-600 to-teal-600',
      action: () => soundFx.bruh(),
    },
    {
      id: 'airhorn',
      name: 'MLG Airhorn 🎺',
      desc: 'Classic 2014 montage blast',
      color: 'from-blue-600 to-indigo-600',
      action: () => soundFx.airhorn(),
    },
    {
      id: 'phonk',
      name: 'GigaChad Phonk 🗿',
      desc: '808 cowbell drop',
      color: 'from-purple-600 to-pink-600',
      action: () => soundFx.phonk(),
    },
    {
      id: 'sad-violin',
      name: 'Sad Violin 🎻',
      desc: 'Minor third tragedy tone',
      color: 'from-slate-600 to-zinc-700',
      action: () => soundFx.sadViolin(),
    },
    {
      id: 'pop',
      name: 'Bubble Pop 🫧',
      desc: 'Satisfying UI click pop',
      color: 'from-teal-600 to-cyan-600',
      action: () => soundFx.pop(),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-dark-900 border border-dark-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-dank-yellow/15 text-dank-yellow border border-dank-yellow/30">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Meme Soundboard
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Zero latency Web Audio synthesizer • Click to trigger instantly
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.pop();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {soundPacks.map((snd) => (
            <button
              key={snd.id}
              onClick={() => snd.action()}
              className="p-4 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-dank-green/50 text-left transition-all active:scale-95 group shadow-md"
            >
              <div className="font-display font-bold text-sm text-white group-hover:text-dank-green transition-colors">
                {snd.name}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                {snd.desc}
              </div>
            </button>
          ))}
        </div>

        {/* Footer tip */}
        <div className="pt-2 text-center text-[11px] font-mono text-slate-500 border-t border-dark-800">
          Tip: You can also click the 🔊 icon on any meme card in the feed!
        </div>
      </div>
    </div>
  );
};
