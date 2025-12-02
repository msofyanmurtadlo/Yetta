import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [text, setText] = useState("Make a wish...");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in first text
    setTimeout(() => setOpacity(1), 500);
    
    // Fade out first text
    setTimeout(() => setOpacity(0), 2000);

    // Change text and fade in
    setTimeout(() => {
      setText("Tunggu sebentar ya, Sayangg...");
      setOpacity(1);
    }, 2500);

    // Final fade out before unmount handled by parent
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000">
      <div 
        className="text-pink-200 font-script text-3xl md:text-4xl transition-opacity duration-1000 ease-in-out"
        style={{ opacity: opacity }}
      >
        {text}
      </div>
    </div>
  );
};