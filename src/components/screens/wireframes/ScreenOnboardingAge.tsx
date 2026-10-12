import React from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { BuddyCharacterIllustration } from '../../BuddyCharacterIllustration';

interface ScreenOnboardingAgeProps {
  age: number;
  onSelectAge: (age: number) => void;
  onNext: () => void;
  onBack: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingAge: React.FC<ScreenOnboardingAgeProps> = ({
  age = 8,
  onSelectAge,
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const currentAge = age;

  const handlePrevAge = () => {
    if (currentAge > 3) {
      onSelectAge(currentAge - 1);
    }
  };

  const handleNextAge = () => {
    if (currentAge < 16) {
      onSelectAge(currentAge + 1);
    }
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-white text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-6 pt-3 pb-1 font-semibold text-stone-800 shrink-0">
        <span className="font-medium text-[11px]">9:41</span>
        <div className="w-18 h-3.5 bg-black/20 rounded-full" />
        <div className="flex items-center gap-1 text-[10px]">
          <span>5G</span>
          <span className="w-4 h-2 border border-current rounded-2xs inline-block relative after:content-[''] after:w-0.5 after:h-1 after:bg-current after:absolute after:-right-0.5 after:top-0.5" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* TOP HEADER (Matching image 568.png exactly) */}
      {/* ========================================================= */}
      <div className="p-6 pt-2 pb-4 space-y-3 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm ${
            isWireframe ? 'bg-zinc-800 text-white' : 'bg-[#1C2030] text-white'
          }`}
          title="Back"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-2xl font-bold tracking-tight text-[#1C2030] leading-snug">
            What is your age?
          </h1>
          <p className="font-['Poppins'] text-xs text-[#7E8597] leading-relaxed">
            Let us know how old you will be turning this year
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* WARM CORAL/ORANGE CARD (Matching image 568.png exactly) */}
      {/* ========================================================= */}
      <div
        className={`flex-1 rounded-t-[36px] flex flex-col justify-between p-6 pt-7 relative overflow-hidden transition-colors ${
          isWireframe
            ? 'bg-zinc-300 border-t-2 border-zinc-400 text-zinc-900'
            : 'bg-[#F05438] text-white'
        }`}
      >
        {/* Soft background curve highlight */}
        {!isWireframe && (
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
        )}

        {/* 1. HORIZONTAL AGE CAROUSEL BUBBLES (7, 8, 9 / 10, 11, 12 / 13, 14, 15) */}
        <div className="relative z-10 flex items-center justify-center gap-4 pt-1">
          {/* Previous Age Bubble */}
          <button
            type="button"
            onClick={handlePrevAge}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold font-['Poppins'] transition-all active:scale-95 ${
              isWireframe
                ? 'bg-zinc-400 text-zinc-800'
                : 'bg-white/30 hover:bg-white/40 text-white'
            }`}
          >
            {currentAge > 3 ? currentAge - 1 : 3}
          </button>

          {/* Current Selected Age Bubble (Large, Pristine White, Pop-out Elevation) */}
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black font-['Poppins'] shadow-xl border-4 ${
              isWireframe
                ? 'bg-white text-zinc-900 border-zinc-200'
                : 'bg-white text-[#F05438] border-white/60'
            }`}
          >
            {currentAge}
          </div>

          {/* Next Age Bubble */}
          <button
            type="button"
            onClick={handleNextAge}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold font-['Poppins'] transition-all active:scale-95 ${
              isWireframe
                ? 'bg-zinc-400 text-zinc-800'
                : 'bg-white/30 hover:bg-white/40 text-white'
            }`}
          >
            {currentAge < 16 ? currentAge + 1 : 16}
          </button>
        </div>

        {/* 2. CHARMING VECTOR ILLUSTRATION (Child + Older Buddy standing together) */}
        <div className="flex-1 flex items-center justify-center my-2 relative">
          <BuddyCharacterIllustration
            isWireframe={isWireframe}
            age={currentAge}
            className="w-full max-w-[280px]"
          />
        </div>

        {/* 3. BOTTOM CTA BUTTON (Solid Dark Navy Pill matching image 568.png) */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onNext}
            className={`w-full py-4 px-6 rounded-2xl font-['Poppins'] text-sm font-bold text-center tracking-wide transition-all active:scale-98 shadow-md flex items-center justify-center ${
              isWireframe
                ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                : 'bg-[#1C2030] hover:bg-[#2A2E40] text-white'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
