import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';
import { TucoLogo } from '../../TucoLogo';

interface ScreenOnboardingSplashProps {
  onNext: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingSplash: React.FC<ScreenOnboardingSplashProps> = ({
  onNext,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden p-6 pt-3 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-2 font-semibold text-[#352002] shrink-0">
        <span className="font-medium text-[11px]">9:41</span>
        <div className="w-18 h-3.5 bg-black/20 rounded-full" />
        <div className="flex items-center gap-1 text-[10px]">
          <span>5G</span>
          <span className="w-4 h-2 border border-current rounded-2xs inline-block relative after:content-[''] after:w-0.5 after:h-1 after:bg-current after:absolute after:-right-0.5 after:top-0.5" />
        </div>
      </div>

      {/* Top Brand Badges */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase font-['Poppins']">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Kid Safe & Natural</span>
        </div>
        <span className="text-xs font-bold font-['Poppins'] opacity-70">
          Age 3 - 15
        </span>
      </div>

      {/* Mascot Big Face Scene inspired by Aptivo (570) & Plopp (576) */}
      <div className="my-auto flex flex-col items-center justify-center space-y-4 text-center">
        {/* Big Expressive Cloud Mascot with drop shadow */}
        <div className="relative">
          <div className="transform scale-125 filter drop-shadow-md">
            <TucoMascot
              size="xl"
              expression="waving"
              isWaving={true}
              isWireframe={isWireframe}
              className="w-36 h-36"
            />
          </div>
        </div>

        {/* Brand Wordmark & Tagline */}
        <div className="space-y-1.5 pt-2">
          <TucoLogo size="xl" isWireframe={isWireframe} />
          <p className="font-['Poppins'] text-xs font-semibold text-[#352002]/85 max-w-[240px] mx-auto leading-relaxed">
            Real fruit & mineral skincare crafted specifically for growing kids & pre-teens.
          </p>
        </div>
      </div>

      {/* Bottom Action Card & CTA Button matching image 568 / 570 */}
      <div className="space-y-3 pb-2">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-4 px-6 rounded-2xl font-['Poppins'] text-sm font-bold text-center tracking-wide transition-all active:scale-98 shadow-md flex items-center justify-center gap-2 ${
            isWireframe
              ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
              : 'bg-[#1C2030] hover:bg-[#2A2E40] text-white'
          }`}
        >
          <span>Find My Child's Routine</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <p className="text-[10px] text-center font-['Poppins'] font-medium opacity-70">
          30-second skin diagnostic • Zero harmful chemicals
        </p>
      </div>
    </div>
  );
};
