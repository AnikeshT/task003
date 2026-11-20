'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

interface EditorialRhythmGridProps {
  onSelectVibe: (vibe: string) => void;
}

export const EditorialRhythmGrid: React.FC<EditorialRhythmGridProps> = ({ onSelectVibe }) => {
  const rhythms = [
    {
      id: 'cinema',
      title: 'Pure Cinema',
      subtitle: 'Cinematic timing, kinetic choreography and unforgettable dialogues.',
      count: '4 MEMES',
      image: '/memes/hrithik_dance.gif',
      colSpan: 'md:col-span-8',
    },
    {
      id: 'legend',
      title: 'All-Time Legends',
      subtitle: 'The untouchable gods of internet lore: GigaChad, KEKW, and the Sovereign Smirk.',
      count: '5 MEMES',
      image: '/memes/gigachad.jpg',
      colSpan: 'md:col-span-4',
    },
    {
      id: 'relatable',
      title: 'Grounded Relatable',
      subtitle: 'Binod by the handpump, Harold smiling through pain, and distracted eyes.',
      count: '4 MEMES',
      image: '/memes/binod.jpg',
      colSpan: 'md:col-span-4',
    },
    {
      id: 'chaos',
      title: 'Unfiltered Chaos',
      subtitle: 'Dinner table cat screams, burning rooms, and twin Spider-Men.',
      count: '3 MEMES',
      image: '/memes/smudge_cat.jpg',
      colSpan: 'md:col-span-4',
    },
    {
      id: 'brainrot',
      title: 'Universal Brainrot',
      subtitle: 'Techno raccoons spinning in circles and sarcastic mocking sponges.',
      count: '2 MEMES',
      image: '/memes/dancing_cat.gif',
      colSpan: 'md:col-span-4',
    },
  ];

  const handleClick = (vibeId: string) => {
    soundFx.pop();
    onSelectVibe(vibeId);
    const elem = document.getElementById('vault-feed');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0c0d12] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              ✦ Curated Categories
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 font-normal tracking-tight">
              Five ways to spend your <br />
              <span className="italic font-light text-amber-300">dopamine today.</span>
            </h2>
            <p className="font-sans text-base text-stone-400 leading-relaxed font-light">
              Every meme sits in one of five distinct comedic rhythms. Pick the one that matches your mood.
            </p>
          </div>
        </div>

        {/* Bento Grid (Directly modeled after Sarab's Bento Rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {rhythms.map((r) => (
            <div
              key={r.id}
              onClick={() => handleClick(r.id)}
              className={`${r.colSpan} relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-400/60 transition-all duration-500 cursor-pointer group shadow-xl bg-stone-950 flex flex-col justify-between p-6 sm:p-8`}
            >
              {/* Background Image / GIF */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  unoptimized
                  className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              </div>

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-300">
                  {r.count}
                </span>

                <div className="w-10 h-10 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Title & Subtitle */}
              <div className="relative z-10 space-y-1.5">
                <h3 className="font-serif text-3xl sm:text-4xl text-stone-100 font-normal group-hover:text-amber-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light max-w-md line-clamp-2">
                  {r.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
