import React from 'react';
import { ArrowLeft, ArrowRight, Check, Star, Heart, ShieldCheck, Home, Share2 } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';

interface ScreenOnboardingTransitionProps {
  childName: string;
  age: number;
  selectedGoals: string[];
  onFinishOnboarding: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingTransition: React.FC<ScreenOnboardingTransitionProps> = ({
  childName = 'Omar',
  age = 8,
  selectedGoals = ['sun', 'hair'],
  onFinishOnboarding,
  onBack,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden p-6 pt-3 text-center ${
        isWireframe
          ? 'bg-zinc-50 text-zinc-900'
          : 'bg-gradient-to-b from-[#FFFBEB] via-[#FEF3C7] to-[#FED543] text-stone-900'
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

      {/* Top Header matching Reference 571 ("Congrats! The quiz is done") */}
      <div className="space-y-1.5 shrink-0 relative">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="absolute left-0 top-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs"
            title="Back"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
        )}
        <span className="text-[10px] font-bold font-['Poppins'] uppercase tracking-wider bg-white/80 text-amber-900 px-3 py-1 rounded-full shadow-2xs">
          Diagnostic Complete
        </span>
        <h1 className="font-['Poppins'] text-2xl font-black text-[#352002] tracking-tight pt-1">
          Congrats, {childName}! 🎉
        </h1>
        <p className="font-['Poppins'] text-xs text-stone-600 leading-snug">
          Your clean skincare routine has been custom crafted!
        </p>
      </div>

      {/* Center Stage: Mascot Celebrating matching Reference 571 */}
      <div className="my-auto flex flex-col items-center space-y-3">
        <div className="transform scale-110 drop-shadow-md">
          <TucoMascot
            size="xl"
            expression="celebrating"
            isWireframe={isWireframe}
            className="w-32 h-32"
          />
        </div>

        {/* Action Row matching Reference 571 (Home, Rating, Share) */}
        <div className="flex items-center justify-center gap-2.5 pt-1">
          <div className="w-14 h-14 rounded-2xl bg-[#FEF08A] border border-[#FDE047] flex flex-col items-center justify-center text-[#352002] shadow-2xs">
            <Home className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[9px] font-bold font-['Poppins'] mt-0.5">Home</span>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#FED7AA] border border-[#FDBA74] flex flex-col items-center justify-center text-orange-950 shadow-2xs">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="text-[9px] font-bold font-['Poppins'] mt-0.5">Rating</span>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#BAE6FD] border border-[#7DD3FC] flex flex-col items-center justify-center text-sky-950 shadow-2xs">
            <Share2 className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[9px] font-bold font-['Poppins'] mt-0.5">Share</span>
          </div>
        </div>

        {/* Personalized Summary Card */}
        <div className="w-full max-w-[290px] bg-white/95 rounded-2xl p-3.5 shadow-md border border-amber-200/60 text-left space-y-2 mt-1">
          <div className="flex items-center justify-between text-xs font-bold text-stone-900 border-b border-stone-100 pb-1.5">
            <span>{childName}'s Routine Formula</span>
            <span className="text-emerald-700 font-mono text-[10px]">100% Nat.</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-stone-700 font-['Poppins']">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Matched for age {age} (Tear-Free Mineral Formula)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{selectedGoals.length} Priority care goals customized</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>0% Parabens, Sulphates & Endocrine Disruptors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA to Products & Home */}
      <div className="space-y-2 pb-2">
        <button
          type="button"
          onClick={onFinishOnboarding}
          className="w-full py-4 px-6 rounded-2xl bg-[#1C2030] hover:bg-[#2A2E40] text-[#FED543] font-['Poppins'] font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-transform active:scale-98"
        >
          <span>Take Me to My Products</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <p className="text-[10px] text-stone-600 font-medium font-['Poppins']">
          Entering Tuco Kids Home & Discovery Catalog
        </p>
      </div>
    </div>
  );
};
