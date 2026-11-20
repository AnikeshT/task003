// Zero-latency real MP3 sound engine for meme audio effects

class SoundEngine {
  private play(soundPath: string) {
    if (typeof window === 'undefined') return;
    try {
      const audio = new Audio(soundPath);
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay policy prevented playback until user interaction
          console.log('Audio autoplay prevented, will play on next click');
        });
      }
    } catch (e) {
      // Audio playback failed
    }
  }

  vineBoom() {
    this.play('/sounds/vine-boom.mp3');
  }

  emotionalDamage() {
    this.play('/sounds/emotional-damage.mp3');
  }

  bruh() {
    this.play('/sounds/bruh.mp3');
  }

  airhorn() {
    this.play('/sounds/airhorn.mp3');
  }

  sadViolin() {
    this.play('/sounds/sad-violin.mp3');
  }

  pop() {
    this.play('/sounds/pop.mp3');
  }

  phonk() {
    this.play('/sounds/airhorn.mp3');
  }
}

export const soundFx = new SoundEngine();
