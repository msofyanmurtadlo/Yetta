import React from 'react';

export const FloatingHearts: React.FC = () => {
  // Generate random hearts for background
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 10}s`, // 10-20s duration
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.1,
    size: Math.random() * 20 + 10 // 10-30px
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-rose-300 animate-float"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: heart.animationDuration,
            animationDelay: heart.delay,
          }}
        >
          ❤
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};