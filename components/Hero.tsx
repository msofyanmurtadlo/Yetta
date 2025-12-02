import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const name = "Yetta Rasikah Zayyan";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= name.length) {
        setDisplayedName(name.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center mt-10">
      <h2 className="text-rose-400 tracking-widest text-xs md:text-sm font-semibold uppercase mb-2 animate-pulse">
        Sweet Nineteen
      </h2>
      <h1 className="font-script text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 py-2 h-20 md:h-24">
        {displayedName}
        <span className="animate-blink text-rose-400">|</span>
      </h1>
      <p className="mt-4 text-gray-600 font-light text-lg opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
        Happy 19th Birthday, My Love
      </p>
    </section>
  );
};