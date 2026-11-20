'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles, Volume2, Flame } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

export const EditorialStandard: React.FC = () => {
  const tenets = [
    {
      num: '01',
      title: 'Tested in group chats first',
      desc: 'Every single meme in this vault has been tested in high-stakes friend group chats. If it didn’t trigger tears of laughter at 2:00 AM, it never makes the cut.',
    },
    {
      num: '02',
      title: 'Zero corporate AI or stock photos',
      desc: 'No generic smiling business people pretending to be memes. Only genuine, raw, unscripted cultural accidents that achieved digital immortality.',
    },
    {
      num: '03',
      title: 'Direct video iframes with original sound',
      desc: 'No heavy video download buffering. Embedded responsive players featuring the authentic audio: Astronomia beats, KEKW wheezes, and Bollywood kinetic soundtracks.',
    },
    {
      num: '04',
      title: 'Preserved for digital archaeology',
      desc: 'From early 2000s cinema dialogues to post-modern phonk reels, every entry is stamped with verified origin lore so future historians understand our humor.',
    },
  ];

  return (
    <section id="standard" className="py-24 bg-[#0a0b0e] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
            ✦ The Curatorial Standard
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 font-normal tracking-tight">
            Fewer memes, <br />
            <span className="italic font-light text-amber-300">curated properly.</span>
          </h2>
          <p className="font-sans text-base text-stone-400 leading-relaxed font-light">
            Why 99% of meme pages fail: they prioritize infinite volume over unforgettable soul. We do the opposite.
          </p>
        </div>

        {/* 2-Column Layout: Left Sticky Animation Frame + Right Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hrithik Roshan Dancing GIF + Sovereign Smirk */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone-900 border-2 border-stone-800 shadow-2xl p-4 flex flex-col items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/memes/hrithik_dance.gif"
                  alt="Hrithik Dance Animation"
                  fill
                  unoptimized
                  className="object-contain p-2"
                />
              </div>

              <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-stone-950/85 backdrop-blur-md border border-stone-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                    Kinetic Masterpiece
                  </div>
                  <div className="font-serif text-lg text-stone-100">
                    Ek Pal Ka Jeena (2000)
                  </div>
                </div>
                <button
                  onClick={() => soundFx.airhorn()}
                  className="p-2 rounded-xl bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-lg"
                  title="Airhorn"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-center font-mono text-xs text-stone-500">
              Figure 1.0: Undefeated kinetic swagger across two decades.
            </div>
          </div>

          {/* Right Column: The 4 Tenets */}
          <div className="lg:col-span-7 space-y-8">
            {tenets.map((t) => (
              <div
                key={t.num}
                className="p-8 rounded-3xl bg-stone-900/40 border border-stone-800/80 hover:border-amber-400/40 transition-all space-y-3"
              >
                <div className="font-mono text-xs text-amber-400 font-semibold">
                  TENET {t.num}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal">
                  {t.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
