import React from 'react';
import { TucoMascot } from '../TucoMascot';
import { ChildConcern } from '../../types';
import { ArrowLeft, X, Check, Gift, Sparkles } from 'lucide-react';

interface Screen5ConcernPillProps {
  selectedConcern: ChildConcern;
  onSelectConcern: (concern: ChildConcern) => void;
  onNext?: () => void;
  onBack?: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen5ConcernPill: React.FC<Screen5ConcernPillProps> = ({
  selectedConcern,
  onSelectConcern,
  onNext,
  onBack,
  onClose,
  isWireframe = false,
}) => {
  const concerns: { id: ChildConcern; label: string; isGift?: boolean }[] = [
    { id: 'dull & tanned skin', label: 'dull & tanned skin' },
    { id: 'tangled & frizzy hair', label: 'tangled & frizzy hair' },
    { id: 'safe makeup', label: 'safe makeup' },
    { id: 'looking for gifts?', label: 'looking for gifts?', isGift: true },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none font-['Poppins'] transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Top Bar matching Screenshot 5 */}
      <div className="w-full flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onBack}
          className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#271700]"
          title="Back"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#271700]" />
          <span className="w-2 h-2 rounded-full bg-[#271700]" />
          <span className="w-2 h-2 rounded-full bg-[#271700]" />
          <span className="font-['Poppins'] text-[11px] font-semibold opacity-75 ml-1">
            Step 3 of 3
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#271700]"
          title="Close"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Center Content: Mascot + Question + 4 Pills */}
      <div className="my-auto flex flex-col items-center w-full max-w-[310px] mx-auto text-center space-y-4">
        <TucoMascot
          size="lg"
          isWireframe={isWireframe}
          isWaving={true}
          className="w-24 h-24"
        />

        <div className="space-y-1">
          <h2 className="font-['Poppins'] text-lg font-bold tracking-tight text-[#271700]">
            what is your child’s concern?
          </h2>
          <p className="font-['Poppins'] text-[11px] opacity-75 leading-tight">
            Pick their main priority today; you can explore everything anytime.
          </p>
        </div>

        {/* 4 Concern Pills matching Screenshot 5 */}
        <div className="w-full space-y-2 pt-1">
          {concerns.map((item) => {
            const isSelected = selectedConcern === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectConcern(item.id)}
                className={`w-full py-3 px-6 rounded-full font-['Poppins'] font-medium text-xs flex items-center justify-center relative transition-all duration-150 active:scale-98 ${
                  isSelected
                    ? isWireframe
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white text-[#271700] border-2 border-[#0D99FF] font-semibold shadow-sm'
                    : item.isGift
                    ? isWireframe
                      ? 'bg-zinc-200 text-zinc-800 border border-zinc-300'
                      : 'bg-[#FCE7F3] text-[#9D174D] hover:bg-[#FBCFE8] shadow-2xs'
                    : isWireframe
                    ? 'bg-white text-zinc-800 border border-zinc-300'
                    : 'bg-white text-[#271700] hover:bg-white/95 shadow-2xs'
                }`}
              >
                {item.isGift && (
                  <Gift className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                )}
                <span>{item.label}</span>
                {isSelected && (
                  <span className="absolute right-4 text-amber-600">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Button matching Screenshot 5 */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-4 px-6 rounded-full font-['Poppins'] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#271700] hover:bg-[#1a0f00] text-[#FED543] shadow-amber-950/20'
          }`}
        >
          <span>See Tailored Products</span>
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
