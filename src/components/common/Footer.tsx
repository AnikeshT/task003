import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090c] border-t border-stone-800 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-light tracking-[0.2em] text-stone-100 uppercase block">
                MEMEVAULT
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block">
                The Curated Archive of Digital Absurdity
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-light max-w-sm">
              Dedicated to the preservation, documentation, and continuous celebration of humanity's finest unscripted comedic achievements.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-stone-200 font-semibold">
              Curatorial Standards
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>100% Tested in Group Chats</li>
              <li>Zero Synthetic AI Slop</li>
              <li>Responsive Embedded Iframes</li>
              <li>Verified Historical Lore</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-stone-200 font-semibold">
              Vault Implements
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>Zero-Latency Soundboard</li>
              <li>In-Browser Impact Studio</li>
              <li>10-Second Random Drop Engine</li>
              <li>Dancing Cat Mascot Protocol</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} MEMEVAULT. All rights reserved for global dopamine preservation.
          </div>
          <div>
            Built with pure soul & zero corporate fluff.
          </div>
        </div>
      </div>
    </footer>
  );
};
