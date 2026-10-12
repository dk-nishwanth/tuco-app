import React from 'react';
import { LangviMascot } from '../../LangviMascot';

interface Screen1LangviCreateAccountProps {
  onNext: () => void;
  onGoToLogin?: () => void;
  isWireframe?: boolean;
}

export const Screen1LangviCreateAccount: React.FC<Screen1LangviCreateAccountProps> = ({
  onNext,
  onGoToLogin,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-6 pt-3 pb-6 ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#EFEFF4] text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-2 font-semibold text-stone-800 shrink-0">
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

      {/* Top Section: Peeking Purple Mascot from the top edge (Exact match to Image 571) */}
      <div className="relative -mx-6 -mt-3 h-32 flex items-start justify-start px-2 overflow-hidden shrink-0">
        <div className="transform -translate-x-3 -translate-y-6 scale-125">
          <LangviMascot
            type="purple"
            expression="happy"
            size="lg"
            isWireframe={isWireframe}
            className="w-36 h-36"
          />
        </div>
      </div>

      {/* Large Bold Headline */}
      <div className="space-y-0.5 pt-2 pb-4">
        <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight leading-[1.08]">
          Create <br />account
        </h1>
      </div>

      {/* 4 White Pill Buttons matching Image 571 */}
      <div className="space-y-3 pb-2 my-auto">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-5 rounded-[22px] bg-white border border-stone-200/80 hover:border-stone-400 text-stone-900 text-sm font-semibold tracking-wide shadow-2xs transition-all active:scale-98 text-center"
        >
          facebook
        </button>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-5 rounded-[22px] bg-white border border-stone-200/80 hover:border-stone-400 text-stone-900 text-sm font-semibold tracking-wide shadow-2xs transition-all active:scale-98 text-center"
        >
          Google
        </button>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-5 rounded-[22px] bg-white border border-stone-200/80 hover:border-stone-400 text-stone-900 text-sm font-semibold tracking-wide shadow-2xs transition-all active:scale-98 text-center"
        >
          Apple
        </button>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-5 rounded-[22px] bg-white border border-stone-200/80 hover:border-stone-400 text-stone-900 text-sm font-semibold tracking-wide shadow-2xs transition-all active:scale-98 text-center"
        >
          Email
        </button>
      </div>

      {/* Footer login link & iOS Home Indicator */}
      <div className="pt-2 text-center space-y-3 shrink-0">
        <p className="text-xs text-stone-500 font-medium">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onGoToLogin || onNext}
            className="font-bold text-stone-900 hover:underline"
          >
            Log in
          </button>
        </p>

        {/* iOS Home Indicator Bar */}
        <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto" />
      </div>
    </div>
  );
};
