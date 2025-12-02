import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { MusicPlayer } from './components/MusicPlayer';
import { LoveLetter } from './components/LoveLetter';
import { Gallery } from './components/Gallery';
import { FloatingHearts } from './components/FloatingHearts';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Handle the preloader sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // 4.5 seconds for the opening sequence
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-rose-200 text-gray-800">
      
      {/* Background Floating Hearts Animation */}
      <FloatingHearts />

      {loading ? (
        <Preloader />
      ) : (
        <main className="relative z-10 flex flex-col items-center min-h-screen px-4 pb-20 animate-fade-in">
          
          {/* Fake Music Player - Fixed or sticky */}
          <div className="w-full max-w-md mt-6 mb-8 sticky top-4 z-50">
            <MusicPlayer />
          </div>

          <div className="w-full max-w-lg flex flex-col gap-12 items-center">
            {/* Hero Section */}
            <Hero />

            {/* Interactive Letter */}
            <LoveLetter />

            {/* Gallery Section */}
            <Gallery />

            <footer className="mt-12 text-center text-sm text-rose-400 font-light pb-8">
              <p>Made with love for Yetta</p>
              <p className="text-xs opacity-70">Forever & Always</p>
            </footer>
          </div>
        </main>
      )}
    </div>
  );
}