import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen6LangviQuizMasteryProps {
  onNext: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen6LangviQuizMastery: React.FC<Screen6LangviQuizMasteryProps> = ({
  onNext,
  onClose,
  isWireframe = false,
}) => {
  const [selectedWord, setSelectedWord] = useState<string>('submitted');

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-5 pt-3 pb-5 ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#EFEFF4] text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-1 font-semibold text-stone-800 shrink-0">
        <span className="font-semibold text-[12px] tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-[11px]">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-1.5 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-2 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-2.5 bg-stone-900 rounded-full" />
          </div>
          {/* WiFi */}
          <svg className="w-3.5 h-3.5 fill-stone-900" viewBox="0 0 24 24">
            <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
          </svg>
          {/* Battery */}
          <div className="w-5 h-2.5 border border-stone-900 rounded-[3px] p-0.5 flex items-center relative">
            <div className="w-full h-full bg-stone-900 rounded-[1.5px]" />
            <div className="w-0.5 h-1 bg-stone-900 rounded-r-xs absolute -right-1" />
          </div>
        </div>
      </div>

      {/* Top Header matching Image 571 */}
      <div className="flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onClose || onNext}
          className="w-8 h-8 flex items-center justify-center text-stone-800 hover:text-stone-600 transition-all active:scale-90 -ml-1"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="w-8" />

        {/* Soft Pink Heart Circle Badge */}
        <div className="w-7 h-7 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#F43F5E] shadow-2xs">
          <Heart className="w-4 h-4 fill-[#FF70A6] stroke-none" />
        </div>
      </div>

      {/* Mascot Celebrating with Floating Hearts matching Image 571 */}
      <div className="my-auto flex flex-col items-center justify-center relative py-1">
        <div className="relative w-52 h-48 flex items-center justify-center">
          {/* Floating Hearts near upper right */}
          <div className="absolute right-3 top-2 flex items-center gap-1 text-pink-400 select-none pointer-events-none">
            <span className="text-xl animate-pulse">💖</span>
            <span className="text-sm">💕</span>
          </div>
          <div className="absolute left-4 top-10 text-pink-400 text-base select-none pointer-events-none">
            💗
          </div>

          <div className="transform scale-120 drop-shadow-md">
            <LangviMascot
              type="yellow"
              expression="celebrate"
              size="lg"
              isWireframe={isWireframe}
              className="w-40 h-40"
            />
          </div>
        </div>

        {/* Progress Bar (97% Lime Green) matching Image 571 */}
        <div className="w-full max-w-[310px] mt-2 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-stone-300/80 overflow-hidden relative">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isWireframe ? 'bg-zinc-800' : 'bg-[#C6F432]'
              }`}
              style={{ width: '97%' }}
            />
          </div>
          <span className="text-xs font-bold text-stone-500 font-mono">97%</span>
        </div>
      </div>

      {/* Question & Matching sentence pill */}
      <div className="space-y-3 shrink-0 pb-1">
        <div className="space-y-1">
          <p className="text-[13px] font-extrabold text-stone-900 leading-snug">
            ...se the file was
          </p>
        </div>

        {/* Selected answer pill matching Image 571 */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center">
          <span className="text-xs font-bold text-stone-900">
            {selectedWord ? `...tted on time.` : 'submitted on time.'}
          </span>
        </div>

        {/* Lime Green Continue Button */}
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-3.5 px-6 rounded-2xl font-black text-xs tracking-wider uppercase transition-all active:scale-98 shadow-sm text-center ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#C6F432] text-stone-950 hover:bg-[#BCEE23]'
          }`}
        >
          CONTINUE
        </button>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto shrink-0 pt-0.5" />
    </div>
  );
};
