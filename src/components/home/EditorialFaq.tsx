'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { soundFx } from '@/utils/soundEffects';

export const EditorialFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who actually is GigaChad, and is he a real human being?',
      a: 'GigaChad is based on photos of Ernest Khalimov, a fitness model photographed by Russian artist Krista Sudmalis for the SLEEK’N’TEARS project. Paired with heavy phonk soundtracks, he became the universal internet symbol of the unbothered, enlightened "Average Enjoyer".',
    },
    {
      q: 'Why did Raju believe money would double in 25 days in Phir Hera Pheri?',
      a: 'Because Anuradha presented an elaborate chart and promised 100% returns under Laxmi Chit Fund. Raju subsequently dragged Shyam and Babu Bhaiya into the scheme, giving birth to the immortal "Zor zor se bolke logon ko scheme bata de" dialogue.',
    },
    {
      q: 'Why does Smudge the Cat hate salad with such pure fury?',
      a: 'Smudge is a Canadian domestic cat who sits at human dining chairs. When his owner Miranda placed a plate of lettuce in front of him, he made an expression of unprecedented disgust. Paired with Real Housewives footage in 2019, it became one of the most shared comparison templates in history.',
    },
    {
      q: 'What makes Hrithik Roshan’s Ek Pal Ka Jeena wave step undefeated after two decades?',
      a: 'Released in January 2000 in Kaho Naa... Pyaar Hai, the black mesh shirt, backwards visor, and isolated shoulder-to-wrist kinetic wave redefined Bollywood dance choreography. It remains the universal internet celebration for passing an exam or fixing a production bug.',
    },
    {
      q: 'How does the in-browser Meme Generator Studio work?',
      a: 'Click "Remix in Studio" on any meme card or use the Studio button in the header. You can pick templates, type custom Top & Bottom text rendered in authentic Impact font with stroke shadows, and export a crisp PNG directly to your device or clipboard with zero watermarks.',
    },
  ];

  const toggle = (idx: number) => {
    soundFx.pop();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#0a0b0e] border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
            ✦ Cultural Inquiries
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 font-normal tracking-tight">
            Good to know <br />
            <span className="italic font-light text-amber-300">before you scroll.</span>
          </h2>
        </div>

        <div className="divide-y divide-stone-800 border-y border-stone-800">
          {faqs.map((f, idx) => (
            <div key={idx} className="py-6">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-serif text-stone-200 hover:text-amber-300 transition-colors gap-4"
              >
                <span>{f.q}</span>
                <span className="p-1 rounded-full bg-stone-900 border border-stone-800 text-stone-400">
                  {openIdx === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {openIdx === idx && (
                <p className="mt-4 text-sm sm:text-base text-stone-400 font-light leading-relaxed font-sans animate-in fade-in duration-200">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
