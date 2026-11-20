'use client';

import React, { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { DancingCatLoader } from '@/components/common/DancingCatLoader';
import { HeroMemeBanner } from '@/components/home/HeroMemeBanner';
import { MemeFeed } from '@/components/home/MemeFeed';
import { MemeSoundboard } from '@/components/home/MemeSoundboard';
import { MemeStudioModal } from '@/components/home/MemeStudioModal';
import { MemeRouletteModal } from '@/components/home/MemeRouletteModal';
import { ReelPlayerModal } from '@/components/home/ReelPlayerModal';
import { RandomMemeDropToast } from '@/components/home/RandomMemeDropToast';
import { GOAT_MEMES } from '@/data/memes';
import { MemeItem } from '@/types/meme';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSoundboardOpen, setIsSoundboardOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isRouletteOpen, setIsRouletteOpen] = useState(false);
  const [isReelsOpen, setIsReelsOpen] = useState(false);
  const [selectedStudioMeme, setSelectedStudioMeme] = useState<MemeItem | null>(null);

  const handleOpenStudioWithMeme = (meme: MemeItem) => {
    setSelectedStudioMeme(meme);
    setIsStudioOpen(true);
  };

  return (
    <main className="min-h-screen bg-dark-950 text-slate-100 flex flex-col justify-between selection:bg-dank-green selection:text-black">
      {/* 1. Dancing Cat Fullscreen Loader & Floating Mascot */}
      <DancingCatLoader />

      <div>
        {/* Navigation Bar */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenRoulette={() => setIsRouletteOpen(true)}
          onOpenStudio={() => {
            setSelectedStudioMeme(null);
            setIsStudioOpen(true);
          }}
          onOpenSoundboard={() => setIsSoundboardOpen(true)}
          onOpenReels={() => setIsReelsOpen(true)}
        />

        {/* Hero Section with Featured Sovereign Smirk GOAT */}
        <HeroMemeBanner
          onOpenRoulette={() => setIsRouletteOpen(true)}
          onOpenStudio={() => {
            setSelectedStudioMeme(null);
            setIsStudioOpen(true);
          }}
          onOpenSoundboard={() => setIsSoundboardOpen(true)}
        />

        {/* Interactive Meme Stream Feed with Real Meme Images */}
        <MemeFeed
          memes={GOAT_MEMES}
          searchQuery={searchQuery}
          onOpenStudioWithMeme={handleOpenStudioWithMeme}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* 2. Every 10 Seconds Random Meme Drop Toast */}
      <RandomMemeDropToast />

      {/* Modals & Tools */}
      <MemeSoundboard
        isOpen={isSoundboardOpen}
        onClose={() => setIsSoundboardOpen(false)}
      />

      <MemeStudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        initialMeme={selectedStudioMeme}
      />

      <MemeRouletteModal
        isOpen={isRouletteOpen}
        onClose={() => setIsRouletteOpen(false)}
        onOpenStudioWithMeme={handleOpenStudioWithMeme}
      />

      <ReelPlayerModal
        isOpen={isReelsOpen}
        onClose={() => setIsReelsOpen(false)}
      />
    </main>
  );
}
