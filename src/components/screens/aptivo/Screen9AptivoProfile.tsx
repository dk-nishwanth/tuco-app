import React from 'react';
import { ArrowLeft, User, Shield, Bell, HelpCircle, ChevronRight, Lock } from 'lucide-react';
import { AptivoBottomNav, AptivoNavTab } from '../../AptivoBottomNav';

interface Screen9AptivoProfileProps {
  userName?: string;
  streakCount?: number;
  onBack?: () => void;
  onNavigateTab?: (tab: AptivoNavTab) => void;
  isWireframe?: boolean;
}

export const Screen9AptivoProfile: React.FC<Screen9AptivoProfileProps> = ({
  userName = 'Alyssa',
  streakCount = 6,
  onBack,
  onNavigateTab,
  isWireframe = false,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 pt-4 space-y-4">
        {/* Top Header matching Screen 9 in image 570.png */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-bold font-['Poppins'] text-stone-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Profile</span>
          </button>
        </div>

        {/* Center Avatar & User Info matching Screen 9 */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-1 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FB7185] border-3 border-white shadow-sm flex items-center justify-center text-2xl">
            🌸
          </div>
          <div>
            <h1 className="font-['Poppins'] text-base font-bold text-stone-900 leading-tight">
              {userName}
            </h1>
            <p className="text-[10px] text-stone-400 font-medium">
              {streakCount} day streak!
            </p>
          </div>
        </div>

        {/* 3-Column Stats Bar matching Screen 9 in image 570.png */}
        <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs grid grid-cols-3 divide-x divide-stone-100 text-center">
          <div>
            <span className="font-['Poppins'] text-sm font-bold text-stone-900 block">
              14
            </span>
            <span className="text-[9px] text-stone-400 font-medium">lessons</span>
          </div>

          <div>
            <span className="font-['Poppins'] text-sm font-bold text-stone-900 block">
              3
            </span>
            <span className="text-[9px] text-stone-400 font-medium">badges</span>
          </div>

          <div>
            <span className="font-['Poppins'] text-sm font-bold text-stone-900 block">
              {streakCount}
            </span>
            <span className="text-[9px] text-stone-400 font-medium">day streak</span>
          </div>
        </div>

        {/* Trophy Case Shelf matching Screen 9 */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2">
          <span className="text-xs font-bold font-['Poppins'] text-stone-800 block">
            Trophy case
          </span>

          <div className="grid grid-cols-4 gap-2 pt-1">
            <div className="h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-lg">
              🏅
            </div>
            <div className="h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-lg">
              🔥
            </div>
            <div className="h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-lg">
              ⭐
            </div>
            <div className="h-12 rounded-xl bg-stone-100 border border-dashed border-stone-300 flex items-center justify-center text-stone-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Menu Items matching Screen 9 in image 570.png */}
        <div className="space-y-2 pt-1">
          <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between cursor-pointer hover:border-stone-300">
            <div className="flex items-center gap-2.5 text-xs font-medium text-stone-700">
              <User className="w-4 h-4 text-stone-400" />
              <span>Edit avatar</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </div>

          <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between cursor-pointer hover:border-stone-300">
            <div className="flex items-center gap-2.5 text-xs font-medium text-stone-700">
              <Shield className="w-4 h-4 text-stone-400" />
              <span>Parent settings</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </div>

          <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between cursor-pointer hover:border-stone-300">
            <div className="flex items-center gap-2.5 text-xs font-medium text-stone-700">
              <Bell className="w-4 h-4 text-stone-400" />
              <span>Notifications</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </div>

          <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between cursor-pointer hover:border-stone-300">
            <div className="flex items-center gap-2.5 text-xs font-medium text-stone-700">
              <HelpCircle className="w-4 h-4 text-stone-400" />
              <span>Help</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation */}
      <AptivoBottomNav
        activeTab="profile"
        onTabChange={onNavigateTab}
        isWireframe={isWireframe}
      />
    </div>
  );
};
