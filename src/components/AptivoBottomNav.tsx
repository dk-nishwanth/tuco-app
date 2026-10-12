import React from 'react';
import { Home, BookOpen, Clock, User } from 'lucide-react';

export type AptivoNavTab = 'home' | 'courses' | 'progress' | 'profile';

interface AptivoBottomNavProps {
  activeTab: AptivoNavTab;
  onTabChange?: (tab: AptivoNavTab) => void;
  isWireframe?: boolean;
}

export const AptivoBottomNav: React.FC<AptivoBottomNavProps> = ({
  activeTab = 'home',
  onTabChange,
  isWireframe = false,
}) => {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'courses' as const, label: 'Courses', icon: BookOpen },
    { id: 'progress' as const, label: 'Progress', icon: Clock },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <div className="px-5 py-3 select-none shrink-0">
      <div
        className={`w-full h-14 rounded-full flex items-center justify-around px-2 border shadow-sm transition-colors ${
          isWireframe
            ? 'bg-zinc-100 border-zinc-300'
            : 'bg-white/95 border-stone-200/80 backdrop-blur-md'
        }`}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          if (isActive) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange?.(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold transition-all shadow-xs ${
                  isWireframe
                    ? 'bg-zinc-800 text-white'
                    : 'bg-[#F06553] text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{tab.label}</span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange?.(tab.id)}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 transition-colors"
              title={tab.label}
            >
              <Icon className="w-4 h-4 stroke-[2]" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
