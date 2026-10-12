import React from 'react';
import { X } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen8LangviStudyMilestoneProps {
  onNext: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen8LangviStudyMilestone: React.FC<Screen8LangviStudyMilestoneProps> = ({
  onNext,
  onClose,
  isWireframe = false,
}) => {
  return (
    <div
      onClick={onNext}
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-6 pt-3 pb-6 text-center cursor-pointer ${
        isWireframe ? 'bg-zinc-900 text-white' : 'bg-[#1E1675] text-white'
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

      {/* Top Header: Close Button on left, Big Number "15" in Center matching Image 571 */}
      <div className="flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) onClose();
            else onNext();
          }}
          className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-all active:scale-90 -ml-1"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Large Bold 15 Number Centered */}
        <span className="text-5xl font-black text-white tracking-tight -translate-x-4">
          15
        </span>

        <div className="w-8" />
      </div>

      {/* Center Character Scene matching Image 571 Screen 8 */}
      <div className="my-auto flex flex-col items-center justify-center relative py-2 space-y-3">
        {/* White Speech Bubble on the Left pointing towards mascot */}
        <div className="self-start -ml-1 relative bg-white text-stone-900 px-4 py-2.5 rounded-2xl shadow-xl max-w-[190px]">
          <p className="text-[11px] font-bold leading-tight">
            You studied for <br />
            15 minutes!
          </p>
          {/* Triangular pointer facing down-right */}
          <div className="absolute -bottom-1.5 right-6 w-3.5 h-3.5 bg-white transform rotate-45" />
        </div>

        {/* Floating Pink Hearts near mouth */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute right-4 top-4 flex items-center gap-1 text-pink-400 select-none pointer-events-none">
            <span className="text-2xl animate-pulse">💖</span>
            <span className="text-base">💕</span>
            <span className="text-sm">💗</span>
          </div>

          {/* Light Blue Mascot with Legs blowing heart kisses */}
          <div className="transform scale-125 drop-shadow-2xl">
            <LangviMascot
              type="blue"
              expression="kiss"
              size="lg"
              isWireframe={isWireframe}
              className="w-44 h-44"
            />
          </div>
        </div>
      </div>

      {/* Sound Equalizer Audio Waveform Bars matching Image 571 */}
      <div className="space-y-4 shrink-0 pb-1">
        <div className="flex items-center justify-center gap-1.5 h-8">
          <span className="w-1 h-3 bg-white/70 rounded-full" />
          <span className="w-1 h-5 bg-white/90 rounded-full" />
          <span className="w-1.5 h-8 bg-white rounded-full" />
          <span className="w-1 h-6 bg-white/90 rounded-full" />
          <span className="w-1 h-4 bg-white/80 rounded-full" />
          <span className="w-1 h-2 bg-white/60 rounded-full" />
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-32 h-1 bg-white/70 rounded-full mx-auto" />
      </div>
    </div>
  );
};
