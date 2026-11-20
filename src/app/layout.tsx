import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GOATMEMES — The Universal Vault | 🇮🇳 Indian, 🇪🇺 European & 🌍 Global Legends',
  description:
    'The undisputed digital archive of the internet’s greatest memes. From Phulera to Chipiona, Hera Pheri to El Risitas, GigaChad to Smudge the Cat. High-res templates, video reels, soundboard, and instant meme generator.',
  keywords: [
    'memes',
    'indian memes',
    'european memes',
    'goated memes',
    'hera pheri memes',
    'el risitas kekw',
    'gigachad',
    'meme generator',
    'meme soundboard',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-950 text-slate-100 min-h-screen selection:bg-dank-green selection:text-black">
        {children}
      </body>
    </html>
  );
}
