import React from 'react';
import { TucoMascot } from '../../TucoMascot';
import { ArrowRight, Sparkles, UserCheck } from 'lucide-react';

interface ScreenOnboardingWelcomeProps {
  onSetupChild: () => void;
  onSetupTeen: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingWelcome: React.FC<ScreenOnboardingWelcomeProps> = ({
  onSetupChild,
  onSetupTeen,
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
      {/* Top brand header */}
      <div className="pt-2 flex items-center justify-between">
        <span className="font-fredoka text-xs font-bold uppercase tracking-wider opacity-75">
          tüco® kids
        </span>
        <span className="text-[11px] font-fredoka font-semibold bg-white/60 px-2 py-0.5 rounded-full text-[#3E2500]">
          Mum & Child Shared Loop
        </span>
      </div>

      {/* Main Center Stage: Big warm mascot & one clean line */}
      <div className="my-auto flex flex-col items-center text-center space-y-6">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <TucoMascot
            size="xl"
            expression="waving"
            isWireframe={isWireframe}
            className="w-36 h-36"
          />
        </div>

        <div className="space-y-3 max-w-[280px]">
          <h1 className="font-fredoka text-2xl font-bold leading-snug text-[#3E2500]">
            Hi! I help kids find their perfect skincare routine.
          </h1>
          <p className="text-xs opacity-75 font-body leading-relaxed">
            100% natural, certified toxin-free care designed for delicate growing skin.
          </p>
        </div>
      </div>

      {/* Two action buttons as per spec */}
      <div className="w-full pb-4 space-y-2.5">
        <button
          type="button"
          onClick={onSetupChild}
          className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white hover:bg-zinc-800'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
          }`}
        >
          <span>Set up for my child</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={onSetupTeen}
          className={`w-full py-3 px-6 rounded-full font-fredoka font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isWireframe
              ? 'bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-50'
              : 'bg-white/80 hover:bg-white text-[#3E2500] shadow-xs'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>I'm a teen (Teens Mode)</span>
        </button>
      </div>
    </div>
  );
};
