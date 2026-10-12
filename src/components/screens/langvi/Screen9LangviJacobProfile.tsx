import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen9LangviJacobProfileProps {
  onNext: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen9LangviJacobProfile: React.FC<Screen9LangviJacobProfileProps> = ({
  onNext,
  onClose,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-5 pt-3 pb-5 ${
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

      {/* Top Header: Close on left, Right arrow on right */}
      <div className="flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onClose || onNext}
          className="w-8 h-8 flex items-center justify-center text-stone-900 hover:text-stone-600 transition-all active:scale-90 -ml-1"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="w-8" />

        <button
          type="button"
          onClick={onNext}
          className="w-8 h-8 flex items-center justify-center text-stone-900 hover:text-stone-600 transition-all active:scale-90 -mr-1"
          title="Next"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Jacob Avatar Header matching Image 571 */}
      <div className="flex flex-col items-center justify-center pt-1 pb-1 space-y-1.5 shrink-0">
        {/* Soft Yellow Avatar Circle with Mascot Spectacles */}
        <div className="w-20 h-20 rounded-full bg-[#FEE55A] border-3 border-white shadow-xs flex items-center justify-center overflow-hidden relative">
          <LangviMascot
            type="yellow"
            expression="glasses"
            size="md"
            isWireframe={isWireframe}
            className="w-20 h-20 translate-y-2"
          />
        </div>
        <h2 className="text-2xl font-black text-stone-900 tracking-tight">
          Jacob
        </h2>
      </div>

      {/* Dual Task Cards matching Image 571 Screen 9 */}
      <div className="grid grid-cols-2 gap-3 py-1 shrink-0">
        {/* Monthly tasks card with Purple Blob */}
        <div className="p-3.5 rounded-3xl bg-[#D6D6DE]/70 border border-stone-300/60 shadow-2xs space-y-2 relative overflow-hidden h-28">
          <span className="text-[11px] font-semibold text-stone-600 block">
            Monthly tasks
          </span>
          {/* Circular progress ring indicator */}
          <div className="w-7 h-7 rounded-full border-2 border-stone-400 border-t-purple-600" />
          {/* Purple mascot peeking from bottom right */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none">
            <LangviMascot
              type="purple"
              expression="happy"
              size="sm"
              isWireframe={isWireframe}
              className="w-16 h-16"
            />
          </div>
        </div>

        {/* Daily tasks card with Pink Blob */}
        <div className="p-3.5 rounded-3xl bg-[#D6D6DE]/70 border border-stone-300/60 shadow-2xs space-y-2 relative overflow-hidden h-28">
          <span className="text-[11px] font-semibold text-stone-600 block">
            Daily tasks
          </span>
          {/* Circular progress ring indicator */}
          <div className="w-7 h-7 rounded-full border-2 border-stone-400 border-t-pink-500" />
          {/* Pink mascot peeking from bottom right */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none">
            <LangviMascot
              type="pink"
              expression="smile"
              size="sm"
              isWireframe={isWireframe}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>

      {/* Progress Bars Section matching Image 571 */}
      <div className="space-y-2 pt-1 pb-2 shrink-0">
        <div className="flex items-center justify-between pb-0.5">
          <h3 className="text-xs font-bold text-stone-800">Progress</h3>
          <button
            type="button"
            onClick={onNext}
            className="text-[11px] font-medium text-stone-500 hover:text-stone-900"
          >
            See all
          </button>
        </div>

        {/* 1. Speak */}
        <div className="flex items-center justify-between text-xs py-1">
          <span className="w-16 font-semibold text-stone-700">Speak</span>
          <div className="flex-1 h-7 rounded-xl bg-white border border-stone-200/80 overflow-hidden flex items-center justify-end px-3 relative">
            <div
              className={`h-full rounded-xl absolute left-0 top-0 transition-all ${
                isWireframe ? 'bg-zinc-300' : 'bg-[#F9C5D5]'
              }`}
              style={{ width: '26%' }}
            />
            <span className="text-[11px] font-bold text-stone-600 font-mono relative z-10">
              26%
            </span>
          </div>
        </div>

        {/* 2. Listen */}
        <div className="flex items-center justify-between text-xs py-1">
          <span className="w-16 font-semibold text-stone-700">Listen</span>
          <div className="flex-1 h-7 rounded-xl bg-white border border-stone-200/80 overflow-hidden flex items-center justify-end px-3 relative">
            <div
              className={`h-full rounded-xl absolute left-0 top-0 transition-all ${
                isWireframe ? 'bg-zinc-300' : 'bg-[#F9C5D5]'
              }`}
              style={{ width: '47%' }}
            />
            <span className="text-[11px] font-bold text-stone-600 font-mono relative z-10">
              47%
            </span>
          </div>
        </div>

        {/* 3. Mistakes */}
        <div className="flex items-center justify-between text-xs py-1">
          <span className="w-16 font-semibold text-stone-700">Mistakes</span>
          <div className="flex-1 h-7 rounded-xl bg-white border border-stone-200/80 overflow-hidden flex items-center justify-end px-3 relative">
            <div
              className={`h-full rounded-xl absolute left-0 top-0 transition-all ${
                isWireframe ? 'bg-zinc-300' : 'bg-[#F9C5D5]'
              }`}
              style={{ width: '19%' }}
            />
            <span className="text-[11px] font-bold text-stone-600 font-mono relative z-10">
              19%
            </span>
          </div>
        </div>

        {/* 4. Level */}
        <div className="flex items-center justify-between text-xs py-1">
          <span className="w-16 font-semibold text-stone-700">Level</span>
          <div className="flex-1 h-7 rounded-xl bg-white border border-stone-200/80 overflow-hidden flex items-center justify-end px-3 relative">
            <div
              className={`h-full rounded-xl absolute left-0 top-0 transition-all ${
                isWireframe ? 'bg-zinc-300' : 'bg-[#F9C5D5]'
              }`}
              style={{ width: '42%' }}
            />
            <span className="text-[11px] font-bold text-stone-600 font-mono relative z-10">
              42
            </span>
          </div>
        </div>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto shrink-0" />
    </div>
  );
};
