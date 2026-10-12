import React from 'react';
import { X, Home, Star, Send } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen2LangviQuizDoneProps {
  onNext: () => void;
  onClose?: () => void;
  onHome?: () => void;
  onRating?: () => void;
  onShare?: () => void;
  isWireframe?: boolean;
}

export const Screen2LangviQuizDone: React.FC<Screen2LangviQuizDoneProps> = ({
  onNext,
  onClose,
  onHome,
  onRating,
  onShare,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-6 pt-3 pb-6 text-center ${
        isWireframe ? 'bg-zinc-800 text-white' : 'bg-[#5B42F3] text-white'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-2 font-semibold text-white shrink-0">
        <span className="font-semibold text-[12px] tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-[11px]">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-white rounded-full" />
            <span className="w-0.5 h-1.5 bg-white rounded-full" />
            <span className="w-0.5 h-2 bg-white rounded-full" />
            <span className="w-0.5 h-2.5 bg-white rounded-full" />
          </div>
          {/* WiFi */}
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
          </svg>
          {/* Battery */}
          <div className="w-5 h-2.5 border border-white rounded-[3px] p-0.5 flex items-center relative">
            <div className="w-full h-full bg-white rounded-[1.5px]" />
            <div className="w-0.5 h-1 bg-white rounded-r-xs absolute -right-1" />
          </div>
        </div>
      </div>

      {/* Top Header: Close Button on the left */}
      <div className="flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onClose || onNext}
          className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-all active:scale-90 -ml-1"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
        <div className="w-8" />
      </div>

      {/* Center Hero: Mascot + ZZZ + Sparkles + Congrats Text */}
      <div className="my-auto flex flex-col items-center justify-center relative py-2">
        {/* Particle Overlay matching Image 571 Screen 2 */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          {/* 4 Diagonal Yellow Z's on Upper Right */}
          <div className="absolute right-3 top-2 flex flex-col items-center gap-0.5 transform rotate-12 select-none pointer-events-none">
            <span className="text-xl font-black text-[#FEE55A] leading-none drop-shadow-xs">Z</span>
            <span className="text-lg font-black text-[#FEE55A] leading-none ml-2 drop-shadow-xs">Z</span>
            <span className="text-base font-black text-[#FEE55A] leading-none ml-4 drop-shadow-xs">Z</span>
            <span className="text-sm font-black text-[#FEE55A] leading-none ml-6 drop-shadow-xs">Z</span>
          </div>

          {/* White 4-point Diamond Sparkles on Left */}
          <div className="absolute left-2 top-8 text-white text-2xl font-black select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute left-6 top-20 text-white/80 text-base font-black select-none pointer-events-none">
            ✦
          </div>

          {/* Yellow Plump Mascot with open mouth & 3 tufts */}
          <div className="transform scale-125 drop-shadow-lg">
            <LangviMascot
              type="yellow"
              expression="celebrate"
              size="lg"
              isWireframe={isWireframe}
              className="w-44 h-44"
            />
          </div>
        </div>

        {/* Headline: Congrats! The quiz is done */}
        <div className="space-y-0.5 pt-4 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
            Congrats! <br />
            The quiz is <br />
            done
          </h1>
        </div>
      </div>

      {/* Bottom 3 Action Cards matching Image 571 */}
      <div className="space-y-4 shrink-0">
        <div className="grid grid-cols-3 gap-3.5 px-2">
          {/* 1. Home Button (Warm Yellow Card) */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={onHome || onNext}
              className={`w-full aspect-square rounded-[22px] flex items-center justify-center transition-all active:scale-95 shadow-md ${
                isWireframe
                  ? 'bg-zinc-200 text-zinc-900'
                  : 'bg-[#FFDE59] text-white hover:bg-[#FCD34D]'
              }`}
            >
              <Home className="w-7 h-7 stroke-[2.5] fill-white text-white" />
            </button>
            <span className="text-xs font-semibold text-white/90">Home</span>
          </div>

          {/* 2. Rating Button (Pastel Pink Card) */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={onRating || onNext}
              className={`w-full aspect-square rounded-[22px] flex items-center justify-center transition-all active:scale-95 shadow-md ${
                isWireframe
                  ? 'bg-zinc-300 text-zinc-900'
                  : 'bg-[#F8B4D9] text-white hover:bg-[#F472B6]'
              }`}
            >
              <Star className="w-7 h-7 stroke-[2.5] fill-white text-white" />
            </button>
            <span className="text-xs font-semibold text-white/90">Rating</span>
          </div>

          {/* 3. Share Button (Sky Blue Card) */}
          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={onShare || onNext}
              className={`w-full aspect-square rounded-[22px] flex items-center justify-center transition-all active:scale-95 shadow-md ${
                isWireframe
                  ? 'bg-zinc-400 text-zinc-900'
                  : 'bg-[#7DD3FC] text-white hover:bg-[#38BDF8]'
              }`}
            >
              <Send className="w-7 h-7 stroke-[2.5] fill-white text-white -rotate-12 translate-x-0.5 -translate-y-0.5" />
            </button>
            <span className="text-xs font-semibold text-white/90">Share</span>
          </div>
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-32 h-1 bg-white/70 rounded-full mx-auto" />
      </div>
    </div>
  );
};
