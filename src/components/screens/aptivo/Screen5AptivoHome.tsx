import React from 'react';
import { Bell } from 'lucide-react';
import { CardEyeTopper } from '../../AptivoPetalMascot';
import { AptivoBottomNav, AptivoNavTab } from '../../AptivoBottomNav';

interface Screen5AptivoHomeProps {
  userName?: string;
  onNavigateTab?: (tab: AptivoNavTab) => void;
  onSelectCourse?: (id: string) => void;
  isWireframe?: boolean;
}

export const Screen5AptivoHome: React.FC<Screen5AptivoHomeProps> = ({
  userName = 'Alyssa',
  onNavigateTab,
  onSelectCourse,
  isWireframe = false,
}) => {
  const lessonCards = [
    {
      id: 'art',
      title: 'Art',
      subtitle: 'Crafts, Doodling',
      progress: 45,
      bg: isWireframe ? 'bg-zinc-200' : 'bg-[#98A2F8]',
      text: 'text-white',
      barColor: 'bg-white',
    },
    {
      id: 'coding',
      title: 'Coding/Logic',
      subtitle: 'Doodling',
      progress: 60,
      bg: isWireframe ? 'bg-zinc-200' : 'bg-[#40CDB0]',
      text: 'text-white',
      barColor: 'bg-white',
    },
    {
      id: 'math',
      title: 'Math',
      subtitle: 'Addition, subtraction',
      progress: 25,
      bg: isWireframe ? 'bg-zinc-200' : 'bg-[#5B9DF8]',
      text: 'text-white',
      barColor: 'bg-white',
    },
    {
      id: 'music',
      title: 'Music',
      subtitle: 'Solfeh notation',
      progress: 80,
      bg: isWireframe ? 'bg-zinc-200' : 'bg-[#E56598]',
      text: 'text-white',
      barColor: 'bg-white',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 pt-4 space-y-4">
        {/* Top Header with Avatar, Greeting & Bell matching Screen 5 in image 570.png */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5">
            {/* Avatar Circle with Mascot Eyes */}
            <div className="w-10 h-10 rounded-full bg-[#FB7185] border-2 border-white flex items-center justify-center text-white shadow-2xs shrink-0">
              <span className="text-base">🌸</span>
            </div>
            <div>
              <h2 className="font-['Poppins'] text-xs font-bold text-stone-800 leading-tight">
                Hello {userName},
              </h2>
              <p className="text-[10px] text-stone-400 font-medium">
                what are you learning today?
              </p>
            </div>
          </div>

          <button
            type="button"
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 shadow-2xs"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Circular Progress Widget matching Screen 5 in image 570.png */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Circular Progress Ring */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#F4F4F5" strokeWidth="3.5" />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke={isWireframe ? '#52525B' : '#F06553'}
                  strokeWidth="3.5"
                  strokeDasharray="100"
                  strokeDashoffset="70"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute font-['Poppins'] text-[10px] font-bold text-stone-800">
                30%
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold text-stone-800 block">
                30% progress
              </span>
              <span className="text-[9px] text-stone-400">
                Keep going to unlock badges!
              </span>
            </div>
          </div>

          {/* Stack of books icon */}
          <div className="text-2xl pr-1">📚</div>
        </div>

        {/* Section: Your Lessons with Cute Mascot Eyes on Each Card */}
        <div className="space-y-3 pt-1">
          <span className="text-xs font-bold font-['Poppins'] text-stone-800 block px-0.5">
            Your Lessons
          </span>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {lessonCards.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelectCourse?.(card.id)}
                className="relative pt-3 cursor-pointer group"
              >
                {/* Cute Eyes Topper peeking over top of the card! */}
                <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                  <CardEyeTopper strokeColor={isWireframe ? '#52525B' : '#1E293B'} />
                </div>

                {/* Card Container */}
                <div
                  className={`p-3 pt-4 rounded-2xl shadow-xs transition-transform group-hover:scale-102 min-h-[96px] flex flex-col justify-between ${card.bg} ${card.text}`}
                >
                  <div className="space-y-0.5">
                    <h3 className="font-['Poppins'] text-xs font-bold leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[9px] opacity-80 leading-tight">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Progress Bar inside Card */}
                  <div className="w-full pt-2">
                    <div className="w-full h-1.5 rounded-full bg-black/15 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${card.barColor}`}
                        style={{ width: `${card.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation matching Screen 5 in image 570.png */}
      <AptivoBottomNav
        activeTab="home"
        onTabChange={onNavigateTab}
        isWireframe={isWireframe}
      />
    </div>
  );
};
