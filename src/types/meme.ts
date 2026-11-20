export type MemeRegion = 'india' | 'europe' | 'usa' | 'global';

export type MemeType = 'image' | 'video' | 'gif' | 'template';

export interface MemeItem {
  id: string;
  title: string;
  punchline: string;
  region: MemeRegion;
  regionLabel: string;
  flag: string;
  type: MemeType;
  mediaUrl: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  templateUrl?: string;
  tags: string[];
  views: number;
  reactions: {
    based: number; // 🔥
    dead: number;  // 💀
    goat: number;  // 🐐
    clown: number; // 🤡
    crying: number;// 😭
  };
  commentsCount: number;
  originYear: number | string;
  lore: string;
  audioEffect?: 'vine-boom' | 'bruh' | 'emotional-damage' | 'airhorn' | 'phonk' | 'sad-violin';
}

export type FilterCategory = 'all' | 'trending' | 'goated' | 'india' | 'europe' | 'global' | 'video' | 'generator';
