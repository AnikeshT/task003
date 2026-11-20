'use client';

import React, { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { DancingCatLoader } from '@/components/common/DancingCatLoader';
import { EditorialHero } from '@/components/home/EditorialHero';
import { EditorialHorizontalRail } from '@/components/home/EditorialHorizontalRail';
import { EditorialRhythmGrid } from '@/components/home/EditorialRhythmGrid';
import { EditorialStandard } from '@/components/home/EditorialStandard';
import { MemeFeed } from '@/components/home/MemeFeed';
import { EditorialStarlitQuote } from '@/components/home/EditorialStarlitQuote';
import { EditorialFaq } from '@/components/home/EditorialFaq';
import { MemeSoundboard } from '@/components/home/MemeSoundboard';
import { MemeStudioModal } from '@/components/home/MemeStudioModal';
import { MemeRouletteModal } from '@/components/home/MemeRouletteModal';
import { RandomMemeDropToast } from '@/components/home/RandomMemeDropToast';
import { GOAT_MEMES } from '@/data/memes';
import { MemeItem } from '@/types/meme';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVibeFilter, setActiveVibeFilter] = useState('all');
  const [isSoundboardOpen, setIsSoundboardOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isRouletteOpen, setIsRouletteOpen] = useState(false);
  const [selectedStudioMeme, setSelectedStudioMeme] = useState<MemeItem | null>(null);

  const handleOpenStudioWithMeme = (meme: MemeItem) => {
    setSelectedStudioMeme(meme);
    setIsStudioOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0c0d12] text-stone-100 flex flex-col justify-between selection:bg-amber-400 selection:text-stone-950 font-sans">
      {/* 1. Dancing Cat Loader & Floating Mascot */}
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
        />

        {/* 2. Editorial Hero (Sarab-inspired) with Hrithik Dance & Sovereign Smirk */}
        <EditorialHero
          onSearch={setSearchQuery}
          onOpenRoulette={() => setIsRouletteOpen(true)}
          onOpenStudio={() => {
            setSelectedStudioMeme(null);
            setIsStudioOpen(true);
          }}
          onOpenSoundboard={() => setIsSoundboardOpen(true)}
        />

        {/* 3. Horizontal Curated Rail ("Six memes we'd send to our closest friends") */}
        <EditorialHorizontalRail
          memes={GOAT_MEMES}
          onSelectMeme={handleOpenStudioWithMeme}
        />

        {/* 4. Choose Your Rhythm Bento Grid (5 comedic categories) */}
        <EditorialRhythmGrid
          onSelectVibe={(vibe) => setActiveVibeFilter(vibe)}
        />

        {/* 5. The Curatorial Standard (Sticky Hrithik Dance + 4 Tenets) */}
        <EditorialStandard />

        {/* 6. Complete Curated Archive Feed (With Video Iframes & Clean Ratios) */}
        <MemeFeed
          memes={GOAT_MEMES}
          searchQuery={searchQuery}
          activeVibeFilter={activeVibeFilter}
          onOpenStudioWithMeme={handleOpenStudioWithMeme}
        />

        {/* 7. Late-Night Starlit Breakout Banner */}
        <EditorialStarlitQuote
          onOpenRoulette={() => setIsRouletteOpen(true)}
          onOpenSoundboard={() => setIsSoundboardOpen(true)}
        />

        {/* 8. Accordion Inquiries & Cultural Lore */}
        <EditorialFaq />
      </div>

      {/* Footer */}
      <Footer />

      {/* 9. Live 10-Second Random Meme Drop */}
      <RandomMemeDropToast />

      {/* Modals & Interactive Tools */}
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
    </main>
  );
}
