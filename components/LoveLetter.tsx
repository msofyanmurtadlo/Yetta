import React, { useState } from 'react';
import { Mail, X, Heart } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Envelope Trigger */}
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="relative w-64 h-40 bg-rose-200 rounded-lg shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden border border-rose-300">
            {/* Envelope Flap visual */}
            <div className="absolute top-0 left-0 w-full h-full bg-rose-100/50 clip-triangle"></div>
            
            <div className="z-10 bg-white p-3 rounded-full shadow-md animate-bounce">
                <Mail className="text-rose-500 w-8 h-8" />
            </div>
            
            <div className="absolute bottom-4 font-script text-xl text-rose-800 opacity-80 rotate-[-5deg]">
                For You
            </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500 animate-pulse">
            Tap to open the letter
        </p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal Content */}
            <div className="bg-white/90 backdrop-blur-xl w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-scale-up border border-white/50">
                
                {/* Header */}
                <div className="bg-rose-100 p-4 flex justify-between items-center border-b border-rose-200">
                    <h3 className="font-script text-2xl text-rose-600">My Dearest Yetta...</h3>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full hover:bg-rose-200 transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Letter Body */}
                <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="prose prose-rose prose-sm md:prose-base font-light text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Happy 19th Birthday, <span className="font-semibold text-rose-500">Sayangg!</span> ❤️
                        </p>
                        <p className="mb-4">
                            Engga kerasa ya, sekarang kamu udah 19 tahun. Selamat menuju dewasa, cantikku. 
                            Di hari yang super spesial ini, aku cuma mau bilang terima kasih banyak. 
                            Terima kasih karena kamu sudah lahir ke dunia ini, terima kasih sudah bertahan sejauh ini, 
                            dan terima kasih sudah mengizinkan aku jadi bagian dari perjalanan hidup kamu.
                        </p>
                        <p className="mb-4">
                            Kamu itu... luar biasa. 19 tahun mungkin terdengar muda, tapi kedewasaan dan 
                            kebaikan hati kamu selalu bikin aku kagum. Aku suka banget liat senyum kamu, 
                            liat semangat kamu, bahkan liat muka ngambek kamu (hehe).
                        </p>
                        <p className="mb-4">
                            Doaku buat kamu sederhana tapi tulus, Sayangg. Semoga di usia 19 ini, kamu jadi lebih bahagia, 
                            lebih kuat, dan semua impian kamu pelan-pelan tercapai. Inget ya, kalau capek, ada aku. 
                            Kalau sedih, ada bahu aku. Jangan pernah ngerasa sendirian ya?
                        </p>
                        <p className="mb-6">
                            I love you more than words can say. Let's make your 19th year the best one yet! 
                            Happy Birthday, My Princess.
                        </p>
                        <div className="flex justify-end mt-8">
                            <div className="text-right">
                                <p className="font-script text-2xl text-rose-500">With all my love,</p>
                                <p className="text-sm text-gray-500 mt-1">Sofyan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      <style>{`
        .clip-triangle {
            clip-path: polygon(0 0, 50% 50%, 100% 0);
        }
        @keyframes scale-up {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
            animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
};