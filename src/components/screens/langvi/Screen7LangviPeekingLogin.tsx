import React, { useState } from 'react';
import { LangviMascot } from '../../LangviMascot';

interface Screen7LangviPeekingLoginProps {
  onNext: () => void;
  onGoToSignUp?: () => void;
  isWireframe?: boolean;
}

export const Screen7LangviPeekingLogin: React.FC<Screen7LangviPeekingLoginProps> = ({
  onNext,
  onGoToSignUp,
  isWireframe = false,
}) => {
  const [email, setEmail] = useState('');

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden ${
        isWireframe ? 'bg-zinc-800 text-zinc-900' : 'bg-[#5B42F3] text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-6 pt-3 pb-1 font-semibold text-white shrink-0 z-20">
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

      {/* TOP SECTION: Giant Yellow Mascot Head Peeking Down with serene closed curved eyes (Exact match to Image 571) */}
      <div className="flex-1 flex flex-col items-center justify-end relative overflow-hidden pb-0">
        <div className="transform scale-[1.75] translate-y-12">
          <LangviMascot
            type="yellow"
            expression="zen"
            size="xl"
            isWireframe={isWireframe}
            className="w-56 h-56"
          />
        </div>
      </div>

      {/* BOTTOM WHITE SHEET matching Image 571 Screen 7 */}
      <div
        className={`w-full rounded-t-[44px] px-6 pt-7 pb-6 space-y-4 shadow-2xl shrink-0 z-20 ${
          isWireframe
            ? 'bg-zinc-100 text-zinc-900 border-t-2 border-zinc-300'
            : 'bg-white text-stone-900'
        }`}
      >
        {/* Title: Login */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
            Login
          </h2>
        </div>

        {/* Form controls */}
        <div className="space-y-3 pt-1">
          {/* Email input field with rounded-2xl border */}
          <div className="w-full px-4 py-3.5 rounded-2xl border border-stone-300 bg-white focus-within:border-purple-500 flex items-center transition-all">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full text-xs font-medium text-stone-900 bg-transparent outline-none placeholder-stone-400"
            />
          </div>

          {/* Primary Login Button (Purple Pill matching Image 571) */}
          <button
            type="button"
            onClick={onNext}
            className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all active:scale-98 shadow-sm flex items-center justify-center ${
              isWireframe
                ? 'bg-zinc-900 text-white'
                : 'bg-[#5B42F3] hover:bg-[#5037E4] text-white'
            }`}
          >
            Login
          </button>
        </div>

        {/* Footer Link: You don't have an account? Sign Up */}
        <div className="pt-1 text-center space-y-3">
          <p className="text-xs text-stone-500">
            You don't have an account?{' '}
            <button
              type="button"
              onClick={onGoToSignUp || onNext}
              className="font-bold text-stone-900 underline underline-offset-2 hover:text-purple-600"
            >
              Sign Up
            </button>
          </p>

          {/* iOS Home Indicator Bar */}
          <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};
