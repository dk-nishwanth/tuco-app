import React, { useState } from 'react';
import { TucoMascot } from '../TucoMascot';
import { X, ArrowRight, Check } from 'lucide-react';

interface Screen2NameProps {
  name: string;
  onChangeName: (name: string) => void;
  onNext?: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen2Name: React.FC<Screen2NameProps> = ({
  name,
  onChangeName,
  onNext,
  onClose,
  isWireframe = false,
}) => {
  const [localName, setLocalName] = useState(name || 'Maya');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (localName.trim()) {
      onChangeName(localName.trim());
      onNext?.();
    }
  };

  const sampleNames = ['Maya', 'Kabir', 'Aria', 'Leo'];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top Bar with step indicator & 'x' close button */}
      <div className="w-full flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-90" />
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-30" />
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-30" />
          <span className="text-[11px] font-fredoka font-semibold opacity-70 ml-1">Step 1 of 3</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-black/10 transition-colors text-[#3E2500]"
          title="Close quiz"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Center Content: Mascot + Question + Input */}
      <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-6">
        {/* Fluffy Mascot Waving */}
        <div className="transform transition-transform hover:scale-105 duration-300">
          <TucoMascot
            size="lg"
            isWireframe={isWireframe}
            isWaving={true}
            className="w-24 h-24"
          />
        </div>

        {/* Question Heading */}
        <div className="space-y-1">
          <h2 className="font-fredoka text-xl font-bold tracking-tight text-[#3E2500]">
            what is your child’s name?
          </h2>
          <p className="text-xs opacity-75 font-body">
            We’ll personalize formulas and routines just for them!
          </p>
        </div>

        {/* Pill Input Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <div className="relative w-full">
            <input
              type="text"
              value={localName}
              onChange={(e) => {
                setLocalName(e.target.value);
                onChangeName(e.target.value);
              }}
              placeholder="e.g. Maya, Kabir..."
              autoFocus
              className={`w-full py-3.5 px-6 rounded-full font-body font-semibold text-center text-base outline-none transition-all duration-200 ${
                isWireframe
                  ? 'bg-white text-zinc-900 border-2 border-zinc-400 focus:border-zinc-900'
                  : 'bg-white text-[#3E2500] placeholder-stone-400 shadow-[0_4px_12px_rgba(0,0,0,0.06)] focus:ring-4 focus:ring-amber-600/20'
              }`}
            />
          </div>

          {/* Quick preset chips to quickly test */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <span className="text-[11px] opacity-60 font-body">Quick pick:</span>
            {sampleNames.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setLocalName(n);
                  onChangeName(n);
                }}
                className={`text-[11px] font-fredoka px-2.5 py-0.5 rounded-full transition-all ${
                  localName === n
                    ? 'bg-[#3E2500] text-amber-300 font-bold scale-105'
                    : 'bg-white/60 hover:bg-white text-[#3E2500]'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Bottom Continue Button */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={!localName.trim()}
          className={`w-full py-3.5 px-5 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#2A1800] shadow-amber-900/15'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
