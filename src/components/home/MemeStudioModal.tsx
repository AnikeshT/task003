'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Copy, Palette, Sparkles, Check } from 'lucide-react';
import { MemeItem } from '@/types/meme';
import { GOAT_MEMES } from '@/data/memes';
import { soundFx } from '@/utils/soundEffects';

interface MemeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMeme?: MemeItem | null;
}

export const MemeStudioModal: React.FC<MemeStudioModalProps> = ({
  isOpen,
  onClose,
  initialMeme,
}) => {
  const [selectedMeme, setSelectedMeme] = useState<MemeItem>(initialMeme || GOAT_MEMES[0]);
  const [topText, setTopText] = useState('WHEN THE SCRIPT RUNS');
  const [bottomText, setBottomText] = useState('ON THE FIRST TRY');
  const [fontSize, setFontSize] = useState<number>(36);
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (initialMeme) {
      setSelectedMeme(initialMeme);
    }
  }, [initialMeme]);

  // Re-draw canvas on inputs change
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = selectedMeme.mediaUrl;

    img.onload = () => {
      canvas.width = 600;
      canvas.height = 450;

      // Draw background image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Text styling
      ctx.font = `900 ${fontSize}px Impact, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = Math.max(4, fontSize / 8);
      ctx.textAlign = 'center';
      ctx.lineJoin = 'round';

      // Top text
      if (topText.trim()) {
        const topY = fontSize + 15;
        ctx.strokeText(topText.toUpperCase(), canvas.width / 2, topY);
        ctx.fillText(topText.toUpperCase(), canvas.width / 2, topY);
      }

      // Bottom text
      if (bottomText.trim()) {
        const bottomY = canvas.height - 25;
        ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
        ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
      }
    };
  }, [isOpen, selectedMeme, topText, bottomText, fontSize, textColor]);

  if (!isOpen) return null;

  const handleDownload = () => {
    soundFx.airhorn();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `goat-meme-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleCopy = async () => {
    soundFx.pop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch {
      // clipboard write error fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-dark-900 border border-dark-700 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-dark-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-dank-purple/20 text-dank-purple border border-dank-purple/40">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                GOAT Meme Studio
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Generate high-res Impact memes • Instant download & copy
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.pop();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas Preview */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-dark-950 p-4 rounded-2xl border border-dark-800">
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto rounded-xl shadow-2xl border border-dark-700"
            />
            <div className="text-[11px] font-mono text-slate-500 mt-2">
              Preview (Live Render on Canvas)
            </div>
          </div>

          {/* Right Controls */}
          <div className="lg:col-span-5 space-y-5">
            {/* Template Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300">
                Choose Template:
              </label>
              <div className="grid grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 bg-dark-950 rounded-xl border border-dark-800">
                {GOAT_MEMES.filter((m) => m.type === 'image').map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundFx.pop();
                      setSelectedMeme(m);
                    }}
                    className={`p-2 rounded-lg text-left text-[11px] font-mono truncate transition-all ${
                      selectedMeme.id === m.id
                        ? 'bg-dank-green text-dark-950 font-bold'
                        : 'bg-dark-850 text-slate-300 hover:bg-dark-800'
                    }`}
                  >
                    {m.flag} {m.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Text */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300">
                Top Text:
              </label>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                placeholder="TOP TEXT..."
                className="w-full bg-dark-950 border border-dark-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono uppercase focus:outline-none focus:border-dank-green"
              />
            </div>

            {/* Bottom Text */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300">
                Bottom Text:
              </label>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                placeholder="BOTTOM TEXT..."
                className="w-full bg-dark-950 border border-dark-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono uppercase focus:outline-none focus:border-dank-green"
              />
            </div>

            {/* Font Size & Color */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Size: {fontSize}px
                </label>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-dank-green cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  Text Color:
                </label>
                <div className="flex items-center gap-2">
                  {['#FFFFFF', '#F59E0B', '#10B981', '#EF4444'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setTextColor(c)}
                      className={`w-7 h-7 rounded-full border-2 ${
                        textColor === c ? 'border-white scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Download & Copy Buttons */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 py-3 px-4 rounded-xl bg-dank-green text-dark-950 font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-2 shadow-lg shadow-dank-green/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PNG</span>
              </button>

              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-dank-green" />
                    <span className="text-dank-green">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
