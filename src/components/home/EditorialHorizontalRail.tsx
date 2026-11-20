'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Eye, Volume2, Flame, Crown, Play } from 'lucide-react';
import { MemeItem } from '@/types/meme';
import { soundFx } from '@/utils/soundEffects';

interface EditorialHorizontalRailProps {
  memes: MemeItem[];
  onSelectMeme: (meme: MemeItem) => void;
}

export const EditorialHorizontalRail: React.FC<EditorialHorizontalRailProps> = ({
  memes,
  onSelectMeme,
}) => {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="rhythms" className="py-24 bg-[#0e1017] border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header with Left / Right Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              ✦ Handpicked Curations
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 font-normal tracking-tight">
              Six memes we’d send to our <br />
              <span className="italic font-light text-amber-300">own closest friends.</span>
            </h2>
            <p className="font-sans text-base text-stone-400 leading-relaxed font-light">
              Every single entry has survived hundred-layer group chat scrutiny. Zero synthetic cringe.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-amber-400 active:scale-95 transition-all shadow-md"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-amber-400 active:scale-95 transition-all shadow-md"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={railRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {memes.slice(0, 8).map((meme) => (
            <div
              key={meme.id}
              className="w-[320px] sm:w-[380px] shrink-0 snap-start bg-stone-900/60 border border-stone-800 hover:border-stone-700 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Media Image / GIF / Iframe trigger */}
                <div className="relative aspect-[16/11] bg-black overflow-hidden flex items-center justify-center">
                  <Image
                    src={meme.mediaUrl}
                    alt={meme.title}
                    fill
                    unoptimized={meme.type === 'gif'}
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-mono text-stone-300 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-amber-400" />
                    <span>{meme.views}</span>
                  </div>

                  {meme.iframeUrl && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-amber-400 text-stone-950 text-[10px] font-mono font-bold flex items-center gap-1 shadow-lg">
                      <Play className="w-3 h-3" />
                      <span>Video Available</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                    {meme.vibeLabel} • {meme.originYear}
                  </div>

                  <h3 className="font-serif text-2xl text-stone-100 font-normal leading-snug">
                    {meme.title}
                  </h3>

                  <p className="text-sm text-stone-400 font-light line-clamp-2 leading-relaxed">
                    "{meme.punchline}"
                  </p>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="p-6 pt-3 border-t border-stone-800/80 bg-stone-950/40 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (meme.audioEffect === 'airhorn') soundFx.airhorn();
                    else if (meme.audioEffect === 'vine-boom') soundFx.vineBoom();
                    else soundFx.bruh();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-xs font-mono text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Audio Clip</span>
                </button>

                <div className="text-xs font-mono text-stone-400">
                  🔥 {meme.reactions.goat + meme.reactions.based} votes
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
