'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, Skull, Crown, Laugh, Volume2, Share2, Palette, Info, Check, Eye, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MemeItem } from '@/types/meme';
import { soundFx } from '@/utils/soundEffects';

interface MemeCardProps {
  meme: MemeItem;
  onOpenStudioWithMeme: (meme: MemeItem) => void;
}

export const MemeCard: React.FC<MemeCardProps> = ({ meme, onOpenStudioWithMeme }) => {
  const [reactions, setReactions] = useState(meme.reactions);
  const [userReacted, setUserReacted] = useState<string | null>(null);
  const [showLore, setShowLore] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const handleReaction = (type: 'based' | 'dead' | 'goat' | 'clown') => {
    soundFx.pop();
    if (type === 'goat') {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F59E0B', '#10B981', '#8B5CF6'],
      });
      soundFx.airhorn();
    } else if (type === 'dead') {
      soundFx.bruh();
    } else if (type === 'based') {
      soundFx.vineBoom();
    }

    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    setUserReacted(type);
  };

  const handlePlayAudioCue = () => {
    if (meme.audioEffect === 'vine-boom') soundFx.vineBoom();
    else if (meme.audioEffect === 'bruh') soundFx.bruh();
    else if (meme.audioEffect === 'emotional-damage') soundFx.emotionalDamage();
    else if (meme.audioEffect === 'airhorn') soundFx.airhorn();
    else if (meme.audioEffect === 'sad-violin') soundFx.sadViolin();
    else soundFx.pop();
  };

  const handleCopyLink = () => {
    soundFx.pop();
    navigator.clipboard?.writeText?.(window.location.origin + '#' + meme.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={meme.id}
      className="bg-stone-900/60 border border-stone-800 hover:border-stone-700/80 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Header: Vibe & Era */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-stone-800/80 bg-stone-950/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <div>
              <span className="text-xs font-mono font-medium text-stone-200 block">
                {meme.vibeLabel}
              </span>
              <span className="text-[10px] font-mono text-stone-500">
                {meme.eraLabel} • {meme.originYear}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {meme.audioEffect && (
              <button
                onClick={handlePlayAudioCue}
                className="p-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-amber-300 transition-colors"
                title={`Play Audio (${meme.audioEffect})`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            )}

            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-stone-800/60 text-stone-300 border-stone-700">
              {meme.iframeUrl ? '🎬 Video Iframe' : meme.type === 'gif' ? '⚡ Motion GIF' : '🖼️ Classic Image'}
            </span>
          </div>
        </div>

        {/* Media Container with Proper Aspect Ratio (Never Scratched) */}
        <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
          {meme.iframeUrl && showIframe ? (
            <iframe
              src={meme.iframeUrl}
              title={meme.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="relative w-full h-full overflow-hidden bg-stone-950">
              <Image
                src={meme.mediaUrl}
                alt={meme.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
              />

              {meme.iframeUrl && (
                <button
                  onClick={() => setShowIframe(true)}
                  className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center transition-colors group/play"
                >
                  <div className="px-4 py-2 rounded-full bg-amber-400 text-stone-950 font-mono text-xs font-bold shadow-2xl flex items-center gap-2 group-hover/play:scale-105 transition-transform">
                    <span>▶ Play Clip</span>
                  </div>
                </button>
              )}
            </div>
          )}

          {/* Views badge */}
          <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-mono text-stone-300 flex items-center gap-1">
            <Eye className="w-3 h-3 text-amber-400" />
            <span>{meme.views}</span>
          </div>
        </div>

        {/* Narrative & Punchline */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-normal leading-snug group-hover:text-amber-300 transition-colors">
            {meme.title}
          </h3>

          <div className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 font-sans text-sm text-stone-300 leading-relaxed font-light">
            "{meme.punchline}"
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {meme.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-stone-400 bg-stone-800/50 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Lore Accordion */}
          <div className="pt-2">
            <button
              onClick={() => setShowLore(!showLore)}
              className="text-[11px] font-mono text-amber-400/90 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Info className="w-3 h-3" />
              <span>{showLore ? 'Hide Cultural Lore' : 'Historical Lore & Provenance'}</span>
            </button>
            {showLore && (
              <p className="mt-2 text-xs text-stone-400 font-sans bg-stone-950 p-3 rounded-xl border border-stone-800 leading-relaxed animate-in fade-in duration-200">
                {meme.lore}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Live Reactions & Actions */}
      <div className="p-4 sm:p-5 pt-3 border-t border-stone-800/80 bg-stone-950/40 space-y-3">
        {/* Reactions Row */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleReaction('based')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'based'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                : 'bg-stone-800/60 border-stone-700/80 text-stone-300 hover:border-amber-500/50'
            }`}
          >
            <span>🔥</span>
            <span className="text-[11px] font-medium">{reactions.based}</span>
          </button>

          <button
            onClick={() => handleReaction('dead')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'dead'
                ? 'bg-stone-500/20 border-stone-400 text-stone-200 shadow-sm'
                : 'bg-stone-800/60 border-stone-700/80 text-stone-300 hover:border-stone-500/50'
            }`}
          >
            <span>💀</span>
            <span className="text-[11px] font-medium">{reactions.dead}</span>
          </button>

          <button
            onClick={() => handleReaction('goat')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'goat'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-sm'
                : 'bg-stone-800/60 border-stone-700/80 text-stone-300 hover:border-emerald-500/50'
            }`}
          >
            <span>🐐</span>
            <span className="text-[11px] font-medium">{reactions.goat}</span>
          </button>

          <button
            onClick={() => handleReaction('clown')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'clown'
                ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-sm'
                : 'bg-stone-800/60 border-stone-700/80 text-stone-300 hover:border-rose-500/50'
            }`}
          >
            <span>🤡</span>
            <span className="text-[11px] font-medium">{reactions.clown}</span>
          </button>
        </div>

        {/* Action Buttons: Remix in Studio & Copy Share Link */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={() => {
              soundFx.pop();
              onOpenStudioWithMeme(meme);
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-stone-800/60 hover:bg-stone-800 border border-stone-700 text-xs font-mono text-stone-300 hover:text-amber-300 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span>Remix in Studio</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="py-2 px-3 rounded-xl bg-stone-800/60 hover:bg-stone-800 border border-stone-700 text-xs font-mono text-stone-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            title="Copy share link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
