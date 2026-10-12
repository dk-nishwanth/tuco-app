import React from 'react';
import { TucoMascot } from '../TucoMascot';
import { TucoLogo } from '../TucoLogo';

interface Screen1SplashPureProps {
  isWireframe?: boolean;
  onNext?: () => void;
}

export const Screen1SplashPure: React.FC<Screen1SplashPureProps> = ({
  isWireframe = false,
  onNext,
}) => {
  return (
    <div
      onClick={onNext}
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 cursor-pointer select-none font-['Poppins'] transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Subtle soft ambient warm glows matching screenshot */}
      {!isWireframe && (
        <>
          <div className="absolute top-10 left-8 w-28 h-28 rounded-full bg-white/20 blur-xl pointer-events-none" />
          <div className="absolute bottom-16 right-8 w-36 h-36 rounded-full bg-amber-400/50 blur-2xl pointer-events-none" />
        </>
      )}

      {/* Center Stage: Mascot + Logo */}
      <div className="flex flex-col items-center justify-center space-y-4 my-auto transform transition-transform hover:scale-105 duration-300">
        <TucoMascot
          size="lg"
          isWireframe={isWireframe}
          isWaving={true}
          className="w-28 h-28"
        />

        <div className="pt-1">
          <TucoLogo
            size="lg"
            isWireframe={isWireframe}
          />
        </div>
      </div>
    </div>
  );
};
