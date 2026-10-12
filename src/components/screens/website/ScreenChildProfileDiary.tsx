import React from 'react';
import { User, Flame, Award, Calendar, Sparkles, Heart, Plus, ShieldCheck, ChevronRight } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';
import { TUCO_PRODUCTS } from '../../../data/tucoData';

interface ScreenChildProfileDiaryProps {
  childName: string;
  ageGroup: string;
  streakDays: number;
  onOpenRoutine: () => void;
  isWireframe?: boolean;
}

export const ScreenChildProfileDiary: React.FC<ScreenChildProfileDiaryProps> = ({
  childName = 'Maya',
  ageGroup = '6-9 years old',
  streakDays = 4,
  onOpenRoutine,
  isWireframe = false,
}) => {
  const daysOfWeek = [
    { day: 'M', completed: true },
    { day: 'T', completed: true },
    { day: 'W', completed: true },
    { day: 'T', completed: true },
    { day: 'F', completed: false },
    { day: 'S', completed: false },
    { day: 'S', completed: false },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Profile Card */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-[#FED543] to-[#FBBF24] text-[#352002] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#352002] flex items-center justify-center text-3xl shadow-sm shrink-0">
              👧
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="font-['Poppins'] text-lg font-extrabold truncate text-[#352002]">
                  {childName}'s Profile
                </h1>
                <ShieldCheck className="w-4 h-4 text-[#352002]" />
              </div>
              <p className="text-xs font-medium opacity-90">{ageGroup} • Bangalore</p>
              <span className="text-[10px] font-bold bg-[#352002] text-[#FED543] px-2 py-0.5 rounded-full inline-block mt-1">
                Tuco Club Member ✨
              </span>
            </div>
          </div>
        </div>

        {/* Rewards Stars Wallet Card */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
              ⭐
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">180 Tuco Stars</span>
              <p className="text-[10px] text-stone-500">Redeem ₹100 off on next routine box</p>
            </div>
          </div>
          <button
            type="button"
            className="text-[10px] font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200"
          >
            Redeem
          </button>
        </div>

        {/* 7-Day Skin Habit Calendar */}
        <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Weekly Routine Tracker</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-orange-600">
              <Flame className="w-3.5 h-3.5 fill-orange-500 stroke-none" />
              <span>{streakDays} Day Streak!</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1.5 pt-1">
            {daysOfWeek.map((d, i) => (
              <div
                key={i}
                className={`py-2 rounded-xl flex flex-col items-center justify-center text-xs font-bold transition-all ${
                  d.completed
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                <span className="text-[10px] opacity-80">{d.day}</span>
                <span className="text-xs">{d.completed ? '✓' : '•'}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-stone-500 text-center font-medium pt-1">
            "Sunday Champi Hair Ritual" unlocks in 3 days!
          </p>
        </div>

        {/* Child Skin Traits & Preferences */}
        <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-2">
          <span className="text-xs font-bold text-stone-900 block">Skin & Hair Profile:</span>
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
              ☀️ Playground Sun Defense
            </span>
            <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-900 font-semibold border border-sky-200">
              💧 Dry Winter Skin
            </span>
            <span className="px-2.5 py-1 rounded-full bg-pink-50 text-pink-900 font-semibold border border-pink-200">
              🍓 Loves Strawberry Scent
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200">
              🌿 Tear-Free Formulations
            </span>
          </div>
        </div>

        {/* Favorites Quick Access */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <div>
              <span className="font-bold text-xs text-stone-900 block">Saved Favorites (4 items)</span>
              <p className="text-[10px] text-stone-500">Super Sun Stick, Lip Butter & Wash</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-400" />
        </div>

        {/* Sibling Profile Switcher */}
        <button
          type="button"
          className="w-full py-2.5 px-4 rounded-2xl border border-dashed border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Sibling Profile (e.g. Kabir)</span>
        </button>
      </div>
    </div>
  );
};
