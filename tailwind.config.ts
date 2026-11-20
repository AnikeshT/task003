import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080C',
          900: '#0B0F17',
          850: '#101622',
          800: '#171F2E',
          700: '#232E42',
          600: '#34425B',
        },
        dank: {
          green: '#10B981',
          'green-glow': '#00F59B',
          purple: '#8B5CF6',
          yellow: '#F59E0B',
          red: '#EF4444',
          blue: '#3B82F6',
          saffron: '#FF9933',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'system-ui', 'sans-serif'],
        meme: ['"Impact"', '"Anton"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'bounce-short': 'bounce 0.6s ease-in-out 1',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
