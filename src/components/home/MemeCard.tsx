'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Flame, Skull, Crown, Laugh, Volume2, Share2, Palette, Play, Pause, Info, Check, Eye } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showLore, setShowLore] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReaction = (type: 'based' | 'dead' | 'goat' | 'clown' | 'crying') => {
    soundFx.pop();
    if (type === 'goat') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10B981', '#8B5CF6', '#F59E0B'],
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
    else if (meme.audioEffect === 'phonk') soundFx.phonk();
    else if (meme.audioEffect === 'sad-violin') soundFx.sadViolin();
    else soundFx.pop();
  };

  const toggleVideoPlayback = () => {
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

  const handleCopyLink = () => {
    soundFx.pop();
    navigator.clipboard?.writeText?.(window.location.origin + '#' + meme.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={meme.id}
      className="bg-dark-900 border border-dark-800 hover:border-dark-700 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Header: Region & Tags */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-dark-800/80 bg-dark-900/50">
          <div className="flex items-center gap-2">
            <span className="text-xl">{meme.flag}</span>
            <div>
              <span className="text-xs font-mono font-semibold text-slate-300 block">
                {meme.regionLabel}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Origin: {meme.originYear}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {meme.audioEffect && (
              <button
                onClick={handlePlayAudioCue}
                className="p-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-dank-yellow transition-colors"
                title={`Play audio cue: ${meme.audioEffect}`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            )}

            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              meme.type === 'video'
                ? 'bg-dank-purple/20 text-dank-purple border-dank-purple/40'
                : 'bg-dank-green/20 text-dank-green border-dank-green/40'
            }`}>
              {meme.type === 'video' ? '🎬 Video' : '🖼️ Image'}
            </span>
          </div>
        </div>

        {/* Media Container */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-dark-950 overflow-hidden flex items-center justify-center">
          {meme.type === 'video' ? (
            <div className="relative w-full h-full cursor-pointer" onClick={toggleVideoPlayback}>
              <video
                ref={videoRef}
                src={meme.videoUrl}
                poster={meme.thumbnailUrl}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play / Pause overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                {!isPlaying && (
                  <div className="w-14 h-14 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                    <Play className="w-6 h-6 ml-1 text-dank-green" />
                  </div>
                )}
              </div>

              {/* Sound toggle button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="absolute bottom-3 right-3 p-2 rounded-xl bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs hover:bg-dark-800"
              >
                {isMuted ? '🔇 Muted' : '🔊 Sound'}
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full group/img overflow-hidden">
              <Image
                src={meme.mediaUrl}
                alt={meme.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Views badge */}
          <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-dark-950/75 backdrop-blur-md text-[10px] font-mono text-slate-300 flex items-center gap-1">
            <Eye className="w-3 h-3 text-slate-400" />
            <span>{(meme.views / 1000000).toFixed(1)}M</span>
          </div>
        </div>

        {/* Narrative & Punchline */}
        <div className="p-5 space-y-3">
          <h3 className="font-display font-bold text-lg text-white group-hover:text-dank-green transition-colors">
            {meme.title}
          </h3>

          <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-dark-800 font-sans text-sm text-slate-200 leading-snug">
            "{meme.punchline}"
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {meme.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-slate-400 bg-dark-850 px-2 py-0.5 rounded-md hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Lore Expandable Toggle */}
          <div className="pt-2">
            <button
              onClick={() => setShowLore(!showLore)}
              className="text-[11px] font-mono text-dank-yellow/80 hover:text-dank-yellow flex items-center gap-1 transition-colors"
            >
              <Info className="w-3 h-3" />
              <span>{showLore ? 'Hide Meme Lore' : 'Why is this GOATED? (Lore)'}</span>
            </button>
            {showLore && (
              <p className="mt-2 text-xs text-slate-400 font-sans bg-dark-950 p-3 rounded-xl border border-dark-800 leading-relaxed animate-in fade-in duration-200">
                {meme.lore}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Live Reactions & Actions */}
      <div className="p-4 sm:p-5 pt-3 border-t border-dark-800/80 bg-dark-950/40 space-y-3">
        {/* Reactions Row */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleReaction('based')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'based'
                ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-sm'
                : 'bg-dark-850 border-dark-700/80 text-slate-300 hover:border-orange-500/50'
            }`}
          >
            <span>🔥</span>
            <span className="text-[11px] font-bold">{reactions.based}</span>
          </button>

          <button
            onClick={() => handleReaction('dead')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'dead'
                ? 'bg-slate-500/20 border-slate-400 text-slate-200 shadow-sm'
                : 'bg-dark-850 border-dark-700/80 text-slate-300 hover:border-slate-500/50'
            }`}
          >
            <span>💀</span>
            <span className="text-[11px] font-bold">{reactions.dead}</span>
          </button>

          <button
            onClick={() => handleReaction('goat')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'goat'
                ? 'bg-dank-green/20 border-dank-green text-dank-green shadow-sm'
                : 'bg-dark-850 border-dark-700/80 text-slate-300 hover:border-dank-green/50'
            }`}
          >
            <span>🐐</span>
            <span className="text-[11px] font-bold">{reactions.goat}</span>
          </button>

          <button
            onClick={() => handleReaction('clown')}
            className={`py-1.5 px-2 rounded-xl text-xs font-mono flex items-center justify-center gap-1 border transition-all active:scale-95 ${
              userReacted === 'clown'
                ? 'bg-red-500/20 border-red-500 text-red-400 shadow-sm'
                : 'bg-dark-850 border-dark-700/80 text-slate-300 hover:border-red-500/50'
            }`}
          >
            <span>🤡</span>
            <span className="text-[11px] font-bold">{reactions.clown}</span>
          </button>
        </div>

        {/* Action Buttons: Remix in Studio & Copy Share Link */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={() => {
              soundFx.pop();
              onOpenStudioWithMeme(meme);
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-medium text-slate-300 hover:text-dank-green flex items-center justify-center gap-1.5 transition-colors"
          >
            <Palette className="w-3.5 h-3.5 text-dank-green" />
            <span>Remix in Studio</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="py-2 px-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            title="Copy share link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-dank-green" />
                <span className="text-dank-green">Copied</span>
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
