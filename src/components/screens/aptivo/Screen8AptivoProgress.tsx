import React from 'react';
import { ArrowLeft, Flame, Star, Award, Lock } from 'lucide-react';
import { AptivoBottomNav, AptivoNavTab } from '../../AptivoBottomNav';

interface Screen8AptivoProgressProps {
  onBack?: () => void;
  onNavigateTab?: (tab: AptivoNavTab) => void;
  streakCount?: number;
  isWireframe?: boolean;
}

export const Screen8AptivoProgress: React.FC<Screen8AptivoProgressProps> = ({
  onBack,
  onNavigateTab,
  streakCount = 6,
  isWireframe = false,
}) => {
  const subjects = [
    { id: 'math', label: 'Math', icon: '🤖', percent: 65, color: '#40A9FF' },
    { id: 'art', label: 'Art', icon: '🎨', percent: 50, color: '#9254DE' },
    { id: 'logic', label: 'Logic', icon: '💡', percent: 10, color: '#FFA940' },
    { id: 'music', label: 'Music', icon: '🎵', percent: 55, color: '#F759AB' },
    { id: 'science', label: 'Science', icon: '🧪', percent: 5, color: '#73D13D' },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 pt-4 space-y-4">
        {/* Top Header matching Screen 8 in image 570.png */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-bold font-['Poppins'] text-stone-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>My Progress</span>
          </button>

          <span className="w-6 h-6 rounded-full bg-[#F06553] text-white flex items-center justify-center text-xs shadow-2xs">
            ⭐
          </span>
        </div>

        {/* Hero Coral Streak Banner matching Screen 8 in image 570.png */}
        <div
          className={`p-4 rounded-3xl shadow-sm space-y-1 relative overflow-hidden ${
            isWireframe ? 'bg-zinc-800 text-white' : 'bg-[#F06553] text-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 fill-white text-white" />
            <h2 className="font-['Poppins'] text-sm font-bold">
              {streakCount} day streak!
            </h2>
          </div>
          <p className="text-[11px] opacity-90 pl-6">
            Keep it going, learn today
          </p>
        </div>

        {/* Section: By subject matching Screen 8 */}
        <div className="space-y-3 pt-1">
          <span className="text-xs font-bold font-['Poppins'] text-stone-800 block px-0.5">
            By subject
          </span>

          <div className="space-y-2.5">
            {subjects.map((sub) => (
              <div
                key={sub.id}
                className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 min-w-20">
                  <span className="text-sm">{sub.icon}</span>
                  <span className="font-['Poppins'] text-xs font-bold text-stone-800">
                    {sub.label}
                  </span>
                </div>

                {/* Progress Track */}
                <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${sub.percent}%`,
                      backgroundColor: isWireframe ? '#52525B' : sub.color,
                    }}
                  />
                </div>

                <span className="text-[10px] font-mono font-bold text-stone-400 w-8 text-right">
                  {sub.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Badges earned matching Screen 8 */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold font-['Poppins'] text-stone-800 block px-0.5">
            Badges earned
          </span>

          <div className="grid grid-cols-4 gap-2">
            <div className="h-14 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center text-xl">
              🏅
            </div>
            <div className="h-14 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center text-xl">
              🔥
            </div>
            <div className="h-14 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center text-xl">
              ⭐
            </div>
            <div className="h-14 rounded-2xl bg-stone-100 border border-dashed border-stone-300 flex items-center justify-center text-stone-400">
              <Lock className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation */}
      <AptivoBottomNav
        activeTab="progress"
        onTabChange={onNavigateTab}
        isWireframe={isWireframe}
      />
    </div>
  );
};
