import React, { useState } from 'react';
import { Check, ArrowLeft } from 'lucide-react';

interface Screen4AptivoGoalsProps {
  selectedGoals: string[];
  onToggleGoal: (id: string) => void;
  onNext: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const Screen4AptivoGoals: React.FC<Screen4AptivoGoalsProps> = ({
  selectedGoals = ['math', 'art'],
  onToggleGoal,
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const [localGoals, setLocalGoals] = useState<string[]>(selectedGoals);

  const goalCards = [
    {
      id: 'math',
      title: 'Math',
      icon: '🤖',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#4387F6] text-white',
    },
    {
      id: 'coding',
      title: 'Coding/Logic',
      icon: '💡',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#27C598] text-white',
    },
    {
      id: 'art',
      title: 'Art',
      icon: '🎨',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#8E63EC] text-white',
    },
    {
      id: 'music',
      title: 'Music',
      icon: '🎵',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#D94689] text-white',
    },
    {
      id: 'science',
      title: 'Science',
      icon: '🧪',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#84CC16] text-white',
    },
    {
      id: 'reading',
      title: 'Reading',
      icon: '📚',
      bg: isWireframe ? 'bg-zinc-200 text-zinc-900' : 'bg-[#F59E0B] text-white',
    },
  ];

  const handleToggle = (id: string) => {
    setLocalGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
    onToggleGoal(id);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between items-center p-6 pt-3 select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Top iOS Status Bar Area */}
      <div className="w-full flex items-center justify-between px-1">
        <span className="text-xs font-semibold tracking-tight text-stone-800">9:41</span>
        <div className="flex items-center gap-1.5 opacity-90 text-xs text-stone-800">
          <span>●●●</span>
          <span>Wi-Fi</span>
        </div>
      </div>

      {/* Top Navigation Row */}
      <div className="w-full flex items-center justify-between pt-1">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-8 h-8" />
        )}
        <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
          Step 2 of 2
        </span>
        <div className="w-8 h-8" />
      </div>

      {/* Title Header matching Screen 4 in image 570.png */}
      <div className="pt-2 text-center">
        <h1 className="font-['Poppins'] text-base font-bold text-stone-900">
          Pick what you love
        </h1>
        <p className="text-[10px] text-stone-400 font-medium mt-0.5">
          Select what you want Petal to teach you
        </p>
      </div>

      {/* 2x3 Grid of 6 Colorful Rounded Subject Cards matching Screen 4 */}
      <div className="w-full grid grid-cols-2 gap-3 max-w-[280px] my-auto">
        {goalCards.map((card) => {
          const isSelected = localGoals.includes(card.id);
          return (
            <div
              key={card.id}
              onClick={() => handleToggle(card.id)}
              className={`h-24 rounded-2xl flex flex-col items-center justify-center p-2 cursor-pointer transition-all shadow-xs relative ${
                card.bg
              } ${isSelected ? 'ring-3 ring-black/20 scale-102' : 'opacity-90 hover:opacity-100'}`}
            >
              <span className="text-2xl mb-1">{card.icon}</span>
              <span className="font-['Poppins'] text-xs font-bold tracking-tight text-center">
                {card.title}
              </span>

              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Button matching Screen 4 in image 570.png */}
      <div className="w-full max-w-[280px] pb-4">
        <button
          type="button"
          onClick={onNext}
          className={`w-full py-3.5 px-6 rounded-full font-['Poppins'] text-sm font-bold text-center tracking-wide transition-all active:scale-98 shadow-sm ${
            isWireframe
              ? 'bg-zinc-900 text-white hover:bg-zinc-800'
              : 'bg-[#F06553] hover:bg-[#DE5543] text-white'
          }`}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};
