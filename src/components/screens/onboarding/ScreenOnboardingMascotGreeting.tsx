import React from 'react';
import { TucoMascot } from '../../TucoMascot';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface ScreenOnboardingMascotGreetingProps {
  childName: string;
  onNext: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingMascotGreeting: React.FC<ScreenOnboardingMascotGreetingProps> = ({
  childName,
  onNext,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top note to mum */}
      <div className="pt-2 flex items-center justify-between">
        <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-3 py-1 rounded-full text-amber-950 flex items-center gap-1 shadow-2xs">
          <span>📖</span>
          <span>Mum reads this out loud</span>
        </span>
        <span className="text-xl">✨</span>
      </div>

      {/* Center Magic Greeting */}
      <div className="my-auto flex flex-col items-center text-center space-y-6 max-w-[300px] mx-auto">
        <div className="relative">
          <TucoMascot
            size="xl"
            expression="celebrating"
            isWireframe={isWireframe}
            className="w-36 h-36"
          />
        </div>

        {/* Speech Bubble Card */}
        <div className={`relative w-full p-5 rounded-3xl transition-all shadow-md ${
          isWireframe
            ? 'bg-white border-2 border-zinc-300 text-zinc-900'
            : 'bg-white text-[#3E2500]'
        }`}>
          {/* Bubble tail pointing to mascot */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 overflow-hidden">
            <div className={`w-4 h-4 rotate-45 mx-auto -translate-y-2 ${isWireframe ? 'bg-white border-t border-l border-zinc-300' : 'bg-white'}`} />
          </div>

          <h2 className="font-fredoka text-2xl font-bold tracking-tight text-[#3E2500] leading-snug">
            Hi {childName || 'Ishaan'}! 👋
          </h2>

          <p className="font-fredoka text-base font-semibold text-amber-900 mt-2 leading-snug">
            I'm <span className="underline decoration-wavy decoration-amber-400">Tuco</span>. I'm going to find your perfect routine!
          </p>

          <p className="text-[11px] text-stone-500 font-body mt-3">
            Child sees their name on screen • Magic shared moment
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
          }`}
        >
          <span>Let's Begin!</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
