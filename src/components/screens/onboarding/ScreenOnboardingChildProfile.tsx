import React, { useState } from 'react';
import { TucoMascot } from '../../TucoMascot';
import { ArrowRight, Minus, Plus } from 'lucide-react';

interface ScreenOnboardingChildProfileProps {
  name: string;
  age: number;
  onUpdate: (name: string, age: number) => void;
  onNext: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingChildProfile: React.FC<ScreenOnboardingChildProfileProps> = ({
  name,
  age,
  onUpdate,
  onNext,
  isWireframe = false,
}) => {
  const [localName, setLocalName] = useState(name || 'Ishaan');
  const [localAge, setLocalAge] = useState(age || 7);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (localName.trim()) {
      onUpdate(localName.trim(), localAge);
      onNext();
    }
  };

  const quickPresets = ['Ishaan', 'Ananya', 'Aarav', 'Maya', 'Kabir'];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top progress indicator */}
      <div className="pt-2 flex items-center justify-between">
        <span className="text-[11px] font-fredoka font-bold opacity-70">
          Step 1 of 2 • Child Profile
        </span>
        <span className="text-[10px] font-mono opacity-50 bg-black/10 px-2 py-0.5 rounded-full">
          30 sec setup
        </span>
      </div>

      {/* Main form */}
      <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-6">
        <TucoMascot
          size="md"
          expression="happy"
          isWireframe={isWireframe}
          className="w-20 h-20"
        />

        <div className="space-y-1">
          <h2 className="font-fredoka text-2xl font-bold tracking-tight text-[#3E2500]">
            What's your child's name?
          </h2>
          <p className="text-xs opacity-75 font-body">
            This is the only data we collect at onboarding.
          </p>
        </div>

        {/* Name input pill */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="e.g. Ishaan"
              className={`w-full py-3.5 px-6 rounded-full font-body font-semibold text-center text-lg outline-none transition-all ${
                isWireframe
                  ? 'bg-white text-zinc-900 border-2 border-zinc-400'
                  : 'bg-white text-[#3E2500] shadow-[0_4px_16px_rgba(0,0,0,0.06)] focus:ring-4 focus:ring-amber-800/15'
              }`}
            />
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
            <span className="text-[11px] opacity-60 font-body">Quick pick:</span>
            {quickPresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setLocalName(preset)}
                className={`text-[11px] font-fredoka px-2.5 py-0.5 rounded-full transition-all ${
                  localName === preset
                    ? 'bg-[#3E2500] text-amber-300 font-bold scale-105'
                    : 'bg-white/70 hover:bg-white text-[#3E2500]'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Age Stepper */}
          <div className="pt-2">
            <label className="text-xs font-fredoka font-bold block mb-2 opacity-80">
              Child's Age: <span className="text-sm underline font-black">{localAge} years old</span>
            </label>
            <div className="inline-flex items-center gap-3 bg-white/90 p-1.5 rounded-full shadow-xs">
              <button
                type="button"
                onClick={() => setLocalAge(Math.max(3, localAge - 1))}
                className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-[#3E2500] flex items-center justify-center transition-transform active:scale-90"
              >
                <Minus className="w-4 h-4 stroke-[3]" />
              </button>
              <span className="font-fredoka font-extrabold text-base min-w-8 text-center text-[#3E2500]">
                {localAge}
              </span>
              <button
                type="button"
                onClick={() => setLocalAge(Math.min(15, localAge + 1))}
                className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-[#3E2500] flex items-center justify-center transition-transform active:scale-90"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Button */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={!localName.trim()}
          className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
          }`}
        >
          <span>Meet Tuco</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
