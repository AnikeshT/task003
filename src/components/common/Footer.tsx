import React from 'react';
import { Flame, Heart, Sparkles, Shield, Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 text-slate-400 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐐</span>
              <span className="font-display font-extrabold text-2xl text-white">
                GOAT<span className="text-dank-green">MEMES</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The internet’s definitive cultural comedy repository. Curating certified GOAT tier memes from Bollywood to the British Isles, from Balkan garages to Silicon Valley.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>🇮🇳 100% Desi Approved</span>
              <span>•</span>
              <span>🇪🇺 Euro Certified</span>
              <span>•</span>
              <span>🌍 Universal Lore</span>
            </div>
          </div>

          {/* Territories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Meme Territories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400 hover:text-dank-saffron transition-colors cursor-pointer">
                  🇮🇳 Indian Legends (Hera Pheri, Wasseypur, TMKOC)
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-dank-blue transition-colors cursor-pointer">
                  🇪🇸 Spain & Mediterranean (El Risitas / KEKW)
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-dank-purple transition-colors cursor-pointer">
                  🇬🇧 UK Banter & European Cinema
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-dank-green transition-colors cursor-pointer">
                  🌍 Global Icons (GigaChad, Smudge Cat, Pedro)
                </span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Vault Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  🔊 Zero-Latency Web Audio Soundboard
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  🎨 In-Browser Meme Generator Canvas
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  🎲 Dopamine Roulette Wheel
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  🎬 Fullscreen Video Clips Feed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} GOATMEMES Universal Vault. Built for pure culture and dopamine.
          </div>
          <div className="flex items-center gap-4">
            <span>No copyright intended. Satirical historical preservation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
