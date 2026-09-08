import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Set volume ke 50%
      audioRef.current.volume = 0.5;

      // Restore posisi audio terakhir dari sessionStorage (jika ada)
      const savedTime = sessionStorage.getItem('sfx_current_time');
      if (savedTime) {
        audioRef.current.currentTime = parseFloat(savedTime);
      }

      // Simpan posisi audio secara berkala
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          sessionStorage.setItem('sfx_current_time', audioRef.current.currentTime);
        }
      };
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

      // Coba autoplay saat pertama kali dimuat
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay diblokir browser tanpa interaksi pengguna
            setIsPlaying(false);

            // Jalankan audio otomatis pada klik pertama pengunjung di area manapun
            const handleFirstInteraction = () => {
              if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
              window.removeEventListener('click', handleFirstInteraction);
            };
            window.addEventListener('click', handleFirstInteraction);
          });
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      {/* Audio element - Mengutamakan file lokal /audio/bg-sound.mp3, dengan fallback online */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/sfx.mp3" type="audio/mpeg" />
        <source src="/audio/bg-sound.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Button Control */}
      <div className="fixed bottom-6 right-6 z-[99]">
        <button
          onClick={toggleSound}
          className={`group relative flex items-center justify-center p-3 rounded-full backdrop-blur-md shadow-2xl transition-all duration-300 border ${
            isPlaying 
              ? 'bg-forest/90 text-teal border-teal/40 hover:bg-forest' 
              : 'bg-dark/80 text-white/70 border-white/20 hover:bg-dark'
          }`}
          title={isPlaying ? "Matikan Musik Background" : "Putar Musik Background"}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1.5">
              <Volume2 size={20} className="animate-pulse text-teal" />
              {/* Animation sound waves */}
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-full bg-teal animate-[bounce_1s_infinite_100ms]"></span>
                <span className="w-0.5 h-2/3 bg-teal animate-[bounce_1s_infinite_300ms]"></span>
                <span className="w-0.5 h-4/5 bg-teal animate-[bounce_1s_infinite_200ms]"></span>
              </span>
            </div>
          ) : (
            <VolumeX size={20} className="text-white/60" />
          )}
        </button>
      </div>
    </>
  );
}
