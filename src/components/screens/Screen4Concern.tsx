import React from 'react';
import { TucoMascot } from '../TucoMascot';
import { ChildConcern } from '../../types';
import { ArrowLeft, Sparkles, Check, Gift } from 'lucide-react';

interface Screen4ConcernProps {
  selectedConcern: ChildConcern;
  onSelectConcern: (concern: ChildConcern) => void;
  onNext?: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const Screen4Concern: React.FC<Screen4ConcernProps> = ({
  selectedConcern,
  onSelectConcern,
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const concerns: { id: ChildConcern; label: string; isGift?: boolean }[] = [
    { id: 'dull & tanned skin', label: 'dull & tanned skin' },
    { id: 'tangled & frizzy hair', label: 'tangled & frizzy hair' },
    { id: 'safe makeup', label: 'safe makeup' },
    { id: 'looking for gifts?', label: 'looking for gifts?', isGift: true },
  ];

  const handleSelect = (concern: ChildConcern) => {
    onSelectConcern(concern);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top Bar with back button & complete progress */}
      <div className="w-full flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onBack}
          className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#3E2500]"
          title="Back"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-90" />
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-90" />
          <span className="w-2 h-2 rounded-full bg-[#3E2500] opacity-90" />
          <span className="text-[11px] font-fredoka font-semibold opacity-70 ml-1">Step 3 of 3</span>
        </div>

        <div className="w-6" />
      </div>

      {/* Center Content: Mascot + Question + Concern Options */}
      <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-5">
        {/* Fluffy Mascot */}
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
            what is your child’s concern?
          </h2>
          <p className="text-xs opacity-75 font-body">
            Pick their main priority today; you can explore everything anytime.
          </p>
        </div>

        {/* Stacked Concern Pills matching the wireframe */}
        <div className="w-full space-y-2.5 pt-1">
          {concerns.map((item) => {
            const isSelected = selectedConcern === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full py-3.5 px-6 rounded-full font-fredoka font-medium text-sm flex items-center justify-center relative transition-all duration-200 active:scale-98 ${
                  isSelected
                    ? isWireframe
                      ? 'bg-zinc-900 text-white shadow-md'
                      : 'bg-white text-[#3E2500] ring-4 ring-[#3E2500]/20 font-bold shadow-[0_6px_16px_rgba(0,0,0,0.08)] scale-[1.02]'
                    : item.isGift
                    ? isWireframe
                      ? 'bg-zinc-200 text-zinc-800 border border-dashed border-zinc-400'
                      : 'bg-[#FCE7F3] text-[#9D174D] hover:bg-[#FBCFE8] shadow-sm'
                    : isWireframe
                    ? 'bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-50'
                    : 'bg-white/95 text-[#3E2500] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                }`}
              >
                {item.isGift && (
                  <Gift className="w-3.5 h-3.5 mr-2 opacity-80" />
                )}
                <span>{item.label}</span>
                {isSelected && (
                  <span className="absolute right-5 text-amber-600">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom See Results / Personalized Feed Button */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-3.5 px-5 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#2A1800] shadow-amber-900/15'
          }`}
        >
          <span>See Tailored Products</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
