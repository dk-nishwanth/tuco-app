import React from 'react';
import { TucoMascot } from '../TucoMascot';
import { TucoLogo } from '../TucoLogo';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface Screen2WelcomeHeroProps {
  isWireframe?: boolean;
  onNext?: () => void;
}

export const Screen2WelcomeHero: React.FC<Screen2WelcomeHeroProps> = ({
  isWireframe = false,
  onNext,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none font-['Poppins'] transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Top Header matching Screenshot 2 */}
      <div className="w-full flex items-center justify-between pt-1">
        <span className="font-['Poppins'] text-[10px] font-bold uppercase tracking-wider opacity-75">
          CLEAN • SAFE • NATURAL
        </span>
        <div className="flex items-center gap-1.5 font-['Poppins'] text-[10px] font-semibold opacity-85">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Made for Kids</span>
          <span className="text-xs ml-0.5 opacity-70">✨</span>
        </div>
      </div>

      {/* Center Mascot + Logo + Paragraph */}
      <div className="my-auto flex flex-col items-center text-center space-y-4 max-w-[280px] mx-auto">
        <TucoMascot
          size="lg"
          isWireframe={isWireframe}
          isWaving={true}
          className="w-24 h-24"
        />

        <TucoLogo
          size="lg"
          isWireframe={isWireframe}
        />

        <p className="font-['Poppins'] text-xs font-normal opacity-85 leading-relaxed pt-1">
          100% natural, dermatologist-approved skincare & hair care designed especially for growing kids.
        </p>
      </div>

      {/* Bottom Button matching Screenshot 2 */}
      <div className="w-full pb-4 space-y-2">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-4 px-6 rounded-full font-['Poppins'] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white hover:bg-zinc-800'
              : 'bg-[#271700] hover:bg-[#1a0f00] text-[#FED543] shadow-amber-950/20'
          }`}
        >
          <span>Find Child's Clean Routine</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        <p className="font-['Poppins'] text-[10px] text-center opacity-65">
          Takes only 30 seconds • Customized for ages 3–15
        </p>
      </div>
    </div>
  );
};
