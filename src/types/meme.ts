export type MemeVibe = 'legend' | 'chaos' | 'cinema' | 'relatable' | 'brainrot';

export type MemeType = 'image' | 'video' | 'gif' | 'template';

export interface MemeItem {
  id: string;
  title: string;
  punchline: string;
  vibe: MemeVibe;
  vibeLabel: string;
  era: 'golden-era' | 'modern-chaos';
  eraLabel: string;
  type: MemeType;
  mediaUrl: string;
  thumbnailUrl?: string;
  iframeUrl?: string;
  templateUrl?: string;
  tags: string[];
  views: string;
  reactions: {
    based: number; // 🔥
    dead: number;  // 💀
    goat: number;  // 🐐
    clown: number; // 🤡
  };
  originYear: number | string;
  lore: string;
  audioEffect?: 'vine-boom' | 'bruh' | 'emotional-damage' | 'airhorn' | 'phonk' | 'sad-violin' | 'pop';
}

export type FilterVibe = 'all' | 'legend' | 'chaos' | 'cinema' | 'relatable' | 'brainrot';
