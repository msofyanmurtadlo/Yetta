import React from 'react';

const Polaroid: React.FC<{ src: string; caption: string; rotation: string; delay: string }> = ({ src, caption, rotation, delay }) => (
  <div 
    className={`bg-white p-3 pb-8 shadow-lg rounded-sm transform transition-transform hover:scale-110 hover:z-20 duration-300 w-full max-w-[180px] ${rotation}`}
    style={{ animationDelay: delay }}
  >
    <div className="aspect-square bg-gray-200 overflow-hidden mb-3">
        <img 
            src={src} 
            alt="Memory" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
    </div>
    <p className="font-script text-center text-xl text-gray-700">{caption}</p>
  </div>
);

export const Gallery: React.FC = () => {
  return (
    <div className="w-full">
        <h3 className="text-center font-script text-3xl text-rose-400 mb-8 opacity-90">Our Memories</h3>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 flex-wrap pb-10">
            <Polaroid 
                src="https://hbdyetta.netlify.app/bg.jpg" 
                caption="Senyum Kamu" 
                rotation="-rotate-6"
                delay="0s"
            />
            <Polaroid 
                src="https://ishowpen.b-cdn.net/photo_2025-12-02_21-55-23.jpg" 
                caption="Kita Berdua" 
                rotation="rotate-3 md:-translate-y-6"
                delay="0.2s"
            />
            <Polaroid 
                src="https://ishowpen.b-cdn.net/photo_2025-12-02_21-55-23%20(2).jpg" 
                caption="Favoritku" 
                rotation="-rotate-3 md:rotate-6"
                delay="0.4s"
            />
        </div>
    </div>
  );
};