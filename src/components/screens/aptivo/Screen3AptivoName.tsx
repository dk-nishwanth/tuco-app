import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { AptivoPetalMascot } from '../../AptivoPetalMascot';

interface Screen3AptivoNameProps {
  name: string;
  onChangeName: (name: string) => void;
  onNext: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const Screen3AptivoName: React.FC<Screen3AptivoNameProps> = ({
  name = 'Alyssa',
  onChangeName,
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const [localName, setLocalName] = useState(name || 'Alyssa');

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between items-center p-6 pt-3 select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Top iOS Status Bar Area */}
      <div className="w-full flex items-center justify-between px-1">
        <span className="text-xs font-semibold tracking-tight text-stone-800">9:41</span>
        <div className="flex items-center gap-1.5 opacity-90 text-xs text-stone-800">
          <span>●●●</span>
          <span>Wi-Fi</span>
        </div>
      </div>

      {/* Top Navigation Row */}
      <div className="w-full flex items-center justify-between pt-1">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-8 h-8" />
        )}
        <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
          Step 1 of 2
        </span>
        <div className="w-8 h-8" />
      </div>

      {/* Center Character & Greeting matching Screen 3 in image 570.png */}
      <div className="my-auto flex flex-col items-center text-center space-y-4 w-full max-w-[280px]">
        {/* Full Petal Mascot */}
        <AptivoPetalMascot
          size="lg"
          variant={isWireframe ? 'wireframe' : 'coral'}
          className="w-36 h-36"
        />

        {/* Text Prompt */}
        <div className="space-y-0.5">
          <h2 className="font-['Poppins'] text-sm font-semibold text-stone-800">
            Hi! I'm Petal
          </h2>
          <h1 className="font-['Poppins'] text-lg font-bold text-stone-900">
            What's your name?
          </h1>
        </div>

        {/* Name Input Pill matching Screen 3 in image 570.png */}
        <div className="w-full pt-1">
          <input
            type="text"
            value={localName}
            onChange={(e) => {
              setLocalName(e.target.value);
              onChangeName(e.target.value);
            }}
            placeholder="Type your name"
            className={`w-full py-3 px-5 rounded-full text-center text-sm font-['Poppins'] font-medium outline-none transition-all ${
              isWireframe
                ? 'bg-white border-2 border-zinc-300 text-zinc-900 placeholder-zinc-400'
                : 'bg-white border border-stone-200 text-stone-900 placeholder-stone-400 shadow-2xs focus:border-[#F06553]'
            }`}
          />
        </div>

        {/* Primary CTA Button matching Screen 3 in image 570.png */}
        <div className="w-full pt-1">
          <button
            type="button"
            onClick={onNext}
            disabled={!localName.trim()}
            className={`w-full py-3 px-6 rounded-full font-['Poppins'] text-sm font-bold text-center tracking-wide transition-all active:scale-98 shadow-sm ${
              isWireframe
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-[#F06553] hover:bg-[#DE5543] text-white disabled:opacity-40'
            }`}
          >
            Continue
          </button>
        </div>
      </div>

      <div className="pb-2 w-full" />
    </div>
  );
};
