import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';

interface ScreenOnboardingGoalsProps {
  childName: string;
  selectedGoals: string[];
  onToggleGoal: (goalId: string) => void;
  onNext: () => void;
  onBack: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingGoals: React.FC<ScreenOnboardingGoalsProps> = ({
  childName = 'Omar',
  selectedGoals = ['sun', 'hair'],
  onToggleGoal,
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const goalCards = [
    {
      id: 'sun',
      title: 'Sun & Play Defense',
      subtitle: 'Mineral SPF 50 stick for outdoor games',
      icon: '☀️',
      bgClass: 'bg-[#38B6FF]/15 border-[#38B6FF]/40 text-sky-950',
      activeClass: 'ring-2 ring-[#0D99FF] bg-[#38B6FF]/25 font-bold',
    },
    {
      id: 'hair',
      title: 'Tangle-Free Hair',
      subtitle: 'Berry spray for tear-free morning combing',
      icon: '🦁',
      bgClass: 'bg-[#EC4899]/15 border-[#EC4899]/40 text-pink-950',
      activeClass: 'ring-2 ring-[#EC4899] bg-[#EC4899]/25 font-bold',
    },
    {
      id: 'face',
      title: 'Gentle Foaming Wash',
      subtitle: 'Lifts playground grime with real papaya',
      icon: '🫧',
      bgClass: 'bg-[#F97316]/15 border-[#F97316]/40 text-orange-950',
      activeClass: 'ring-2 ring-[#F97316] bg-[#F97316]/25 font-bold',
    },
    {
      id: 'lip',
      title: 'Safe Edible Lip Care',
      subtitle: 'Beetroot pigment with zero synthetic dyes',
      icon: '🍓',
      bgClass: 'bg-[#EF4444]/15 border-[#EF4444]/40 text-rose-950',
      activeClass: 'ring-2 ring-[#EF4444] bg-[#EF4444]/25 font-bold',
    },
    {
      id: 'deo',
      title: 'No-Sweat Odor Care',
      subtitle: '100% Aluminium-free citrus roll-on',
      icon: '🛁',
      bgClass: 'bg-[#06B6D4]/15 border-[#06B6D4]/40 text-cyan-950',
      activeClass: 'ring-2 ring-[#06B6D4] bg-[#06B6D4]/25 font-bold',
    },
    {
      id: 'natural',
      title: '100% Toxin-Free Only',
      subtitle: '0% parabens, sulphates or endocrine disruptors',
      icon: '🌿',
      bgClass: 'bg-[#10B981]/15 border-[#10B981]/40 text-emerald-950',
      activeClass: 'ring-2 ring-[#10B981] bg-[#10B981]/25 font-bold',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-6 pt-3 pb-1 font-semibold text-stone-800 shrink-0">
        <span className="font-medium text-[11px]">9:41</span>
        <div className="w-18 h-3.5 bg-black/20 rounded-full" />
        <div className="flex items-center gap-1 text-[10px]">
          <span>5G</span>
          <span className="w-4 h-2 border border-current rounded-2xs inline-block relative after:content-[''] after:w-0.5 after:h-1 after:bg-current after:absolute after:-right-0.5 after:top-0.5" />
        </div>
      </div>

      {/* Header matching Reference Screenshot 2 ("Pick what you love") */}
      <div className="p-6 pt-2 pb-2 space-y-3 shrink-0">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <span className="text-[10px] font-bold font-['Poppins'] bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
            Step 3 of 4
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-xl font-bold text-stone-900 leading-snug">
            Pick what {childName} needs
          </h1>
          <p className="font-['Poppins'] text-xs text-stone-500 leading-relaxed">
            Select one or more care goals to customize their product bundle.
          </p>
        </div>
      </div>

      {/* Grid of Colorful Goal Cards matching Reference Screenshot 2 */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-2 space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          {goalCards.map((card) => {
            const isSelected = selectedGoals.includes(card.id);
            return (
              <div
                key={card.id}
                onClick={() => onToggleGoal(card.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between min-h-[110px] shadow-2xs ${
                  card.bgClass
                } ${isSelected ? card.activeClass : 'hover:scale-[1.02]'}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{card.icon}</span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>

                <div className="space-y-0.5 mt-2">
                  <h4 className="font-['Poppins'] text-xs font-bold leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[9px] opacity-80 leading-tight">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA to Products */}
      <div className="p-6 pt-2 pb-6 space-y-2">
        <button
          type="button"
          onClick={onNext}
          disabled={selectedGoals.length === 0}
          className="w-full py-3.5 px-6 rounded-full bg-[#1F2937] hover:bg-black disabled:opacity-40 text-white font-['Poppins'] font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
        >
          <span>Find {childName}'s Routine</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <p className="text-[10px] text-center text-stone-400 font-['Poppins']">
          {selectedGoals.length} goal{selectedGoals.length !== 1 ? 's' : ''} selected
        </p>
      </div>
    </div>
  );
};
