import React, { useState } from 'react';
import { Flame, Calendar, Award, Check, Sparkles, Trophy, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';
import { MascotCalendarCell, MascotFaceType } from '../../MascotCalendarCell';

interface ScreenStreakPageProps {
  childName: string;
  streakCount: number;
  onBackToHome: () => void;
  isWireframe?: boolean;
}

export const ScreenStreakPage: React.FC<ScreenStreakPageProps> = ({
  childName = 'Omar',
  streakCount = 7,
  onBackToHome,
  isWireframe = false,
}) => {
  const [activeTab, setCurrentTab] = useState<'streak' | 'calendar'>('calendar');
  const [todayRoutineDone, setTodayRoutineDone] = useState(true);
  const [champiDone, setChampiDone] = useState(false);
  const [waterDone, setWaterDone] = useState(true);

  // Calendar with mascots data (October 31-day month grid with Monday to Sunday columns)
  // Matching Reference Screenshot 3 & 5: completed days show cute mascot faces with funny expressions!
  const calendarDays = [
    { day: 1, mascot: 'happy', emoji: '😄', done: true },
    { day: 2, mascot: 'cool', emoji: '😎', done: true },
    { day: 3, mascot: 'star', emoji: '🤩', done: true },
    { day: 4, mascot: 'blush', emoji: '🥰', done: true },
    { day: 5, mascot: 'wink', emoji: '😉', done: true },
    { day: 6, mascot: 'sleep', emoji: '😴', done: true },
    { day: 7, mascot: 'bubble', emoji: '🫧', done: true },

    { day: 8, mascot: 'happy', emoji: '😄', done: true },
    { day: 9, mascot: 'cool', emoji: '😎', done: true },
    { day: 10, mascot: 'star', emoji: '🤩', done: true },
    { day: 11, mascot: 'blush', emoji: '🥰', done: true },
    { day: 12, mascot: 'wink', emoji: '😉', done: true },
    { day: 13, mascot: 'bubble', emoji: '🫧', done: true },
    { day: 14, mascot: 'star', emoji: '🤩', done: true },

    { day: 15, mascot: 'happy', emoji: '😄', done: true },
    { day: 16, mascot: 'cool', emoji: '😎', done: true },
    { day: 17, mascot: 'wink', emoji: '😉', done: true },
    { day: 18, mascot: 'blush', emoji: '🥰', done: true },
    { day: 19, mascot: 'star', emoji: '🤩', done: true },
    { day: 20, mascot: 'happy', emoji: '😄', done: true },
    { day: 21, mascot: 'bubble', emoji: '🫧', done: true },

    { day: 22, mascot: 'cool', emoji: '😎', done: true },
    { day: 23, mascot: 'star', emoji: '🤩', done: true },
    { day: 24, mascot: 'blush', emoji: '🥰', done: true },
    { day: 25, mascot: 'happy', emoji: '😄', done: true },
    { day: 26, mascot: null, emoji: '-', done: false },
    { day: 27, mascot: null, emoji: '-', done: false },
    { day: 28, mascot: null, emoji: '-', done: false },

    { day: 29, mascot: null, emoji: '-', done: false },
    { day: 30, mascot: null, emoji: '-', done: false },
    { day: 31, mascot: null, emoji: '-', done: false },
  ];

  const weekHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onBackToHome}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs hover:bg-stone-50"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-['Poppins'] font-bold border border-orange-200">
            <Flame className="w-4 h-4 text-orange-600 fill-orange-500 stroke-none animate-pulse" />
            <span>{streakCount} Day Streak!</span>
          </div>
        </div>

        {/* SECTION 1: MASCOT + ACTIONS (Matching Reference Screenshot 3 & 4) */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-[#FEF08A] via-[#FED543] to-[#FBBF24] text-[#352002] shadow-sm space-y-3 relative overflow-hidden">
          {/* Subtle sparkles */}
          <div className="absolute top-2 right-2 text-xl">🌟</div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-white/95 border-2 border-[#352002]/20 flex items-center justify-center shadow-xs shrink-0">
              <TucoMascot size="sm" expression="celebrating" className="w-12 h-12" />
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded-full inline-block">
                Daily Skin Habit
              </span>
              <h2 className="font-['Poppins'] text-base font-extrabold text-[#352002] leading-tight mt-0.5">
                {childName} is Glowing! 🔥
              </h2>
              <p className="text-[11px] text-amber-950 font-medium">
                7 days in a row! You unlocked the Berry Lip Butter card.
              </p>
            </div>
          </div>

          {/* Action Checklist Buttons matching Reference */}
          <div className="space-y-1.5 pt-1 border-t border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#352002]/80 block">
              Today's Care Actions:
            </span>

            {/* Action 1: Morning SPF */}
            <div
              onClick={() => setTodayRoutineDone(!todayRoutineDone)}
              className="p-2.5 rounded-xl bg-white/95 flex items-center justify-between cursor-pointer hover:bg-white transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">☀️</span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    Super Sun Stick SPF 50
                  </h4>
                  <span className="text-[10px] text-stone-500">Applied before playground play</span>
                </div>
              </div>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center ${todayRoutineDone ? 'bg-emerald-600 text-white' : 'border border-stone-300'}`}>
                {todayRoutineDone && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
            </div>

            {/* Action 2: Evening Cleanser */}
            <div
              onClick={() => setWaterDone(!waterDone)}
              className="p-2.5 rounded-xl bg-white/95 flex items-center justify-between cursor-pointer hover:bg-white transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🫧</span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    Tan-Off Papaya Foam Wash
                  </h4>
                  <span className="text-[10px] text-stone-500">Night-time playground cleanse</span>
                </div>
              </div>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center ${waterDone ? 'bg-emerald-600 text-white' : 'border border-stone-300'}`}>
                {waterDone && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
            </div>

            {/* Action 3: Sunday Champi */}
            <div
              onClick={() => setChampiDone(!champiDone)}
              className="p-2.5 rounded-xl bg-white/95 flex items-center justify-between cursor-pointer hover:bg-white transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">💆</span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    Sunday Champi Scalp Oil
                  </h4>
                  <span className="text-[10px] text-stone-500">5-minute warm coconut bonding</span>
                </div>
              </div>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center ${champiDone ? 'bg-emerald-600 text-white' : 'border border-stone-300'}`}>
                {champiDone && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: CALENDAR WITH MASCOTS (Matching Reference Screenshot 3 & 5) */}
        <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
          {/* Calendar Header with Navigation */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              <h3 className="font-['Poppins'] text-sm font-bold text-stone-900">
                Study & Routine Calendar
              </h3>
            </div>
            <span className="text-xs font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md">
              October 2026
            </span>
          </div>

          {/* Weekday Labels (Mon Tue Wed Thu Fri Sat Sun) */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {weekHeaders.map((w) => (
              <span key={w} className="text-[10px] font-bold text-stone-400 uppercase">
                {w}
              </span>
            ))}
          </div>

          {/* Monthly Calendar Grid filled with Cute Mascots matching Reference Screenshot 571 & 575 */}
          <div className="grid grid-cols-7 gap-1.5 pt-1">
            {calendarDays.map((item) => (
              <MascotCalendarCell
                key={item.day}
                day={item.day}
                type={(item.mascot as MascotFaceType) || null}
                isDone={item.done}
                isWireframe={isWireframe}
              />
            ))}
          </div>

          {/* Monthly Progress Card matching Reference Screenshot 3 */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-purple-200/60 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900">
                  Monthly Progress
                </span>
                <h4 className="font-['Poppins'] text-sm font-bold text-stone-900">
                  {childName} cared for skin for 25 days!
                </h4>
              </div>
              <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center text-xl shadow-2xs">
                🥰
              </div>
            </div>

            {/* Stats Breakdown Boxes matching Reference Screenshot 3 */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2 rounded-xl bg-white border border-stone-100 text-center">
                <span className="text-[9px] font-mono text-stone-400 uppercase block">Active Days</span>
                <span className="font-['Poppins'] font-bold text-sm text-stone-900">25 Days</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-stone-100 text-center">
                <span className="text-[9px] font-mono text-stone-400 uppercase block">Routine Score</span>
                <span className="font-['Poppins'] font-bold text-sm text-purple-700">92%</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-stone-100 text-center">
                <span className="text-[9px] font-mono text-stone-400 uppercase block">Habit Energy</span>
                <span className="font-['Poppins'] font-bold text-sm text-emerald-700">88%</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: TROPHY CASE BADGES */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">Trophy Case</span>
            <span className="text-[10px] text-stone-400 font-mono">4 Unlocked</span>
          </div>

          <div className="flex items-center justify-between px-2 pt-1 text-2xl">
            <span title="Day 1 Starter">🏅</span>
            <span title="3 Day Sparkle">✨</span>
            <span title="7 Day Flame">🔥</span>
            <span title="14 Day Star">🌟</span>
            <span className="opacity-30" title="30 Day Legend (Locked)">🔒</span>
          </div>
        </div>
      </div>
    </div>
  );
};
