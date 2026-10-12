import React from 'react';
import { TucoMascot } from '../TucoMascot';
import { ChildAgeGroup } from '../../types';
import { ArrowLeft, ArrowRight, X, Check } from 'lucide-react';

interface Screen4AgePillProps {
  selectedAge: ChildAgeGroup;
  onSelectAge: (age: ChildAgeGroup) => void;
  onNext?: () => void;
  onBack?: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen4AgePill: React.FC<Screen4AgePillProps> = ({
  selectedAge,
  onSelectAge,
  onNext,
  onBack,
  onClose,
  isWireframe = false,
}) => {
  const ageOptions: ChildAgeGroup[] = [
    '3-5 years old',
    '6-9 years old',
    '10-12 years old',
    '13-15 years old',
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none font-['Poppins'] transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Top Bar matching Screenshot 4 */}
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
          <span className="w-2 h-2 rounded-full bg-[#271700] opacity-30" />
          <span className="font-['Poppins'] text-[11px] font-semibold opacity-75 ml-1">
            Step 2 of 3
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
            what is your child’s age?
          </h2>
          <p className="font-['Poppins'] text-[11px] opacity-75 leading-tight">
            Formulations shift from ultra-gentle baby skin to active pre-teen needs.
          </p>
        </div>

        {/* 4 Stacked Pills matching Screenshot 4 */}
        <div className="w-full space-y-2 pt-1">
          {ageOptions.map((age) => {
            const isSelected = selectedAge === age;
            return (
              <button
                key={age}
                type="button"
                onClick={() => onSelectAge(age)}
                className={`w-full py-3 px-6 rounded-full font-['Poppins'] font-medium text-xs flex items-center justify-center relative transition-all duration-150 active:scale-98 ${
                  isSelected
                    ? isWireframe
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white text-[#271700] border-2 border-[#0D99FF] font-semibold shadow-sm'
                    : isWireframe
                    ? 'bg-white text-zinc-800 border border-zinc-300'
                    : 'bg-white text-[#271700] hover:bg-white/95 shadow-2xs'
                }`}
              >
                <span>{age}</span>
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

      {/* Bottom Continue Button */}
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
          <span>Continue</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
