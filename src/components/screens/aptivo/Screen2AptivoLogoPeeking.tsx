import React from 'react';
import { AptivoPetalMascot } from '../../AptivoPetalMascot';

interface Screen2AptivoLogoPeekingProps {
  onNext?: () => void;
  isWireframe?: boolean;
}

export const Screen2AptivoLogoPeeking: React.FC<Screen2AptivoLogoPeekingProps> = ({
  onNext,
  isWireframe = false,
}) => {
  return (
    <div
      onClick={onNext}
      className={`relative w-full h-full flex flex-col justify-between items-center cursor-pointer select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Top iOS Status Bar Area */}
      <div className="w-full flex items-center justify-between pt-3 px-6 z-10">
        <span className="text-xs font-semibold tracking-tight text-stone-800">9:41</span>
        <div className="flex items-center gap-1.5 opacity-90 text-xs text-stone-800">
          <span>●●●</span>
          <span>Wi-Fi</span>
        </div>
      </div>

      {/* Top Brand Wordmark matching Screen 2 in image 570.png */}
      <div className="pt-16 text-center z-10">
        <h1
          className={`font-['Poppins'] text-3xl font-black tracking-wider uppercase ${
            isWireframe ? 'text-zinc-800' : 'text-[#F06553]'
          }`}
          style={{ letterSpacing: '0.08em' }}
        >
          Aptivo
        </h1>
        <p className="text-[11px] text-stone-400 font-medium mt-1">
          tüco kids learning companion
        </p>
      </div>

      {/* Mascot Peeking from Bottom matching Screen 2 in image 570.png */}
      <div className="relative w-full flex flex-col items-center justify-end">
        <div className="mb-2 z-10 bg-white/80 backdrop-blur-xs px-3.5 py-1 rounded-full border border-stone-200/60 shadow-2xs">
          <span className="text-[10px] font-bold text-stone-600">
            Tap anywhere to continue →
          </span>
        </div>
        <AptivoPetalMascot
          size="giant"
          variant={isWireframe ? 'wireframe' : 'coral'}
          isPeeking={true}
          className="w-72 h-72 transform scale-110 translate-y-4"
        />
      </div>
    </div>
  );
};
