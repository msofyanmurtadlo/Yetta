import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume awal tidak terlalu keras
    audio.volume = 0.5;

    // Coba autoplay saat komponen dimount (setelah preloader selesai)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log(
            "Autoplay dicegah oleh browser. Menunggu interaksi user.",
            error
          );
          setIsPlaying(false);
        });
    }

    const updateProgress = () => {
      if (audio) {
        const current = audio.currentTime;
        const dur = audio.duration;
        setCurrentTime(current);
        setDuration(dur || 0);
        if (dur) {
          setProgress((current / dur) * 100);
        }
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      const newTime = percentage * (audioRef.current.duration || 0);
      audioRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-lg flex items-center gap-4 transition-transform hover:scale-[1.02]">
      {/* Real Audio Element */}
      <audio
        ref={audioRef}
        src="https://hbdyetta.netlify.app/bg.mp3"
        loop
        preload="auto"
      />

      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-tr from-rose-300 to-purple-300 flex items-center justify-center shadow-inner ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        <Music className="w-6 h-6 text-white" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-end mb-1">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">Yetta's Day</h3>
            <p className="text-xs text-gray-500">Artist: Your Father</p>
          </div>
          <button
            onClick={togglePlay}
            className="text-rose-500 hover:text-rose-600 focus:outline-none transition-colors"
          >
            {isPlaying ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" />
            )}
          </button>
        </div>

        {/* Interactive Progress Bar */}
        <div
          className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-rose-400 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
