import React from 'react';
import { X, Play } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen10LangviOnlineLessonsProps {
  onNext: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen10LangviOnlineLessons: React.FC<Screen10LangviOnlineLessonsProps> = ({
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

      {/* Top Header: Close Button on left */}
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
      </div>

      {/* Mascot Hero Scene: Yellow mascot peeking from the right edge with waving arms */}
      <div className="my-auto relative flex items-center justify-end overflow-hidden -mr-5 h-44">
        <div className="transform translate-x-12 scale-125">
          <LangviMascot
            type="yellow"
            expression="waving"
            size="xl"
            isWireframe={isWireframe}
            className="w-48 h-48"
          />
        </div>
      </div>

      {/* Text Headline & Subtitle matching Image 571 */}
      <div className="space-y-2 pt-2 shrink-0">
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
          Interactive <br />
          online lessons
        </h1>
        <p className="text-xs text-stone-500 leading-relaxed font-medium">
          Learn anywhere. With friendly blob buddies. <br />
          Hands-on lessons with real voice feedback.
        </p>
      </div>

      {/* Bottom Media Player Action Bar matching Image 571 */}
      <div className="space-y-4 pt-4 pb-1 shrink-0">
        <div className="flex items-center gap-3">
          {/* Circular White button with Purple Play Arrow */}
          <button
            type="button"
            onClick={onNext}
            className="w-12 h-12 rounded-full bg-white border border-stone-200/90 shadow-xs flex items-center justify-center transition-all active:scale-90 shrink-0"
          >
            <Play className="w-5 h-5 fill-[#5B42F3] text-[#5B42F3] ml-0.5" />
          </button>

          {/* Solid Purple Pill Button on the Right */}
          <button
            type="button"
            onClick={onNext}
            className={`flex-1 h-12 rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all active:scale-98 shadow-sm flex items-center justify-center ${
              isWireframe
                ? 'bg-zinc-900 text-white'
                : 'bg-[#5B42F3] hover:bg-[#5037E4] text-white'
            }`}
          >
            Explore
          </button>
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto" />
      </div>
    </div>
  );
};
