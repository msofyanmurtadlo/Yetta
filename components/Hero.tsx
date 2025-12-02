import React, { useState, useEffect } from "react";

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
    <section className="text-center mt-8 md:mt-10 px-4 w-full max-w-full overflow-hidden">
      <h2 className="text-rose-400 tracking-widest text-xs md:text-sm font-semibold uppercase mb-3 animate-pulse">
        Sweet Nineteen
      </h2>

      {/* Container for Name - responsive sizing and flexible height to prevent cutoff */}
      <div className="relative flex justify-center items-center min-h-[60px] md:min-h-[100px]">
        <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 py-2 leading-tight px-1 break-words max-w-full">
          {displayedName}
          <span className="animate-blink text-rose-400 font-sans ml-1">|</span>
        </h1>
      </div>

      <p className="mt-4 text-gray-600 font-light text-sm sm:text-lg opacity-0 animate-fade-in-delayed px-2">
        Happy 19th Birthday, My Love
      </p>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 2.5s forwards;
        }
      `}</style>
    </section>
  );
};
