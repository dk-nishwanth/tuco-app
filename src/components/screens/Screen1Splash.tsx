import React from 'react';
import { TucoLogo } from '../TucoLogo';
import { TucoMascot } from '../TucoMascot';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface Screen1SplashProps {
  isWireframe?: boolean;
  onNext?: () => void;
}

export const Screen1Splash: React.FC<Screen1SplashProps> = ({
  isWireframe = false,
  onNext,
}) => {
  return (
    <div
      onClick={onNext}
      className={`relative w-full h-full flex flex-col items-center justify-between p-6 cursor-pointer select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Subtle background decorative shapes in High-Fi mode */}
      {!isWireframe && (
        <>
          <div className="absolute top-12 left-6 w-16 h-16 rounded-full bg-white/20 blur-xl pointer-events-none" />
          <div className="absolute bottom-20 right-6 w-24 h-24 rounded-full bg-amber-400/40 blur-2xl pointer-events-none" />
          {/* Playful mini sparkles */}
          <div className="absolute top-20 right-10 opacity-70 animate-bounce">
            <Sparkles className="w-5 h-5 text-amber-900/40" />
          </div>
          <div className="absolute bottom-32 left-10 opacity-60">
            <span className="text-xl">✨</span>
          </div>
        </>
      )}

      {/* Wireframe layout annotation tag */}
      {isWireframe && (
        <div className="self-start text-[10px] font-mono text-zinc-600 bg-zinc-200/80 px-2 py-0.5 rounded">
          SCREEN_01 // SPLASH & BRAND IDENTITY
        </div>
      )}

      {/* Top spacing spacer */}
      <div className="w-full flex justify-between items-center pt-4">
        <span className="text-[11px] font-fredoka uppercase tracking-wider font-semibold opacity-70">
          Clean • Safe • Natural
        </span>
        <div className="flex items-center gap-1 text-[11px] font-medium opacity-80">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Made for Kids</span>
        </div>
      </div>

      {/* Main Center Stage: Wordmark & Mascot */}
      <div className="flex flex-col items-center justify-center my-auto space-y-6">
        <div className="transform transition-transform hover:scale-105 duration-300">
          <TucoMascot
            size="lg"
            isWireframe={isWireframe}
            isWaving={true}
            className="w-28 h-28"
          />
        </div>

        <div className="text-center space-y-2">
          <TucoLogo
            size="lg"
            isWireframe={isWireframe}
          />
          <p className="text-xs font-medium max-w-[240px] mx-auto opacity-80 leading-relaxed font-body">
            100% natural, dermatologist-approved skincare & hair care designed especially for growing kids.
          </p>
        </div>
      </div>

      {/* Bottom CTA affordance */}
      <div className="w-full pb-4 space-y-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          className={`w-full py-3.5 px-5 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white hover:bg-zinc-800'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#2A1800] shadow-amber-900/20'
          }`}
        >
          <span>Find Child's Clean Routine</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <p className="text-[10px] text-center opacity-60 font-body">
          Takes only 30 seconds • Customized for ages 3–15
        </p>
      </div>
    </div>
  );
};
